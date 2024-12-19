import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";


const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(images/bg.jpg)", backgroundSize: "cover" }}
      className="w-screen h-screen relative overflow-hidden"
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
          <button className="absolute sm:top-10 sm:right-10 border border-black px-4 py-2 rounded-full bg-white shadow-2xl animate-[bounce_1.7s_ease-in-out_infinite] top-0 right-8">
            Web developer
          </button>
          <button className="absolute sm:top-1/2 sm:left-10 top-2/3 left-5 border border-black px-4 py-2 rounded-full bg-white shadow-2xl animate-[bounce_1.5s_ease-in-out_infinite]">
            Mobile developer
          </button>
          <button className="absolute sm:bottom-10 sm:right-32 bottom-0 right-12 border border-black px-4 py-2 rounded-full bg-white shadow-2xl animate-[bounce_1.3s_ease-in-out_infinite]">
            3D Artist
          </button>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default HeroSection;