"use server";

import { cookies } from "next/headers";

export const GetUserToken = async () => {
  const cookie = await cookies();

  const accessToken = cookie.get("accessToken")?.value;
  const refreshToken = cookie.get("refreshToken")?.value;
  return { accessToken, refreshToken };
};
