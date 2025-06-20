import React from "react";
import Image from "next/image";
import Link from "next/link";

const HighlightCard = ({ image, title, desc }) => {
  return (
    <Link href="#" aria-label={`Read more about ${title}`}>
      <div 
        className="group bg-[#f8f8f8] w-80 h-62 rounded-t-md shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-end max-sm:w-full"
        role="article"
        aria-labelledby={`highlight-title-${title}`}
      >
        <div 
          className="relative w-64  h-52 overflow-hidden rounded-md"
          role="img"
          aria-label={`${title} image`}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="256px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div 
        className="bg-white space-y-4 w-80 p-2 rounded-b-md"
        role="contentinfo"
      >
        <h4 
          id={`highlight-title-${title}`}
          className="text-lg font-semibold text-zinc-900"
        >
          {title}
        </h4>
        <p 
          className="text-zinc-900 text-sm line-clamp-2"
          aria-label={`Description for ${title}`}
        >
          {desc}
        </p>
      </div>
    </Link>
  );
};

export default HighlightCard;
