"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { miniPriceData } from "@/data/minipricedata";

export default function MiniPrice() {
  const { title, ctaLabel, ctaLink, image } = miniPriceData;
  return (
    <section className="w-full min-h-fit py-10 text-zinc-800">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="w-full text-center lg:w-2/3 lg:text-left space-y-10  p-2 ">
            <h1 className="text-3xl ">
              {title.map((title, index) => (
                <span key={index} className="block">
                  {title}
                </span>
              ))}
            </h1>
            <Button label={ctaLabel} link={ctaLink} />
          </div>

          <div className="flex-1   max-sm:hidden">
            <div className="relative w-full h-80 rounded-md overflow-hidden max-sm ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
