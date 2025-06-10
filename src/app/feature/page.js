"use client";
import { featureData } from "@/data/featuredata";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";

export default function Feature() {
  return (
    <section className="w-full min-h-screen py-20 text-zinc-800">
      <div className="max-w-screen-xl mx-auto w-full h-full">
        <Heading
          title="Features that drive results"
          subtitle="Discover how our innovative features transform your workflow and boost productivity. Each feature is designed to help you achieve more with less effort."
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
