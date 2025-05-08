import Image from "next/image";
import HeroText from "./HeroText";

export default function HeroSection() {
  return (
    <section className=" md:h-auto bg-(--bg-color) flex justify-center">
      <div className="max-w-[1440px] flex flex-col  md:flex-row justify-between px-5 py-10 md:pl-20 md:py-30 "> 
      <HeroText/>
      <div className="flex justify-center items-center pt-10">
      <div className="w-52 md:w-[500px] ">
        <Image
          className="h-auto "
          src="/assets/images/hero.png"
          alt="Emmo character"
          width={400}
          height={400}
        />
      </div>
      </div>
      </div>
    </section>
  );
}
