"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import {
  ChevronDown,
  Flame,
  Gamepad2,
  Laptop,
  Percent,
  Rss,
  Smartphone,
  Store,
  Users,
  Watch,
} from "lucide-react";
import React from "react";
import { NavigationMenuLink } from "./navigation-menu";
import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="w-8/12  md:flex hidden h-full items-center ">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center justify-start gap-5 h-full">
          <NavigationMenuItem className="cursor-pointer">
            <NavigationMenuTrigger>
              <span className="flex items-center justify-start gap-2 text-sm">
                دسته‌بندی محصولات
                <ChevronDown size={20} />
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute p-5 top-10 z-20 bg-white border border-primary/20 rounded-2xl w-full max-w-[450px] grid grid-cols-2 gap-5">
              <NavigationMenuLink className="w-full" href="/">
                <div className="flex w-full items-center justify-start gap-2 font-medium">
                  <Laptop size={32} />
                  لپت‌تاپ‌ها
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full" href="/">
                <div className="flex w-full items-center justify-start gap-2 font-medium">
                  <Smartphone size={32} />
                  موبایل‌ها
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full" href="/">
                <div className="flex w-full items-center justify-start gap-2 font-medium">
                  <Gamepad2 size={32} />
                  کنسول بازی
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full ovevis" href="/">
                <div className="flex w-full items-center justify-start gap-2 font-medium">
                  <Watch size={32} />
                  ساعت هوشمند
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link href={"/products"} className="cursor-pointer">
            <div className="flex items-center justify-start gap-2 text-sm">
              فروشگاه
              <Store size={20} />
            </div>
          </Link>
          <NavigationMenuItem className="cursor-pointer">
            <div className="flex items-center justify-start gap-2 text-sm">
              پیشنهاد ویژه
              <Percent size={20} />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <div className="flex items-center justify-start gap-2 text-sm">
              پرفروش ترین‌ها
              <Flame size={20} />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <div className="flex items-center justify-start gap-2 text-sm">
              وبلاگ
              <Rss size={20} />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <div className="flex items-center justify-start gap-2 text-sm">
              درباره‌ما
              <Users size={20} />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;
