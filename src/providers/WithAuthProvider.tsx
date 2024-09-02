import React, { useEffect } from "react";
import TOKEN from "../lib/token";

type Props = {
  children: React.ReactNode;
};

export const WithAuthProvider = ({ children }: Props) => {
  useEffect(() => {
    if (!TOKEN.get()) {
      window.location.replace("/naslovna");
    }
  }, []);
  return <>{children}</>;
};
