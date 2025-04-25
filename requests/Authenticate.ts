"use server";

import { cookies } from "next/headers";

export const SignupUserHandler = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${process.env.BASE_URL}signup`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    return {
      message:
        "آدرس ایمیل در سیستم ثبت شده است. از ایمیل دیگری استفاده کنید یا وارد حساب خود شوید.",
    };
  }

  const result = await response.json();

  return result;
};

export const LoginUserHandler = async (email: string, password: string) => {
  const cookie = await cookies();

  const response = await fetch(`${process.env.BASE_URL}login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return {
      message: "آدرس ایمیل یا رمز عبور اشتباه است.",
    };
  }

  const { accessToken, refreshToken } = await response.json();
  cookie.set("accessToken", accessToken);
  cookie.set("refreshToken", refreshToken);

  return { accessToken, refreshToken };
};
