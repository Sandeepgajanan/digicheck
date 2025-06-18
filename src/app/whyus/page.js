"use client";

import Heading from "@/components/Heading";
import WhyUsCard from "@/components/WhyusCard";
import { whyusdataHeading, whyUsData } from "@/data/whyusdata";

export default function WhyChooseUs() {
  const { title, subtitle } = whyusdataHeading;
  return (
    <section className="w-full min-h-screen lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-18 place-items-center ">
          {whyUsData.map((item, index) => (
            <WhyUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
