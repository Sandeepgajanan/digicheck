"use client";

import { useState } from "react";
import Heading from "@/components/Heading";
import PriceCard from "@/components/PriceCard";
import { priceData } from "@/data/pricedata";
import Brand from "../brand/page";
import Highlights from "../highlights/page";
import Faq from "../faq/page";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="w-full min-h-screen bg-white text-zinc-900 py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading
          title="Pricing"
          subtitle="Flexible plans tailored to your needs."
        />

        {/* Toggle billing cycle */}
        <div className="flex justify-center items-center py-6">
          <div className="relative flex items-center bg-zinc-200 rounded-full p-1 w-40 h-10">
            {/* Toggle background pill */}
            <div
              className={`absolute top-1 left-1 w-1/2 h-8 rounded-full bg-black transition-all duration-300 ${
                billingCycle === "yearly" ? "translate-x-full" : ""
              }`}
            ></div>

            {/* Monthly Button */}
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`w-1/2 z-10 text-sm font-semibold transition-colors duration-300 ${
                billingCycle === "monthly" ? "text-white" : "text-zinc-700"
              }`}
            >
              Monthly
            </button>

            {/* Yearly Button */}
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`w-1/2 z-10 text-sm font-semibold transition-colors duration-300 ${
                billingCycle === "yearly" ? "text-white" : "text-zinc-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center py-10">
          {priceData.map((plan, index) => (
            <PriceCard
              key={index}
              {...plan}
              index={index}
              billingCycle={billingCycle}
            />
          ))}
        </div>
        <Brand/>
        <Highlights/>
        <Faq/>
      </div>
    </section>
  );
}
