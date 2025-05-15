import { useEffect, useState, useRef } from "react";
import "animate.css";

export default function PhrasesFacts({ onDone }) {
  const phrases = [
    "This is the average private screentime of time Swedish teenagers today.",
    "We are not here to warn. We are here to act.",
    "And that action is Backpack.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [isVisible, setIsVisible] = useState(false); // controls visibility
  const phraseRef = useRef(null);

  useEffect(() => {
    if (currentIndex >= phrases.length) {
      onDone?.();
      return;
    }

    // Step 1: hide text immediately
    setIsVisible(false);
    setAnimationClass("");

    // Step 2: after short delay, show text and apply zoomInGentle animation
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
      setAnimationClass("animate__animated animate__slower animate__zoomInGentle");
    }, 50);

    const el = phraseRef.current;

    // Handler for animationend events
    const handleAnimationEnd = (e) => {
      if (e.animationName.includes("zoomInGentle")) {
        // After zoomIn ends, start fadeOut
        setAnimationClass("animate__animated animate__fadeOut");
      } else if (e.animationName.includes("fadeOut")) {
        // After fadeOut ends, move to next phrase
        setCurrentIndex((prev) => prev + 1);
      }
    };

    if (el) {
      el.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      clearTimeout(showTimeout);
      if (el) {
        el.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [currentIndex, onDone]);

  if (currentIndex >= phrases.length) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-full w-full px-4">
      <div
        key={currentIndex}
        ref={phraseRef}
        className={`text-3xl md:text-5xl text-center font-bold text-neutral-600 max-w-full min-h-[4.5rem] md:min-h-[6.5rem] sm:max-w-2xs md:max-w-2xl lg:max-w-3xl ${animationClass}`}
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {phrases[currentIndex]}
      </div>
    </div>
  );
}
