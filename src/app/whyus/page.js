"use client";

import Heading from "@/components/Heading";
import WhyUsCard from "@/components/WhyusCard";
import { whyUsData } from "@/data/whyusdata";

export default function WhyChooseUs() {
  return (
    <section className="w-full min-h-screen py-10">
      <div className="max-w-screen-xl mx-auto w-full h-full">
        <Heading
          title="Why Choose Us"
          subtitle="Discover what sets us apart and why we're the right choice for your needs."
        />

        <div className="flex  gap-14 items-center justify-between flex-wrap max-sm:flex-col max-sm:gap-30 max-sm:justify-center">
          {whyUsData.map((item, index) => (
            <WhyUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
