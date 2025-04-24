"use client";

import React from "react";
import { Tabs } from "../ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardContent } from "../ui/card";
import { LogIn, UserPlus } from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";
const AuthContainer = () => {
  return (
    <div className="flex w-full h-screen items-start py-12 justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-secondary p-2 rounded-xl divide-x-2 shadow-xs border">
          <TabsTrigger
            className="flex items-center justify-center gap-5"
            value="login"
          >
            ورود
            <LogIn size={20} />
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center justify-center gap-5"
            value="signup"
          >
            ثبت‌نام
            <UserPlus size={20} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardContent className="space-y-2">
              <Login />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardContent className="space-y-2">
              <Signup />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthContainer;
