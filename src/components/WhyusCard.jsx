import React from "react";
import Image from "next/image";

const WhyUsCard = ({ title, desc, image }) => {
  return (
    <div className="relative ">
      <div className="relative w-72 h-52  md:w-80 md:h-80  shadow-2xl border border-zinc-100 rounded-md overflow-hidden ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="320px"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-72 relative h-fit bg-[#ffdecc] p-4 rounded-b-xl md:absolute md:-bottom-8 md:left-8  md:w-80 md:h-28 z-20 shadow-lg ">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
      </div>
      <div className="hidden md:bottom-16 md:left-12 bg-orange-400 w-8 h-8 rounded-lg shadow-md md:flex items-center justify-center z-30">
        <i className="ri-star-fill text-white text-lg"></i>
      </div>
    </div>
  );
};

export default WhyUsCard;
