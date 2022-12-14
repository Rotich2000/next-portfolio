import Link from "next/link";
import React from "react";
import { AiOutlineArrowUp, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h1 className="py-4 capitalize">Get in touch</h1>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Dennis Rotich</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>

                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                   <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dennis-rotich-3541ba207/"><FaLinkedinIn /></a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                   <a href="https://github.com/Rotich2000" target="_blank" rel="noreferrer"><FaGithub /></a> 
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a target="_blank" rel="noreferrer" href="mailto:drkimutai@gmail.com?subject=subject&cc=cc@example.com"><AiOutlineMail /></a> 
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="https://wa.me/+254746960449" rel="noreferrer" target="_blank"><BsWhatsapp /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      className="border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 outline-0 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                 <textarea className="border-2 rounded-lg p-3 border-gray-300 outline-0" cols="30" rows="10"></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">Send message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href="/">
                <div className="rounded-full shadow-lg text-[#5651e5] shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineArrowUp size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
