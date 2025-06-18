"use client";

import Button from "./Button";
import Image from "next/image";
import { priceData2 } from "@/data/pricedata";
const PriceCard = ({
  title,
  subtitle,
  description,
  price,
  yearlyPrice,
  heading = "What's included",
  features,
  isPopular,
  index,
  billingCycle,
}) => {
  const displayPrice = billingCycle === "monthly" ? price : yearlyPrice;
  const displayPeriod = billingCycle === "monthly" ? "month" : "year";

  return (
    <article
      className={`relative w-80 min-h-96 rounded-2xl shadow-lg p-8 space-y-4 
    transform transition-all duration-700 ease-in-out hover:scale-105 
    ${
      isPopular
        ? "bg-gray-700 text-white hover:shadow-[4px_4px_12px_rgba(251,146,60,0.5)]"
        : "bg-white text-gray-500"
    }`}
      aria-labelledby={`price-title-${title}`}
      role="article"
    >
      {isPopular && (
        <div
          className="absolute top-4 right-4 bg-zinc-600/30 animate-bounce text-white text-xs px-2 py-1 rounded-full font-semibold shadow"
          role="status"
          aria-label="Popular plan"
        >
          {priceData2.popularBadge}
        </div>
      )}

      <div
        className="flex items-center gap-3"
        role="group"
        aria-label="Plan header"
      >
        <div
          className="w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center"
          role="img"
          aria-label={`${title} icon`}
        >
          <div
            className="w-8 h-8 bg-orange-500 rounded-full"
            aria-hidden="true"
          ></div>
        </div>
        <div>
          <p className="text-sm" aria-label="Plan subtitle">
            {subtitle}
          </p>
          <h3 id={`price-title-${title}`} className="text-lg font-semibold">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-sm" aria-label="Plan description">
        {description}
      </p>

      <div
        className="text-5xl font-bold"
        aria-label={`${displayPrice} per ${displayPeriod}`}
        role="text"
      >
        ${displayPrice}{" "}
        <span className="text-base font-medium" aria-hidden="true">
          /{displayPeriod}
        </span>
      </div>

      <p className="text-sm font-semibold" id={`features-title-${title}`}>
        {heading}
      </p>
      <ul
        className="space-y-2 text-sm"
        aria-label={`Features included in ${title} plan`}
        aria-labelledby={`features-title-${title}`}
      >
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2" role="listitem">
            <div
              className={`w-6 h-6 ${
                index === 1 ? "bg-white" : "bg-orange-400"
              } rounded-full flex items-center justify-center`}
              role="img"
              aria-label="Included feature"
            >
              <Image
                src={
                  index === 1 ? priceData2.checkBlack : priceData2.checkWhite
                }
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className="pl-8 pt-4"
        role="complementary"
        aria-label="Action section"
      >
        <Button
          label={priceData2.ctaLabel}
          link={priceData2.ctaLink}
          color={index === 1 ? "white" : undefined}
        />
      </div>
    </article>
  );
};

export default PriceCard;
