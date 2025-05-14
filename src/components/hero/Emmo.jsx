import Image from "next/image";

export default function Emmo() {
  return (
    <div className="relative h-screen w-full">
        <div className="absolute bottom-[25%] left-[50%] w-[300px] md:w-[350px] lg:w-[300px] aspect-[1/1] animate-pulse z-60">
          <Image
            src="/assets/images/hero-emmo.png"
            alt="Emmo character"
            fill
            priority
            className="object-contain transition-all duration-300 ease-in-out"
          />
        </div>
    </div>
  );
}
