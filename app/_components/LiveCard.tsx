import Image from "next/image";
import { type LiveItem } from "../types/app";

type LiveCardProps = LiveItem;
function LiveCard({ img, title }: LiveCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt="Live anywhere"
          className="w-full h-full object-cover rounded-lg"
          fill
        />
      </div>
      <h3 className=" text-center text-2xl mt-3 font-semibold">{title}</h3>
    </div>
  );
}

export default LiveCard;
