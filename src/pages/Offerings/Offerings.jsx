/* eslint-disable no-unused-vars */
import React from 'react'
import { BsCalendar2EventFill, BsMusicNoteBeamed } from 'react-icons/bs';
import { MdManageHistory, MdOutlineFastfood, MdEmojiTransportation } from 'react-icons/md';
import { BiSelection } from 'react-icons/bi';
import { AiOutlineAntDesign, AiTwotoneVideoCamera } from 'react-icons/ai';
import { GiTravelDress } from 'react-icons/gi';


const Offerings = () => {
  return (
    <div className='py-20 px-8 lg:px-12 mx-auto'>
      <h2 className='text-center font-bold text-xl mb-2 uppercase'>Explore Our Offerings</h2>
      <div className='h-0.5 w-20 bg-pink-600 mb-8 mx-auto'></div>  
      <p className='text-xs md:text-sm text-center font-medium text-zinc-400 md:w-3/4 lg:w-1/2 mx-auto mb-14'>Discover a world of event possibilities with our expert services. From weddings to parties, we craft unforgettable moments tailored to you.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='p-10 text-center'>
           <i><BsCalendar2EventFill className='mx-auto text-3xl mb-3 text-pink-600'></BsCalendar2EventFill></i>
           <h1 className='font-bold text-lg mb-2'>Event Planning</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Creating memorable events with ease and attention to every detail.</p>
        </div>
        <div className='p-10 text-center'>
           <i><MdManageHistory className='mx-auto text-3xl mb-3 text-pink-600'></MdManageHistory></i>
           <h1 className='font-bold text-lg mb-2'>Budget Management</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Optimize costs, maximize value, stress-free event budget management expertise.</p>
        </div>
        <div className='p-10 text-center'>
           <i><BiSelection className='mx-auto text-3xl mb-3 text-pink-600'></BiSelection></i>
           <h1 className='font-bold text-lg mb-2'>Venue Selection</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Discover perfect venues, tailored to your event's unique vision and needs.</p>
        </div>
        <div className='p-10 text-center'>
           <i><AiOutlineAntDesign className='mx-auto text-3xl mb-3 text-pink-600'></AiOutlineAntDesign></i>
           <h1 className='font-bold text-lg mb-2'>Decor Divinity</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Elevating events with exquisite decor, turning visions into enchanting realities.</p>
        </div>
        <div className='p-10 text-center'>
           <i><AiTwotoneVideoCamera className='mx-auto text-3xl mb-3 text-pink-600'></AiTwotoneVideoCamera></i>
           <h1 className='font-bold text-lg mb-2'>Photography and Videography</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Capturing memories in photos and videos to cherish forever with passion.</p>
        </div>
        <div className='p-10 text-center'>
           <i><BsMusicNoteBeamed className='mx-auto text-3xl mb-3 text-pink-600'></BsMusicNoteBeamed></i>
           <h1 className='font-bold text-lg mb-2'>Entertainment</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Fun-filled entertainment, creating memorable moments for your events with flair..</p>
        </div>
        <div className='p-10 text-center'>
           <i><MdOutlineFastfood className='mx-auto text-3xl mb-3 text-pink-600'></MdOutlineFastfood></i>
           <h1 className='font-bold text-lg mb-2'>Catering and Food Services</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Delicious food and exceptional service, making your event truly memorable.</p>
        </div>
        <div className='p-10 text-center'>
           <i><GiTravelDress className='mx-auto text-3xl mb-3 text-pink-600'></GiTravelDress></i>
           <h1 className='font-bold text-lg mb-2'>Beauty and Grooming Service</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Pamper yourself with our beauty and grooming services for a radiant transformation.</p>
        </div>
        <div className='p-10 text-center'>
           <i><MdEmojiTransportation className='mx-auto text-3xl mb-3 text-pink-600'></MdEmojiTransportation></i>
           <h1 className='font-bold text-lg mb-2'>Transportation</h1>
           <p className='text-xs font-medium text-zinc-500 mb-5 leading-5'>Efficient transportation services for hassle-free and comfortable journeys. Your trusted choice.</p>
        </div>
      </div>
    </div>
    )
}

export default Offerings
