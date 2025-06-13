"use client";

import { stripeData } from "@/data/stripedata";
import StripeCard from "@/components/StripeCard";
import Heading from "@/components/Heading";

export default function Brand() {
  const reversedBrands = [...stripeData].reverse();

  return (
    <section className="w-full  text-center min-h-fit lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading
          title="Trusted by these companies"
          subtitle="Used by forward-thinking companies worldwide"
        />

        <div className="overflow-hidden whitespace-nowrap w-full my-16">
          <div className="flex gap-12 animate-marquee">
            {stripeData.concat(stripeData).map((brand, index) => (
              <div key={`marquee-${index}`} className="flex-shrink-0 w-40">
                <StripeCard image={brand.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full ">
          <div className="flex gap-12 animate-marqueeReverse min-w-[200%]">
            {reversedBrands.concat(reversedBrands).map((brand, index) => (
              <div key={`marquee-rev-${index}`} className="flex-shrink-0 w-40">
                <StripeCard image={brand.image} />
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}
