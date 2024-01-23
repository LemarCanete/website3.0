'use client'
import React from 'react'
import { useState } from 'react'
import { BsCheck, BsPlay, BsDownload } from 'react-icons/bs'

const Project = ({title, description, img, rowSpan, colSpan, features, technologies, demo, sourceCode}) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div class={`bg-zinc-950  ${!isClicked ? "hover:scale-110" : ""} hover:rounded hover:shadow-2xl ${isClicked ? "w-full lg:w-5/6 absolute right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " : ""} ${rowSpan} ${colSpan}`} onClick={()=> setIsClicked(()=> !isClicked)}>
            <img src={img} alt="" className='rounded-xl'/>
            <div className={`${!isClicked ? "" : "lg:absolute bottom-0 bg-gradient-to-t from-zinc-950 lg:via-zinc-800 " } w-full`}>
                <div className={`${isClicked ? "block p-5 w-full" : "hidden"}`}>
                    <div className="flex gap-4 mb-5 z-40">
                        <button type='button' className='bg-slate-400 px-5 rounded-3xl hover:text-slate-400 hover:bg-white'><a href={sourceCode} target='_blank'><BsDownload className='inline md:text-3xl text-3xl'/> Source Code</a></button>
                        <button type='button' className='bg-red-600 px-5 rounded-3xl hover:text-red-600 hover:bg-white'><a href={demo} target='_blank'><BsPlay className='inline md:text-5xl text-4xl'/>Live Demo</a></button>
                    </div>
                    <p className="backdrop-blur-sm font-bold text-lg">{title}</p>
                    <p className="indent-16">{description}</p>
                    {/* features */}
                    <div className=" grid grid-rows-4 grid-flow-col">
                        <p className='italic'>Features</p>
                        {features.map((feature, i)=><Feature name={feature}/>)}
                    </div>
                    {/* technologies */}
                    <p className='italic py-2'>Technologies</p>
                    <div className=" flex gap-2 flex-wrap">
                        {technologies.map((technology, i)=><Technology name={technology}/>)}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const Feature = ({name}) =>{
    return (
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <BsCheck color='green' className='text-3xl'/>
            <span>{name}</span>
        </li>
    )
}

const Technology = ({name}) =>{
    return (
        <div className="mt-1">
            <p className='bg-zinc-600 inline px-2 py-1'>{name}</p>
        </div>
    )
}

export default Project