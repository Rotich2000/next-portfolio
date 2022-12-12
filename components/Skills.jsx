import Image from 'next/image'
import React from 'react'
import htmlImg from "../public/assets/skills/html.png"
import cssImg from "../public/assets/skills/css.png"
import javascriptImg from "../public/assets/skills/javascript.png"
import reactImg from "../public/assets/skills/react.png"
import nextImg from "../public/assets/skills/nextjs.png"
import mongodbImg from "../public/assets/skills/mongo.png"
import nodeImg from "../public/assets/skills/node.png"
import tailwindImg from "../public/assets/skills/tailwind.png"
import shoppifyImg from "../public/assets/skills/shopify.png"
import firebaseImg from "../public/assets/skills/firebase.png"
import githubImg from "../public/assets/skills/github1.png"
import awsImg from "../public/assets/skills/aws.png"

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
            <h2 className='py-4 capitalize'>What I can do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={htmlImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={cssImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={javascriptImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={reactImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={nextImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={mongodbImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MONGO DB</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={nodeImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={tailwindImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={shoppifyImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Shopify</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={firebaseImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={githubImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className="m-auto">
                            <Image src={awsImg} alt="skills" width="64" height="64" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>AWS Technologies</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills