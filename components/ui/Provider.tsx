"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { queryClient } from "@/lib/queryClient";
import { useUserStore } from "@/store/UserStore";
import { BasketItem, useBasketStore } from "@/store/UserBasketStore";
const Provider: React.FC<{
  children: React.ReactNode;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  orders: BasketItem[] | undefined;
}> = ({ children, accessToken, refreshToken, orders }) => {
  const { setTokens } = useUserStore();
  const { setItesm } = useBasketStore();

  useEffect(() => {
    if (accessToken !== undefined && refreshToken !== undefined) {
      setTokens(accessToken, refreshToken);
      setItesm(orders!);
    }
  }, [accessToken, refreshToken, setTokens, orders, setItesm]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
