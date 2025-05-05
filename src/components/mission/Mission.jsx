import Image from "next/image";

export default function Mission() {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-5 md:py-20">
      <h2 className="text-4xl pb-7">Our Mission</h2>
      <p className="max-w-[700px] text-center pb-12">
        We're a small team building tools for children's emotional growth. Every
        child deserves to understand and express their feelings in a safe, fun
        environment.
      </p>
      <div className="flex items-center justify-center gap-4 md:gap-20">
        <div className="flex flex-col items-center">
          <div className=" w-[80px] h-[80px] rounded-full bg-[#f1f5ff] flex justify-center items-center">
            <Image
              className="md:w-[30px] h-auto"
              src="/assets/icons/mission1.png"
              alt="Heart"
              width={30}
              height={30}
            />
          </div>
          <p className="pt-5 text-center">Safe Space</p>
        </div>
        <div className="flex flex-col items-center">
          <div className=" w-[80px] h-[80px] rounded-full bg-[#f1f5ff] flex justify-center items-center">
            <Image
              className="md:w-[30px] h-auto"
              src="/assets/icons/mission2.png"
              alt="Heart"
              width={30}
              height={30}
            />
          </div>
          <p className="pt-5 text-center">Emotional Growth</p>
        </div>

        <div className="flex flex-col items-center">
          <div className=" w-[80px] h-[80px] rounded-full bg-[#f1f5ff] flex justify-center items-center">
            <Image
              className="md:w-[30px] h-auto"
              src="/assets/icons/mission3.png"
              alt="Heart"
              width={30}
              height={30}
            />
          </div>
          <p className="pt-5 text-center">Playful Learning</p>
        </div>
      </div>
    </section>
  );
}
