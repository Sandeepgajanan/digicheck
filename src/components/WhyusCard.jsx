import React from "react";
import Image from "next/image";

const WhyUsCard = ({ title, desc, image }) => {
  return (
    <div className="flex group">
      <div className="relative ">
        <div className="relative w-72 h-52  lg:w-80 lg:h-80  shadow-2xl border border-zinc-100 rounded-md overflow-hidden ">
          <Image
            src={image}
            alt={title}
            fill
            sizes="320px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* title &desc */}

        <div className="w-72 relative h-fit bg-[#ffdecc] p-4 rounded-b-xl lg:absolute lg:-bottom-8 lg:left-8  lg:w-80 lg:h-28 z-20 shadow-lg ">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
        </div>

        {/* star */}
        <div className="hidden absolute bottom-16 left-12 bg-orange-400 w-8 h-8 rounded-lg shadow-md lg:flex items-center justify-center z-30">
          <div className="relative w-4 h-4">
            <Image
              src={"/icons/star.svg"}
              alt="star"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* read more */}
      <div className="h-fit w-fit px-1 py-2 bg-zinc-300 rounded-md m-1 rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out max-sm:hidden">
        <h1 className="text-zinc-800 font-semibold text-xs  uppercase vertical-text">
          Read More
        </h1>
      </div>
    </div>
  );
};

export default WhyUsCard;
