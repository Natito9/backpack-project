"use client";
import Image from "next/image";
import Emmo from "./Emmo";
import {useState} from "react";
import Title from "./Title";
import ChatBubble from "./ChatBubble";
import SkipBtn from "./SkipBtn";
import ProgressBar from "./probar";
import Facts from "./Facts/Facts";
import {useEffect} from "react";

export default function Hero() {
  const [showFacts, setShowFacts] = useState(true);
  const [phase, setPhase] = useState("hidden");
  const [animationCompleteed, setAnimationCompleted] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(true);

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

  return (
    <section
      id="hero"
      className="relative  h-screen max-[500px] md:h-[100vh] w-full"
    >
      <SkipBtn
        onClick={() => {
          setPhase("done");
          setShowFacts(false);
        }}
      />

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

          <SkipBtn
            onClick={() => {
              setPhase("done");
              setShowFacts(false);
            }}
          />
          {!animationCompleteed && (
            <ProgressBar
              duration={20000}
              onComplete={handleAnimationComplete}
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
              className="h-auto [@media(max-height:675px)]:max-w-[70vh] lg:max-w-[70vh] md:max-w-[60vh]"
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
