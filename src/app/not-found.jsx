"use client";

import Button from "@/components/Button";
import { notFoundData } from "@/data/notfounddata";

export default function NotFound() {
  const { title, subtitle, description, ctaLabel, ctaLink } = notFoundData;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center text-zinc-800">
      <p className="text-lg md:text-xl font-medium max-w-md mb-3 text-zinc-600">
        {subtitle}
      </p>

      <p className="text-sm text-zinc-500 mb-8">{description}</p>

      <Button label={ctaLabel} link={ctaLink} aria-label="Go back to home" />
    </div>
  );
}
