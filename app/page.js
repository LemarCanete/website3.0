import React from 'react'
import Home from './components/Home'
import SideNav from './components/SideNav'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'

const page = () => {
      return (
        <main className='bg-zinc-950 text-white'>
            <div className='fixed bottom-0 w-full md:w-auto md:top-0 z-50'>
                <SideNav />
            </div>
            <div className="">
                <Home />
                <Profile />
                <Skills />
                <Projects /> 
                <Services />
                <Contact />
                <Footer />
            </div>
        </main>
      )
}
    

export default page