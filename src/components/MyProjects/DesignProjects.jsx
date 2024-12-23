import Image from 'next/image';
import React from 'react'

const DesignProjects = () => {
  return (
    <div className='w-full mt-20'>
      <div className="w-[90%] mx-auto flex items-center space-x-2 mt-4">
        <div className="mx-auto border-b-4 border-gray-400 px-4 py-3  flex items-center space-x-2">
          <Image
            src="/icons/3d-icon.png"
            width={30}
            height={30}
            alt="appdev-icon"
          />
          <p className="font-medium text-lg ">3D Design Projects</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-4 grid-rows-8 gap-4">
        <div className="row-span-4">
          <Image src="/images/design/hut-ri.png" width={300} height={300} alt="hut-ri" className='w-full h-full '/>
        </div>
        <div className="row-span-3">
            <Image src="/images/design/toko-jepang.png" width={300} height={300} alt="toko-jepang" className='w-full h-full '/>
        </div>
        <div className="col-span-2 row-span-4">
            <Image src="/images/design/masjid.png" width={300} height={300} alt="masjid" className='w-full h-full '/>
        </div>
        <div className="row-span-3 col-start-2 row-start-4">
            <Image src="/images/design/uhamka.png" width={300} height={300} alt="uhamka" className='w-full h-full '/>
        </div>
        <div className="row-span-2 row-start-5">
            <Image src="/images/design/bed-room.png" width={300} height={300} alt="bed-room" className='w-full h-full '/>
        </div>
        <div className="row-span-4 col-start-3 row-start-5">
            <Image src="/images/design/cute-character.png" width={300} height={300} alt="cute-character" className='w-full h-full '/>
        </div>
        <div className="row-span-4 col-start-4 row-start-5">
            <Image src="/images/design/liblary.png" width={300} height={300} alt="liblary" className='w-full h-full '/>
        </div>
        <div className="row-span-2 row-start-7">
            <Image src="/images/design/game.png" width={300} height={300} alt="game" className='w-full h-full '/>
        </div>
        <div className="row-span-2 row-start-7">
            <Image src="/images/design/beach.png" width={300} height={300} alt="beach" className='w-full h-full '/>
        </div>
      </div>
    </div>
  );
}

export default DesignProjects