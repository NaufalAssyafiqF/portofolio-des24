"use client";
import React from "react";
import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const HiredSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      className="w-full mt-20 mb-40"
    >
      <div className="w-[90%] max-w-[1280px] mx-auto flex md:justify-between items-center rounded-xl shadow-xl p-8 bg-[#f9f9f9] flex-col md:flex-row justify-center">
        <div className="md:w-[60%] w-full md:text-left text-center">
          <h1 className="font-bold text-4xl">I'M READY TO BE HIRED</h1>
          <h3 className="font-semibold text-2xl text-[#474747]">
            FOR YOUR PROJECT
          </h3>
          <p className="font-normal text-xl text-[#474747] mt-3">
            With my skills in web development, mobile development and 3D Design,
            i can help you create engaging and user-friendly digital products.
            let's work together to bring your ideas together.
          </p>
          <Link href="/contact">
            <button className="font-medium text-xl bg-[#ebebeb] rounded-xl px-4 py-3 mt-8 flex items-center shadow-md group hover:scale-105 transition-all duration-500 mx-auto md:mx-0">
              Contact me{" "}
              <PaperPlaneRight
                size={20}
                weight="bold"
                className="ml-2 group-hover:-rotate-45 transition-all duration-500"
              />{" "}
            </button>
          </Link>
        </div>
        <div className="md:w-[40%] w-full mt-8 md:mt-0">
          <Image
            src="/images/hired-image.png"
            width={500}
            height={500}
            alt="hired-image"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HiredSection;
