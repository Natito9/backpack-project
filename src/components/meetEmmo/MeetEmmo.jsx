import React from "react";
import Image from "next/image";

const MeetEmmo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-4 gap-8">
      {/* Image card */}
      <div className="bg-[#262626] rounded-3xl overflow-hidden shadow-lg md:w-1/3 flex items-center justify-center p-8">
        <Image 
          src="/assets/images/hero.png"
          alt="Emmo character"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="font-subtitle text-subtitle leading-subtitle text-foreground">
          Meet Emmo
        </h2>

        <p className="font-content text-content leading-content text-foreground">
          Emmo is more than just a character - they're a trusted friend 
          who helps kids navigate their emotional journey. With a heart 
          full of empathy and a backpack full of tools, Emmo makes 
          learning about feelings fun and accessible.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-bg-color text-main px-6 py-2 rounded-full font-button text-button">
            Friendly
          </span>
          <span className="bg-bg-color text-main px-6 py-2 rounded-full font-button text-button">
            Supportive
          </span>
          <span className="bg-bg-color text-main px-6 py-2 rounded-full font-button text-button">
            Playful
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetEmmo;