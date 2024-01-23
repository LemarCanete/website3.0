import React from 'react'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='flex flex-wrap w-full h-auto lg:h-16 bg-black/75 text-white items-center justify-around relative '>
            {/* <a className="absolute top-0 w-full  mb-96" href='#home'><BsArrowUp className='mx-auto w-full text-4xl cursor-pointer ' color='white'/></a> */}
            <p className="">Gmail: lemarcanete4@gmail.com</p>
            <p className="">Outlook: lemar.canete4@cit.edu</p>
            <p className="">Phone: 09762694038</p>
            <p className="">&copy; 2024</p>
        </div>
    )
}

export default Footer