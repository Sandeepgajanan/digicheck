"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data/navdata";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
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

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 ">
      <nav
        className={`max-w-screen-xl mx-auto w-full h-16 px-4 flex items-center justify-between  transition-all duration-300 ${
          scrolled
            ? "bg-white/30 backdrop-blur-lg shadow-lg "
            : "bg-transparent backdrop-blur-md shadow "
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center hover:scale-105 transition-transform duration-200">
          <Link href="/" className="block">
            <Image
              src="/almasons-logo.webp"
              alt="Almasons Logo"
              width={120}
              height={40}
              className="w-20 sm:w-24 md:w-28 lg:w-32"
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
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
        <div className="hidden md:flex items-center">
          <Button label="Contact" link="/contact" />
        </div>

       
      </nav>

 
    </header>
  );
}
