import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full max-w-screen-xl mx-auto flex justify-center items-start relative px-4 py-8">
      <div className="w-full max-w-7xl flex flex-col items-center relative">
        <div className="w-full max-w-2xl relative">
          <div className="w-full flex justify-center mb-6">
            <h2 className="text-(length:--subtitle-font-size) leading-subtitle font-(family-name:--subtitle-font-family)">
              Get in Touch
            </h2>
          </div>

          <form className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col md:flex-row gap-6">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                required
                aria-label="Name"
                className="flex-1 min-h-12 px-4 py-2 border border-gray-300 rounded-lg 
                  font-placeholder text-placeholder text-base placeholder:font-placeholder placeholder:text-placeholder 
                  focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                aria-label="Email"
                className="flex-1 min-h-12 px-4 py-2 border border-gray-300 rounded-lg 
                  font-placeholder text-placeholder text-base placeholder:font-placeholder placeholder:text-placeholder 
                  focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
            </div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              required
              aria-label="Message"
              minLength="10"
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none 
                font-placeholder text-placeholder text-base placeholder:font-placeholder placeholder:text-placeholder 
                focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            ></textarea>

            <div className="w-full h-12">
              <button
                type="submit"
                className="w-full h-full rounded-full bg-[var(--main-color)] text-white 
                  font-placeholder text-placeholder hover:bg-[#9D4EDD] transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-6 w-full flex justify-center items-center gap-6">
            <a
              href="https://www.facebook.com/share/1G5grnnT1t/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/Facebook.png"
                alt="Facebook"
                width={25}
                height={25}
              />
            </a>
            <a
              href="https://www.instagram.com/backpackstudiosofficial?igsh=MXV5dDVhZGQwMm9yNQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/Instagram.png"
                alt="Instagram"
                width={21}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
