'use client'
import React from 'react'
import { Chrono } from 'react-chrono';

const Profile = () => {
    const items = [{
        title: "2021 - CURRENT",
        cardTitle: "College",
        // url: "http://www.history.com",
        cardSubtitle:"Cebu Institute of Technology University",
        cardDetailedText: "",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
      }, 
      {
        title: "2019 - 2021",
        cardTitle: "Senior High School",
        // url: "http://www.history.com",
        cardSubtitle:"Don Vicente Rama Memorial National Senior High School",
        cardDetailedText: "With High Honor STEM graduate",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
      },
      {
        title: "2015 - 2019",
        cardTitle: "Junior High School",
        // url: "http://www.history.com",
        cardSubtitle:"Don Vicente Rama Memorial National High School",
        cardDetailedText: "With Honor graduate",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
      },
      {
        title: "2009 - 2015",
        cardTitle: "Elementary",
        // url: "http://www.history.com",
        cardSubtitle:"Don Vicente Rama Memorial Elementary School",
        cardDetailedText: "",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
      },
      {
        title: "2007 - 2009",
        cardTitle: "Kinder",
        // url: "http://www.history.com",
        cardSubtitle:"Don Vicente Rama Memorial Elementary School",
        cardDetailedText: "",
        // media: {
        //   type: "IMAGE",
        //   source: {
        //     url: "http://someurl/image.jpg"
        //   }
        // }
      }
    ];
  return (
    <div className='h-auto ' id='profile' >
        <h1 className="text-4xl font-bold text-center">My <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent text-transparent bg-clip-text'>Profile</span></h1>
        <div className="flex w-full text-center h-5/6 flex-col lg:flex-row">
            <div className="w-full flex flex-col p-5">
                <p className='font-bold text-xl p-10'>About myself</p>
                <p className='text-justify'>Greetings, I am Lemar Canete, from Cebu, Philippines. At the age of 21, I am deeply devoted to the field of programming, driven by an unwavering passion for technology. My relentless pursuit of knowledge is evident in my commitment to continuous learning. I possess a keen ability to adapt seamlessly to challenges, consistently pushing the boundaries of my skills to deliver optimal results. My dedication to excellence ensures that I approach every task with diligence and strive to achieve the highest standards.</p>
                <div className="">
                    <p className="font-bold text-xl p-10">Certificates</p>
                    <ul>
                        <Certificate name="Responsive Web Design" link="https://www.freecodecamp.org/certification/fcc204be7e1-727a-41d3-a7e5-64654146384b/responsive-web-design"/>
                        <Certificate name="Web Fundamentals Track" link="https://drive.google.com/file/d/10XMjxr--tkDQX_lEly5Z-newW1eCQEmf/view?usp=sharing" />
                        <Certificate name="Advanced PHP" link="" />
                        <Certificate name="Javascript" link="" />
                    </ul>
                </div>
            </div>
            <div className="w-full h-full">
                <p className='font-bold text-xl p-10'>Education</p>
                <div className='' >
                    <Chrono items={items} mode="HORIZONTAL" theme={{ primary: 'gray', secondary: 'orange', cardBgColor: '#1d1917', titleColor: '#616161', titleColorActive: 'white'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

const Certificate = ({name, link}) =>{
    return (
        <li className='hover:text-teal-600'> 
            <a href={link} target='_blank'><span className='text-white'>&#8594;</span> {name}</a>
        </li>
    )
}

export default Profile