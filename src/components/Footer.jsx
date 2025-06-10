import React from "react";
import Image from "next/image";
import { socialLinks, columns } from "../data/footerdata";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800 h-fit py-10 text-white">
      <div className="max-w-screen-xl mx-auto w-full h-full">
        <div className="flex justify-between border-b border-zinc-100 pb-10">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="relative bg-white w-40 h-12 border border-zinc-800 shadow-md">
              <Image
                src="/almasons-logo.webp"
                alt="Almasons Logo"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="text-lg  w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>

            <div className="flex gap-4 mt-2">
              {socialLinks.map(({ name, href, iconClass }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100"
                >
                  <i className={`${iconClass} text-zinc-700 text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="w-1/2 grid grid-cols-3 gap-8 text-lg ">
            {columns.map(({ heading, items }) => (
              <div key={heading}>
                <h3 className="font-semibold mb-4 ">{heading}</h3>
                <ul className="space-y-2">
                  {items.map(({ label, href }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2 hover:text-orange-400 cursor-pointer"
                    >
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex  justify-between items-center pt-8 text-xs">
          <div>© 2025 All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
