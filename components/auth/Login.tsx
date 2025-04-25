import React, { useRef, useState } from "react";
import CustomInput from "../ui/CustomInput";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { LoginUserHandler } from "@/requests/Authenticate";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/UserStore";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const { setTokens } = useUserStore();

  const loginFormSubmision = async () => {
    event?.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !email.includes("@") || email.trim().length === 0) {
      toast.error("ایمیل آدرس ضرووی است.");
      return;
    }

    if (!password || password.length === 0) {
      toast.error("رمزعبور ضروری است.");
      return;
    }

    const result = await LoginUserHandler(email, password);

    if (result?.message) {
      setErrorMessage(result.message);
      return;
    } else if (result.accessToken && result.refreshToken) {
      setTokens(result.accessToken, result.refreshToken);
      toast.success("با موفقیت وارد شدی");
      setErrorMessage("");
      router.push("/");
      return;
    }
  };

  return (
    <form
      onSubmit={loginFormSubmision}
      className="flex flex-col items-center justify-start gap-5"
    >
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
      {errorMessage && (
        <p className="text-red-500 font-medium">{errorMessage}</p>
      )}
      <Button size={"lg"} className="w-full text-lg font-medium">
        ورود به حساب کاربری
      </Button>
    </form>
  );
};

export default Login;
