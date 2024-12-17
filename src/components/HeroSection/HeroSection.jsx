import Image from "next/image";
import React from "react";


const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(images/bg.jpg)", backgroundSize: "cover" }}
      className="w-screen h-screen"
    >
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="relative">
          <Image
            src="/images/hero-image.png"
            width={600}
            height={600}
            alt="play-computer"
            className=""
          />
          <button className="absolute top-10 right-10 border border-black px-4 py-2 rounded-full bg-white shadow-2xl animate-[bounce_1.7s_ease-in-out_infinite]">
            Web developer
          </button>
          <button className="absolute top-1/2 left-10 border border-black px-4 py-2 rounded-full bg-white shadow-2xl animate-[bounce_1.5s_ease-in-out_infinite]">
            Mobile developer
          </button>
          <button className="absolute bottom-10 right-32 border border-black px-4 py-2 rounded-full bg-white shadow-2xl animate-[bounce_1.3s_ease-in-out_infinite]">
            3D Artist
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
