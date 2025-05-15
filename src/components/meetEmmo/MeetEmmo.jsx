import React from "react";
import Image from "next/image";

const MeetEmmo = () => {
  return (
    <section 
      id='emmo' 
      className="flex flex-col md:flex-row items-center justify-center max-w-8xl mx-auto py-16 px-4 gap-8">
      {/* Image card */}
      <div className="rounded-3xl overflow-hidden shadow-lg flex items-center justify-center p-8">
        <Image 
          src="/assets/images/emmo.png"
          alt="Emmo character"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="space-y-6 flex flex-col justify-center">
        <h2 className="text-(length:--subtitle-font-size) md:leading-[60px] text-center md:text-left leading-title font-(family-name:--title-font-family)">
          Meet Emmo
        </h2>

        <p className="max-w-[750px] font-(family-name:--title-font-family) text-justify text-[#3f3f3f]">
          Emmo is here to protect kids from the pull of addictive algorithms - the kind that fuel endless scrolling, gaming loops, and low self-worth.
          <br />Emmo isn't a toy, a pet, or a digital friend. It's a gentle guide that helps kids understand their feelings, habits, and needs - and build self-regulation from within.
          <br />By creating space for movement, confidence, and emotional growth, Emmo supports the skills children need to stay balanced in a digital world.        
        </p>

        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <span className="bg-(--main-color) text-(--text-color) px-6 py-2 rounded-full text-(length:--button-font-size) md:text-[16px] font-(family-name:--content-font-family)">
            Awareness
          </span>
          <span className="bg-(--main-color) text-(--text-color) px-6 py-2 rounded-full text-(length:--button-font-size) md:text-[16px] font-(family-name:--content-font-family)">
            Balance
          </span>
          <span className="bg-(--main-color) text-(--text-color) px-6 py-2 rounded-full text-(length:--button-font-size) md:text-[16px] font-(family-name:--content-font-family)">
            Confidence
          </span>
        </div>
      </div>
    </section>
  );
};

export default MeetEmmo;