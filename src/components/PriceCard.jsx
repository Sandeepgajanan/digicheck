"use client";

import Button from "./Button";

const PriceCard = ({
  title,
  subtitle,
  description,
  price,
  yearlyPrice,
  features,
  isPopular,
  index,
  billingCycle,
}) => {
  const displayPrice = billingCycle === "monthly" ? price : yearlyPrice;
  const displayPeriod = billingCycle === "monthly" ? "month" : "year";

  return (
    <div
      className={`relative w-80 min-h-96 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-2xl space-y-4 ${
        isPopular ? "scale-110 bg-orange-400 text-white" : "bg-white text-gray-500"
      }`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-zinc-600/30 animate-bounce text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
          Popular
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center">
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
        <div>
          <p className="text-sm">{subtitle}</p>
          <h3 className="text-lg font-semibold ">{title}</h3>
        </div>
      </div>

      <p className="text-sm">{description}</p>

      <div className="text-5xl font-bold">
        ${displayPrice} <span className="text-base font-medium">/{displayPeriod}</span>
      </div>

      <p className="text-sm font-semibold">What’s included</p>
      <ul className="space-y-2 text-sm">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <div
              className={`w-6 h-6 ${
                index === 1 ? "bg-white" : "bg-orange-400"
              } rounded-full flex items-center justify-center`}
            >
              <i
                className={`ri-check-line ${
                  index === 1 ? "text-orange-500" : "text-white"
                }`}
              ></i>
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="pl-8 pt-4">
        <Button label="Get started" link="#" color={index === 1 ? "white" : undefined} />
      </div>
    </div>
  );
};

export default PriceCard;