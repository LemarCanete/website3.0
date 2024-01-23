'use client'
import React, { useState } from 'react'
import { BsDownload, BsArrowDown, BsArrowRight } from 'react-icons/bs'
import { SiFacebook, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import Particle from './Particle'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div id='home' className='h-screen relative px-5 flex flex-col justify-center gap-3 lg:px-32'>
        <img src="projects/coding.svg" alt="" className='md:absolute md:w-3/6 right-0'/>
        <div className="md:w-3/6">
            <p className="text-md text-teal-300">FULL-STACK DEVELOPER</p>
            <div className='text-2xl md:text-4xl'>
                <Typewriter
                    className=""
                    options={{
                        strings: ['Lemar Cañete'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <p className='italic mt-3 text-base'>Always up for a challenge and fuelled by a passion for web development and graphic design.</p>
        </div>
        <button className="border p-3 mt-4 hover:bg-white z-10 hover:text-zinc-950 z-10 md:w-3/6"><a href="#contact">Contact Me</a></button>
        <div className="flex gap-3 text-2xl flex-wrap z-20 cursor-pointer">
            <a className="shadow-lg hover:bg-zinc-950 hover:text-red-400 hover:scale-150 hover:mx-2" href='mailto: lemar.canete@cit.edu' target='_blank'><SiGmail /></a>
            <a className="shadow-lg hover:bg-zinc-950 hover:text-blue-400 hover:scale-150 hover:mx-2" href='https://www.linkedin.com/in/lemar-c-1aaa10225/' target='_blank'><SiLinkedin /></a>
            <a className="shadow-lg hover:scale-150 hover:mx-2" href='https://github.com/LemarCanete' target='_blank'><SiGithub /></a>
            <a className="shadow-lg hover:bg-zinc-950 hover:text-blue-400 hover:scale-150 hover:mx-2" href='https://www.facebook.com/lemar.canete.750/' target='_blank'><SiFacebook /></a>
            <a className="shadow-lg text-lg" href='tel:09762694038' target=''>09762694038</a>
        </div>
        <Particle />
        <a href="#projects" className={`text-2xl cursor-pointer flex justify-center p-5 z-10`}>
            <BsArrowDown />
        </a>
    </div>
  )
}


export default Home