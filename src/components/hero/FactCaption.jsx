
"use client";
import { useEffect, useState } from "react";
import "animate.css";

export default function FactCaption({ phase, onDone }) {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    if (phase === "expanded") {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
      }, 1000); // Delay second caption
      setTimeout(() => {
        if (onDone) onDone();
      }, 9000); // Allow time for fade-in before calling onDone
    }
  }, [phase, onDone]);

  return (
    <div className="absolute bottom-20 w-full md:px-40 text-center space-y-4">
      {showFirst && (
        <p className="text-xl md:text-2xl font-semibold  drop-shadow-lg animate__animated animate__fadeInUp">
          This is how much time 88% of Swedish children aged 15-17 spend on private screens in a year* 
        </p>
      )}
      {showSecond && (
        <p className="text-lg md:text-xl font-medium drop-shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
         We at Backpack Studios are committed to preventing excessive screen time in children. Therefore, we created an app dedicated to integrating healthy screen habits at an early age. This app is named Backpack and is inhabited by its very own socialist.
        </p>
      )}
    </div>
  );
}

