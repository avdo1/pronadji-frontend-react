// import { useStorelessFetch } from '@hooks/fetch'
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import TOKEN from "../lib/token";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";

type DataType = {
  firstName: string;
};

interface ContextProps {
  access_token: string | null;
  setAccessToken: Dispatch<SetStateAction<any>>;
  user: Object | null;
  setUser: Dispatch<SetStateAction<any>>;
}

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const GlobalContext = createContext<ContextProps>({
  access_token: null,
  setAccessToken: () => null,
  user: null,
  setUser: () => null,
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [access_token, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const { data: me } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getMe,
  });

  const fetchMe = async () => {
    await getMe();
  };

  useEffect(() => {
    if (access_token) {
      TOKEN.set(access_token);
      fetchMe();
    }
    if (!access_token && TOKEN.get() !== undefined) {
      setAccessToken(TOKEN.get() as string);
    }
  }, [access_token]);

  useEffect(() => {
    if (me) {
      setUser(me?.data);
    }
  }, [me, user]);

  return (
    <GlobalContext.Provider
      value={{ access_token, setAccessToken, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
