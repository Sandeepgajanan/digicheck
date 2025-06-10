"use client";
import Brand from "@/app/brand/page";
import Faq from "@/app/faq/page";
import Feature from "@/app/feature/page";
import Highlights from "@/app/highlights/page";
import Landing from "@/app/landing/page";
import Whyus from "@/app/whyus/page";
import MiniPrice from "./miniprice/page";

export default function Home() {
  return (
    <main className="min-h-screen max-sm:px-6">
      <Landing />
      <Brand />
      <Feature />
      <Whyus />
      <Highlights />
      <MiniPrice />
      <Faq />
    </main>
  );
}
