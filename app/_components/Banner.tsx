import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
      <Image
        src="/Home-Page-Image.jpeg"
        alt="banner-img"
        fill
        className="object-cover object-left"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-[#FE595E] bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
