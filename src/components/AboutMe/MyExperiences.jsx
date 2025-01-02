import { Briefcase, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import CardExperience from "./CardExperience";
import IconExperience from "./IconExperience";

const MyExperiences = () => {
  return (
    <div className="mt-20">
      <div className="w-[90%] mx-auto flex items-center space-x-2">
        <GraduationCap size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          My Educations & Experiences
        </h1>
      </div>
      <div className="w-[90%] mx-auto md:p-6 sm:p-0 p-0 relative mt-8">
        <div className="relative">
          <div className="absolute top-0 left-3 sm:top-0 sm:left-3 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>
          <div className=" flex flex-row-reverse sm:flex-row-reverse md:flex-row items-center justify-">
            <CardExperience
              title="Computer Science Bachelor Degree"
              place="Universitas Muhammadiyah Prof Dr HAMKA"
              date="2020 - 2024"
            />
            <IconExperience icon="education" iconStyle="iconLeft" />
          </div>
          <div className=" flex items-center">
            <IconExperience icon="education" iconStyle="iconRight" />
            <CardExperience
              title="Cloud Computing Cohort"
              place="Bangkit 2023 Program MSIB"
              date="Feb 2023 - Jun 2023"
            />
          </div>
          <div className=" flex flex-row-reverse sm:flex-row-reverse md:flex-row items-center">
            <CardExperience
              title="Web Developer Internship"
              place="PT Goritmix Solusi Teknologi"
              date="May 2024 - Jun 2024"
            />
            <IconExperience icon="work" iconStyle="iconLeft" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperiences;
