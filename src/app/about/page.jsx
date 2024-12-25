import AboutMe from '@/components/AboutMe/AboutMe'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full md:mt-48 sm:mt-20 mt-20 mb-40">
      <AboutMe />
      <Navbar />
    </div>
  );
}

export default page