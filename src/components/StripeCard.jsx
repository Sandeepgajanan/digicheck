import React from "react";
import Image from "next/image";

const StripeCard = React.memo(({ image }) => {
  return (
    <div className="w-20 h-20 relative flex-shrink-0 rounded-md overflow-hidden ">
      <Image
        src={image}
        alt="Partner logo"
        fill
        sizes="80px"
        priority
        className="object-contain"
      />
    </div>
  );
});

export default StripeCard;
