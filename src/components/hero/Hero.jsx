"use client";
import Image from "next/image";
import { useState } from "react";
import Title from "./Title";
import ChatBubble from "./ChatBubble";
import SkipBtn from "./SkipBtn";
import Facts from "./Facts";

export default function Hero() {
  const [showFacts, setShowFacts] = useState(true);
  const [phase, setPhase] = useState("hidden");

  return (
    <section
      id="hero"
      className="relative  h-screen max-[500px] md:h-[100vh] w-full"
   
    >
                      <Facts />
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

          {/* <div className="absolute bottom-4 right-4  md:bottom-5 md:right-30 lg:right-40 p-4">
            <Image
              src="/assets/images/hero-emmo.png"
              alt="Emmo character"
              priority
              width={300}
              height={300}
              className="w-auto h-auto" 
            />
          </div> */}
          {/* <ChatBubble />  */}
        
        </>
      )}
    </section>
  );
}
