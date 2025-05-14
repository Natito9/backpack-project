"use client";
import Image from "next/image";
import { useState } from "react";

export default function Mission() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="mission"
      className="flex flex-col justify-center items-center py-10 px-4 md:py-20"
    >
      <h2 className="text-(length:--subtitle-font-size) leading-(--subtitle-line-height)  pb-7">
        Our Mission
      </h2>

      <p className="max-w-[800px] text-justify pb-5">
        Parenting in the digital age is tough. We want to guide our kids – but
        end up in conflict, becoming screen police instead of just being
        present. Algorithms are smart, and we're always one step behind.
      </p>

      <p className="max-w-[800px] text-justify pb-12">
        Backpack is here to change that. A helping hand on the phone, right in
        the moment – gently nudging, setting boundaries, and supporting healthy
        choices. So parents can focus on what really matters: strong, loving
        relationships.
      </p>

      <div className="flex items-center justify-center gap-10 md:gap-20">
        {/* Healthy */}
        <div className="flex flex-col items-center">
          <div
            onClick={() => handleFlip(0)}
            className={`md:w-32 md:h-32 transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group ${
              flippedIndex === 0 ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
              <Image
                src="/assets/icons/Icon_128x_HealthyChoices.png"
                alt="Healthy Choices"
                width={128}
                height={128}
              />
            </div>
          </div>
          <p className="pt-5 text-center">Healthy</p>
        </div>

        {/* Boundaries */}
        <div className="flex flex-col items-center">
          <div
            onClick={() => handleFlip(1)}
            className={`md:w-32 md:h-32 transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group ${
              flippedIndex === 1 ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
            <Image
              src="/assets/icons/Icon_128x_Boundaries.png"
              alt="Boundaries"
              width={128}
              height={128}
            />
          </div>
          </div>
          <p className="pt-5 text-center">Boundaries</p>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center">
          <div
            onClick={() => handleFlip(2)}
            className={`md:w-32 md:h-32 transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group ${
              flippedIndex === 2 ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
            <Image
              src="/assets/icons/Icon_128x_Support.png"
              alt="Support"
              width={128}
              height={128}
            />
          </div>
          </div>
          <p className="pt-5 text-center">Support</p>
        </div>
      </div>
    </section>
  );
}
