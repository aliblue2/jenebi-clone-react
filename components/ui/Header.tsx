"use client";
import React, { useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import mainLogo from "@/public/janebi-logo.svg";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { Button } from "./button";
import { ShoppingBasket, User } from "lucide-react";
import MenuDrawer from "./MenuDrawer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUserStore } from "@/store/UserStore";
import { useBasketStore } from "@/store/UserBasketStore";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const headerColor = useTransform(scrollY, [0, 300], ["#0000", "#fff"]);

  const router = useRouter();

  const routerHandler = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  const { accessToken } = useUserStore();
  const { items } = useBasketStore();

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerColor }}
        className="h-16 w-full overflow-visible sticky top-0 z-30 "
      >
        <Container>
          <div className="flex h-full items-center justify-between gap-5 w-full">
            <div className="flex items-center justify-start gap-5">
              <MenuDrawer />
              <Link href={"/"}>
                <Image
                  src={mainLogo}
                  alt="mainLogo"
                  priority
                  className="max-w-32"
                />
              </Link>
            </div>
            <NavMenu />
            <div className="flex items-center justify-center gap-2">
              <Button
                onClick={() => routerHandler("/cart")}
                variant={"outline"}
              >
                <span className="md:block hidden">سبد خرید</span>
                <ShoppingBasket size={20} />
                <span className="bg-primary w-5 rounded-full text-white">
                  {items ? items.length : ""}
                </span>
              </Button>
              <Button
                onClick={() => {
                  if (accessToken) {
                    router.push("/profile");
                  } else {
                    router.push("/auth");
                  }
                }}
              >
                <span className="md:block hidden">
                  {accessToken ? "حساب کاربری" : "ورود/ثبت‌نام"}
                </span>
                <User size={20} />
              </Button>
            </div>
          </div>
        </Container>
      </motion.header>
    </>
  );
};

export default Header;
