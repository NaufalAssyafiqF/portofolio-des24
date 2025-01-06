import { CalendarDots, MapPin } from '@phosphor-icons/react/dist/ssr';
import React from 'react'

const CardExperience = ({title, place, date, delay}) => {
  return (
    <div
      className="md:w-1/2 sm:w-[95%] w-[95%] flex md:justify-center sm:justify-end justify-end text-right md:pr-8 sm:pr-0 pr-0 mt-8 mb-8 hover:scale-105 transition-all duration-500"
    >
      <div className="md:w-[85%] sm:w-[90%] w-[90%] text-left bg-white p-4 rounded-lg shadow-md">
        <h2 className="md:text-lg sm:text-base text-base font-semibold mb-4">
          {title}
        </h2>
        <div className="text-gray-600 flex items-center mb-1">
          <MapPin size={20} className="md:mr-2 sm:mr-1 mr-1 min-w-5" />
          <p className="text-sm sm:text-text-base md:text-lg">{place}</p>
        </div>
        <div className="text-gray-600 flex items-center">
          <CalendarDots size={20} className="md:mr-2 sm:mr-1 mr-1 min-w-5" />
          <p className="text-sm sm:text-text-base md:text-lg">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default CardExperience