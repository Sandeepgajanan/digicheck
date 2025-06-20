import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";
import React from "react";

const ToggleBill = ({ billingCycle, setBillingCycle }) => {
  const { language } = useLanguage();
  const priceToggleData = getData(language, "priceToggleData");
  return (
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
          onClick={() => setBillingCycle("monthly")}
          className={`w-1/2 z-10 text-sm font-semibold transition-colors duration-300 ${
            billingCycle === "monthly" ? "text-white" : "text-zinc-700"
          }`}
        >
          {priceToggleData.monthly}
        </button>

        {/* Yearly Button */}
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`w-1/2 z-10 text-sm font-semibold transition-colors duration-300 ${
            billingCycle === "yearly" ? "text-white" : "text-zinc-700"
          }`}
        >
          {priceToggleData.yearly}
        </button>
      </div>
    </div>
  );
};

export default ToggleBill;
