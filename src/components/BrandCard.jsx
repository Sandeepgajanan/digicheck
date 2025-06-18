import React from "react";
import Image from "next/image";

const BrandCard = ({ image }) => {
  return (
    <article
      className="w-14 h-14 lg:w-20 lg:h-20 relative flex-shrink-0 rounded-md overflow-hidden"
      role="img"
      aria-label="Partner logo"
    >
      <Image
        src={image}
        alt="Partner logo"
        fill
        sizes="80px"
        priority
        className="object-contain"
      />
    </article>
  );
};

export default BrandCard;
