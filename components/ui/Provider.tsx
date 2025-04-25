"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { queryClient } from "@/lib/queryClient";
import { useUserStore } from "@/store/UserStore";
const Provider: React.FC<{
  children: React.ReactNode;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}> = ({ children, accessToken, refreshToken }) => {
  const { setTokens } = useUserStore();

  useEffect(() => {
    if (accessToken !== undefined && refreshToken !== undefined) {
      setTokens(accessToken, refreshToken);
    }
  }, [accessToken, refreshToken, setTokens]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
