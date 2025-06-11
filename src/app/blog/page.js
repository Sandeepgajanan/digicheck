"use client";

import Highlights from "../highlights/page";
import WhyChooseUs from "../whyus/page";
import MiniPrice from "../miniprice/page";
import Faq from "../faq/page";

export default function Blog() {
  return (
    <section className="w-full min-h-screen py-10">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Highlights />
        <WhyChooseUs />
        <MiniPrice />
        <Faq />
      </div>
    </section>
  );
}
