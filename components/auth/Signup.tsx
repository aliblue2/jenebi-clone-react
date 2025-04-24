import React, { useRef } from "react";
import CustomInput from "../ui/CustomInput";
import { Button } from "../ui/button";

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <form className="flex flex-col items-center justify-start gap-5">
      <h6 className="text-lg font-medium">ثبت‌نام در جانبی</h6>
      <CustomInput
        label="نام و نام‌خانوادگی"
        name="fullname"
        placeHolder="علی احمدی"
        type="text"
        ref={nameRef}
      />
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
      <Button className="w-full text-lg font-medium" size={"lg"} type="submit">
        ثبت‌نام
      </Button>
    </form>
  );
};

export default Signup;
