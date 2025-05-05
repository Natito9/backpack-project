import Image from "next/image"

export default function Mission() {
    return(
        <section className="flex flex-col justify-center items-center py-20">
            <h2 className="text-4xl pb-7">Our Mission</h2>
            <p className="max-w-[700px] text-center pb-12">We're a small team building tools for children's emotional growth. Every child deserves to understand and express their feelings in a safe, fun environment.</p>
            <div className="flex items-center justify-center gap-20">
                <div>
                <div className=" w-[80px] h-[80px] rounded-full bg-[#f1f5ff] flex justify-center items-center">
                     <Image
                             className="md:w-[30px] h-auto"
                             src="/assets/icons/mission1.png"
                             alt="Heart"
                             width={30}
                             height={30}
                           />
                </div>
                Safe Space
                </div>
                <div>
                <div className=" w-[80px] h-[80px] rounded-full bg-[#f1f5ff] flex justify-center items-center">
                     <Image
                             className="md:w-[30px] h-auto"
                             src="/assets/icons/mission2.png"
                             alt="Heart"
                             width={30}
                             height={30}
                           />
                </div>
                Safe Space
                </div>
                <div>
                <div className=" w-[80px] h-[80px] rounded-full bg-[#f1f5ff] flex justify-center items-center">
                     <Image
                             className="md:w-[30px] h-auto"
                             src="/assets/icons/mission2.png"
                             alt="Heart"
                             width={30}
                             height={30}
                           />
                </div>
                Safe Space
                </div>
            </div>

        </section>
    )
}