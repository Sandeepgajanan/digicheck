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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    if (mobileOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      html.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 ">
        <nav
          className={`max-w-screen-xl mx-auto w-full h-16  px-4 lg:px-6 flex items-center justify-between  transition-all duration-300 ${
            scrolled
              ? "bg-white/10 backdrop-blur-lg shadow-lg "
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
                className="w-16  lg:w-32"
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
                    className="px-1 py-0.5 font-medium transition-colors duration-200 text-sm sm:text-base text-zinc-800  group relative "
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
          <div className="lg:hidden pr-4">
            <button
              onClick={toggleMenu}
              className="text-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                {!mobileOpen ? (
                  <Image
                    alt="menu"
                    src={"/icons/menu-open.svg"}
                    fill
                    sizes=""
                    className="object-center"
                  />
                ) : (
                  <Image
                    alt="menu"
                    src={"/icons/close-line.svg"}
                    fill
                    sizes=""
                    className="object-center"
                  />
                )}
              </div>
            </button>
          </div>
        </nav>
      </header>
      {mobileOpen && (
        <div className="fixed top-16 left-0 w-full min-h-screen bg-white z-30 overflow-hidden flex flex-col items-center justify-center gap-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-xl font-semibold text-zinc-800 py-2"
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
