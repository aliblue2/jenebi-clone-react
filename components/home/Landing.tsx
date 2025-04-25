"use client";

import React from "react";
import BannerSlider from "./BannerSlider";
import Categories from "./Categories";
import { Product } from "@/types/product";
import ProductsSlider from "./ProductsSlider";

const Landing: React.FC<{
  products: Product[];
  mobiles: Product[];
  laptops: Product[];
  smartWatches: Product[];
  consols: Product[];
}> = ({ products, consols, laptops, mobiles, smartWatches }) => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-start gap-12">
      <BannerSlider />
      <Categories />
      <ProductsSlider name="محصولات ویژه" products={products} />
      <ProductsSlider name="لپتاپ‌ها" products={laptops} />
      <ProductsSlider name="موبایل‌ها" products={mobiles} />
      <ProductsSlider name="ساعت ‌های هوشمند" products={smartWatches} />
      <ProductsSlider name="کنسول بازی" products={consols} />
    </section>
  );
};

export default Landing;
