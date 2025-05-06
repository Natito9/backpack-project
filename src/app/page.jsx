import Hero from "@/components/hero/Hero";
import Mission from "@/components/mission/Mission";
import MeetEmmo from "@/components/meetEmmo/MeetEmmo";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Features from "@/components/features/features";
import Waitlist from "@/components/waitlist/waitlist";
import Contact from "@/components/contact/contact";
import CostumeHead from "@/components/head/CoustumeHead";

export default function Home() {
  return (
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
    <Footer/>
    </main>
    </>
  )
}