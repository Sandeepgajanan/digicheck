import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Offline() {
  const [dots, setDots] = useState(1);

  // Animate dots in "Checking connection."
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d === 3 ? 1 : d + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-slate-100 text-slate-900 w-full h-screen flex flex-col items-center justify-center p-5 relative overflow-hidden">
      {/* Light floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-slate-400 rounded-full opacity-30"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        🛸 No Internet
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl mb-2"
      >
        You're offline... floating in space 🌟
      </motion.p>

      <motion.p
        className="italic text-slate-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Checking connection{".".repeat(dots)}
      </motion.p>
    </div>
  );
}
