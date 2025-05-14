import Image from "next/image";

export default function Features() {
  const iconSize = 96;

  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center px-4 py-12 gap-12 bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/assets/images/BACKGROUND_WEBSITE_POLY.png')",
      }}
    >
      <h2 className="text-3xl font-bold text-center">How Backpack Works</h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl w-full">
        {/* Text Section */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {[
            {
              src: "/assets/images/Icon_128x_Engage.png",
              title: "Engage early",
              desc: "Backpack is an app best suited for children aged 7-10 and is meant to be implemented on their first phone.",
            },
            {
              src: "/assets/images/Icon_128x_mascot.png",
              title: "Personalised mascot",
              desc: "The star of the app is a personalised mascot named Emmo, who supports the child in real-time on the phone.",
            },
            {
              src: "/assets/images/Icon_128x_Track.png",
              title: "Stay on track",
              desc: "Emmo specializes in micro-interventions, nudging, emotional maturity, building self awareness, and maintaining boundaries.",
            },
            {
              src: "/assets/images/Icon_128x_InvitePlay.png",
              title: "Invite play",
              desc: "Emmo can suggest fun activities to do in the physical world, actively shifting focus from the screen.",
            },
            {
              src: "/assets/images/Icon_128x_GrowClose.png",
              title: "Grow closer",
              desc: "Emmo creates a communicative bridge between parent and child, keeping the parent up to date with overall screen habits.",
            },
          ].map((item, index) => (
            <div className="flex gap-4 items-center mx-auto " key={index}>
              <Image
                src={item.src}
                alt={`${item.title} icon`}
                width={iconSize}
                height={iconSize}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-[90%] lg:w-1/2 md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/appImage.png"
            alt="App preview"
            width={500}
            height={500}
            className="w-full max-w-m object-contain"
          />
        </div>
      </div>
    </section>
  );
}
