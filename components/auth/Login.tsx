import React, { useRef } from "react";
import CustomInput from "../ui/CustomInput";
import { Button } from "../ui/button";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <form className="flex flex-col items-center justify-start gap-5">
      <h6 className="text-lg font-medium">ورود به جانبی</h6>
      <CustomInput
        label="ایمیل"
        name="email"
        placeHolder="email@example.com"
        type="email"
        ref={emailRef}
      />
      <CustomInput
        label="رمزعبور"
        name="password"
        placeHolder="*******"
        type="password"
        ref={passwordRef}
      />
      <Button size={"lg"} className="w-full text-lg font-medium">
        ورود به حساب کاربری
      </Button>
    </form>
  );
};

export default Login;
