import { GetAllProducts } from "@/requests/home/GetAllProducts";
import { Laptop2, Smartphone, Watch, Gamepad2 } from "lucide-react";
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
        <Link
          href={"/products?category=laptop"}
          className={`${
            category === "laptop" &&
            "text-lg bg-secondary shadow-sm font-medium text-primary"
          }   flex items-center justify-center gap-1 p-2 rounded-lg`}
        >
          لپ‌تاپ ها
          <Laptop2 size={20} />
        </Link>
        <Link
          href={"/products?category=mobile"}
          className={`${
            category === "mobile" &&
            "text-lg bg-secondary shadow-sm font-medium text-primary"
          }   flex items-center justify-center gap-1 p-2 rounded-lg`}
        >
          موبایل ها
          <Smartphone size={20} />
        </Link>
        <Link
          href={"/products?category=smart-watch"}
          className={`${
            category === "smart-watch" &&
            "text-lg bg-secondary shadow-sm font-medium text-primary"
          }   flex items-center justify-center gap-1 p-2 rounded-lg`}
        >
          ساعت هوشمند
          <Watch size={20} />
        </Link>
        <Link
          href={"/products?category=consol"}
          className={`${
            category === "consol" &&
            "text-lg bg-secondary shadow-sm font-medium text-primary"
          }   flex items-center justify-center gap-1 p-2 rounded-lg`}
        >
          کنسول‌بازی
          <Gamepad2 size={20} />
        </Link>
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
