"use client";

import { useState } from "react";
import Image from "next/image";
import Emmo from "./Emmo";
import Title from "./Title";
import ChatBubble from "./ChatBubble";
import ProgressBar from "./probar";
import Facts from "./Facts/Facts";

export default function Hero() {
  const [showFacts, setShowFacts] = useState(true);
  const [showSkipBtn, setShowSkipBtn] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSkipClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowSkipBtn(false);
      setShowFacts(false);
    }, 300); // match fade duration
  };

  return (
    <section
      id="hero"
      className="relative h-screen max-[500px] md:h-[100vh] w-full"
    >
      {/* Inline Skip Button with fade-out transition */}
      {showSkipBtn && (
        <button
          onClick={handleSkipClick}
          className={`fixed bottom-6 right-20 z-50 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition-opacity duration-300 ${
            isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Skip Facts"
        >
          Skip
        </button>
      )}

      {showFacts && <Title />}

      <Image
        src="/assets/images/hero-background.jpg"
        alt="Background"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center -z-10"
      />

      {showFacts && (
        <>
          <Facts onDone={() => setShowFacts(false)} />
          <ProgressBar duration={23000} />
        </>
      )}

      {!showFacts && (
        <>
          <div className="absolute inset-0 flex justify-center items-start mt-30 p-5 z-20 animate__animated animate__fadeIn animate__slow">
            <div className="w-[300px] md:w-[400px]">
              <Image
                src="/assets/images/hero-logo.png"
                alt="Backpack Studios logo"
                width={600}
                height={200}
                priority
                className="w-full h-auto transition-opacity duration-500"
              />
            </div>
          </div>
          <ChatBubble />
          <Emmo />
        </>
      )}
    </section>
  );
}
