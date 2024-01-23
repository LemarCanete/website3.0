'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Services = () => {
  return (
    <div id='services' className='h-screen pt-20 px-4 xl:px-20'>
        <h1 className="text-4xl font-bold text-center lg:mb-12 mb-3">My <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent text-transparent bg-clip-text'>Services Process</span></h1>
        <Swiper spaceBetween={10}
            className="mySwiper"
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            modules={[Pagination]}
            breakpoints={{
                320: {
                    slidesPerView: 1
                },
                474: {
                    slidesPerView: 2,
                },
                970: {
                    slidesPerView: 3,
                },
            }}
            onSwiper={(swiper) => console.log(swiper)} >
            <SwiperSlide>
                <Service title="Responsive Web Design" img="projects/responsive.svg" description="Develop a responsive website layout that automatically adjusts and adapts to any device screen size for a better user experience." />
            </SwiperSlide>
            <SwiperSlide>
                <Service title="Front-end Development" img='projects/front.svg' description="Convert your mockups and ui prototypes into a functional and working website that creates an interaction and user experience." />
            </SwiperSlide>
            <SwiperSlide>
                <Service title="Back-end Development" img="projects/back.svg" description="Creating, maintaining, and deploy back-end API endpoints, routes, and database models using ExpressJS, NextJS, NodeJS, MongoDB and adding authentication using JWT."/>
            </SwiperSlide>
            <SwiperSlide>
                <Service title="Quality" img="projects/deliver.svg" description="deliver professional and quality websites" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

const Service = ({title, description, img}) =>{
    return (
        <div className="w-full p-3 rounded-lg border h-96 cursor-pointer hover:bg-white hover:text-zinc-950 flex flex-col justify-center">
            <img src={img} alt="" className='h-52'/>
            <h1 className="font-bold text-center">{title}</h1>
            <p className="text-center">{description}</p>
        </div>
    )
}

export default Services