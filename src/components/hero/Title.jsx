"use client";
import { useEffect, useState } from "react";
import "animate.css";

export default function Title({ onDone = () => {} }) {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);

      if (typeof onDone === "function") {
        onDone(); // notify parent
      }
    }, 2000); // 1s delay + 1s animation

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {showImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/images/hero-logo.png"
            alt="Hero Logo"
            className="
              w-[85vw] 
              sm:w-[60vw]
              md:w-[70vw]
              max-w-[600px]
              animate__animated
              animate__zoomOut
              animate__delay-1s
              animate__slow
              h-auto
            "
          />
        </div>
      )}
    </div>
  );
}
