import Image from "next/image";

export default function Mission() {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-5 md:py-20">
      <h2 className="text-(length:--subtitle-font-size) leading-(--subtitle-line-height)  pb-7">Our Mission</h2>
      <p className="max-w-[900px] text-center pb-5">
      We know that being a parent in the digital era is hard to navigate. But we have to; we owe it to our children to not allow this situation where excessive screen time is becoming a huge cloud on their horizon. So we try, but often end up in conflict with our children. This means that not only does screen time eat its way into time that could be spent together, it also lowers the quality of the time spent together. We become screen police, constantly trying to get on top of a situation we enter from a losing position. How are we to fight conditional algorithms? How can we make sure that the children follow what we agree upon in terms of time for gaming or leaving the screen alone before bed without constantly hanging over their shoulder? We need a helping hand. On the phone. In the moment. Someone to take over the role of nudging, setting boundries and supporting healthy choices as the phone is being used so we can focus on building strong, loving, and communicative relationships with our children.


      </p>
      <p className="text-center pb-12">Our mission is to have Backpack become that helping hand.</p>
      <div className="flex items-center justify-center gap-10 md:gap-20">
        <div className="flex flex-col items-center">
 
            <Image
              className="w-auto h-auto"
              src="/assets/icons/Icon_48x_HealthyChoices.png"
              alt="Heart icon"
              width={70}
              height={70}
            />
          <p className="pt-5 text-center">Healthy</p>
        </div>
        <div className="flex flex-col items-center">
      
            <Image
              className="m-auto h-auto"
              src="/assets/icons/Icon_48x_Boundaries.png"
              alt="Brain icon"
              width={48}
              height={48
              }
            />
      
          <p className="pt-5 text-center">Bounderies</p>
        </div>

        <div className="flex flex-col items-center">
   
            <Image
              className="w-auto h-auto"
              src="/assets/icons/Icon_48x_Support.png"
              alt="Console remote icon"
              width={70}
              height={70}
            />
       
          <p className="pt-5 text-center">Support</p>
        </div>
      </div>
    </section>
  );
}
