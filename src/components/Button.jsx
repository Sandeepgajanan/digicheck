import React from "react";
import Link from "next/link";

const Button = ({ label, link }) => {
  return (
    <Link href={link} className="inline-block">
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 font-[MyFont] text-zinc-100 border-none font-semibold text-sm shadow-md transition-all duration-200 active:scale-95 group
        max-md:px-3 max-md:py-1.5 max-md:text-xs max-md:rounded-lg
        max-sm:gap-1 max-sm:px-2 max-sm:py-1"
      >
        <span>{label}</span>
        <span
          className="ml-1 flex items-center transition-transform duration-200 group-hover:translate-x-2 group-hover:rotate-12
        max-md:ml-0.5"
        >
          <i
            className="ri-arrow-right-line text-white text-lg
          max-md:text-base max-sm:text-sm"
          />
        </span>
      </button>
    </Link>
  );
};

export default Button;
