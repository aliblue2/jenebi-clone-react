import { Product } from "@/types/product";

export const GetAllProducts = async (categoryName?: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}products?category=${categoryName}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("cant get products lists");
  }

  const products: Product[] = await response.json();

  return products;
};

export const GetProduct = async (productId: number) => {
  const response = await fetch(
    `${process.env.BASE_URL}products/${productId}}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("cant get products lists");
  }

  const product: Product = await response.json();

  return product;
};
