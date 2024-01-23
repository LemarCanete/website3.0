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
            <div className='bg-white text-black rounded-lg lg:h-72 h-full lg:w-96 w-full' onMouseEnter={handleHover} >
                <img src={image} alt="" className='rounded-t-lg h-52 w-full'/>
                <div className="p-2 text-sm">
                    <p className="block"><span className='font-bold'>Date Created: </span>{date}</p>
                    <p className="inline"><span className='font-bold'>Stacks Used: </span> </p>
                    {technologies.map((tech, i) => {
                        return <p key={i} className='inline'>{tech}, </p>
                    })}
                </div>
            </div>

            <div className='bg-white text-black rounded-lg h-72 lg:w-96 w-full flex flex-col justify-center align-center text-center p-3' 
                onMouseLeave={handleHover} onClick={()=> window.open(demo, '_blank')}>
                <p className="font-bold">{title} </p>
                <p className="">{subTitle}</p>
                <small className='text-justify mt-8'>
                    {description}
                </small>
            </div>
        </ReactCardFlip>
    );
};

export default Card;
