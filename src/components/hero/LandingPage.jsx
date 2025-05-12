// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import "animate.css";

// export default function LandingPage({ onDone }) {
//   useEffect(() => {
//     const timer = setTimeout(onDone, 2000); // 1s delay + 1s zoomOut
//     return () => clearTimeout(timer);
//   }, [onDone]);
//   return (
//     <section className="relative h-screen w-full">
//       <Image
//         src="/assets/images/hero-background.jpg"
//         alt="Background"
//         fill
//         priority
//         className="object-cover object-center -z-10"
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div
//           className="
//           text-black-700
//           text-4xl md:text-7xl
//           font-bold
//           animate__animated
//           animate__zoomOut
//           animate__delay-1s
//           animate__slow
//           font-[Comic_Sans_MS,cursive]
//         "
//         >
//           Welcome to Webpack Studios
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect } from "react";
import Image from "next/image";
import "animate.css";

export default function LandingPage({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000); // 1s delay + 1s zoomOut
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <section className="relative h-screen w-full">
      <Image
        src="/assets/images/hero-background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div
          className="
            text-black-700
            text-4xl md:text-8xl
            font-bold
            animate__animated
            animate__zoomOut
            animate__delay-1s
            animate__slow
            font-[Georgia,serif]
            leading-tight
          "
        >
          <span className="block">Welcome to</span>
          <span className="block">Webpack Studios</span>
        </div>
      </div>
    </section>
  );
}
