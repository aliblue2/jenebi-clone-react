import React from "react";
import Categor1 from "@/public/mobile.svg";
import Categor2 from "@/public/ps5.svg";
import Categor3 from "@/public/smart-watch.svg";
import Categor4 from "@/public/laptop.svg";
import Image from "next/image";
const Categories = () => {
  const categories = [
    {
      image: Categor1,
      name: "گوشی موبایل",
    },
    {
      image: Categor2,
      name: "کنسول بازی",
    },
    {
      image: Categor3,
      name: "ساعت هوشمند",
    },
    {
      image: Categor4,
      name: "لپ‌تاپ",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
      {categories.map((category, i) => {
        return (
          <div
            key={category.name + i}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={category.image}
              alt={`category-${i}`}
              className="w-32 h-32 bg-primary/20 p-5 rounded-full "
            />
            <h6 className="text-lg font-bold"> {category.name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
