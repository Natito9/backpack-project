
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
      }, 8000);
    }
  }, [phase, onDone]);

  return (
    <div className="relative w-full h-full md:px-40 text-center">
      {showFirst && (
        <p className=" absolute top-30 text-xl md:text-2xl font-semibold left-1/2 transform -translate-x-1/2 drop-shadow-lg animate__animated animate__fadeInUp">
          This is how much time 88% of Swedish children aged 15-17 spend on private screens in a year* 
        </p>
      )}
      {showSecond && (
      
        <p className="absolute bottom-20 text-lg md:text-xl font-medium drop-shadow-lg  left-1/2 transform -translate-x-1/2 animate__animated animate__fadeInUp ">
         We at Backpack Studios are committed to preventing excessive screen time in children. Therefore, we created an app dedicated to integrating healthy screen habits at an early age. This app is named Backpack and is inhabited by its very own socialist.
        </p>
      )}
    </div>
  );
}

