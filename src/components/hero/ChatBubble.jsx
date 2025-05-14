import Image from "next/image";

export default function ChatBubble() {
  return (
    <section className="relative h-screen"> 
      <div className="absolute top-[40%] md:top-[60%] sm:left-[55%] left-[50%] md:left-[42%] -translate-x-1/2 -translate-y-1/2 z-50 hide-on-small-height transition-all duration-300 ease-in-out">
        
        {/* Speech bubble background */}
        <div className="w-[300px] md:w-[350px] lg:w-[380px] aspect-[1/1] animate-pulse transition-all duration-300 ease-in-out">
          <Image
            src="/assets/images/speech-bubble.png"
            alt="Speech bubble"
            fill
            priority
            className="object-contain w-full"
          />
        </div>

        {/* Text image stacked on top */}
        <div className="absolute  mt-4 ml-6 md:mt-5 md:ml-10  w-[240px] md:w-[280px] lg:w-[290px] aspect-[1/1] animate-pulse transition-all duration-300 ease-in-out inset-0 z-10 ">
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
