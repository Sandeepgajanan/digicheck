import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

const WhyUsCard = ({ title, desc, image }) => {
  const { language } = useLanguage();
  const whyuscardData = getData(language, "whyuscardData");
  const { ctaLabel, ctaLink, starIcon } = whyuscardData;
  return (
    <article className="flex group" aria-labelledby={`whyus-title-${title}`}>
      <div className="relative">
        <div
          className="relative w-72 h-52  lg:w-80 lg:h-80  shadow-2xl border border-zinc-100 rounded-md overflow-hidden"
          role="img"
          aria-label={`${title} image`}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="320px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* title &desc */}
        <div className="w-72 relative h-fit bg-[#ffdecc] p-4 rounded-b-xl lg:absolute lg:-bottom-8 lg:left-8  lg:w-80 lg:h-28 z-20 shadow-lg">
          <h3
            id={`whyus-title-${title}`}
            className="text-lg font-semibold text-gray-800"
          >
            {title}
          </h3>
          <p
            className="text-sm text-gray-600 line-clamp-2"
            aria-label={`Description for ${title}`}
          >
            {desc}
          </p>
        </div>

        {/* star */}
        <div
          className="hidden absolute bottom-16 left-12 bg-orange-400 w-8 h-8 rounded-lg shadow-md lg:flex items-center justify-center z-30"
          role="img"
          aria-label="Featured highlight"
        >
          <div className="relative w-4 h-4">
            <Image src={starIcon} alt="star" fill className="object-cover" />
          </div>
        </div>
      </div>
      {/* read more */}
      <div
        className="h-fit w-fit px-1 py-2 bg-zinc-300 rounded-md m-1 rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out max-sm:hidden"
        role="button"
        aria-label="Read more about this feature"
      >
        <h1 className="text-zinc-800 font-semibold text-xs uppercase vertical-text">
          {ctaLabel}
        </h1>
      </div>
    </article>
  );
};

export default WhyUsCard;
