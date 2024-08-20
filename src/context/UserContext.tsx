import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import TOKEN from "../lib/token";

type UserContextInterface = {
  user?: any;
  userLoading?: boolean;
  isUserAuthenticated: boolean;
  onUserLoginSuccess: (token: string) => void;
  refetchUser: (callback?: () => void) => void;
  isUserFetched: boolean;
  onUserLogout: () => void;
};

export const UserContext = createContext<UserContextInterface>({
  user: undefined,
  isUserAuthenticated: false,
  onUserLoginSuccess() {
    return;
  },
  isUserFetched: false,
  onUserLogout() {
    return;
  },
  refetchUser(callback?: () => void) {
    return;
  },
});

const useAuthProviderData = () => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const queryClient = new QueryClient();

  const onUserLoginSuccess = async (token: string) => {
    TOKEN.set(token);
    setToken(token);
  };

  const onUserLogout = async () => {
    TOKEN.remove();
    setToken(undefined);
    //   await firebaseLogout();
    queryClient.invalidateQueries({ queryKey: ["me"] });
  };

  const checkToken = useCallback(async () => {
    const token = TOKEN.get();
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  const userQuery = useQuery({
    queryKey: ["me", token],
    //   queryFn: () => apiClient.auth.getMe(),
    enabled: !!token,
  });

  return {
    user: userQuery.data,
    userLoading: userQuery.isFetching,
    isUserAuthenticated: userQuery.status === "success" && !!userQuery.data,
    onUserLoginSuccess,
    refetchUser: (callback?: () => void) => userQuery.refetch().then(callback),
    isUserFetched: userQuery.isFetched,
    onUserLogout,
  };
};

const AuthProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const data = useAuthProviderData();
  return (
    <UserContext.Provider
      value={{ ...data, user: data.user as unknown as any }} // as User na kraju
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
