import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, columns } from "../data/footerdata";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 py-10 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-zinc-100 pb-10 gap-10">
          {/* Logo + About + Social */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="relative  w-40 h-12">
              <Image
                src="/footer-logo.webp"
                alt="Almasons Logo"
                fill
                sizes="160px"
                priority
                className="object-cover object-center"
              />
            </div>
            <p className="text-base md:text-lg w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>

            <div className="flex gap-4 mt-2">
              {socialLinks.map(({ name, href, iconClass }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-zinc-400/20 hover:scale-110 backdrop-blur-sm"
                >
                  <i className={`${iconClass} text-white text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 text-base">
            {columns.map(({ heading, items }) => (
              <div key={heading}>
                <h3 className="font-semibold mb-4">{heading}</h3>
                <ul className="space-y-2">
                  {items.map(({ label, href }) => (
                    <li
                      key={label}
                      className="hover:text-orange-400 cursor-pointer transition-colors"
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs gap-4 sm:gap-0">
          <div>© 2025 All rights reserved</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
