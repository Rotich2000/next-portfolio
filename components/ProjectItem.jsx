import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title,language,backgroundImg, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
    <Image className="rounded-xl group-hover:opacity-10 ease-in duration-500" src={backgroundImg} alt='projects'/>
    <div className="hidden group-hover:block top-[50%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-500">
        <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 text-white text-center">{language}</p>
        <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer px-2">More info</p>
        </Link>
    </div>
  </div>
  )
}

export default ProjectItem