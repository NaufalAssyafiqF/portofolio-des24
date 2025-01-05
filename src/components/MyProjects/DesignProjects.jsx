"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { slideUp } from "@/utility/animation";

const DesignProjects = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-[90%] mx-auto flex items-center space-x-2 mt-4">
        <div className="mx-auto border-b-4 border-gray-400 px-4 py-3  flex items-center space-x-2">
          <Image
            src="/icons/3d-icon.png"
            width={30}
            height={30}
            alt="appdev-icon"
          />
          <p className="font-medium text-lg ">3D Design Projects</p>
        </div>
      </div>
      <motion.div
        variants={slideUp(0.3)}
        initial="hidden"
        whileInView={"visible"}
        className="w-[90%] mx-auto grid sm:grid-cols-4 sm:grid-rows-8 gap-4 mt-8 grid-cols-2 grid-rows-5"
      >
        <div
          className="sm:row-span-4 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/hut-ri.png)" }}
        ></div>
        <div
          className="sm:row-span-3 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/toko-jepang.png)" }}
        ></div>
        <div
          className="sm:col-span-2 sm:row-span-4 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/abstract-room.png)" }}
        ></div>
        <div
          className="sm:row-span-3 sm:col-start-2 sm:row-start-4 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/uhamka.png)" }}
        ></div>
        <div
          className="sm:row-span-2 sm:row-start-5 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/bed-room.png)" }}
        ></div>
        <div
          className="sm:row-span-4 sm:col-start-3 sm:row-start-5 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/cute-character.png)" }}
        ></div>
        <div
          className="sm:row-span-2 sm:col-start-4 sm:row-start-5 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/liblary.png)" }}
        ></div>
        <div
          className="sm:row-span-2 sm:col-start-4 sm:row-start-7 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/masjid.png)" }}
        ></div>
        <div
          className="sm:row-span-2 sm:row-start-7 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/game.png)" }}
        ></div>
        <div
          className="sm:row-span-2 sm:row-start-7 bg-no-repeat bg-center bg-cover min-h-[200px] rounded-md"
          style={{ backgroundImage: "url(images/design/beach.png)" }}
        ></div>
      </motion.div>
      <Link href={"https://www.instagram.com/hback.art"}>
        <div className="w-[90%] mx-auto mt-8 cursor-pointer">
          <Image
            src="/icons/instagram.png"
            width={30}
            height={30}
            alt="instagram-icon"
            className="mx-auto mb-2"
          />
          <h1 className="font-normal text-lg text-center text-gray-500">
            Visit my instagram for more design
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default DesignProjects;
