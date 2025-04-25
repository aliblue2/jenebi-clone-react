"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

const ProductsSlider: React.FC<{ products: Product[]; name: string }> = ({
  products,
  name,
}) => {
  const router = useRouter();

  const openProductPageHandler = (productPath: number) => {
    router.push(`/products/${productPath}`);
  };

  return (
    <Carousel dir="rtl" className="max-w-[1200px] w-full">
      <h6 className="text-2xl font-bold">{name}</h6>
      <CarouselContent>
        {products.map((product) => {
          return (
            <CarouselItem
              onClick={() => openProductPageHandler(product.id)}
              className="w-full max-w-64 overflow-hidden py-3 cursor-pointer"
              key={product.id}
            >
              <div className="rounded-2xl border w-full overflow-hidden shadow-md bg-white">
                <div className="bg-gray-200 flex items-center justify-center ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 mix-blend-multiply p-3"
                  />
                </div>
                <div
                  dir="rtl"
                  className="flex px-4 py-2 flex-col items-start justify-start gap-2"
                >
                  <h6 className="text-lg font-medium line-clamp-2">
                    {product.title}
                  </h6>
                  <p className="text-xs font-medium line-clamp-2 ">
                    {product.description}
                  </p>
                  <h6 className="text-xl font-bold text-primary">
                    {(+product.price).toLocaleString("fa-IR") + " تومان"}
                  </h6>
                  <span className="text-emerald-600 text-xs font-medium px-2 rounded-sm py-1 bg-green-100">
                    ارسال رایگان
                  </span>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductsSlider;
