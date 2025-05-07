import Hero from "@/app/hero/page";
import Mission from "@/app/mission/page";
import MeetEmmo from "@/app/meetEmmo/page";
import Navbar from "@/app/navbar/page";
import Footer from "@/app/footer/page";
import Features from "@/app/features/page";
import Waitlist from "@/app/waitlist/page";
import Contact from "@/app/contact/page";
import CostumeHead from "@/app/head/page";

export default function Home() {
  return (
    <>
    <CostumeHead />
    <main>
    <Navbar/>
    <section id="hero"> <Hero/> </section> 
    <section id="mission"> <Mission/> </section>
    <section id="features"> <Features /> </section>
    <section id="meetEmmo"> <MeetEmmo /> </section>
    <section id="waitlist"> <Waitlist /> </section>
    <section id="contact"> <Contact /> </section>
    <Footer/>
    </main>
    </>
  )
}