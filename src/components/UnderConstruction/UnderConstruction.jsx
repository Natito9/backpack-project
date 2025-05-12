"use client";
import Image from "next/image";

export default function UnderConstruction({ onGoBack }) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/hero-background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-30 -z-10"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">
        {/* Logo */}
        <div className="w-full flex justify-center mb-8">
          <Image
            src="/assets/images/hero-logo.png"
            alt="Backpack Studios logo"
            width={600}
            height={200}
            className="h-auto w-full max-w-[400px] md:max-w-[600px]"
            priority
          />
        </div>
        {/* Title */}
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 text-center flex items-center gap-2">
          <span role="img" aria-label="construction">🚧</span>
          We're Under Construction
          <span role="img" aria-label="construction">🚧</span>
        </h1>
        {/* Description */}
        <p className="text-gray-200 text-lg md:text-xl mb-8 text-center">
          Our site is getting a glow-up! Stay tuned, exciting things are on the way.
        </p>
        {/* Go Back Button */}
        <button
          onClick={onGoBack}
          className="bg-white/90 hover:bg-white text-black font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-200"
        >
          Go Back
        </button>
      </div>
    </section>
  );
}
