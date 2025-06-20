import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

const LiveProduct = () => {
  const { language } = useLanguage();
  const liveproductHeading = getData(language, "liveproductHeading");
  const liveproductData = getData(language, "liveproductData");
  const { title, subtitle } = liveproductHeading;
  const { ctaLabel1, ctaLink1, ctaLabel2, ctaLink2, image } = liveproductData;

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
        className="relative w-full h-52  lg:h-[130vh] rounded-md overflow-hidden mt-4 px-4 py-6  lg:px-8 lg:py-10   "
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
