import React from "react";
import Image from "next/image";

const MeetEmmo = () => {
  return (
    <section 
      id='emmo' 
      className="flex flex-col md:flex-row items-center justify-center max-w-8xl mx-auto py-16 px-4 gap-8">
      {/* Image card */}
      <div className="rounded-3xl overflow-hidden shadow-lg md:w-1/3 flex items-center justify-center p-8">
        <Image 
          src="/assets/images/emmo.png"
          alt="Emmo character"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
        <h2 className="text-(length:--title-font-size) md:text-[60px] md:leading-[60px] text-center md:text-left leading-title font-(family-name:--title-font-family)">
          Meet Emmo
        </h2>

        <p className="text-(length:--content-font-size) md:text-[20px] leading-[24px] md:leading-[28px] font-(family-name:--title-font-family) w-full text-justify hyphens-auto">
        Emmo is the antidote to all the negatively conditioning algorithms that target children today. That turns them into infinity scrollers. Causes gaming addiction. Harms their self image and makes them go Emmo does not substitute a parent, a friend or functions like a tamagotchi. You don't have to feed Emmo and will not be invited to check on the Mascot when you are off the phone. Emmo helps the children learn about themselves, their emotions and behaviours. So that they can independently with old a healthy relationship to digital world in the future.after instant dopamine kicks.Emmo is the gatekeeper that creates space for emotional growth, an active lifestyle, a solid self esteem and understanding the importance of boundries as the children grow. Space that now is eaten up by screen time. 
        </p>

        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <span className="bg-(--main-color) text-(--text-color) px-6 py-2 rounded-full text-(length:--button-font-size) md:text-[16px] font-(family-name:--content-font-family)">
            Friendly
          </span>
          <span className="bg-(--main-color) text-(--text-color) px-6 py-2 rounded-full text-(length:--button-font-size) md:text-[16px] font-(family-name:--content-font-family)">
            Supportive
          </span>
          <span className="bg-(--main-color) text-(--text-color) px-6 py-2 rounded-full text-(length:--button-font-size) md:text-[16px] font-(family-name:--content-font-family)">
            Playful
          </span>
        </div>
      </div>
    </section>
  );
};

export default MeetEmmo;