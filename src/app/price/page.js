"use client";

import { useState } from "react";
import Heading from "@/components/Heading";
import PriceCard from "@/components/PriceCard";
import Brand from "../brand/page";
import Highlights from "../highlights/page";
import Faq from "../faq/page";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";
import ToggleBill from "@/components/ToggleBill";

export default function PricingPage() {
  const { language } = useLanguage();
  const priceData = getData(language, "priceData");
  const priceHeading = getData(language, "priceHeading");

  const compareData = getData(language, "compareData");
  const { title, subtitle } = priceHeading;

  const [billingCycle, setBillingCycle] = useState("monthly");
  return (
    <section className="w-full min-h-screen bg-white text-zinc-900 lg:py-20 ">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading title={title} subtitle={subtitle} />

    <ToggleBill billingCycle={billingCycle} setBillingCycle={setBillingCycle}/>

        {/* Price Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center py-10 gap-8 lg:gap-18">
          {priceData?.map((plan, index) => (
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
              className={` lg:w-96 lg:h-96 p-5 shadow-md rounded-2xl backdrop-blur-md space-y-6 scale-105 border border-zinc-400 ${
                index === 0
                  ? "bg-zinc-50/40   text-zinc-800 lg:-rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out "
                  : "bg-indigo-50/40 text-zinc-800  lg:rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out"
              }`}
            >
              <h3 className="text-2xl font-bold text-center">{item.heading}</h3>
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
