import Image from "next/image";

export default function ChatBubble() {
  return (
    <div className="absolute bottom-[21rem] right-4 md:bottom-[22rem] md:right-[24rem]  lg:right-[24rem] p-4">
      <aside role="status" aria-live="polite" className="">
        <p className="text-[0.8rem] sm:text-base leading-relaxed" lang="en">
          Hi! I'm Emmo! I specialize in nudging children aged 7-10 into a
          balanced life between the physical and digital worlds. Right now, I am
          still in development, but I will soon be ready to interact with your
          child. You can sign up for the waitlist here, and I will let you know
          when I am ready! 👋
        </p>
      </aside>
      <div className="absolute bottom-4 right-4  md:bottom-5 md:right-30 lg:right-40 p-4">
        <Image
          src="/assets/images/speech-bubble.png"
          alt="Emmo character"
          priority
          width={300}
          height={300}
          className="w-auto h-auto motion-safe:animate-pulse"
        />
      </div>
    </div>
  );
}
