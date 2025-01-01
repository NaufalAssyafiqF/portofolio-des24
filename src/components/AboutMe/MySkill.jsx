"use client";
import { mySkills1, mySkills2 } from "@/data/skills";
import { DesktopTower } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Marquee from "react-fast-marquee";

const MySkill = () => {
  return (
    <div className="mt-20 mb-40">
      <div className="w-[90%] mx-auto flex items-center space-x-2">
        <DesktopTower size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          My Skills
        </h1>
      </div>
      <div className="w-[90%] mx-auto overflow-hidden myGradient mt-8">
        <Marquee className="flex justify-between" direction="left">
          {mySkills1.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt="icon skill"
              className="min-w-[60px] max-w-[70px] md:mx-6 sm:mx-4 mx-2"
            />
          ))}
        </Marquee>
        <Marquee className="flex justify-between mt-8" direction="right">
          {mySkills2.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt="icon skill"
              className="min-w-[60px] max-w-[70px] md:mx-6 sm:mx-4 mx-2"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MySkill;
