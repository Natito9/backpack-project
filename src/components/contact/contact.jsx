import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex justify-center items-start relative px-4 py-8">
      <div className="w-full max-w-[1280px] flex flex-col items-center relative">
        <div className="w-full max-w-[768px] relative">
          <div className="w-full flex justify-center mb-6">
            <h2 className="text-(length:--subtitle-font-size) leading-subtitle font-(family-name:--subtitle-font-family)">
              Get in Touch
            </h2>
          </div>

          <form className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 min-h-[50px] px-4 py-2 border border-gray-300 rounded-[8px] 
                  font-placeholder text-placeholder text-base placeholder:font-placeholder placeholder:text-placeholder 
                  focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-h-[50px] px-4 py-2 border border-gray-300 rounded-[8px] 
                  font-placeholder text-placeholder text-base placeholder:font-placeholder placeholder:text-placeholder 
                  focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
            </div>

            <textarea
              placeholder="Message"
              className="w-full h-[122px] px-4 py-2 border border-gray-300 rounded-[8px] resize-none 
                font-placeholder text-placeholder text-base placeholder:font-placeholder placeholder:text-placeholder 
                focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            ></textarea>

            <div className="w-full h-[48px]">
              <button
                className="w-full h-full rounded-full bg-[var(--main-color)] text-white 
                  font-placeholder text-placeholder hover:bg-[#9D4EDD] transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-6 w-full flex justify-center items-center gap-6">
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
