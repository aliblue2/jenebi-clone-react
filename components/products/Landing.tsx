import { Product } from "@/types/product";
import React from "react";

const Landing: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default Landing;
