"use client";

import { Product } from "@/types/product";
import { ShoppingBasket, Stars } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Comment } from "@/types/comment";
import ProductComments from "./ProductComments";
import { useUserStore } from "@/store/UserStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useBasketStore } from "@/store/UserBasketStore";
import { addToBasketProductHandler } from "@/requests/ProductsRequest";

const Landing: React.FC<{ product: Product; comments: Comment[] }> = ({
  product,
  comments,
}) => {
  const { accessToken } = useUserStore();
  const { addToBasket } = useBasketStore();

  const router = useRouter();

  const AddToBasketHandler = async () => {
    if (!accessToken) {
      toast.error("برای خرید باید در سیستم وارد شوید!");
      router.push("/auth");
      return;
    }
    addToBasket(product);
    addToBasketProductHandler(accessToken, product.id.toString());
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 h-full bg-gray-200 relative flex items-center justify-center rounded-3xl">
          <span className="flex items-center text-lg font-bold justify-start gap-2 bg-primary p-1 text-white rounded-lg absolute top-5 left-5">
            {product.rate.toLocaleString("fa-IR")}
            <Stars size={24} />
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="mix-blend-multiply max-h-96"
          />
        </div>
        <div className="flex flex-col items-start justify-evenly gap-2">
          <h6 className="text-2xl font-medium leading-10">{product.title}</h6>
          <span className="font-medium text-gray-600">
            دسته بندی : {product.category}
          </span>
          <span className="bg-green-100 text-sm rounded-lg px-2 py-1 text-emerald-600">
            ارسال رایگان
          </span>
          <p className="line-clamp-3">
            مشخصات کوتاه محصول : {product.description}
          </p>
          <h6 className="text-3xl font-bold text-primary">
            {(+product.price).toLocaleString("fa-IR") + " تومان"}
          </h6>
          <Button
            onClick={AddToBasketHandler}
            className="text-lg font-medium cursor-pointer"
            size={"lg"}
          >
            افزودن به سبد خرید
            <ShoppingBasket size={24} />
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-5 my-5">
        <h6 className="text-primary text-2xl font-medium border-b-4 border-primary border-dashed p-2">
          مشخصات محصول :{" "}
        </h6>
        <p className="leading-7 line-clamp-[10]">{product.description}</p>

        <h6 className="text-primary text-2xl font-medium border-b-4 border-primary border-dashed p-2">
          دیدگاه کاربران :{" "}
        </h6>
        <ProductComments comments={comments} />
      </div>
    </>
  );
};

export default Landing;
