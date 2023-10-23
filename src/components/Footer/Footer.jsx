/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div>
        <footer className="footer px-8 md:px-10 lg:px-20 pb-10 pt-20 bg-black text-white lg:gap-24">
        <nav>
            <h2 className="text-xl font-bold">Elegance Events</h2>
            <p className="text-xs text-[#FFFFFF] opacity-70 leading-5 lg:w-80">
            Expertly curating unforgettable social gatherings, from weddings to birthdays, with style and precision.            </p>
        </nav>
        <nav>
            <header className="text-sm font-medium">Company</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">About Us</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Careers</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Team</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Blog</a>
        </nav>
        <nav>
            <header className="text-sm font-medium">Service</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Event Management</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Event Planning</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Design Production</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Packages</a>
        </nav>
        <nav>
            <header className="text-sm font-medium">Support</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Contact Us</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Term and condition</a>
        </nav>
        <nav>
            <header className="text-sm font-medium">Social</header>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Facebook</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Twitter</a>
            <a className="link link-hover text-xs text-[#FFFFFF] opacity-70">Youtube</a>
        </nav>
        </footer>  
        <footer className="py-10 px-8 md:px-10 lg:px-20 bg-black text-[#FFFFFF] text-opacity-70 border-t border-stone-700 flex justify-between">
            <div className="mx-auto">
                <p className="text-xs">@2023 <span className="font-bold">Elegance Events</span>. All Rights Reserved</p>
            </div>
        </footer>
    </div>
  )
};

export default Footer;
