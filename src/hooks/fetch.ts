import { useState } from "react";
import api from "../lib/apiFactory";

type Response = {
  loading: boolean;
  loaded: boolean;
  data: any;
  error: any;
};

export const useStorelessFetch = (endpoint: string) => {
  const [response, setResponse] = useState<any>({
    loading: false,
    loaded: false,
    data: null,
    error: null,
  });
  const doFetch = async (data: any) => {
    setResponse({ ...response, loading: true });

    try {
      const res = await api.fetch({ endpoint, data });
      setResponse({
        ...response,
        data: res.data,
        loading: false,
        loaded: true,
      });
    } catch (e) {
      console.log({ e });
      setResponse({
        ...response,
        error: e,
        loading: false,
        loaded: false,
      });
    }
  };

  return [response, doFetch];
};
