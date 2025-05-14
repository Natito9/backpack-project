import Image from "next/image";

export default function ChatBubble() {
  return (
    <div
      className="relative w-full max-w-[40vh] md:max-w-[40vh] lg:max-w-[47vh] aspect-[1/1] mt-7 animate-pulse
      
      // Default positioning
      translate-x-0 translate-y-0

      // Landscape and medium screen adjustments
      md:-translate-x-30 md:translate-y-30 lg:-translate-x-50 lg:translate-y-25

      // Apply left translation when height is smaller than 675px (converted to vh)

      [@media(max-height:675px)]:-translate-x-20 [@media(max-height:675px)]:translate-y-10 [@media(max-height:675px)]:lg:translate-y-10 @media(max-height:675px)]:lg:translate-x-2

      // Apply size  change when height is smaller than 675px (converted to vh)
      [@media(max-height:675px)]:max-w-[30vh]
    "
    >
      <Image
        src="/assets/images/speech-bubble.png"
        alt="Speech bubble"
        fill
        priority
        className="object-contain w-full"
      />
      <aside
        role="status"
        aria-live="polite"
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <p
          className="text-[clamp(0.2rem,1.4vh,1rem)] leading-snug text-center"
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
  );
}
