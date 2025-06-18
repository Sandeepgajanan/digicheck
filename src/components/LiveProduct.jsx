import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";
import { liveProductHeading, liveProductData } from "@/data/liveproductdata";

const LiveProduct = () => {
  const { title, subtitle } = liveProductHeading;
  const { ctaLabel1, ctaLink1, ctaLabel2, ctaLink2, image } = liveProductData;

  return (
    <section
      className="py-10 px-6 text-center flex  flex-col items-center  space-y-4"
      role="region"
      aria-labelledby="live-product-title"
    >
      <Heading title={title} subtitle={subtitle} />
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        role="group"
        aria-label="Action buttons"
      >
        <Button label={ctaLabel1} link={ctaLink1} />
        <Button label={ctaLabel2} link={ctaLink2} />
      </div>
      <div
        className="relative w-full h-52  lg:h-[50rem] rounded-md overflow-hidden mt-4 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
        role="img"
        aria-label="Product dashboard preview"
      >
        <Image
          src={image.src}
          alt={image.alt}
          sizes="100vw"
          fill
          className="object-cover object-center transition-transform duration-500 hover:rotate-2"
        />
      </div>
    </section>
  );
};

export default LiveProduct;
