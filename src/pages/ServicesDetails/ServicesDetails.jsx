/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { MdOutlineAccessTime } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const ServicesDetails = () => {

    const [service, setService] = useState({})

    const {id} = useParams();
    const services = useLoaderData();
    // console.log(services)

    useEffect(() => {
        const findService = services?.find((service) => service.id === id)
        setService(findService)
        // console.log(findService)
    },[id, services])

    const { name, photo1, brief_desc, price, day, time, phone, email } = service;

  return (
    <div className='py-20 px-8 lg:px-12 mx-auto'>
      <h2 className='text-center font-bold text-2xl mb-2'>{name}</h2>
      <div className='h-0.5 w-12 bg-pink-600 mb-20 mx-auto'></div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-8'>
        <div className='order-last lg:order-first'>
            <div className='bg-white border-2 border-pink-600 rounded-xl p-6 mb-6'>
                <h2 className='font-bold text-lg mb-2'>Pricing</h2>
                <div className='flex items-center gap-1.5 font-semibold text-zinc-500'>
                    <i><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine></i>
                    <p className='text-sm'>Price: <span>${price}</span></p>
                </div>
            </div>
            <div className='bg-pink-600 rounded-xl p-6 mb-6 text-white'>
                <h2 className='font-bold text-lg mb-2'>Open Hours</h2>
                <div className='flex items-center gap-1.5 font-semibold text-white mb-1'>
                    <i><HiOutlineCalendarDays></HiOutlineCalendarDays></i>
                    <p className='text-sm'>Day: <span>{day}</span></p>
                </div>
                <div className='flex items-center gap-1.5 font-semibold text-white' >
                    <i><MdOutlineAccessTime></MdOutlineAccessTime></i>
                    <p className='text-sm'>Time: <span>{time}</span></p>
                </div>
            </div>
            <div className='bg-white border-2 border-pink-600 rounded-xl p-6'>
                <h2 className='font-bold text-lg mb-2'>Contact</h2>
                <div className='flex items-center gap-1.5 font-semibold text-zinc-500 mb-1'>
                    <i><BsTelephone></BsTelephone></i>
                    <p className='text-sm'>Phone: <span>{phone}</span></p>
                </div>
                <div className='flex items-center gap-1.5 font-semibold text-zinc-500'>
                    <i><HiOutlineMail></HiOutlineMail></i>
                    <p className='text-sm'>Email: <span>{email}</span></p>
                </div>
            </div>
        </div>
        <div className='col-span-2 order-first lg:order-last'>
            <img src={photo1} alt="" className='rounded-xl mb-8'/>
            <p className='text-justify font-medium leading-6 text-sm text-zinc-500'>{brief_desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesDetails
