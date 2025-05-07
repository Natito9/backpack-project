import Image from "next/image";

export default function Features() {
  const iconWidth = 80;
  const iconHeight = 80;

  return (
    <section className="bg-violet-100 font-content mx-auto flex flex-col items-center justify-center p-5 py-10 gap-15 ">
      <h2 className="text-(length:--subtitle-font-size)">How Backpack Works</h2>
      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="flex flex-col justify-center gap-8 max-w-[600px]">
          <div className="flex flex-row gap-3 ">
            <Image
              className="rounded-xl"
              src="/assets/images/smileyIcon.png"
              alt="Smiley Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-lg">Engage early</h3>
              <p className="text-gray-600 text-content">
                Backpack is an app best suited for children aged 7-10 and is
                meant to be implemented on their first phone.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/puzzleIcon.png"
              alt="Puzzle Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-lg ">Personalised mascot</h3>
              <p className="text-gray-600 text-content">
                The star of the app is a personalised mascot named Emmo, who
                supports the child in real-time on the phone.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/questionIcon.png"
              alt="Question Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-lg">Stay on track</h3>
              <p className="text-gray-600 text-content">
                Emmo specializes in micro-interventions, nudging, emotional
                maturity, building self awareness, and maintaining boundaries.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/questionIcon.png"
              alt="Question Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-lg">Invite play</h3>
              <p className="text-gray-600 text-content">
                Emmo can suggest fun activities to do in the physical world,
                actively shifting focus from the screen to
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/questionIcon.png"
              alt="Question Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-lg">Grow closer</h3>
              <p className="text-gray-600 text-content">
                Additionally, Emmo creates a communicative bridge between parent
                and child, keeping the parent up to date with overall screen
                habits.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/assets/images/appImage.png"
            alt="Image of the app"
            width={700}
            height={700}
            className=" self-center"
          />
        </div>
      </div>
    </section>
  );
}
