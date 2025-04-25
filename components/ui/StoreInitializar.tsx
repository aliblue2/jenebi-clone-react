"use client";

import { useUserStore } from "@/store/UserStore";
import React, { useEffect } from "react";

const StoreInitializar: React.FC<{
  accessToken: string | undefined;
  refreshToken: string | undefined;
}> = ({ accessToken, refreshToken }) => {
  const { setTokens } = useUserStore();

  useEffect(() => {
    if (accessToken !== undefined && refreshToken !== undefined) {
      setTokens(accessToken, refreshToken);
    }
  }, [accessToken, refreshToken, setTokens]);

  return null;
};

export default StoreInitializar;
