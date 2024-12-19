"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  HouseLine,
  Rocket,
  User,
  Phone,
  List,
} from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = [
    { icon: <HouseLine size={25} weight="bold" />, text: "Home" },
    { icon: <Rocket size={25} weight="bold" />, text: "Project" },
    { icon: <User size={25} weight="bold" />, text: "About" },
    { icon: <Phone size={25} weight="bold" />, text: "Contact" },
  ];
  return (
    <div className="flex justify-between w-[90%] absolute top-0 left-1/2 transform -translate-x-1/2 h-14 mt-3 ">
      {/* Bagian Kiri (Logo dan Profil) */}
      <div className="flex justify-center items-center space-x-2">
        <Image
          src="/images/saya.png"
          width={40}
          height={40}
          alt="profile-image"
          className="sm:w-50 sm:h-50"
        />
        <p className="font-medium text-sm sm:text-lg">@NaufalAssyafiq_</p>
        <Image
          src="/images/centang.png"
          width={15}
          height={15}
          alt="centang-biru"
          className="sm:w-4 sm:h-4"
        />
      </div>

      {/* navbar mobile */}
      <div className="sm:hidden relative">
        <nav
          className={`flex flex-col justify-center items-center bg-white rounded-full p-4 transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-60" : "max-h-14"
          } overflow-hidden`}
        >
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor pointer z-10 ${
              isOpen ? "mb-8" : "mb-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <List size={32} weight="bold" />
          </div>
          <ul
            // className={`flex flex-col items-center space-y-4 transition-all duration-500 ease-in-out ${
            //   isOpen
            //     ? "opacity-100 translate-y-0"
            //     : "hidden opacity-0 -translate-y-0"
            // }`}
            className={`flex mt-12 flex-col items-center space-y-4 transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100 translate-y-0" : " opacity-0 -translate-y-5"
            }`}
          >
            {navbar.map((item, index) => (
              <li key={index} className="">
                {React.cloneElement(item.icon, { className: "w-7 h-7" })}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Navbar */}
      <nav className="bg-white sm:relative shadow-xl border-2 border-gray-200 shadow-inner-4xl rounded-full px-4 sm:px-10 py-2 sm:flex justify-center items-center flex-col relative top-0 right-0 hidden">
        <ul className="flex space-x-3 sm:space-x-5">
          {navbar.map((item, index) => (
            <li
              key={index}
              className="group flex items-center relative cursor-pointer w-8 hover:w-24 transition-all duration-500 ease-in-out"
            >
              {/* Icon */}
              <div className="transition-transform duration-500 group-hover:translate-x-1">
                {item.icon}
              </div>
              {/* Text */}
              <span className="absolute text-xs sm:text-lg font-medium left-7 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-in py-1 rounded-md ">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <ul
          className={`absolute top-14 right-0 bg-white shadow-lg rounded-lg py-4 px-6 space-y-4 transform ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } transition-all duration-300 ease-in-out sm:static sm:flex sm:space-y-0 sm:space-x-5 sm:bg-transparent sm:shadow-none sm:transform-none`}
        > */
}
