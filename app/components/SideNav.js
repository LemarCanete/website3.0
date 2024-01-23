'use client'
import React, {useState, useEffect, useRef} from 'react'
import { BsPersonFill, BsHouseFill, BsGridFill, BsTelephoneFill} from 'react-icons/bs'
import { MdHandyman } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";

const Icon = ({icon, section}) =>{
    return (
        <a href={`#${section}`} className="" ><p className="hover:text-teal-300 py-2 px-2 ">{icon}</p></a>
    )
}


const SideNav = () => {
    
    return (
        <div className='flex flex-row md:flex-col text-3xl cursor-pointer p-2 rounded-xl bg-white/75 text-black m-2 justify-around'>
            <Icon icon={<BsHouseFill />} section="home" />
            <Icon icon={<BsPersonFill />} section="profile" />
            <Icon icon={<MdHandyman />} section="skills" />
            <Icon icon={<BsGridFill />} section="projects"/>
            <Icon icon={<FaHandshake />} section="services" />
            <Icon icon={<BsTelephoneFill />} section="contact" />

        </div>
  )
}

export default SideNav