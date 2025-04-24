"use client";

import {
  Flame,
  Gamepad2,
  Laptop,
  Menu,
  Percent,
  Rss,
  Smartphone,
  Users,
  Watch,
} from "lucide-react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import MainLogo from "@/public/janebi-logo.svg";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const MenuDrawer = () => {
  return (
    <div className="md:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle dir="ltr">
              <Image
                src={MainLogo}
                alt="main-loog"
                priority
                className="max-w-32"
              />
            </SheetTitle>
            <NavigationMenu>
              <NavigationMenuList className="flex mt-12 flex-col items-start font-medium justify-start gap-8 h-full">
                <NavigationMenuLink className="w-full" href="/">
                  <div className="flex w-full items-center justify-start gap-2 font-medium">
                    <Laptop size={24} />
                    لپت‌تاپ‌ها
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full" href="/">
                  <div className="flex w-full items-center justify-start gap-2 font-medium">
                    <Smartphone size={24} />
                    موبایل‌ها
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full" href="/">
                  <div className="flex w-full items-center justify-start gap-2 font-medium">
                    <Gamepad2 size={24} />
                    کنسول بازی
                  </div>
                </NavigationMenuLink>
                <NavigationMenuLink className="w-full ovevis" href="/">
                  <div className="flex w-full items-center justify-start gap-2 font-medium">
                    <Watch size={24} />
                    ساعت هوشمند
                  </div>
                </NavigationMenuLink>

                <NavigationMenuItem className="cursor-pointer">
                  <div className="flex items-center justify-start gap-2">
                    <Percent size={24} />
                    پیشنهاد ویژه
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="cursor-pointer">
                  <div className="flex items-center justify-start gap-2">
                    <Flame size={24} />
                    پرفروش ترین‌ها
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="cursor-pointer">
                  <div className="flex items-center justify-start gap-2">
                    <Rss size={24} />
                    وبلاگ
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="cursor-pointer">
                  <div className="flex items-center justify-start gap-2">
                    <Users size={24} />
                    درباره‌ما
                  </div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuDrawer;
