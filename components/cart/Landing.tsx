"use client";

import { useBasketStore } from "@/store/UserBasketStore";
import { useUserStore } from "@/store/UserStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Store, Trash2 } from "lucide-react";
import { Product } from "@/types/product";
import { RemoveProductFromBasketHandler } from "@/requests/ProductsRequest";
import EmptyCartImg from "@/public/Empty-Cart-1--Streamline-Brooklyn.png";
import Image from "next/image";

const Landing = () => {
  const { accessToken } = useUserStore();
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      router.push("/auth");
    }
  }, [accessToken, router]);
  const { items, removeFromBasket } = useBasketStore();
  let finalPrice = 0;

  const removeItemFromBasketHandler = async (product: Product) => {
    removeFromBasket(product);
    RemoveProductFromBasketHandler(accessToken!, product.id.toString());
  };

  if (items.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 w-full h-full">
        <Image src={EmptyCartImg} alt="empty-cart-image" />
        <h6 className=" font-medium text-2xl">
          هنوز محصولی به سبد خرید خود اضافه نکرده اید.!
        </h6>
        <Button
          className="text-lg font-medium"
          size={"lg"}
          onClick={() => router.push("/products")}
        >
          دیدن محصولات فروشگاه <Store size={20} />
        </Button>
      </div>
    );
  }

  return (
    <section className="max-w-[600px] mx-auto">
      <div className="flex items-center justify-between gap-5">
        <h6 className="text-2xl font-medium">سبد خرید</h6>
        <h6 className="text-lg font-medium">تعداد اقلام :{items.length}</h6>
      </div>
      <div className="flex flex-col my-5 rounded-xl shadow-sm items-center justify-start gap-5 bg-white divide-y-2 divide-primary w-full divide-dashed p-3">
        {items.map((item) => {
          finalPrice += +item.product.price * item.count;

          return (
            <div
              className="flex p-2 w-full items-center justify-between gap-3 relative"
              key={item.product.id}
            >
              <div className="flex w-20 h-20 overflow-hidden items-center justify-center bg-secondary rounded-lg">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-full h-full object-contain w-20 h-20 mix-blend-multiply p-2"
                />
              </div>
              <h6 className="font-medium line-clamp-1 text-xs md:text-base">
                {item.product.title.slice(0, 30)}
              </h6>
              <span className="text-primary font-bold">
                {item.count.toLocaleString("fa-IR") +
                  " * " +
                  (+item.product.price).toLocaleString("fa-IR")}
              </span>
              <Trash2
                onClick={() => removeItemFromBasketHandler(item.product)}
                size={18}
                className="absolute bottom-2 left-2 text-red-500"
              />
            </div>
          );
        })}
        <div className="flex w-full gap-5 items-center justify-between">
          <h6 className="text-primary text-2xl font-medium">
            {finalPrice.toLocaleString("fa-IR") + " تومان"}
          </h6>
          <Button size={"lg"} className="text-lg font-medium">
            پرداخت
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
