"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const WelcomeText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="absolute w-[90%] text-center sm:text-left sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] bottom-24 sm:bottom-16 left-1/2 transform -translate-x-1/2"
    >
      <p className="text-xl sm:text-2xl font-medium">Welcome to</p>
      <TypeAnimation
        sequence={[
          "My personal website",
          500,
          "My digital portfolio",
          500,
          "My work showcase",
          500,
        ]}
        className="text-3xl sm:text-5xl font-bold"
        speed={30}
        // style={{ fontSize: "2em" }}
        repeat={Infinity}
      ></TypeAnimation>
    </motion.div>
  );
};

export default WelcomeText;
