import { useEffect, useState } from "react";

export default function PhrasesFacts({ onDone }) {
  const phrases = [
    "THIS IS THE AVERAGE PRIVATE SCREENTIME OF SWEDISH TEENAGERS TODAY.",
    "WE ARE NOT HERE TO WARN. WE ARE HERE TO ACT.",
    "AND THAT ACTION IS BACKPACK.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= phrases.length) {
      onDone?.();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentIndex, onDone]);

  return (
    <div className="flex justify-center items-center h-full w-full px-4">
      <div
        key={currentIndex} 
        className="text-2xl md:text-5xl text-center text-bold  text-amber-950 max-w-full min-h-[4.5rem] md:min-h-[6.5rem] sm:max-w-2xs md:max-w-2xl lg:max-w-3xl overflow-hidden transform scale-100 animate-zoomIn"
      >
        {phrases[currentIndex] || ""}
      </div>
    </div>
  );
}
