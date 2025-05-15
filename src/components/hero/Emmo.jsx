import Image from "next/image";
import 'animate.css';

export default function Emmo() {
  return (
    <div className="absolute h-screen w-full animate__animated animate__fadeIn animate__slow ">
        <div className="relative bottom-[45%] left-[25%] md:bottom-[50%] lg:bottom-[45%] md:left-[50%] xl:bottom-[53%] xl:left-[53%] w-[260px] sm:w-[200px] md:w-[300px] lg:w-[270px] xl:w-[370px] aspect-[1/1] animate-pulse [animation-duration:5.5s] transition-all duration-1000 ease-in-out z-60 overflow-hidden"
            style={{
              '@media (orientation: landscape) and (max-width: 767px)': {
                width: '150px',
                bottom: '40%',
              }
            }}
        >
          {/* new emmo name */}
          <Image
             src="/assets/images/emmo.png"
            alt="Emmo character"
            fill
            priority
            className="object-contain transition-all duration-300 ease-in-out overflow-hidden"
          />
        </div>
    </div>
  );
}
