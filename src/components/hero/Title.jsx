"use client";
import { useEffect } from "react";
import Image from "next/image";
import "animate.css";

export default function Title({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000); // 1s delay + 1s zoomOut
    return () => clearTimeout(timer);
  }, [onDone]);
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
      <div
        className="
            text-orange-600
            text-4xl md:text-8xl
            font-bold
            animate__animated
            animate__zoomOut
            animate__delay-1s
            animate__slow
            font-[Impact,Charcoal,sans-serif]
            leading-tight
          "
      >
        <span className="block">Welcome to</span>
        <span className="block">Webpack Studios</span>
      </div>
    </div>
  );
}
