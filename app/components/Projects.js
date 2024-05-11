import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div className='md:h-screen h-auto relative p-5 lg:p-12' id='projects'>
        <h1 className="text-4xl font-bold text-center lg:mb-12 mb-5">My <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent text-transparent bg-clip-text'>Projects</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 grid-flow-row cursor-pointer lg:mx-20">
            <Card 
                title="TaskTrove Project Management System" 
                subTitle="Project Mangement System" 
                description="TaskTrove is a user-friendly project management system, facilitating seamless task creation, assignment, and tracking for teams. " 
                technologies={["React JS", "Next JS", "Express", "Node JS", "MongoDB", "axios", "Docker", "MVC", "mongoose", "TypeScript", "Bootstrap"]}
                demo="https://tasktrove-react.vercel.app/"
                image="/projects/taskTrove.png"
                date="June 2023"
            />
            <Card 
                title="Website Portfolio 2020" 
                subTitle="Developer Portfolio" 
                description="My very first portfolio website" 
                technologies={["React JS"]}
                demo="https://lemarcanete.github.io/website2.0/"
                image="/projects/Website2.0.png"
                date="March 2020"
            />
            <Card 
                title="Kor-fc" 
                subTitle="Organization Website" 
                description="KOR – Fairfield Chapter is a registered non-profit organization of the Filipinos and Filipino-American families and individuals whose objectives are
                To empower the members, with various worthwhile programs and activities that are helpful in their assimilation into the main culture body of the U.S.A." 
                technologies={["Wordpress", "Virtual min", "Virtual Box", "CSS"]}
                demo="http://kor-fc.org/"
                image="/projects/KOR-FC.png"
                date="November 2022"
            />
            <Card 
                title="Lemaru Restaurant" 
                subTitle="E Commerce (Online Food Ordering System)" 
                description="It is an online food ordering system built in C# Winforms" 
                technologies={["Winforms", "Microsoft Access", "C#"]}
                demo="https://github.com/LemarCanete/Restaurant.git"
                image="/projects/Restaurant.png"
                date="September 2023"
            />
           <Card 
                title="OneCIT System" 
                subTitle="School Management App" 
                description="OneCIT is a comprehensive school management app for students, teachers, and staff. It includes features such as appointments, document inquiries, and online library access. Users can chat, access a calendar of events, search the directory, and view announcements. Other features include forums, feedback, task management, career listings, and class tracking." 
                technologies={["React JS", "Next JS", "Express", "Node JS", "Firebase", "axios", "Tailwind CSS", "cherrio"]}
                demo="https://onecit.vercel.app/"
                image="/projects/onecit.png"
                date="January 2024"
            />

        </div>
    </div>
  )
}

export default Projects

