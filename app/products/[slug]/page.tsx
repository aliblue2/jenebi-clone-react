import Landing from "@/components/products/Landing";
import { GetProduct } from "@/requests/home/GetAllProducts";
import { Product } from "@/types/product";
import { NextPage } from "next";
import { Params } from "next/dist/server/request/params";

interface Props {
  params: Params;
}

const Page: NextPage<Props> = async ({ params }) => {
  const paramsPage = await params;
  const productId = paramsPage.slug;

  const product: Product = await GetProduct(productId!.toString());

  return (
    <>
      <Landing product={product} />
    </>
  );
};

export default Page;
