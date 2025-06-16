import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

const LiveProduct = () => {
  return (
    <div className="py-10 px-6 text-center flex  flex-col items-center  space-y-4">
      <Heading
        title="Live Product review"
        subtitle="Watch how our product helps automotive companies streamline their operations and enhance safety measures through real-time monitoring and analytics."
      />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button label={"Get Started for free"} link={"/contact"} />
        <Button label={"Learn More"} link={"/contact"} />
      </div>
      <div className="relative w-full h-52  lg:h-[50rem] rounded-md overflow-hidden mt-4 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
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
