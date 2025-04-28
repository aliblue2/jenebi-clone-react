import Landing from "@/components/products/Landing";
import { GetProduct } from "@/requests/home/GetAllProducts";
import { GetCommentsByProductId } from "@/requests/home/GetComments";
import { Comment } from "@/types/comment";
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
  const comments: Comment[] = await GetCommentsByProductId(
    productId!.toString()
  );

  return (
    <>
      <Landing product={product} comments={comments} />
    </>
  );
};

export default Page;
