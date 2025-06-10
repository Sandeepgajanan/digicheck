"use client";

import { stripeData } from "@/data/stripedata";
import StripeCard from "@/components/StripeCard";
import Button from "@/components/Button";
import Image from "next/image";
import Heading from "@/components/Heading";


export default function Brand() {
  const reversedBrands = [...stripeData].reverse();

  return (
    <section className="w-full  text-center min-h-screen py-10">
      <div className="max-w-screen-xl mx-auto w-full h-full ">
        <Heading
          title="Trusted by these companies"
          subtitle="Used by forward-thinking companies worldwide"
        />

        <div className="flex justify-center gap-16 mb-16 max-sm:overflow-x-auto">
          {stripeData.map((brand, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-40  transition-all duration-300 opacity-70 hover:opacity-100 "
            >
              <StripeCard image={brand.image} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-16 mb-16 max-sm:overflow-x-auto">
          {reversedBrands.map((brand, index) => (
            <div
            key={`top-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-40  transition-all duration-300 opacity-70 hover:opacity-100 "
          >
            <StripeCard image={brand.image} />
          </div>
          ))}
        </div>

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
              fill
              className="object-cover object-center transition-transform duration-500 hover:rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
