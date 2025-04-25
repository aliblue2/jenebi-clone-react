import Landing from "@/components/home/Landing";
import { GetAllProducts } from "@/requests/home/GetAllProducts";

export default async function Home() {
  const allProdcuts = await GetAllProducts("");
  const mobiles = await GetAllProducts("mobile");
  const laptops = await GetAllProducts("laptop");
  const smartWatch = await GetAllProducts("smart-watch");
  const consols = await GetAllProducts("consol");

  return (
    <>
      <Landing
        products={allProdcuts}
        consols={consols}
        laptops={laptops}
        mobiles={mobiles}
        smartWatches={smartWatch}
      />
    </>
  );
}
