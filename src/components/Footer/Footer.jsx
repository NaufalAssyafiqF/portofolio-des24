import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <hr className="w-[90%] mx-auto border-b border-gray-400 mb-8"/>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center w-[90%] mx-auto mb-8">
        <div className="flex sm:justify-center justify-start mb-3 sm:mb-0 items-center space-x-2">
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
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 font-medium text-sm mb-1">
            <EnvelopeSimple size={20} weight="bold" />
            <p>assyafiqnaufal625@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4 font-medium text-sm mb-1">
            <Phone size={20} weight="bold" />
            <p>+62 821 1483 0733</p>
          </div>
          <div className="flex items-center space-x-4 font-medium text-sm mb-1">
            <MapPin size={20} weight="bold" />
            <p>Bogor-Jawa Barat, Indonesia</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-4 text-center mb-2">
        <p className="font-medium text-sm">Copyright &copy; Naufal Assyafiq 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
