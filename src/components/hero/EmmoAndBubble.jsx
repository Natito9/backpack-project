import Emmo from "./Emmo";
import ChatBubble from "./ChatBubble";
import Image from "next/image";

export default function EmmoAndBubble() {
  return (
    <div className=" flex  justify-center items-center">
      <div className="absolute top-[450px] left-[35%] z-10 flex items-center justify-center w-full max-w-[40vh] aspect-[1/1] -translate-x-1/2 -translate-y-1/2">
        <ChatBubble />
      </div>
      <Emmo />
    </div>
  );
}
