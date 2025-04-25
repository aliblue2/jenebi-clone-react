"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { LogIn, UserPlus } from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";
import { useRouter, useSearchParams } from "next/navigation";
const AuthContainer = () => {
  const params = useSearchParams();
  const router = useRouter();
  const mode = params.get("mode") || "signup";

  return (
    <div className="flex flex-col w-full h-screen items-center py-12 justify-start">
      <div className="flex px-12 py-2 items-center justify-center gap-5">
        <span
          onClick={() => router.push("?mode=login")}
          className={`${
            mode === "login" && "text-primary font-medium text-lg"
          } flex items-center justify-center gap-2 font-medium cursor-pointer `}
        >
          <LogIn size={20} />
          ورود
        </span>
        <span
          onClick={() => router.push("?mode=signup")}
          className={`${
            mode === "signup" && "text-primary font-medium text-lg"
          } flex items-center justify-center gap-2 font-medium cursor-pointer `}
        >
          <UserPlus size={20} />
          ثبت‌نام
        </span>
      </div>

      <Card className="w-full max-w-[600px]">
        <CardContent className="space-y-2">
          {mode === "login" ? <Login /> : <Signup />}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthContainer;
