import {Section} from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-violet-100 font-content mx-auto flex flex-col items-center justify-center p-5 py-20 gap-15 ">
      <h2 className="text-3xl font-bold">How Backpack Works</h2>
      <div className="flex flex-row ">
        <div className="flex flex-col align-center gap-8">
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/smileyIcon.png"
              alt="Smiley Icon"
              width={50}
              height={50}
            />
            <div>
              <h3 className="text-title font-bold">Daily Check-ins</h3>
              <p className="text-gray-600 text-content">
                Emmo helps kids identify and express their daily emotions
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/puzzleIcon.png"
              alt="Puzzle Icon"
              width={50}
              height={50}
            />
            <div>
              <h3 className="text-title font-bold">Emotional Games</h3>
              <p className="text-gray-600 text-content">
                Fun activities that teach emotional intelligence
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              className="rounded-xl"
              src="/assets/images/questionIcon.png"
              alt="Question Icon"
              width={50}
              height={50}
            />
            <div>
              <h3 className="text-title font-bold">Emmo's room</h3>
              <p className="text-gray-600 text-content">
                A personalized safe space for reflection and calm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/assets/images/appImage.png"
            alt="Image of the app"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
