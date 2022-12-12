import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "../public/assets/logo.png"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(true);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/property"||
      router.asPath === "/netflix"||
      router.asPath === "/sushi"||
      router.asPath === "/gym"
    ) {
      setNavBg("transparent")
      setLinkColor("#f8f8f8")
    }
    else{
      setNavBg(navBg)
      setLinkColor(linkColor)
    }
  },[])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90){
        setShadow(shadow)
      }
      else{
        setShadow(!shadow)
      }
    }
    window.addEventListener("scroll", handleShadow)
  },[])

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={Logo}
          alt="logo"
          width="125"
          height="50"
        />

        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-500 ease-in duration-500">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-500 ease-in duration-500">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-500 ease-in duration-500">
                skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-500 ease-in duration-500">
                projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-500 ease-in duration-500">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src={Logo}
                  alt="logo"
                  width="87"
                  height="35"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="text-xs sm:text-sm w-[85%] md:w-[90%] py-4">
                  I assist clients in making their imaginative website a
                  reality.
                </p>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link onClick={() => setNav(false)} href="/">
                    <li className="py-4 text-sm ">Home</li>
                  </Link>
                  <Link onClick={() => setNav(false)} href="/#about">
                    <li className="py-4 text-sm ">About</li>
                  </Link>
                  <Link onClick={() => setNav(false)} href="/#skills">
                    <li className="py-4 text-sm ">Skills</li>
                  </Link>
                  <Link onClick={() => setNav(false)} href="/#projects">
                    <li className="py-4 text-sm ">Projects</li>
                  </Link>
                  <Link onClick={() => setNav(false)} href="/#contact">
                    <li className="py-4 text-sm ">Contact</li>
                  </Link>
                </ul>

                <div className="pt-40">
                  <div className="uppercase tracking-widest text-[#5651e5]">
                    let&apos;s connect
                  </div>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dennis-rotich-3541ba207/"><FaLinkedinIn /></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://github.com/Rotich2000" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a target="_blank" rel="noreferrer" href="mailto:drkimutai@gmail.com?subject=subject&cc=cc@example.com"><AiOutlineMail /></a> 
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://wa.me/+254746960449" rel="noreferrer" target="_blank"><BsWhatsapp /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
