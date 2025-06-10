"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
// bg-gradient-to-b from-pink-100 via-orange-100  to-white
export default function Landing() {
  return (
    <main className="w-full min-h-screen  text-zinc-900  pt-32 max-sm:pt-12">
      <section className="w-full h-full max-w-screen-xl mx-auto flex  max-sm:flex-col max-sm:bg-red-500  ">

        <div className="flex flex-col h-full w-1/2  pt-20 space-y-8 px-5 max-sm:w-full max-sm:justify-center ">
          <h2 className="bg-zinc-100 shadow-2xl p-2 rounded-xl w-60 text-center text-nowrap max-sm:w-full">
            <span className="text-xs uppercase text-zinc-700 ">
              100 percent secure & reliable
            </span>
          </h2>
          <h1 className="uppercase font-extrabold  text-5xl text-nowrap leading-14 font-[Myfont] max-sm:text-2xl">
            digicheck for <br />
            automotive-real-time <br />
            safety & monitoring
          </h1>
          <p className="capitalize text-zinc-400 ">
            Track detect and act smarter
          </p>
          <Button label={"Request Demo"} link={"/contact"} />
        </div>


        <div className="w-1/2 h-full flex gap-4  px-4 relative ">
          <div className="h-full flex w-1/2  ">
            <div className="relative h-96 w-96 rounded-xl overflow-hidden mt-10 bg-zinc-50">
              <Image
                src={"/home1.png"}
                alt={"image1"}
                fill
                className="object-cover object-center opacity-50"
              />
            </div>
          </div>
          <div className="h-full flex flex-col gap-8 w-1/2 pt-20  items-center">
            <div className="relative h-60 w-56 rounded-xl overflow-hidden -mt-8 bg-zinc-50">
              <Image
                src={"/img2.png"}
                alt={"image1"}
                fill
                className="object-cover opacity-30"
              />
            </div>
            <div className="relative h-60 w-56 rounded-2xl overflow-hidden bg-zinc-50">
              <Image
                src={"/home2.png"}
                alt={"image1"}
                fill
                className="object-cover opacity-50"
              />
            </div>
          </div>
          <div className="absolute mt-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-80 rounded-2xl overflow-hidden bg-zinc-50">
            <Image
              src={"/home2.png"}
              alt={"image1"}
              fill
              className="object-cover object-center opacity-90"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
