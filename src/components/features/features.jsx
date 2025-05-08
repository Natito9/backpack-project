import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-violet-100 font-sans mx-auto flex flex-col items-center justify-center p-5 py-20 gap-15 ">
      <h1 className="text-3xl font-bold">How Backpack Works</h1>
      <div className="flex flex-row ">
        <div className="flex flex-col align-center gap-8">
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/smileyIcon.png"
              alt="image"
              width={50}
              height={50}
            />
            <div>
              <h6 className="text-lg font-semibold">Daily Check-ins</h6>
              <p className="text-gray-600">
                Emmo helps kids identify and express their daily emotions
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/puzzleIcon.png"
              alt="image"
              width={50}
              height={50}
            />
            <div>
              <h6 className="text-lg font-semibold">Emotional Games</h6>
              <p className="text-gray-600">
                Fun activities that teach emotional intelligence
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/questionIcon.png"
              alt="image"
              width={50}
              height={50}
            />
            <div>
              <h6 className="text-lg font-semibold">Emmo's room</h6>
              <p className="text-gray-600">
                A personalized safe space for reflection and calm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <Image
            src="/assets/images/appImage.png"
            alt="image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
