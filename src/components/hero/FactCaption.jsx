
"use client";
import { useEffect, useState } from "react";
import "animate.css";

export default function FactCaption({ phase, onDone }) {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [hideAll, setHideAll] = useState(false);

  useEffect(() => {
    if (phase === "expanded") {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
      }, 500); // Delay second caption

      setTimeout(() => setHideAll(true), 6000);
      setTimeout(() => {
        if (onDone) onDone();
      }, 8000);
    }
  }, [phase, onDone]);

  return (
    <div className="relative w-full h-full md:px-20 text-center">
      {showFirst && (
       <p
       className={`absolute text-white top-30 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl font-bold drop-shadow-lg animate__animated ${
         hideAll ? "animate__fadeOutDown" : "animate__fadeInUp"
       }`}
     >
          This is how much time 88% of Swedish children aged 15-17 spend on private screens in a year* 
        </p>
      )}
      {showSecond && (
      
      <p
      className={`absolute text-white bottom-20 left-1/2 transform md:-translate-x-1/2 text-lg md:text-xl font-medium drop-shadow-lg animate__animated ${
        hideAll ? "animate__fadeOutDown" : "animate__fadeInUp animate__delay-1s"
      }`}
    >
         We at Backpack Studios are committed to preventing excessive screen time in children. Therefore, we created an app dedicated to integrating healthy screen habits at an early age. This app is named Backpack and is inhabited by its very own socialist.
        </p>
      )}
    </div>
  );
}

