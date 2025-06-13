"use client";
import { blogData } from "@/data/blogdata";
import HighlightCard from "@/components/HighlightCard";
import Heading from "@/components/Heading";

export default function Highlights() {
  return (
    <section className="w-full min-h-screen lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Heading
          title="Highlights"
          subtitle="What makes us stand out — at a glance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
          {blogData.map((item, index) => (
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
