"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-14 lg:w-18 items-center justify-between px-2 lg:px-3 py-1 lg:py-2.5 font-bold text-zinc-700 hover:text-zinc-900 transition-colors duration-200 border border-zinc-300 rounded-md"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-xs lg:text-xs">
          {language === "english" ? "EN" : "SP"}
        </span>
        <Image src="/icons/arrow-down.svg" alt="arrow" width={16} height={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-zinc-300 rounded-md shadow-lg z-50">
          <button
            onClick={() => handleLanguageChange("english")}
            className={`w-full text-center px-4 py-2 text-sm hover:bg-zinc-100 transition-colors duration-200 ${
              language === "english" ? "bg-orange-50 text-orange-600" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("spanish")}
            className={`w-full text-center px-4 py-2 text-sm hover:bg-zinc-100 transition-colors duration-200 ${
              language === "spanish" ? "bg-orange-50 text-orange-600" : ""
            }`}
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
};
export default LanguageDropdown;
