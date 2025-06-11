import React from "react";
import Link from "next/link";

const Button = ({ label, link, color = "zinc-800" }) => {
  return (
    <Link href={link} className="inline-block">
      <button
        type="button"
        className={`flex items-center justify-center gap-2 py-2 px-4 min-w-36  rounded-md bg-${color}  ${
          color === "white" ? "text-zinc-800" : "text-zinc-100"
        } border-none font-semibold text-sm shadow-md transition-all duration-200 active:scale-95 group
       `}
      >
        <span>{label}</span>
        <span
          className="ml-1 flex items-center transition-transform duration-200 group-hover:translate-x-2 group-hover:rotate-12
        max-md:ml-0.5"
        >
          <i
            className={`ri-arrow-right-line ${
              color === "white" ? "text-zinc-800" : "text-white"
            } ri-sm  max-md:text-base max-sm:text-sm`}
          />
        </span>
      </button>
    </Link>
  );
};

export default Button;
