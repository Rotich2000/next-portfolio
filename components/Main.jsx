import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let me assist you in making an imaginative website to a reality.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi there!, I'm <span className="text-[#5651e5]">Dennis</span>
          </h1>
          <h1 className="py-2 text-gray-700 capitalize">
            A front-end web developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer who focuses on creating memorable
            digital experiences. At the moment, I'm concentrating on developing
            responsive front-end web applications while also learning back-end
            development.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dennis-rotich-3541ba207/"><FaLinkedinIn /></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/Rotich2000" target="_blank" rel="noopener noreferrer"><FaGithub /></a> 
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:drkimutai@gmail.com?subject=subject&cc=cc@example.com"><AiOutlineMail /></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://wa.me/+254746960449" rel="noopener noreferrer" target="_blank"><BsWhatsapp /></a>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
