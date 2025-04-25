import { GetAllProducts } from "@/requests/home/GetAllProducts";
import Link from "next/link";
import React from "react";

const page = async () => {
  const products = await GetAllProducts("");

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {products.map((product) => {
          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="w-full overflow-hidden shadow-md bg-white"
            >
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
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default page;
