import { ArrowRight, CalendarDots } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image'
import React from 'react'

const CardProject = () => {
  return (
    <div className="w-80 h-96 rounded-2xl shadow-xl border-2 border-gray-300 overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer">
      <div className="border-b-2 border-gray-300 relative overflow-hidden">
        <Image
          src="/images/syafiq-webukm.png"
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
          Website UKM
        </h3>
        <p className="text-xs font-normal text-gray-500 ">
          website ecommerce untuk menghubungkan para pelaku umkm dengan pembeli
        </p>
        <div className="flex items-center space-x-2">
          <CalendarDots size={25} className="text-gray-500" />
          <p className="text-sm font-medium text-gray-500">Juni 2024</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image
              src="/images/nextjslogo.png"
              width={30}
              height={30}
              alt="nextjslogo"
            />
          </div>
          <div>
            <Image
              src="/images/tailwindlogo.png"
              width={30}
              height={30}
              alt="tailwindlogo"
            />
          </div>
          <div>
            <Image
              src="/images/reactlogo.png"
              width={30}
              height={30}
              alt="reactlogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject