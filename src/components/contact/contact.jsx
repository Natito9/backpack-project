import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-[1440px] h-[588px] mx-auto flex justify-center items-start relative px-4">
      <div className="w-[1280px] h-[428px] flex flex-col items-center relative">
        <div className="w-[768px] h-[428px] relative">
          {/* Title */}
          <div className="absolute top-[-3px] left-[277.61px] w-[205px] h-[45px] flex items-center justify-center">
            <h1 className="font-subtitle text-subtitle leading-subtitle text-center">
              Get in Touch
            </h1>
          </div>

          {/* Form */}
          <form className="absolute top-[88px] w-[768px] h-[268px] flex flex-col gap-[24px]">
            <div className="w-full h-[50px] flex gap-[24px]">
              <input
                type="text"
                placeholder="Name"
                className="w-[372px] h-full px-4 border border-gray-300 rounded-[8px] 
                  font-placeholder text-placeholder placeholder:font-placeholder placeholder:text-placeholder 
                  focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-[372px] h-full px-4 border border-gray-300 rounded-[8px] 
                  font-placeholder text-placeholder placeholder:font-placeholder placeholder:text-placeholder 
                  focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
            </div>

            <textarea
              placeholder="Message"
              className="w-full h-[122px] px-4 py-2 border border-gray-300 rounded-[8px] resize-none 
                font-placeholder text-placeholder placeholder:font-placeholder placeholder:text-placeholder 
                focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            ></textarea>

            {/* Submit Button */}
            <div className="w-full h-[48px]">
              <button
                className="w-full h-full rounded-full bg-[var(--main-color)] text-white 
                  font-placeholder text-placeholder hover:bg-[#9D4EDD] transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Icons */}
          <div className="absolute top-[404px] w-[768px] h-[24px] flex justify-center items-center gap-6">
            <Image
              src="/assets/images/Twitter.png"
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src="/assets/images/Instagram.png"
              alt="Instagram"
              width={21}
              height={24}
            />
            <Image
              src="/assets/images/Discord.png"
              alt="Discord"
              width={30}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
