import Image from "next/image";

export default function Emmo() {
  return (
    <div
      className="w-[25vh] md:w-[30vh] lg:w-[30vh] max-w-[300px] right-50 lg:top-20 lg:right-65 lg:translate-x-40 lg:-translate-y-5
    
    // Default positioning
      translate-x-0 translate-y-0

      // Landscape and medium screen adjustments
      md:translate-x-30 md:translate-y-10 

      // Apply left translation when height is smaller than 675px (converted to vh)
      [@media(max-height:675px)]:translate-x-10 [@media(max-height:675px)]:-translate-y-0 [@media(max-height:675px)]:lg:-translate-y-0 @media(max-height:675px)]:lg:translate-x-2"
    >
      <Image
        src="/assets/images/hero-emmo.png"
        alt="Emmo character"
        priority
        width={300}
        height={300}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
