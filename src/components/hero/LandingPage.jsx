"use client";
import { useEffect } from "react";
import Image from "next/image";
import "animate.css";

export default function LandingPage({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000); // 1s delay + 1s zoomOut
    return () => clearTimeout(timer);
  }, [onDone]);
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/assets/images/hero-background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="
          text-black
          text-4xl md:text-6xl
          font-bold
          animate__animated
          animate__zoomOut
          animate__delay-1s
          animate__slow
        "
        >
          Welcome to Webpack Studios
        </h1>
      </div>
    </section>
  );
}
