import React from 'react'
import { Rocket, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import CardProject from '../Elements/CardProject';
import recentProject from '@/data/recentProject';

const RecentProject = () => {
    
  return (
    <div className="w-full mt-20 mb-20">
      <div className="w-[90%] mx-auto flex justify-between">
        <div className="flex items-center space-x-2">
          <Rocket size={45} weight="bold" className="rotate-45" />
          <h1 className="font-bold text-4xl">Recent Project</h1>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
          <p className="font-medium text-lg">View more</p>
          <ArrowRight size={25} weight="regular" />
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10 flex justify-between flex-wrap gap-y-8">
        {recentProject.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default RecentProject