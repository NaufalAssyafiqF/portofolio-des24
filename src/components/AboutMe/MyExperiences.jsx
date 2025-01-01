import { Briefcase, GraduationCap } from '@phosphor-icons/react/dist/ssr';
import React from 'react'

const MyExperiences = () => {
  return (
    <div className="mt-20">
      <div className="w-[90%] mx-auto flex items-center space-x-2">
        <GraduationCap size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          My Educations & Experiences
        </h1>
      </div>
      <div className="w-[90%] mx-auto p-6 relative mt-8">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          <div className="mb-8 flex items-center">
            <div className="w-1/2 flex justify-center text-right pr-8 mt-8 hover:scale-105 transition-all duration-500">
              <div className="w-[80%] bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">
                  Computer Science Bachelor degree
                </h2>
                <p className="text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2"></i>Universitas
                  Muhammadiyah Prof Dr HAMKA
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-calendar-alt mr-2"></i>2020 - 2024
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-left relative mt-8">
              <div className="bg-gray-200 p-2 rounded-full absolute -translate-y-1/2 top-0 -translate-x-6">
                <GraduationCap
                  size={30}
                  weight="regular"
                  className="fas fa-graduation-cap text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-8 flex items-center">
            <div className="w-1/2 flex justify-left relative">
              <div className="bg-gray-200 p-2 rounded-full absolute -translate-y-1/2 top-0 right-0 translate-x-6">
                <GraduationCap
                  size={30}
                  weight="regular"
                  className="fas fa-graduation-cap text-2xl"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center pl-8 hover:scale-105 transition-all duration-500">
              <div className="w-[80%] bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">
                  Cloud Computing Cohort
                </h2>
                <p className="text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2"></i>Bangkit 2023
                  Program MSIB
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-calendar-alt mr-2"></i>Feb 2023 - Jun
                  2023
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8 flex items-center">
            <div className="w-1/2 flex justify-center text-right pr-8 mb-8 hover:scale-105 transition-all duration-500">
              <div className="w-[80%] bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Web Developer Intern</h2>
                <p className="text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2"></i>PT Goritmix
                  Solusi Teknologi
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-calendar-alt mr-2"></i>May 2024 - Jun 2024
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-left relative mb-8">
              <div className="bg-gray-200 p-2 rounded-full absolute -translate-y-1/2 top-0 -translate-x-6">
                <Briefcase
                  size={30}
                  weight="regular"
                  className="fas fa-graduation-cap text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperiences