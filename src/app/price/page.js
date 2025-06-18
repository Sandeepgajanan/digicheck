"use client";

import { useState } from "react";
import Heading from "@/components/Heading";
import PriceCard from "@/components/PriceCard";
import Brand from "../brand/page";
import Highlights from "../highlights/page";
import Faq from "../faq/page";
import { priceData, priceHeading } from "@/data/pricedata";
import { priceToggleData } from "@/data/pricedata";
import { compareData } from "@/data/comparedata";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const { title, subtitle } = priceHeading;
  return (
    <section className="w-full min-h-screen bg-white text-zinc-900 lg:py-20 ">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading title={title} subtitle={subtitle} />

        {/* Toggle billing cycle */}
        <div className="flex justify-center items-center ">
          <div className="relative flex items-center bg-zinc-200 rounded-full p-1 w-40 h-10">
            {/* Toggle background pill */}
            <div
              className={`absolute top-1 left-1 w-1/2 h-8 rounded-full bg-black transition-all duration-300 ${
                billingCycle === "yearly" ? "translate-x-full" : ""
              }`}
            ></div>

            {/* Monthly Button */}
            <button
              onClick={() => setBillingCycle(priceToggleData.monthly)}
              className={`w-1/2 z-10 text-sm font-semibold transition-colors duration-300 ${
                billingCycle === "monthly" ? "text-white" : "text-zinc-700"
              }`}
            >
              {priceToggleData.monthly}
            </button>

            {/* Yearly Button */}
            <button
              onClick={() => setBillingCycle(priceToggleData.yearly)}
              className={`w-1/2 z-10 text-sm font-semibold transition-colors duration-300 ${
                billingCycle === "yearly" ? "text-white" : "text-zinc-700"
              }`}
            >
              {priceToggleData.yearly}
            </button>
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center py-10 gap-8 lg:gap-18">
          {priceData.map((plan, index) => (
            <PriceCard
              key={index}
              {...plan}
              index={index}
              billingCycle={billingCycle}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10  pt-30 p-2">
          {compareData.map((item, index) => (
            <div
              key={index}
              className={` lg:min-w-96 lg:h-96 p-5 shadow-md rounded-2xl backdrop-blur-md space-y-6 scale-105 border border-zinc-400 ${
                index === 0
                  ? "bg-zinc-50/40   text-zinc-800 lg:-rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out "
                  : "bg-indigo-50/40 text-zinc-800  lg:rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out"
              }`}
            >
              <h3 className="text-2xl font-bold ">{item.heading}</h3>
              <p className="text-sm text-center ">{item.subheading}</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {item.points.map((point, i) => (
                  <li key={i} className="">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Brand />
        <Highlights />
        <Faq />
      </div>
    </section>
  );
}
