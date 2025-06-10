import React from "react";
import Image from "next/image";

const StripeCard = ({ image }) => {
  return (
    <div className="w-32 h-32 relative rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0">
      <Image
        src={image}
        alt="Partner logo"
        fill
        className="object-contain p-2"
      />
    </div>
  );
};

export default StripeCard;
