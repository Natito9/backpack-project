'use client'
import Image from "next/image";
import "animate.css";

export default function Hero() {
  return (
    <section id="landingPage" className="relative h-screen w-full">
      <Image
        src="/assets/images/hero-background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="absolute inset-0 flex justify-center items-start mt-24 p-5">
        <div className="animate__animated animate__fadeOut animate__delay-2s animate__slow">
          <Image
            src="/assets/images/hero-logo.png"
            alt="Backpack Studios logo"
            width={600}
            height={200}
            className="h-auto"
          />
        </div>
      </div>
    </section>
  );
}
