"use client";

import React from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DirectionProvider dir="rtl">
      <section className="w-full h-full max-w-[1200px] mx-auto p-5">
        {children}
      </section>
    </DirectionProvider>
  );
};

export default Container;
