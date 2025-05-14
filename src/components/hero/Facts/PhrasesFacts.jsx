import { useEffect, useState } from "react";
import "animate.css";

export default function PhrasesFacts({ onDone }) {
  const phrases = [
    "This is the average private screentime of time Swedish teenagers today.",
    "We are not here to warn. We are here to act.",
    "And that action is Backpack.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate__zoomIn");

  useEffect(() => {
    if (currentIndex >= phrases.length) {
      onDone?.();
      return;
    }

    // Start with zoomIn
    setAnimationClass("animate__animated animate__slower animate__zoomInGentle");

    // Trigger fadeOut after a bit
    const fadeTimer = setTimeout(() => {
      setAnimationClass("animate__animated animate__fadeOut");
    }, 2800);

    // Advance phrase
    const advance = setTimeout(() => {
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
        className={`text-2xl md:text-5xl text-center font-bold text-amber-950 max-w-full min-h-[4.5rem] md:min-h-[6.5rem] sm:max-w-2xs md:max-w-2xl lg:max-w-3xl overflow-hidden ${animationClass}`}
      >
        {phrases[currentIndex] || ""}
      </div>
    </div>
  );
}
