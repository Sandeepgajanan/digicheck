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
    <header className="fixed top-0 left-0 w-full z-40">
      <nav
        className={`max-w-screen-xl mx-auto w-full h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/30 backdrop-blur-lg shadow-lg "
            : "bg-white shadow-md"
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 flex items-center justify-center"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {mobileOpen ? (
            <i className="ri-close-line text-2xl sm:text-3xl"></i>
          ) : (
            <i className="ri-menu-line text-2xl sm:text-3xl"></i>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 sm:py-4 border-b border-zinc-100">
            <Link href="/" className="block" onClick={toggleMenu}>
              <Image
                src="/almasons-logo.webp"
                alt="Almasons Logo"
                width={120}
                height={40}
                className="w-20 sm:w-24 md:w-28"
                priority
              />
            </Link>
            <button
              className="p-2"
              aria-label="Close menu"
              onClick={toggleMenu}
            >
              <i className="ri-close-line text-2xl sm:text-3xl"></i>
            </button>
          </div>
          <div className="flex flex-col gap-2 px-4 sm:px-6 py-4 sm:py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block w-full px-2 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 hover:scale-105 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-zinc-800 hover:bg-zinc-100"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4">
              <Button label="Contact" link="/contact" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
