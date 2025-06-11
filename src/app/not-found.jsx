"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center text-zinc-800">
      
      <p className="text-lg md:text-xl font-medium max-w-md mb-3 text-zinc-600">
        Looks like you've wandered off the DigiCheck.
      </p>

      <p className="text-sm text-zinc-500 mb-8">
        The page you're looking for doesn’t exist or may have been renamed.
        Let’s get you back on track.
      </p>

      <button
        onClick={() => router.push("/")}
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:shadow-md transition"
        aria-label="Go back to home"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}
