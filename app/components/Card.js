'use client'
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'; // Assuming you're using react-card-flip

const Card = ({title, description, subTitle, technologies, image, date, demo}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleHover = () => {
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    };
      
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
            <div className='bg-white text-black lg:h-72 h-full lg:w-96 w-full' onMouseEnter={handleHover} >
                <img src={image} alt="" className='rounded-t-lg h-52 w-full'/>
                <div className="p-2 text-sm">
                    <p className="block"><span className='font-bold'>Date Created: </span>{date}</p>
                    <p className="inline"><span className='font-bold'>Stacks Used: </span> </p>
                    <p className='inline'>{technologies.join(', ')}</p>
                </div>
            </div>

            <a className='bg-white text-black rounded-lg h-72 lg:w-96 w-full flex flex-col justify-center align-center text-center p-3' 
                onMouseLeave={handleHover} href={demo} target='_blank'>
                <p className="font-bold">{title} </p>
                <p className="">{subTitle}</p>
                <small className='text-justify mt-8'>
                    {description}
                </small>
            </a>
        </ReactCardFlip>
    );
};

export default Card;
