import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative  h-screen max-[500px] md:h-[90vh] w-full">
      <Image
        src="/assets/images/hero-background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

   
      <div className="absolute inset-0 flex justify-center items-start md:mt-30 mt-25 p-5">
        <Image
          src="/assets/images/hero-logo.png"
          alt="Backpack Studios logo"
          width={600}
          height={200}
          className="h-auto"
        />
      </div>

  
      <div className="absolute bottom-4 right-4  md:bottom-5 md:right-20 p-4">
        <Image
          src="/assets/images/hero-emmo.png"
          alt="Emmo character"
          width={270}
          height={300}
          className="h-auto"
        />
      </div>
    </section>
  );
}
