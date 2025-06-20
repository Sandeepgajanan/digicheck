"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

export default function Landing() {
  const { language } = useLanguage();
  const landingPageContent = getData(language, "landingPageContent");
  const { badge, title, subtitle, ctaLabel, ctaLink, image } =
    landingPageContent;
  return (
    <main className="relative w-full h-fit md:min-h-screen text-zinc-900 px-2 md:px-8 mt-16 overflow-hidden">
      {/* Gradient Background with Polygon Shape */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r   from-[#fdf2f2] via-[#ffe9e3] to-[#CFC3EE] clip-diagonal" />

      <section className="w-full h-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col w-full h-full space-y-6 pt-5 lg:w-1/2 lg:pt-20">
          <h2 className="bg-white w-fit mx-auto lg:mx-0 shadow-2xl p-1 rounded-xl md:w-60 text-center text-nowrap">
            <span className="text-xs uppercase text-zinc-700">{badge}</span>
          </h2>
          <h1 className="text-2xl leading-none text-center  uppercase font-extrabold  text-nowrap lg:text-5xl lg:leading-14 lg:text-left font-[Myfont] ">
            {title.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="capitalize text-center lg:text-left text-zinc-600">
            {subtitle}
          </p>
          <div className="w-full flex justify-center lg:mx-0 lg:justify-start">
            <Button label={ctaLabel} link={ctaLink} />
          </div>
        </div>

        <div className="flex-1 items-center flex justify-center">
          <div className="relative mt-10 w-60 h-52 rounded-xl overflow-hidden bg-zinc-50 md:mt-16 md:h-96 md:w-96 ">
            <Image
              src={image.src}
              alt={image.alt}
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
