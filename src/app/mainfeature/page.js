"use client";
import Brand from "../brand/page";
import MiniPrice from "../miniprice/page";
import Faq from "../faq/page";
import Feature from "../feature/page";

export default function mainFeature() {
  return (
    <section className="w-full min-h-screen  text-zinc-800">
      <div className="max-w-screen-xl mx-auto w-full h-full px-4">
        <Feature />
        <Brand />
        <MiniPrice />
        <Faq />
      </div>
    </section>
  );
}
