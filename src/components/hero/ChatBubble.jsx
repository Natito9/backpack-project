export default function ChatBubble() {
  return (
    <div className="absolute bottom-[22rem] right-4 md:bottom-[16rem]  lg:right-[28rem] p-4">
      <aside
        role="status"
        aria-live="polite"
        className=" bg-white rounded-[90px] left-[10rem] bottom-15 px-[3rem] py-[2rem] shadow-md motion-safe:animate-pulse max-w-sm sm:max-w-md md:max-w- lg:max-w-md"
      >
        <p className="text-[0.8rem] sm:text-base leading-relaxed" lang="en">
          Hi! I'm Emmo! I specialize in nudging children aged 7-10 into a
          balanced life between the physical and digital worlds. Right now, I am
          still in development, but I will soon be ready to interact with your
          child. You can sign up for the waitlist here, and I will let you know
          when I am ready! 👋
        </p>

        <div className="absolute left-[24rem]  -bottom-0 w-4 h-4 bg-white rotate-15 "></div>
      </aside>
    </div>
  );
}
