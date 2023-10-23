/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-[url('https://i.ibb.co/6wx2m9s/banner.jpg')] bg-no-repeat">
      {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
      <div className="relative flex flex-col justify-center items-center h-[300px] md:h-[368px] lg:h-[470px] gap-6">
        <div className='flex items-center gap-3'>
          <div className='h-0.5 w-12 bg-pink-600'></div>
          <div className='text-pink-600 uppercase font-semibold text-sm'>We Create You Celebrate</div>
          <div className='h-0.5 w-12 bg-pink-600'></div>
        </div>
        <h1 className="w-4/5 lg:w-1/2 leading-snug md:leading-snug lg:leading-snug text-2xl md:text-4xl lg:text-5xl font-display text-center font-semibold max-w-xs md:max-w-6xl mb-2">
        Elevating Your Special Occasions with Style and Precision        
        </h1>
        <div className='h-0.5 w-40 bg-pink-600'></div>
      </div>
    </div>
  );
};

export default Banner;
