"use client";
import Image from "next/image";
import { useState } from "react";
import { faqData } from "@/data/faqdata";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function Faq() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle boolean for that index
    }));
  };

  return (
    <section className="w-full min-h-screen py-20  text-zinc-800">
      {/* LEFT - Image */}
      <div className="max-w-screen-xl mx-auto w-full h-full px-4  ">
        <Heading
          title="Customer's frequently asked questions"
          subtitle="Find quick answers to common questions about our services"
        />
        <div className="flex w-full h-full gap-18 max-sm:flex-col">
          <div className="w-1/2 h-96 max-sm:w-full">
            <div className="relative w-full rounded-md h-full overflow-hidden">
              <Image
                src="/faq.webp"
                alt="FAQ Illustration"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT - FAQ */}
          <div className="w-1/2 rounded-md shadow-md bg-gradient-to-b from-white to-gray-100 p-5 max-sm:w-full">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className=" pb-4">
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full text-left p-3 bg-white shadow-md rounded-lg "
                  >
                    <span className=" text-lg text-zinc-800">{faq.question}</span>
                    <i className={`ri-${openItems[index] ? 'subtract' : 'add'}-line text-xl text-zinc-600`}></i>
                  </button>
                  {openItems[index] && (
                    <div className="px-4 py-2">
                      <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className=" p-10 bg-zinc-100 rounded-xl mt-20">
        <div className="bg-white rounded-xl py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stop Thinking, Start Building</h2>
          <p className="text-zinc-600 mb-6">Transform your ideas into reality with our powerful solutions</p>
          <Button label="Get Started" link="/contact" />
        </div>
      </div>
      </div>
    </section>
  );
}
