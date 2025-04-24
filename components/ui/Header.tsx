"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import mainLogo from "@/public/janebi-logo.svg";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { Button } from "./button";
import { ShoppingBasket, User } from "lucide-react";
import MenuDrawer from "./MenuDrawer";

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const headerColor = useTransform(scrollY, [0, 300], ["#0000", "#fff"]);
  return (
    <>
      <motion.header
        style={{ backgroundColor: headerColor }}
        className="h-16 w-full overflow-visible sticky top-0 z-30 "
      >
        <Container>
          <div className="flex h-full items-center justify-between w-full">
            <div className="flex items-center justify-start gap-5">
              <MenuDrawer />
              <Image
                src={mainLogo}
                alt="mainLogo"
                priority
                className="max-w-32"
              />
            </div>
            <NavMenu />
            <div className="flex items-center justify-center gap-2">
              <Button variant={"outline"}>
                <span className="md:block hidden">سبد خرید</span>
                <ShoppingBasket size={20} />
              </Button>
              <Button>
                <span className="md:block hidden">ورود/ثبت‌نام</span>
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
