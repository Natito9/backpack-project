import Image from "next/image"

export default function HeroSection() {
    return (
        <section className=" h-[80vh] bg-[#f1f5ff] text-black flex  justify-center items-center gap-10 p-26">
            <div className="w-[50%]">
            <h1 className="text-6xl">Helping Kids Understand Feelings - With Emmo!</h1>
            <p className="text-[#4B5563]">A digital friend supporting emotional exploration and self-awarness</p>
            <input type="text" placeholder="Enter your email" className="text-[#ADAEBC] rounded-full border-[1px] border-[#E5E7EB] h-12 mr-[1rem] pl-6"></input>
            <button className="bg-[#7C3AED] w-32 h-12 rounded-full text-white">Join Now</button>
            </div>
            <div>
                <Image
                    src="/images/backpackEmmoHero.png"
                    alt="Emmo"
                    width={500}
                    height={500}
                />
            </div>

        </section>

    )
}