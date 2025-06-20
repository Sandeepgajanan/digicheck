"use client";

import { useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Brand from "../brand/page";
import MiniPrice from "../miniprice/page";
import Faq from "../faq/page";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

export default function Contact() {
  const { language } = useLanguage();
  const contactHeading = getData(language, "contactHeading");
  const contactData = getData(language, "contactData");
  const formLabels = getData(language, "formLabels");
  const subjectOptions = getData(language, "subjectOptions");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { contactTitle, contactSubtitle, contactInfo, ctaLabel, socialLinks } =
    contactData;
  const { title, subtitle } = contactHeading;
  return (
    <>
      <section className="w-full min-h-screen lg:py-20 py-5 ">
        <div className="max-w-screen-xl mx-auto w-full h-full px-4">
          <Heading title={title} subtitle={subtitle} />
          <div className="flex flex-col-reverse lg:flex-row gap-2 px-6 w-full ">
            {/* Contact Information */}

            <div className="rounded-2xl bg-zinc-50 shadow-lg px-1 lg:px-4 py-2   w-full lg:w-1/3">
              <div className="bg-gray-700 text-zinc-100 rounded-2xl p-3 lg:p-10 flex flex-col h-full justify-between">
                {/* Heading */}
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-bold ">{contactTitle}</h3>
                  <p className="text-zinc-300 mb-4 lg:mb-0">
                    {contactSubtitle}
                  </p>
                </div>

                {/* Contact List */}
                <div className="space-y-2 lg:space-y-8">
                  {contactInfo?.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 relative">
                        <Image
                          src={item.img}
                          alt={item}
                          fill
                          sizes="24px"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <a
                          href={item.href}
                          className="text-zinc-300 hover:underline hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4 lg:mt-0">
                  {socialLinks.map(({ name, href, img }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full 
                     bg-zinc-900  ring-1 ring-zinc-700/50 
                     transition-all duration-300 
                     ease-in-out shadow-md 
                      backdrop-blur-sm group"
                    >
                      <div className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={img}
                          alt={name}
                          fill
                          sizes="24px"
                          priority
                          className="object-contain object-center"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-zinc-50 shadow-lg py-10 px-4 flex-1">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {formLabels.firstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-b border-zinc-300 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 "
                    >
                      {formLabels.lastName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-b border-zinc-300 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 "
                    >
                      {formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-b border-zinc-300 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {formLabels.phone}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-b border-zinc-300 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-8 ">
                    {formLabels.subject}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {subjectOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          value={option}
                          checked={formData.subject === option}
                          onChange={handleChange}
                          className="accent-blue-600"
                          required
                        />
                        <span className="text-gray-700 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    {formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-b border-zinc-300 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <div className="w-full flex justify-end px-2 ">
                  <Button label={ctaLabel} type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Brand />
      <MiniPrice />
      <Faq />
    </>
  );
}
