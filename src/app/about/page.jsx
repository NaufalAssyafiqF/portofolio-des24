import AboutMe from "@/components/AboutMe/AboutMe";
import MyExperiences from "@/components/AboutMe/MyExperiences";
import MySkill from "@/components/AboutMe/MySkill";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="w-full md:mt-48 sm:mt-20 mt-20 mb-40">
      <AboutMe />
      <MySkill />
      <MyExperiences />
      <Navbar />
    </div>
  );
};

export default page;
