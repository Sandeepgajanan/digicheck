import React from "react";
import Image from "next/image";

const WhyUsCard = ({ title, desc, image }) => {
  return (
    <div className="relative ">
      <div className="relative w-90 h-80  shadow-2xl border border-zinc-100 rounded-md overflow-hidden max-sm:w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-8 left-8 bg-[#ffdecc] p-4 rounded-b-xl w-90 h-28 z-20 shadow-lg max-sm:left-0 max-sm:-bottom-24 max-sm:w-full">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
      </div>
      <div className="absolute bottom-16 left-12 bg-orange-400 w-8 h-8 rounded-lg shadow-md flex items-center justify-center z-30">
        <i className="ri-star-fill text-white text-lg"></i>
      </div>
    </div>
  );
};

export default WhyUsCard;
