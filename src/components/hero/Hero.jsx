import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="relative  md:h-screen flex justify-center  w-full"
>
       <Image
                src="/assets/images/hero-background.jpg"
                alt="Background"
                fill
                priority
                className="object-cover object-center -z-10"
              />

    
      <div className=" w-full">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          className="h-auto "
          src="/assets/images/hero-logo.png"
          alt="Bakcpack Studios logo"
          width={500}
          height={400}
        />
      </div>
      <div className="w-52 md:w-[500px] ">
        <Image
          className="h-auto "
          src="/assets/images/hero-emmo.png"
          alt="Emmo character"
          width={300}
          height={300}
        />
      </div>
      </div>
     
    </section>
  );
}
