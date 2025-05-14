import Image from "next/image";

export default function ChatBubble() {
  return (
    // <div
    //   className="relative w-full max-w-[40vh] md:max-w-[40vh] lg:max-w-[47vh] aspect-[1/1] mt-7 animate-pulse
      
    //   // Default positioning
    //   translate-x-0 translate-y-0

    //   // Landscape and medium screen adjustments
    //   md:-translate-x-30 md:translate-y-30 lg:-translate-x-20 lg:translate-y-25

    //   // Apply left translation when height is smaller than 675px (converted to vh)

    //   [@media(max-height:675px)]:-translate-x-20 [@media(max-height:675px)]:translate-y-10 [@media(max-height:675px)]:lg:translate-y-10 @media(max-height:675px)]:lg:translate-x-2

    //   // Apply size  change when height is smaller than 675px (converted to vh)
    //   [@media(max-height:675px)]:max-w-[30vh]
    // "
    // >
<div className="fixed top-[50%] md:top-[40%] left-2/5 -translate-x-1/2 -translate-y-1/2 z-50 hide-on-small-height mt-20 ransition-all duration-300 ease-in-out">
  <div className="w-[300px] md:w-[350px] lg:w-[380px] aspect-[1/1] animate-pulse transition-all duration-300 ease-in-out">
    <Image
      src="/assets/images/speech-bubble.png"
      alt="Speech bubble"
      fill
      priority
      className="object-contain w-full"
    />
  </div>


      <div>
       {/* <Image
        src="/assets/images/EmmoText.png"
        alt="Emmos text"
        fill
        priority
        className="object-contain w-full"
      /> */}
      
    </div>
    <div/>
    </div>
  );
}
