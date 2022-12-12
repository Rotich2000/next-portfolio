import Head from "next/head";
import Image from "next/image";
import React from "react";
import Netflix from "../public/assets/projects/netflix.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div>
      <Head>
        <title>PROJECTS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
          <Image
            className="absolute z-1"
            src={Netflix}
            layout="fill"
            objectFit="cover"
            alt="netflix"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Netflix</h2>
            <h3>Next JS / Tailwind / Mapbox</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using REACT and is hosted using firebase. Users
              are able to check the movies they want and also make payments of their subscription using stripe.
              What i learnt: Pull API's from the TMDB api, Add payment to my application through stripe(i didn't fully manage since i was using web version 9, 
              while the docs on stripe api was using web version 8 but i am still working on it) and uploading my application on firebase.
            </p>
            <button className="px-8 py-2 mt-4 mr-8"><a target="_blank" rel="noopener noreferrer" href="https://netflix-clone-ede02.web.app/">Demo</a></button>
            <button className="px-8 py-2 mt-4"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Rotich2000/netflix-clone">Code</a></button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  {" "}
                  <RiRadioButtonFill className="pr-1" /> React{" "}
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  {" "}
                  <RiRadioButtonFill className="pr-1" /> CSS{" "}
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  {" "}
                  <RiRadioButtonFill className="pr-1" /> Javascript{" "}
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  {" "}
                  <RiRadioButtonFill className="pr-1" /> TMDB API{" "}
                </p>
              </div>
            </div>
          </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer text-center">Back</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default netflix;
