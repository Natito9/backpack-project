import Image from "next/image";

export default function Mission() {
  return (
    <section
      id="mission"
      className="flex flex-col justify-center items-center py-10 px-5 md:py-20"
    >
      <h2 className="text-(length:--subtitle-font-size) leading-(--subtitle-line-height)  pb-7">
        Our Mission
      </h2>
      <p className="max-w-[800px] text-justify pb-5">
        Parenting in the digital age is tough. We want to guide our kids - but
        end up in conflict, becoming screen police instead of just being
        present. Algorithms are smart, and we're always one step behind.
      </p>
      <p className="max-w-[800px] text-justify pb-12">
        Backpack is here to change that. A helping hand on the phone, right in
        the moment - gently nudging, setting boundaries, and supporting healthy
        choices. So parents can focus on what really matters: strong, loving
        relationships.
      </p>
      <div className="flex items-center md:text-xl justify-center gap-10 md:gap-20">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/icons/Icon_128x_HealthyChoices.png"
            alt="Diamond icon"
            width={128}
            height={128}
          />
          <p className="pt-5 text-center">Healthy</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/icons/Icon_128x_Boundaries.png"
            alt="Paw icon"
            width={128}
            height={128}
          />

          <p className="pt-5 text-center">Bounderies</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/assets/icons/Icon_128x_Support.png"
            alt="Heart icon"
            width={128}
            height={128}
          />

          <p className="pt-5 text-center">Support</p>
        </div>
      </div>
    </section>
  );
}
