"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function Landing() {
  return (
    <main className="relative w-full h-fit md:min-h-screen text-zinc-900 px-2 md:px-8 mt-16 overflow-hidden">
      {/* Gradient Background with Polygon Shape */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r   from-[#fdf2f2] via-[#ffe9e3] to-[#CFC3EE] clip-diagonal" />

      <section className="w-full h-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col w-full h-full space-y-6 pt-5 md:w-1/2 md:pt-20">
          <h2 className="bg-white w-fit mx-auto md:mx-0 shadow-2xl p-1 rounded-xl md:w-60 text-center text-nowrap">
            <span className="text-xs uppercase text-zinc-700">
              100 percent secure & reliable
            </span>
          </h2>
          <h1 className="text-2xl leading-none text-center md:text-left uppercase font-extrabold md:text-5xl text-nowrap md:leading-14 font-[Myfont] max-sm:text-2xl">
            digicheck for <br />
            automotive-real-time <br />
            safety & monitoring
          </h1>
          <p className="capitalize text-center md:text-left text-zinc-600">
            Track detect and act smarter
          </p>
          <div className="w-full flex justify-center md:mx-0 md:justify-start">
            <Button label={"Request Demo"} link={"/contact"} />
          </div>
        </div>

        <div className="flex-1 items-center flex justify-center">
          <div className="relative mt-10 w-60 h-52 rounded-xl overflow-hidden bg-zinc-50 md:mt-16 md:h-96 md:w-96">
            <Image
              src={"/try.webp"}
              alt={"home"}
              fill
              sizes="384px"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
