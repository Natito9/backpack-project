import Image from "next/image";


export default function HeroSection() {
  return (
    <section className=" md:h-auto bg-(--bg-color) flex justify-center">

    
      <div className="flex justify-right items-right pt-10">
      <div className="w-52 md:w-[500px] ">
        <Image
          className="h-auto "
          src="/assets/images/hero-emmo.png"
          alt="Emmo character"
          width={400}
          height={400}
        />
      </div>
      </div>
     
    </section>
  );
}
