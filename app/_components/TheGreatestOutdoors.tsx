import Image from "next/image";
import { LiveItem } from "../types/app";
import Link from "next/link";

type TheGreatestOutdoorsProps = LiveItem & {
  description: string;
  linkText: string;
};
function TheGreatestOutdoors({
  img,
  title,
  description,
  linkText,
}: TheGreatestOutdoorsProps) {
  return (
    <div className="container relative">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="The Greatest Outdoors"
          className=" object-cover rounded-2xl -z-10"
          fill
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-2xl mt-3 font-semibold">{title}</h3>
        <p className="mt-3">{description}</p>
        <Link
          href="/"
          className="block w-fit text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default TheGreatestOutdoors;
