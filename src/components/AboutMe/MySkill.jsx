"use client";
import { mySkills1, mySkills2 } from "@/data/skills";
import { DesktopTower } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { motion } from "motion/react";

const MySkill = () => {
  return (
    <div className="mt-20">
      <div className="w-[90%] mx-auto flex items-center space-x-2">
        <DesktopTower size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          My Skills
        </h1>
      </div>
      <div className="w-[90%] mx-auto overflow-hidden">
        <div className="flex  mt-10 myGradient">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0  w-full"
          >
            {mySkills1.map((item, index) => (
              <div
                key={index}
                className="w-[200px] flex flex-col items-center space-x-2 justify-between"
              >
                <img
                  src={item.img}
                  alt="icon skill"
                  className="min-w-[60px] max-w-[70px]"
                />
                {/* <p className="font-normal text-xl">{item.name}</p> */}
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0  w-full"
          >
            {mySkills1.map((item, index) => (
              <div
                key={index}
                className="w-[200px] flex flex-col items-center space-x-2 justify-between"
              >
                <img
                  src={item.img}
                  alt="icon skill"
                  className="min-w-[60px] max-w-[70px]"
                />
                {/* <p className="font-normal text-xl">{item.name}</p> */}
              </div>
            ))}
          </motion.div>
        </div>

        {/* slider skill 2 */}
        <div className="flex  mt-10 myGradient">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0  w-full"
          >
            {mySkills2.map((item, index) => (
              <div
                key={index}
                className="w-[200px] flex flex-col items-center space-x-2 justify-between"
              >
                <img
                  src={item.img}
                  alt="icon skill"
                  className="min-w-[60px] max-w-[70px]"
                />
                {/* <p className="font-normal text-xl">{item.name}</p> */}
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0  w-full"
          >
            {mySkills2.map((item, index) => (
              <div
                key={index}
                className="w-[200px] flex flex-col items-center space-x-2 justify-between"
              >
                <img
                  src={item.img}
                  alt="icon skill"
                  className="min-w-[60px] max-w-[70px]"
                />
                {/* <p className="font-normal text-xl">{item.name}</p> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
