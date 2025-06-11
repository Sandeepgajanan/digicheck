import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

const LiveProduct = () => {
  return (
    <div className="py-10 text-center flex  flex-col items-center  space-y-4">
      <Heading
        title="Live Product review"
        subtitle="Watch how our product helps automotive companies streamline their operations and enhance safety measures through real-time monitoring and analytics."
      />
      <div className="flex gap-6 items-center justify-center">
        <Button label={"Get Started for free"} link={"/contact"} />
        <Button label={"Learn More"} link={"/contact"} />
      </div>
      <div className="relative w-full h-[50rem] rounded-md overflow-hidden mt-4  p-3">
        <Image
          src={"/dashboard.webp"}
          alt={"image1"}
          sizes="100vw"
          fill
          className="object-cover object-center transition-transform duration-500 hover:rotate-2"
        />
      </div>
    </div>
  );
};

export default LiveProduct;
