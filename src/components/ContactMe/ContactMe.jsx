"use client";
import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { motion } from "motion/react";

const ContactMe = () => {
  return (
    <div className="w-[90%] max-w-[1280px] mx-auto mt-20 mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Phone size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          Contact Me
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-medium sm:text-xl text-lg w-full sm:w-[70%] text-[#474747] mb-4"
      >
        Feel free to contact me, I will reply as soon as possible and let's
        discuss how we can work together.
      </motion.p>
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full mx-auto border-b-4  border-gray-400 "
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
        className="flex flex-col md:flex-row sm:flex-col mt-8"
      >
        <div className="w-full md:w-2/3 sm:w-[80%]">
          <h3 className="font-medium sm:text-xl text-lg mb-4">
            Find me on social media
          </h3>
          <div className="grid grid-cols-2 gap-4 w-full sm:w-[80%] md:w-[80%] text-white">
            <Link
              href={"https://www.instagram.com/naufalassyafiq_/"}
              className="flex items-center justify-center px-4 py-3 bg-[#F367D2] rounded-lg cursor-pointer group"
            >
              <InstagramLogo
                size={25}
                weight="regular"
                className="me-2 group-hover:rotate-45 group-hover:scale-105 transition-all duration-500"
              />
              <p className="group-hover:scale-105 transition-all duration-500">
                Instagram
              </p>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/naufal-assyafiq/"}
              className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#4B49C9] group"
            >
              <LinkedinLogo
                size={25}
                weight="regular"
                className="me-2 group-hover:rotate-45 group-hover:scale-105 transition-all duration-500"
              />
              <p className="group-hover:scale-105 transition-all duration-500">
                Linkedin
              </p>
            </Link>
            <Link
              href={
                "https://mail.google.com/mail/?view=cm&to=assyafiqnaufal625@gmail.com"
              }
              className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#DA3E3E] group"
            >
              <EnvelopeSimple
                size={25}
                weight="regular"
                className="me-2 group-hover:rotate-45 group-hover:scale-105 transition-all duration-500"
              />
              <p className="group-hover:scale-105 transition-all duration-500">
                Gmail
              </p>
            </Link>
            <Link
              href={"https://github.com/NaufalAssyafiqF"}
              className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#333] group"
            >
              <GithubLogo
                size={25}
                weight="regular"
                className="me-2 group-hover:rotate-45 group-hover:scale-105 transition-all duration-500"
              />
              <p className="group-hover:scale-105 transition-all duration-500">
                Github
              </p>
            </Link>
            <Link
              href={"https://wa.me/6282114830733"}
              className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#25D366] col-span-2 group"
            >
              <WhatsappLogo
                size={25}
                weight="regular"
                className="me-2 group-hover:rotate-45 group-hover:scale-105 transition-all duration-500"
              />
              <p className="group-hover:scale-105 transition-all duration-500">
                Whatsapp
              </p>
            </Link>
          </div>
        </div>
        <div className="w-[15%]"></div>
        <div className="w-full sm:w-[80%] md:w-[50%] md:mt-0 sm:mt-8 mt-8 ">
          <h1 className="font-medium sm:text-xl text-lg mb-4">
            Or send me a message
          </h1>
          <div className="flex-flex-col justify-between">
            <form action="">
              <input
                type="text"
                placeholder="Enter your name"
                className="block w-full mb-4 border border-gray-500 rounded-md py-2 px-2 placeholder-shown:pl-2 placeholder-shown:text-sm"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="block w-full mb-4 border border-gray-500 rounded-md py-2 px-2 placeholder-shown:pl-2 placeholder-shown:text-sm"
              />
              <textarea
                name=""
                id=""
                placeholder="Enter your message"
                className="block w-full min-h-40 mb-4 border border-gray-500 rounded-md py-2 px-2 placeholder-shown:pl-2 placeholder-shown:text-sm"
              ></textarea>
              <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-4 py-2 rounded-md w-full text-center text-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <a href="https://www.google.co.id">test untuk cross domain</a>
    </div>
  );
};

export default ContactMe;
