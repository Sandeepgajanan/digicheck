"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-200 flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        className="text-9xl font-extrabold text-purple-700 mb-6 select-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl font-semibold text-purple-800 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Ooops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.button
        className="bg-purple-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:bg-purple-700 transition"
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Go back to Home"
      >
        Go Back Home
      </motion.button>
    </div>
  );
}
