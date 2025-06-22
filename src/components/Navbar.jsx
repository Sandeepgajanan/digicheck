"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const navItems = getData(language, "navItems");
  const navHeading = getData(language, "navHeading");
  const { ctaLabel, ctaLink } = navHeading;
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
      html.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      html.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }

    return () => {
      html.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [mobileOpen]);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0  box-border   w-full  z-40"
        role="banner"
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`w-full h-16 px-2 lg:px-6 flex items-center justify-between  transition-all duration-300 ${
            scrolled
              ? "bg-white/10 backdrop-blur-lg shadow-lg "
              : "bg-transparent backdrop-blur-md shadow  "
          }`}
        >
          {/* Left: Logo */}
          <div className="flex items-center hover:scale-105 transition-transform duration-200">
            <Link href="/" className="block" aria-label="Home">
              <Image
                src="/mainlogo/nav.webp"
                alt="Almasons Logo"
                width={120}
                height={40}
                className="w-16  lg:w-32"
                priority
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div
            className="hidden lg:flex items-center gap-4  lg:gap-12"
            role="menubar"
            aria-label="Main menu"
          >
            {navItems.map((item) => {
              return (
                <div
                  key={item.path}
                  className="relative flex items-center"
                  role="none"
                >
                  <Link
                    href={item.path}
                    className="px-1 py-0.5 font-medium transition-colors duration-200 text-sm sm:text-base text-zinc-800  group relative"
                    role="menuitem"
                    aria-label={item.label}
                  >
                    {item.label}
                    <div
                      className="h-[3px] bg-orange-400 w-0 group-hover:w-full transition-all duration-500 ease-in-out"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: Contact Button */}
          <div className="hidden lg:flex items-center gap-2 ">
            <LanguageDropdown />
            <Button label={ctaLabel} link={ctaLink} />
          </div>

          {/* mobile menu */}
          <div className="lg:hidden flex w-fit p-0.5 gap-2 ">
            <LanguageDropdown />
            <button
              onClick={toggleMenu}
              className="text-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 relative">
                {!mobileOpen ? (
                  <Image
                    alt="Open menu"
                    src={"/icons/menu-open.svg"}
                    fill
                    sizes=""
                    className="object-center"
                    aria-hidden="true"
                  />
                ) : (
                  <Image
                    alt="Close menu"
                    src={"/icons/close-line.svg"}
                    fill
                    sizes=""
                    className="object-center"
                    aria-hidden="true"
                  />
                )}
              </div>
            </button>
          </div>
        </nav>
      </header>
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed top-16 left-0 w-full  min-h-screen bg-white z-30 overflow-hidden flex flex-col items-center  gap-8 pt-8 "
          role="navigation"
          aria-label="Mobile menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-xl font-semibold text-zinc-800 py-2"
              onClick={() => setMobileOpen(false)}
              role="menuitem"
              aria-label={item.label}
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
};
export default Navbar;
