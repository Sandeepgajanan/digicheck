"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "../data/navdata";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 ">
        <nav
          className={`max-w-screen-xl mx-auto w-full h-16 px-6 flex items-center justify-between  transition-all duration-300 ${
            scrolled
              ? "bg-white/30 backdrop-blur-lg shadow-lg "
              : "bg-transparent backdrop-blur-md shadow  "
          }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center hover:scale-105 transition-transform duration-200">
            <Link href="/" className="block">
              <Image
                src="/mainlogo/nav.webp"
                alt="Almasons Logo"
                width={120}
                height={40}
                className="w-20 sm:w-24 md:w-28 lg:w-32"
                priority
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-4  lg:gap-12">
            {navItems.map((item) => {
              return (
                <div key={item.path} className="relative flex items-center">
                  <Link
                    href={item.path}
                    className="px-1 py-0.5 font-medium transition-colors duration-200 text-sm sm:text-base text-zinc-800  group relative ${
                   
                "
                  >
                    {item.label}
                    <div className=" h-[3px] bg-orange-400 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: Contact Button */}
          <div className="hidden lg:flex items-center">
            <Button label="Contact" link="/contact" />
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <Image
                alt="menu"
                  src={"/icons/menu-open.svg"}
                  fill
                  sizes=""
                  className="object-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>
      {mobileOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-30 overflow-hidden flex flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-xl font-semibold text-zinc-800"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            label="Contact"
            link="/contact"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </>
  );
}
