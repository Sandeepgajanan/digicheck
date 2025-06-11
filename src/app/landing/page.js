"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function Landing() {
  return (
    <main
      className="w-full h-fit md:min-h-screen text-zinc-900 px-2 md:px-8 mt-16"
      style={{
        backgroundImage: 'url("/bg.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full h-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col w-full h-full space-y-6 pt-5 md:w-1/2  md:pt-20   ">
          <h2 className=" bg-white w-fit mx-auto md:mx-0 shadow-2xl p-1 rounded-xl md:w-60 text-center text-nowrap ">
            <span className="text-xs uppercase text-zinc-700 ">
              100 percent secure & reliable
            </span>
          </h2>
          <h1 className=" text-2xl leading-none text-center md:text-left uppercase font-extrabold  md:text-5xl text-nowrap md:leading-14 font-[Myfont] max-sm:text-2xl">
            digicheck for <br />
            automotive-real-time <br />
            safety & monitoring
          </h1>
          <p className="capitalize text-center md:text-left text-zinc-600">
            Track detect and act smarter
          </p>
          <div className="w-full flex justify-center md:mx-0  md:justify-start ">
            <Button label={"Request Demo"} link={"/contact"} />
          </div>
        </div>

        <div className=" flex-1 items-center flex justify-center ">
          {/* <div className="h-full flex   md:w-1/2 ">
            <div className="relative w-44 h-44 rounded-xl overflow-hidden  bg-zinc-50 md:mt-16 md:h-96 md:w-96">
              <Image
                src={"/home1.webp"}
                alt={"image1"}
                fill
                sizes="384px"
                className="object-cover object-center opacity-30"
              />
            </div>
          </div>
          <div className="h-full flex flex-col gap-8 w-1/2 pt-20  items-center">
            <div className="relative h-60 w-56 rounded-xl overflow-hidden -mt-10 bg-zinc-50">
              <Image
                src={"/img2.webp"}
                alt={"image1"}
                fill
                sizes="240px"
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative h-60 w-56 rounded-2xl overflow-hidden bg-zinc-50">
              <Image
                src={"/home2.webp"}
                alt={"image1"}
                fill
                sizes="240px"
                className="object-cover opacity-50"
              />
            </div>
          </div>
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-80 rounded-2xl overflow-hidden bg-zinc-50">
            <Image
              src={"/home2.webp"}
              alt={"image1"}
              fill
              sizes="288px"
              className="object-cover object-center opacity-90"
            />
          </div> */}
          <div className="relative mt-10 w-60 h-52 rounded-xl overflow-hidden  bg-zinc-50 md:mt-16 md:h-96 md:w-96">
            <Image
              src={"/try2.png"}
              alt={"image1"}
              fill
              sizes="384px"
              className="object-cover object-center "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
