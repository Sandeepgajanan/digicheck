"use client";

import Heading from "@/components/Heading";
import WhyUsCard from "@/components/WhyusCard";
import { whyUsData } from "@/data/whyusdata";

export default function WhyChooseUs() {
  return (
    <section className="w-full min-h-screen lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading
          title="Why Choose Us"
          subtitle="Discover what sets us apart and why we're the right choice for your needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
          {whyUsData.map((item, index) => (
            <WhyUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
