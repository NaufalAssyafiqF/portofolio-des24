import { User } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import React from 'react'

const AboutMe = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col space-y-4 mt-20 mb-40">
      <div className="flex items-center space-x-2">
        <User size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">About Me</h1>
      </div>
      <div className="flex md:flex-row flex-col-reverse items-center justify-between space-x-4 space-y-4">
        <div className="md:w-[50%] w-[90%]">
          <p className="font-medium sm:text-lg text-justify mt-8">
            As a Computer Science graduete, I am a passionate web developer, mobile developer and
            3D designer with a proven track record in creating engaging digital
            experiences. I have a strong command of React, Next.js and flutter, which I
            have used to build a variety of web or mobile applications, including a
            Web-UKM, Web Animelist, and multiple landing pages. Additionally, I
            have honed my 3D modeling skills using Blender to produce visually
            stunning assets. I am a highly motivated individual who is always
            seeking opportunities to expand my knowledge and take on new
            challenges. I am confident in my ability to contribute significantly
            to your team and drive the success of your projects.
          </p>
        </div>
        <div className="md:w-[50%] sm:w-[90%] w-[90%] flex justify-center overflow-hidden mx-auto">
          <Image
            src="/images/foto-saya.png"
            width={1080}
            height={1080}
            alt="foto-about"
            className="w-[350px] aspect-square scale-125"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe