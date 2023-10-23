/* eslint-disable no-unused-vars */
import React from "react";
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';

const Gallery = () => {
  return (
    <div className="py-20 bg-pink-50 px-8 lg:px-12 mx-auto">
      <div className="flex items-center justify-center mx-auto gap-3 mb-1">
        <div className="h-0.5 w-12 bg-black"></div>
        <h1 className="uppercase font-bold text-base">Gallery</h1>
        <div className="h-0.5 w-12 bg-black"></div>
      </div>
      <h3 className="mb-16 text-center font-semibold text-xs text-pink-600">See Our Best Events Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <img src={gallery1} alt="" className="w-full border-[16px] border-white" data-aos="fade-down"/>
        <img src={gallery2} alt="" className="w-full border-[16px] border-white" data-aos="fade-up"/>
        <img src={gallery3} alt="" className="w-full border-[16px] border-white" data-aos="fade-down"/>
        <img src={gallery4} alt="" className="w-full border-[16px] border-white" data-aos="fade-up"/>
      </div>
    </div>
  );
};

export default Gallery;
