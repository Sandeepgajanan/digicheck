import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonIcons } from "@/data/common/buttondata";
const Button = ({
  label,
  link,
  type = "button",
  onClick,
  color = "zinc-800",
}) => {
  const bgMap = {
    white: "bg-white text-zinc-800",
    "zinc-800": "bg-zinc-800 text-zinc-100",
  };

  const colorKey = color === "zinc-800" ? "zinc-800" : "white";
  const colorClass = bgMap[colorKey];

  const button = (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      className={`flex items-center justify-center gap-2 py-2 px-4 min-w-36  rounded-md  ${colorClass} border-none font-semibold text-sm shadow-md transition-all duration-200 active:scale-95 group h-
       `}
    >
      <span>{label}</span>
      <span
        className="ml-1 flex items-center transition-transform duration-200 group-hover:translate-x-2 group-hover:rotate-12
        max-md:ml-0.5"
      >
        <div className="relative w-4 h-6">
          <Image
            src={
              color === "white"
                ? buttonIcons.arrowBlack
                : buttonIcons.arrowWhite
            }
            alt="arrow"
            sizes="16px"
            fill
            priority
            className="obejct-cover"
          />
        </div>
      </span>
    </button>
  );

  return link ? (
    <Link href={link} className="inline-block">
      {button}
    </Link>
  ) : (
    button
  );
};

export default Button;
