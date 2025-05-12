"use client"

import { useState } from "react";
import Hero from "@/components/hero/Hero";
import Mission from "@/components/mission/Mission";
import MeetEmmo from "@/components/meetEmmo/MeetEmmo";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Features from "@/components/features/features";
import Waitlist from "@/components/waitlist/waitlist";
import Contact from "@/components/contact/contact";
import CostumeHead from "@/components/head/CoustumeHead";
import UnderConstruction from "@/components/UnderConstruction/UnderConstruction";

export default function Home() {
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const handleShowUnderConstruction = () => setShowUnderConstruction(true);
  const handleGoBack = () => setShowUnderConstruction(false);

  return (
    <>
     {showUnderConstruction ? (
        <UnderConstruction onGoBack={handleGoBack} />
      ) : (
        <>
    <CostumeHead />
    <main>
    <Navbar/>
    <Hero/>
    <Mission/>
    <Features />
    <MeetEmmo />
    <Waitlist />
    <Contact />
     <Footer onShowUnderConstruction={handleShowUnderConstruction} />
    </main>
    </>
    )}
    </>
  )
}