"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function MiniPrice() {
  return (
    <section className="w-full min-h-fit py-10 text-zinc-800">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="w-2/3 space-y-10  p-2 text-center">
            <h1 className="text-3xl ">
              Plan that scale with your needs <br />
              Whether you're just getting started or growing fast <br />
              We have a plan for you
            </h1>
            <Button label="Explore Pricing" link="/price" />
          </div>

          <div className="flex-1">
            <div className="relative w-full h-80 rounded-md overflow-hidden ">
              <Image
                src="/miniprice.webp"
                alt="Pricing Illustration"
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
