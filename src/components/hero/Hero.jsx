import Image from "next/image";
import HeroTitle from "./HeroTitle";

export default function HeroSection() {
  return (
    <section className=" md:h-auto bg-[#f1f5ff] text-black flex flex-col  md:flex-row justify-between  px-5 md:pl-20 md:pt-30 md:pr-40 md:pb-10">
      <HeroTitle/>
      <div className="w-[300px] md:w-[500px]">
        <Image
          className="md:w-[500px] h-auto"
          src="/assets/images/hero.png"
          alt="Emmo character"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
