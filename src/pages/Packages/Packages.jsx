/* eslint-disable no-unused-vars */
import React from 'react'
import { BsPatchCheck } from 'react-icons/bs';

const Packages = () => {
  return (
    <div className='py-20 px-8 lg:px-12 mx-auto'>
      <h2 className='text-center font-bold text-xl mb-2 uppercase'>Our Special Packages</h2>
      <div className='h-0.5 w-20 bg-pink-600 mb-20 mx-auto'></div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 lg:gap-10'>
        <div className='p-10 md:px-5 lg:px-10 rounded-xl shadow'>
            <h2 className='text-center text-lg font-bold mb-2'>Gold</h2>
            <h1 className='text-pink-600 font-bold text-4xl text-center mb-8'>$800</h1>
            <div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Event Planning</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Venue Selection and Decor</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Photography</p>
                </div>
                <div className='flex items-center gap-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Transportation Service</p>
                </div>
            </div>
        </div>
        <div className='p-10 md:px-5 lg:px-10 rounded-xl shadow md:shadow-2xl border-2 border-pink-600'>
            <h2 className='text-center text-lg font-bold mb-2'>Diamond</h2>
            <h1 className='text-pink-600 font-bold text-4xl text-center mb-8'>$1500</h1>
            <div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Event Planning</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Venue Selection and Decor</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Photography and Videography</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Food Catering Service</p>
                </div>
                <div className='flex items-center gap-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Transportation Service</p>
                </div>
            </div>
        </div>
        <div className='p-10 md:px-5 lg:px-10 rounded-xl shadow'>
            <h2 className='text-center text-lg font-bold mb-2'>Platinum</h2>
            <h1 className='text-pink-600 font-bold text-4xl text-center mb-8'>$2500</h1>
            <div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Event Planning</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Venue Selection and Decor</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Photography and Videography</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Food Catering Service</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Entertainment Booking</p>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Beauty and Grooming Service</p>
                </div>
                <div className='flex items-center gap-2'>
                    <i><BsPatchCheck className='text-pink-600'></BsPatchCheck></i>
                    <p className='text-sm font-medium text-zinc-500'>Transportation Service</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
