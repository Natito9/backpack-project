import Image from "next/image";

export default function ChatBubble() {
  return (
    <div className=" w-full flex justify-center mt-[25vh] md:mt-[30vh] lg:mt-[25vh] animate-pulse lg:mr-85 ">
      <div className="relative w-80 md:w-85 lg:w-96 aspect-[1/1]">
        {/* Speech bubble image */}
        <Image
          src="/assets/images/speech-bubble.png"
          alt="Speech bubble"
          fill
          priority
          className="object-contain"
        />

        {/* Text inside the bubble */}
        <aside
          role="status"
          aria-live="polite"
          className="absolute inset-0 flex items-center justify-center px-4  sm:px-7 py-4"
        >
          <p
            className="text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] leading-snug text-center px-4"
            lang="en"
          >
            Hi! I’m Emmo – a specialist in helping young school children build
            self-regulation. I use gentle nudges to support healthier screen
            habits, emotional awareness, and real-world curiosity. I’m still in
            development – but you can join the waitlist, and I’ll let you know
            when I’m ready!
          </p>
        </aside>
      </div>
    </div>
  );
}
