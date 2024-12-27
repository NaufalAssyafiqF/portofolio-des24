import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const ContactMe = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col space-y-4 mt-20 mb-20">
      <div className="flex items-center space-x-2">
        <Phone size={45} weight="bold" />
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          Contact Me
        </h1>
      </div>
      <p className="font-medium sm:text-xl text-lg w-[70%] text-[#474747]">
        Feel free to contact me, I will reply as soon as possible and let's
        discuss how we can work together.
      </p>
      <hr className="w-full mx-auto border-b-4  border-gray-400 " />
      <div className="flex space-x-2 mt-8">
        <div className="w-1/2">
          <h3 className="font-medium sm:text-xl text-lg mb-4">
            Find me on social media
          </h3>
          <div className="grid grid-cols-2 gap-4 w-2/3 text-white">
            <div className="flex items-center justify-center px-4 py-3 bg-[#F367D2] rounded-lg cursor-pointer">
              <InstagramLogo size={25} weight="regular" className="me-2" />
              <p>Instagram</p>
            </div>
            <div className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#4B49C9]">
              <LinkedinLogo size={25} weight="regular" className="me-2" />
              <p>Linkedin</p>
            </div>
            <div className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#DA3E3E]">
              <EnvelopeSimple size={25} weight="regular" className="me-2" />
              <p>Gmail</p>
            </div>
            <div className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#333]">
              <GithubLogo size={25} weight="regular" className="me-2" />
              <p>Github</p>
            </div>
            <div className="flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer bg-[#25D366] col-span-2">
              <WhatsappLogo size={25} weight="regular" className="me-2" />
              <p>Whatsapp</p>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="w-1/2">
          <h1 className="font-medium sm:text-xl text-lg mb-4">
            Or send me a message
          </h1>
          <div>
            <form action="flex flex-col space-y-4">
                <input type="text" className="block"/>
                <input type="text" className="block"/>
                <textarea name="" id="" className="block"></textarea>
                <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
