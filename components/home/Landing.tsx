"use client";

import React from "react";
import BannerSlider from "./BannerSlider";
import Categories from "./Categories";

const Landing = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-start gap-12">
      <BannerSlider />
      <Categories />
    </section>
  );
};

export default Landing;
