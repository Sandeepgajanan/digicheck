"use client";
import Brand from "@/app/brand/page";
import Faq from "@/app/faq/page";
import Feature from "@/app/feature/page";
import Highlights from "@/app/highlights/page";
import Landing from "@/app/landing/page";
import Whyus from "@/app/whyus/page";
import MiniPrice from "./miniprice/page";
import LiveProduct from "@/components/LiveProduct";

export default function Home() {
  return (
    <main className="min-h-screen" role="main" aria-label="Main content">
      <Landing />
      <Brand />
      <LiveProduct/>
      <Feature />
      <Whyus />
      <Highlights />
      <MiniPrice />
      <Faq />
    </main>
  );
}
