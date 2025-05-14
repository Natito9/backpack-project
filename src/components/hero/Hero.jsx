"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Emmo from "./Emmo";
import Title from "./Title";
import ChatBubble from "./ChatBubble";
import SkipBtn from "./SkipBtn";
import ProgressBar from "./probar";
import Facts from "./Facts/Facts";

export default function Hero() {
  const [showFacts, setShowFacts] = useState(true);
  const [phase, setPhase] = useState("hidden");
  const [animationCompleteed, setAnimationCompleted] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [showSkipBtn, setShowSkipBtn] = useState(true); // Track the visibility of the SkipBtn

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
    setShowProgressBar(false);
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Run animation only when showFacts becomes false
    if (!showFacts) {
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
    }
  }, [showFacts]);

  // Function to hide the SkipBtn when clicked
  const handleSkipClick = () => {
    setPhase("done");
    setShowFacts(false);
    setShowSkipBtn(false); // Hide the SkipBtn immediately when clicked
  };

  return (
    <section
      id="hero"
      className="relative  h-screen max-[500px] md:h-[100vh] w-full"
    >
      {/* Skip Button */}
      {showSkipBtn && (
        <SkipBtn
          onClick={handleSkipClick} // Call the function to hide the button
        />
      )}

      <Title />

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

          {!animationCompleteed && (
            <ProgressBar
              duration={20000}
              onComplete={() => setAnimationCompleted(true)}
            />
          )}
        </>
      )}

      {!showFacts && (
        <>
          <div className="absolute inset-0 flex justify-center items-start md:mt-30 mt-25 p-5">
            <Image
              src="/assets/images/hero-logo.png"
              alt="Backpack Studios logo"
              width={600}
              height={200}
              className="h-auto"
            />
          </div>

          <section
            className={`absolute inset-0 flex flex-col items-center justify-end pb-[10vh] z-10 pointer-events-none
            transition-all duration-[3500ms] ease-out
            ${animate ? "opacity-100" : "opacity-0"}
            `}
          >
            <ChatBubble />
            <Emmo />
          </section>
        </>
      )}
    </section>
  );
}
