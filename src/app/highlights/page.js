"use client";
import HighlightCard from "@/components/HighlightCard";
import Heading from "@/components/Heading";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

export default function Highlights() {
  const { language } = useLanguage();
  const highlightHeading = getData(language, "highlightHeading");
  const highlightData = getData(language, "highlightData");
  const { title, subtitle } = highlightHeading;
  return (
    <section className="w-full min-h-screen lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-18 place-items-center ">
          {highlightData?.map((item, index) => (
            <HighlightCard
              key={index}
              title={item.title}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
