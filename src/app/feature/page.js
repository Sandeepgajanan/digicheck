"use client";
import { featureData, featureHeading } from "@/data/featuredata";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";

export default function Feature() {
  const { title, subtitle } = featureHeading;
  return (
    <section className="w-full min-h-screen  text-zinc-800 lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading title={title} subtitle={subtitle} />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-18 place-items-center">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={`feature-${index}`} // Added more specific key
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
