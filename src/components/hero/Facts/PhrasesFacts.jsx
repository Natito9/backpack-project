import { useEffect, useState } from "react";
import "animate.css";

export default function PhrasesFacts({ onDone }) {
  const phrases = [
    "THIS IS THE AVERAGE PRIVATE SCREENTIME OF SWEDISH TEENAGERS TODAY.",
    "WE ARE NOT HERE TO WARN. WE ARE HERE TO ACT.",
    "AND THAT ACTION IS BACKPACK.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomIn, setZoomIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (currentIndex >= phrases.length) {
      onDone?.();
      return;
    }

    setFadeOut(false);
    setZoomIn(true);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2800);

    const advance = setTimeout(() => {
      setZoomIn(false);
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(advance);
    };
  }, [currentIndex, onDone]);

  return (
    <div className="flex justify-center items-center h-full w-full px-4">
      <div
        key={currentIndex}
        className={`text-2xl md:text-5xl text-center font-bold text-amber-950 max-w-full min-h-[4.5rem] md:min-h-[6.5rem] sm:max-w-2xs md:max-w-2xl lg:max-w-3xl 
          overflow-hidden transform transition-transform duration-[3000ms] ease-out
          ${zoomIn ? "scale-105" : "scale-100"}
          ${fadeOut ? "animate__animated animate__fadeOut" : ""}
        `}
      >
        {phrases[currentIndex] || ""}
      </div>
    </div>
  );
}
