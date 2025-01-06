"use client";
import { motion } from "motion/react";
import React from "react";
import webAppProject from "@/data/webAppProject";
import CardProject from "@/components/Elements/CardProject";
import { Rocket } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const MyWebAppProjects = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto flex justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-2"
        >
          <Rocket size={45} weight="bold" className="rotate-45" />
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            My Projects
          </h1>
        </motion.div>
      </div>
      <div className="w-[90%] mx-auto flex items-center space-x-2 mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto border-b-4 border-gray-400 px-4 py-3  flex items-center space-x-2"
        >
          <Image
            src="/icons/appdev-icon.png"
            width={30}
            height={30}
            alt="appdev-icon"
          />
          <p className="font-medium text-lg ">Web/App Projects</p>
        </motion.div>
      </div>
      <div className="w-[90%] mx-auto mt-10 flex lg:justify-between md:justify-center sm:justify-center justify-center flex-wrap gap-y-8 mb-8">
        {webAppProject.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyWebAppProjects;
