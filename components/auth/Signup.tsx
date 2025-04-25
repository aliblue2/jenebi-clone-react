import React, { useRef, useState } from "react";
import CustomInput from "../ui/CustomInput";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { SignupUserHandler } from "@/requests/Authenticate";
import { useRouter } from "next/navigation";

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMesage] = useState("");

  const router = useRouter();

  const signupFormSubmition = async () => {
    event?.preventDefault();
    const fullname = nameRef.current?.value;
    const emailAddress = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!fullname || fullname?.trim().length === 0) {
      toast.error("نام و نام‌خانوادگی ضروری است.");
      return;
    }

    if (
      !emailAddress ||
      !emailAddress.includes("@") ||
      emailAddress.trim().length === 0
    ) {
      toast.error("ایمیل آدرس ضرووی است.");
      return;
    }

    if (!password || password.length === 0) {
      toast.error("رمزعبور ضروری است.");
      return;
    }

    const result = await SignupUserHandler(fullname, emailAddress, password);

    if (result.user) {
      router.push("?mode=login");
      toast.success("با موقیت ثبت نام شدی");
      setErrorMesage("");
    } else {
      setErrorMesage(result.message);
    }
  };

  return (
    <form
      onSubmit={signupFormSubmition}
      className="flex flex-col items-center justify-start gap-5"
    >
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
        requeredInpt={true}
        ref={emailRef}
      />
      <CustomInput
        label="رمزعبور"
        name="password"
        placeHolder="*******"
        type="password"
        requeredInpt={true}
        ref={passwordRef}
      />
      {errorMessage && (
        <p className="text-red-500 font-medium">{errorMessage}</p>
      )}
      <Button className="w-full text-lg font-medium" size={"lg"} type="submit">
        ثبت‌نام
      </Button>
    </form>
  );
};

export default Signup;
