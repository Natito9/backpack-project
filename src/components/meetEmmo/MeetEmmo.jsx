import React from "react";
import Image from "next/image";

const MeetEmmo = () => {
  return (
    <section id='emmo' className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-16 px-4 gap-8">
      {/* Image card */}
      <div className="bg-[#2E2B2B] rounded-3xl overflow-hidden shadow-lg md:w-1/3 flex items-center justify-center p-8">
        <Image 
          src="/assets/images/hero.png"
          alt="Emmo character"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-[592px] md:w-1/2 space-y-6 h-[248px] flex flex-col justify-center">
        <h2 className="text-(length:--title-font-size) leading-title font-(family-name:--title-font-family)">
          Meet Emmo
        </h2>

        <p className="text-(length:--content-font-size) leading-content font-(family-name:--title-font-family) w-[576px] whitespace-pre-line">
          Emmo is more than just a character - they're a trusted friend 
          who helps kids navigate their emotional journey. With a heart 
          full of empathy and a backpack full of tools, Emmo makes 
          learning about feelings fun and accessible.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-(--tag-color) text-(--main-color) px-6 py-2 rounded-full text-(length:--button-font-size) font-(family-name:--content-font-family)">
            Friendly
          </span>
          <span className="bg-(--tag-color) text-(--main-color) px-6 py-2 rounded-full text-(length:--button-font-size) font-(family-name:--content-font-family)">
            Supportive
          </span>
          <span className="bg-(--tag-color) text-(--main-color) px-6 py-2 rounded-full text-(length:--button-font-size) font-(family-name:--content-font-family)">
            Playful
          </span>
        </div>
      </div>
    </section>
  );
};

export default MeetEmmo;