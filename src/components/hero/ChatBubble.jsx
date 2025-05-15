import Image from "next/image";
import 'animate.css';

export default function ChatBubble() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute top-[45%] left-[40%] md:top-[55%] md:left-[32%] lg:top-[50%] lg:left-[43%] -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-300 ease-in-out hide-on-small-height animate__animated animate__fadeIn animate__slow"
        style={{
          "@media (orientation: landscape) and (max-width: 767px)": {
            top: "70%",
            left: "40%",
          },
        }}
      >
        {/* Speech bubble */}
        <div
          className="w-[260px] md:w-[350px] lg:w-[350px]  aspect-[1/1] animate-pulse [animation-duration:3.5s]  transition-all duration-900 ease-in-out 
        "
          style={{
            "@media (orientation: landscape) and (max-width: 767px)": {
              width: "180px",
            },
          }}
        >
          <Image
            src="/assets/images/speech-bubble.png"
            alt="Speech bubble"
            fill
            priority
            className="object-contain w-full"
          />
        </div>

        {/* text */}
        <div
          className="absolute  mt-4 ml-6 md:mt-4 md:ml-8  w-[200px] md:w-[275px] lg:w-[270px]  aspect-[1/1] animate-pulse [animation-duration:3.5s] transition-all duration-900 ease-in-out inset-0 z-10 
        "
          style={{
            "@media (orientation: landscape) and (max-width: 767px)": {
              width: "140px",
              margin: "0.5rem",
            },
          }}
        >
          <Image
            src="/assets/images/EmmoText.png"
            alt="Emmo's text"
            fill
            priority
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
}
