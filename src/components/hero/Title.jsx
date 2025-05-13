"use client";
import { useEffect, useState } from "react";
import "animate.css";

export default function Title({ onDone = () => {} }) {
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlur(false); // trigger blur fade-out

      if (typeof onDone === "function") {
        onDone(); // notify parent
      }
    }, 2000); // 1s delay + 1s animation

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      <div
        className={`absolute inset-0 bg-black/30 transition-all duration-700 ease-in ${
          showBlur
            ? "backdrop-blur-md opacity-100"
            : "backdrop-blur-0 opacity-0"
        }`}
      />

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div
          className="
            text-black
            text-4xl md:text-8xl
            font-bold
            animate__animated animate__zoomOut animate__delay-1s animate__slow
            font-[Impact,Charcoal,sans-serif]
            leading-tight
          "
        >
          <span className="block">Welcome to</span>
          <span className="block">Backpack Studios</span>
        </div>
      </div>
    </div>
  );
}
