import Image from "next/image";

export default function Features() {
  const iconWidth = 80;
  const iconHeight = 80;

  return (
    <section
      id="features"
      className="bg-violet-100  mx-auto flex flex-col items-center justify-center py-10  gap-10"
    >
      <h2 className="text-(length:--subtitle-font-size)">How Backpack Works</h2>
      <div className="flex flex-col lg:flex-row  items-center justify-center align-center ">
        <div className="flex flex-col justify-center gap-8 max-w-[600px] h-[700px] px-10 lg:p-0">
          <div className="flex flex-row gap-3 ">
            <Image
              className="rounded-xl object-contain"
              src="/assets/images/smileyIcon.png"
              alt="Smiley Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-xl">Engage early</h3>
              <p className="text-gray-600  ">
                Backpack is an app best suited for children aged 7-10 and is
                meant to be implemented on their first phone.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl object-contain"
              src="/assets/images/puzzleIcon.png"
              alt="Puzzle Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-xl">Personalised mascot</h3>
              <p className="text-gray-600">
                The star of the app is a personalised mascot named Emmo, who
                supports the child in real-time on the phone.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl object-contain"
              src="/assets/images/questionIcon.png"
              alt="Question Mark Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-xl">Stay on track</h3>
              <p className="text-gray-600">
                Emmo specializes in micro-interventions, nudging, emotional
                maturity, building self awareness, and maintaining boundaries.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl object-contain"
              src="/assets/images/questionIcon.png"
              alt="Question Mark Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-xl">Invite play</h3>
              <p className="text-gray-600">
                Emmo can suggest fun activities to do in the physical world,
                actively shifting focus from the screen to
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl object-contain"
              src="/assets/images/questionIcon.png"
              alt="Question Mark Icon"
              width={iconWidth}
              height={iconHeight}
            />
            <div>
              <h3 className="text-xl">Grow closer</h3>
              <p className="text-gray-600">
                Additionally, Emmo creates a communicative bridge between parent
                and child, keeping the parent up to date with overall screen
                habits.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex relative justify-center items-center align-center ">
          <Image
            width={700}
            height={700}
            src="/assets/images/appImage.png"
            alt="Image of the app"
            className="object-fit"
          />
        </div>
      </div>
    </section>
  );
}
