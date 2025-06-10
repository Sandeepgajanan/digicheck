import React from "react";
// import Image from "next/image";
import Button from "./Button";


const FeatureCard = ({ image, title, desc }) => {
  return (
    <div className="w-96 h-66 border-none bg-white rounded-xl overflow-hidden shadow-[4px_4px_12px_rgba(251,146,60,0.2)] transform hover:scale-105 transition-all duration-300 flex flex-col group max-sm:w-full">
      {/* Image and Title Section */}
      <div className="p-6 flex-none">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 flex-shrink-0 bg-orange-400 rounded-full overflow-hidden">
            {/* <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            /> */}
          </div>
          <div className="relative">
            <h4 className="font-semibold text-xl text-zinc-800 font-[MyFont]">
              {title}
            </h4>
            <div className="h-0.5 bg-orange-400 mt-1 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>

      {/* Description - Flexible height */}
      <div className="px-6 flex-grow">
        <p className="text-sm text-zinc-600 line-clamp-3">{desc}</p>
      </div>

      {/* CTA Button - Fixed at bottom */}
      <div className="p-6 flex justify-center">
        <Button label="Read More" link="/feature" />
      </div>
    </div>
  );
};

export default FeatureCard;
