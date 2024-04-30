import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs, SiGithub, SiCsharp, SiHtml5, SiCss3, SiDocker, SiWordpress, SiTailwindcss, SiBootstrap, SiMicrosoftaccess, SiVisualstudiocode, SiVisualstudio, SiPostman, SiFirebase, SiRedux  } from "react-icons/si";
import {SiJavascript, SiJquery, SiSocketdotio, SiPhp, SiMicrosoftexcel, SiFigma, SiCanva, SiVirtualbox } from "react-icons/si"
const Skill = ({icon, name}) =>{
    return (
        <div className="border rounded inline-block bg-zinc-600 border-none m-1 h-20 w-20 md:h-28 md:w-28 float-middle flex flex-col align-center justify-center hover:bg-transparent cursor-pointer">
            {icon}
            <p className='text-center text-sm md:text-md'>{name}</p>
        </div>
    )
}

const Skills = () => {
  return (
    <div className='h-auto p-5 lg:h-screen lg:p-20 md:p-10' id='skills'>
        <h1 className="text-4xl font-bold text-center md:mb-16 my-6">My <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent text-transparent bg-clip-text'>Skills</span></h1>
        <div className="flex flex-wrap justify-center">
            <Skill icon={<FaReact color='skyblue' className='text-5xl text-center w-full'/>} name="React JS"/>
            <Skill icon={<SiNextdotjs color='black' className='text-5xl text-center w-full'/>} name="Next JS"/>
            <Skill icon={<SiMongodb color='green' className='text-5xl text-center w-full'/>} name="MongoDb"/>
            <Skill icon={<SiExpress color='black' className='text-5xl text-center w-full'/>} name="Express"/>
            <Skill icon={<SiNodedotjs color='#52a167' className='text-5xl text-center w-full'/>} name="Node js"/>
            <Skill icon={<SiGithub color='black' className='text-5xl text-center w-full'/>} name="Github"/>
            <Skill icon={<SiCsharp color='#7e5ed9' className='text-5xl text-center w-full'/>} name="C#"/>
            <Skill icon={<SiHtml5 color='#f33c00' className='text-5xl text-center w-full'/>} name="Html5"/>
            <Skill icon={<SiCss3 color='#004cdc' className='text-5xl text-center w-full'/>} name="Css3"/>
            <Skill icon={<SiWordpress color='white' className='text-5xl text-center w-full'/>} name="Wordpress"/>
            <Skill icon={<SiBootstrap color='#7703ec' className='text-5xl text-center w-full'/>} name="Bootstrap"/>
            <Skill icon={<SiDocker color='#0062e6' className='text-5xl text-center w-full'/>} name="Docker"/>
            <Skill icon={<SiTailwindcss color='#00baf1' className='text-5xl text-center w-full'/>} name="Tailwind CSS"/>
            <Skill icon={<SiJavascript  color='#f7db56' className='text-5xl text-center w-full'/>} name="Javascript"/>
            <Skill icon={<SiJquery color='#0067a7' className='text-5xl text-center w-full'/>} name="Jquery"/>
            <Skill icon={<SiSocketdotio color='black' className='text-5xl text-center w-full'/>} name="Socket.io"/>
            <Skill icon={<SiPhp color='#627bb1' className='text-5xl text-center w-full'/>} name="Php"/>
            <Skill icon={<SiMicrosoftexcel color='#006c44' className='text-5xl text-center w-full'/>} name="Excel"/>
            <Skill icon={<SiFigma  color='white' className='text-5xl text-center w-full'/>} name="Figma"/>
            <Skill icon={<SiCanva className='text-5xl text-center w-full text-sky-500'/>} name="Canva"/>
            <Skill icon={<SiVirtualbox className='text-5xl text-center w-full' color='#e4f6f4'/>} name="Virtualbox"/>
            <Skill icon={<SiMicrosoftaccess className='text-5xl text-center w-full' color='#ab292d'/>} name="Microsoft Access"/>
            <Skill icon={<SiVisualstudiocode className='text-5xl text-center w-full' color='#08aef3'/>} name="Visual Studio Code"/>
            <Skill icon={<SiVisualstudio className='text-5xl text-center w-full' color='#b27bdd'/>} name="Visual Studio"/>
            <Skill icon={<SiPostman className='text-5xl text-center w-full' color='#ff713f'/>} name="Postman"/>
            <Skill icon={<SiFirebase className='text-5xl text-center w-full' color='#ffcb2d'/>} name="Firebase"/>
            <Skill icon={<SiRedux className='text-5xl text-center w-full' color='#7946b4'/>} name="Redux" />
        </div>
    </div>
  )
}

export default Skills