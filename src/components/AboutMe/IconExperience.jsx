import { Briefcase, GraduationCap } from '@phosphor-icons/react/dist/ssr';
import React from 'react'

const IconExperience = ({icon ,iconStyle}) => {
  return (
    <div className="md:w-1/2 sm:w-[5%] w-[5%] flex justify-left relative mt-8 mb-8 bg-blue-700">
      <div className={`bg-gray-200 p-2 rounded-full absolute ${iconStyle} `}>
        {icon == "education" ? (
          <GraduationCap
            size={30}
            weight="regular"
            className="fas fa-graduation-cap text-2xl" 
          />
        ) : (
          <Briefcase
            size={30}
            weight="regular"
            className="fas fa-graduation-cap text-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default IconExperience