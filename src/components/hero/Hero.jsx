"use client";
import Image from "next/image";
import Emmo from "./Emmo";
import {useState} from "react";
import Title from "./Title";
import FactCards from "./FactCards";
import ChatBubble from "./ChatBubble";
import FactCaption from "./FactCaption";
import SkipBtn from "./SkipBtn";


export default function Hero() {
  const [showFacts, setShowFacts] = useState(true);
  const [phase, setPhase] = useState("hidden");

  return (
    <section
      id="hero"
      className="relative  h-screen max-[500px] md:h-[100vh] w-full"
    >
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

        <FactCards phase={phase} setPhase={setPhase} onDone={() => setShowFacts(false)} />
        <FactCaption phase={phase} onDone={() => {
  setPhase("done");
  setShowFacts(false);
}} />
      <SkipBtn
            onClick={() => {

              setPhase("done");
              setShowFacts(false);
            }}
          />
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

          <div className="flex flex-col items-center ">
            <ChatBubble />
            <Emmo />
          </div>
        </>
      )}
    </section>
  );
}
