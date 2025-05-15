import { useEffect, useState } from "react";
import "animate.css";

export default function PhrasesFacts({ onDone }) {
  const phrases = [
    "This is the average private screentime of time Swedish teenagers today.",
    "We are not here to warn. We are here to act.",
    "And that action is Backpack.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (currentIndex >= phrases.length) {
      // Do not render anything once done
      onDone?.();
      return;
    }

    setShowText(false); // Hide text

    const applyAnimation = setTimeout(() => {
      void document.body.offsetHeight; // Force reflow
      setAnimationClass(
        "animate__animated animate__slower animate__zoomInGentle"
      );
      setShowText(true);
    }, 50);

    const fadeTimer = setTimeout(() => {
      setAnimationClass("animate__animated animate__fadeOut");
    }, 2800);

    const advance = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => {
      clearTimeout(applyAnimation);
      clearTimeout(fadeTimer);
      clearTimeout(advance);
    };
  }, [currentIndex, onDone]);

 
  if (currentIndex >= phrases.length) {
    // Let the final fadeOut complete before unmounting
    const doneTimer = setTimeout(() => {
      onDone?.();
    }, 200); // 200ms delay prevents jump/glitch
  
    return () => clearTimeout(doneTimer);
  }

  return (
    <div className="flex justify-center items-center h-full w-full px-4">
      <div
        key={currentIndex}
        className={`text-3xl md:text-5xl text-center text-bold text-neutral-600 max-w-full min-h-[4.5rem] md:min-h-[6.5rem] sm:max-w-2xs md:max-w-2xl lg:max-w-3xl ${animationClass}`}
      >
        {showText ? phrases[currentIndex] : ""}
      </div>
    </div>
  )
}