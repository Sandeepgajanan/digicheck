"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguagePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [country, setCountry] = useState("");
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const languageChoiceMade = localStorage.getItem("languageChoiceMade");

    if (!languageChoiceMade) {
      const spanishCountries = [
        "ES",
        "MX",
        "AR",
        "CO",
        "PE",
        "CL",
        "VE",
        "EC",
        "GT",
        "CU",
        "BO",
        "UY",
        "PY",
        "SV",
        "HN",
        "NI",
        "CR",
        "PA",
        "PR",
        "DO",
      ];

      (async () => {
        try {
          const res = await fetch("https://ipapi.co/json/");
          const data = await res.json();

          // For testing
          data.country_code = "MX";
          data.country_name = "Mexico";

          setCountry(data.country_name);

          if (
            spanishCountries.includes(data.country_code) &&
            language === "english"
          ) {
            setShowPopup(true);
          } else {
            localStorage.setItem("languageChoiceMade", "true");
          }
        } catch (error) {
          console.error("Error fetching location:", error);
          localStorage.setItem("languageChoiceMade", "true");
        }
      })();
    }
  }, [language]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("languageChoiceMade", "true");
    setShowPopup(false);
  };

  const handleClose = () => {
    localStorage.setItem("languageChoiceMade", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
    >
      <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <p className="mb-6">
          Parece que estás visitando desde {country}. ¿Quieres ver el sitio en{" "}
          <strong>español</strong>?
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <button
            onClick={() => handleLanguageChange("spanish")}
            className="w-full lg:w-auto px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            Cambiar a español
          </button>
          <button
            onClick={handleClose}
            className="w-full lg:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-bold rounded-md hover:bg-gray-300 transition-colors text-sm"
          >
            Continue in English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;
