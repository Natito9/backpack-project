import Image from "next/image";

export default function Emmo() {
  return (
    <div className="animate-pop-in ">
      <Image
        src="/assets/images/hero-emmo.png"
        alt="Emmo character"
        priority
        width={300}
        height={300}
        className="  w-[45vw] md:w-[30vw] lg:w-[15vw] h-auto"
      />
    </div>
  );
}
