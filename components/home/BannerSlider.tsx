import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import BannerOne from "@/public/banner1.webp";
import BannerTwo from "@/public/banner2.webp";
import BannerThree from "@/public/banner3.webp";
import Image from "next/image";

const BannerSlider = () => {
  const banners = [BannerOne, BannerTwo, BannerThree];

  return (
    <Carousel dir="ltr" className="w-full md:h-96 h-56 py-5">
      <CarouselContent>
        {banners.map((bannerSrc, index) => (
          <CarouselItem key={index}>
            <Image
              src={bannerSrc}
              alt={`banner-${index}`}
              className="w-full md:h-96 h-56 object-cover object-right rounded-3xl shadow-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerSlider;
