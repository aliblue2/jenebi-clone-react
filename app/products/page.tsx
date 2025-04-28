import { GetAllProducts } from "@/requests/home/GetAllProducts";
import { Laptop2, Smartphone, Watch, Gamepad2, CircleX } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PageProps {
  searchParams: {
    category?: string;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const queryParams = await searchParams;
  const category = queryParams.category || "";
  const products = await GetAllProducts(category);

  return (
    <>
      <div className="flex items-center justify-start gap-5 mb-5">
        <span>دسته بندی ها :</span>
        <div
          className={`${
            category === "laptop" && "bg-primary text-white font-medium text-lg"
          }   flex items-center justify-center gap-3 p-2 rounded-lg`}
        >
          <Link
            className="flex items-center justify-start gap-2"
            href={"/products?category=laptop"}
          >
            <Laptop2 size={20} />
            لپ‌تاپ ها
          </Link>
          {category === "laptop" && (
            <Link href={"/products"}>
              <CircleX size={18} />
            </Link>
          )}
        </div>
        <div
          className={`${
            category === "mobile" && "bg-primary text-white font-medium text-lg"
          }   flex items-center justify-center gap-3 p-2 rounded-lg`}
        >
          <Link
            className="flex items-center justify-start gap-2"
            href={"/products?category=mobile"}
          >
            <Smartphone size={20} />
            موبایل ها
          </Link>
          {category === "mobile" && (
            <Link href={"/products"}>
              <CircleX size={18} />
            </Link>
          )}
        </div>
        <div
          className={`${
            category === "smart-watch" &&
            "bg-primary text-white font-medium text-lg"
          }   flex items-center justify-center gap-3 p-2 rounded-lg`}
        >
          <Link
            className="flex items-center justify-start gap-2"
            href={"/products?category=smart-watch"}
          >
            <Watch size={20} />
            ساعت هوشمند
          </Link>
          {category === "smart-watch" && (
            <Link href={"/products"}>
              <CircleX size={18} />
            </Link>
          )}
        </div>
        <div
          className={`${
            category === "consol" && "bg-primary text-white font-medium text-lg"
          }   flex items-center justify-center gap-3 p-2 rounded-lg`}
        >
          <Link
            className="flex items-center justify-start gap-2"
            href={"/products?category=consol"}
          >
            <Gamepad2 size={20} />
            کنسول بازی
          </Link>
          {category === "consol" && (
            <Link href={"/products"}>
              <CircleX size={18} />
            </Link>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {products.map((product) => {
          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="w-full overflow-hidden bg-white"
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
