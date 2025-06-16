"use client";
import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsClient(true);

      if (window.innerWidth < 768) {
        setShowCursor(false);
        return;
      }
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  if (!isClient || !showCursor) return null;
  return (
    <div
      className="fixed w-5 h-5 bg-zinc-300 rounded-full pointer-events-none  mix-blend-difference z-50"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  );
};

export default Cursor;
