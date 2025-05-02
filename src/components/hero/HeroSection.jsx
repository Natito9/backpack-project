import Image from "next/image";
import HeroTitle from "./HeroTitle";

export default function HeroSection() {
  return (
    <section className=" md:h-[70vh] bg-[#f1f5ff] text-black flex flex-col  md:flex-row justify-between px-20 py-30 pr-40">
      <HeroTitle/>
      <div className="w-[300px] md:w-[500px]">
        <Image
          className="md:w-[500px] h-auto"
          src="/images/backpackEmmoHero.png"
          alt="Emmo"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
