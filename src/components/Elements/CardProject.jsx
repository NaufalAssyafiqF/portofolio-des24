"use client";
import { ArrowRight, CalendarDots } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { slideLeft } from "@/utility/animation";

const CardProject = ({ project, index }) => {
  return (
    <Link href={project.link}>
      <motion.div
        variants={slideLeft(project.delay)}
        initial="hidden"
        whileInView={"visible"}
        className="w-full min-h-96 max-h-[400px] rounded-2xl shadow-xl border-2 border-gray-300 overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer"
      >
        <div className="border-b-2 border-gray-300 relative overflow-hidden">
          <Image
            src={project.image}
            width={300}
            height={300}
            alt="syafiq-webukm"
            className="w-full max-h-48 rounded-t-2xl"
          />
          <div className="w-full h-full absolute top-0 left-0 group-hover:bg-[#575555]  group-hover:opacity-50 z-9 transition-all duration-500 ease-in-out"></div>
          <div className="w-full h-full absolute top-0 left-0 group-hover:bg-white/10 group-hover:backdrop-blur-sm z-8 transition-all duration-500 ease-in-out"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out z-10">
            <p>View project</p>
            <ArrowRight size={25} weight="regular" />
          </div>
        </div>

        <div className="p-4 flex flex-col space-y-2 ">
          <h3 className="text-xl font-semibold group-hover:underline">
            {project.title}
          </h3>
          <p className="text-xs font-normal text-gray-500 ">
            {project.description}
          </p>
          <div className="flex items-center space-x-2">
            <CalendarDots size={25} className="text-gray-500" />
            <p className="text-sm font-medium text-gray-500">{project.date}</p>
          </div>
          <div className="flex space-x-2">
            {project.techlogo.map((logo, index) => (
              <div key={index}>
                <Image src={logo} width={30} height={30} alt="tech-logo" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardProject;
