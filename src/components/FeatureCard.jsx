import React from "react";
// import Image from "next/image";
import Button from "./Button";

const FeatureCard = ({ image, title, desc }) => {
  return (
    <div className="relative w-72 h-66  lg:w-80 lg:h-66 border-none bg-white rounded-xl  shadow-[4px_4px_12px_rgba(251,146,60,0.2)] transform  transition-all duration-300 flex flex-col group ">
      {/* Image and Title Section */}
      <div className="p-6 flex-none ">
        <div className="flex items-center gap-4  ">
          <div className="relative w-14 h-14 flex-shrink-0 bg-orange-400 rounded-full overflow-hidden z-30">
            {/* <Image
              src={image}
              alt={title}
              fill
              sizes={""}
              className="object-cover"
            /> */}
          </div>
          <div className="relative z-30">
            <h4 className="font-semibold text-xl text-zinc-800 font-[MyFont]  ">
              {title}
            </h4>
            <div className="h-0.5 bg-white mt-1 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="absolute w-[22rem] bg-[#ffaa7c] h-24 rounded-md top-2 -left-4  pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

      {/* Description - Flexible height */}
      <div className="px-6 flex-grow mt-4">
        <p className="text-sm text-zinc-600 line-clamp-3">{desc}</p>
      </div>

      {/* CTA Button - Fixed at bottom */}
      <div className="p-6 flex justify-center">
        <Button label="Read More" link="/mainfeature" />
      </div>
    </div>
  );
};

export default FeatureCard;
