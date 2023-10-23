/* eslint-disable no-unused-vars */
import React from 'react'
import about from '../../assets/about.jpg';
import { FaHandshake } from 'react-icons/fa6';
import { PiMedal } from 'react-icons/pi';

const About = () => {
  return (
    <div className="pt-20 px-8 lg:px-12 mx-auto">
      <div className="flex items-center justify-center mx-auto gap-3 mb-5">
        <div className="h-0.5 w-12 bg-black"></div>
        <h1 className="uppercase font-bold text-base">About</h1>
        <div className="h-0.5 w-12 bg-black"></div>
      </div>
      <p className='text-xs md:text-sm text-center mx-auto md:3/4 lg:w-1/2 font-medium text-zinc-400 mb-10'>Explore our journey, values, and dedication to crafting unforgettable moments and exceeding expectations in event planning and catering.</p>
      <div className='flex flex-col-reverse lg:flex-row rounded-xl shadow gap-5 items-center'>
        <div className='flex flex-col md:flex-row gap-2 lg:w-3/4 mb-5 lg:mb-0'>
            <div className='px-10 py-5'>
                <i><PiMedal className='text-5xl mb-3 text-pink-600'></PiMedal></i>
                <h2 className='text-lg font-bold mb-2'>Best Event Planner</h2>
                <p className='text-xs leading-5 text-justify font-medium text-zinc-500'>Your best choice for event planning, creating unforgettable experiences with meticulous attention to detail, creativity, and seamless execution.</p>
            </div>
            <div className='px-10 py-5'>
                <i><FaHandshake className='text-5xl mb-3 text-pink-600'></FaHandshake></i>
                <h2 className='text-lg font-bold mb-2'>Highly Dedicated</h2>
                <p className='text-xs leading-5 text-justify font-medium text-zinc-500'>Highly dedicated professionals committed to delivering exceptional service, exceeding expectations, and making every moment memorable.</p>
            </div>
        </div>
        <div>
            <img src={about} alt="" className='lg:h-60 w-full md:hidden lg:block rounded-t-xl lg:rounded-l-none lg:rounded-r-xl'/>
        </div>
      </div>
    </div>
  )
}

export default About
