'use client'
import React, { useRef } from 'react'
import { BsSend } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    const notify = () => toast("Email sent!");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tkzh01e', 'template_m5qmi26', form.current, 'lSuWgGScLQe9-IhhM')
        .then((result) => {
            console.log(result.text);
            notify();
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong! Pls try again!")
        });
    };
    
    return (
        <div className='h-screen w-full flex flex-col justify-center' id='contact' >
            <p className="text-center">Get in touch with</p>
            <h1 className="text-4xl font-bold text-center">Contact <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent text-transparent bg-clip-text'>Me</span></h1>
            <form className='border lg:mx-64 p-4 rounded bg-stone-900/50 border-none shadow-2xl md:m-20 text-sm m-10'ref={form} onSubmit={sendEmail}>
                <div className="w-full">
                    <label htmlFor="" className='block my-2' >Name </label>
                    <input type="text" className='w-full text-black p-2 rounded' name='name' required/>
                </div>
                <div className="" >
                    <label htmlFor="" className='block my-2'>Email</label>
                    <input type="text" className=' w-full text-black p-2 rounded' name='email'/>
                </div>
                <div className="">
                    <label for="message" className="block my-2">Message</label>
                    <textarea id="message" name="message" rows="3" className="focus:outline-cyan-500 w-full text-black p-1 rounded"></textarea>
                </div>
                <button className='underline underline-offset-4 decoration-teal-300 rounded p-3 float-end'>Send <BsSend className='ms-1 inline'/></button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <ToastContainer />
        </div>
    )
}

export default Contact