/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Services = ({ services }) => {

    const { id, name, photo, short_desc, price } = services;

  return (
    <div className='shadow-md rounded-xl'>
      <img src={photo} alt="" className='w-full' data-aos="zoom-in"/>
      <div className='p-6 text-center'>
        <h2 className='font-bold text-lg mb-2'>{name}</h2>
        <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>{short_desc}</p>
        <div className='flex items-center justify-between mb-2'>
            <h4 className='text-sm font-semibold text-zinc-600'>Price: <span className='text-black font-bold'>${price}</span></h4>
            <Link to={`/details/${id}`}>
                <button className='text-pink-600 font-bold text-sm rounded-3xl flex items-center gap-2'>
                    View More
                <span><HiOutlineArrowNarrowRight className='text-lg'></HiOutlineArrowNarrowRight></span>
                </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
