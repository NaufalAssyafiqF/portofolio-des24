import React from 'react'
import { Rocket, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import CardProject from '../Elements/CardProject';
import recentProject from '@/data/recentProject';

const RecentProject = () => {
    
  return (
    <div className="w-full mt-20 mb-40">
      <div className="w-[90%] mx-auto flex justify-between">
        <div className="flex items-center space-x-2">
          <Rocket size={45} weight="bold" className="rotate-45" />
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Recent Project
          </h1>
        </div>
        <div className="sm:flex items-center space-x-2 text-gray-500 cursor-pointer hidden">
          <p className="font-medium text-lg">View more</p>
          <ArrowRight size={25} weight="regular" />
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10 flex lg:justify-between md:justify-center sm:justify-center justify-center flex-wrap gap-y-8 mb-8">
        {recentProject.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
      <div className="flex items-center text-gray-500 space-x-2 max-w-[40%]  underline underline-offset-2 mx-auto mt-8 sm:hidden">
        <p className="font-medium text-lg ">View more</p>
        <ArrowRight size={25} weight="bold" />
      </div>
    </div>
  );
}

export default RecentProject