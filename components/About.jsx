import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2>Who I Am</h2>
          <p className="py-2 text-gray-600">Enthusiastic <span className="text-[#5651e5] text-xl">Software Developer</span> </p>
          <p className="py-2 text-gray-600">
            I am a web developer, who has worked on over 40 different websites.
            I studied web development for 4 years and have worked with startups
            to build their web presence over the past 2 years. I am well
            adversant in html, css and javascript and very Good in react and
            node Express. Other than websites i am Good in web scrapping with
            python and also have done some sample personal projects.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated by how powerful programming can be, I was drawn to learn
            more. I began learning javascript and became even more excited about
            making websites interactive. I then began freelance work with
            Upwork. I&apos;m currently working on projects with React JS, Next JS,
            Firebase, and learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
        </div>
        <div className="full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src="/../public/assets/me.jpg" alt="about" width="500" height="500" className="rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default About;
