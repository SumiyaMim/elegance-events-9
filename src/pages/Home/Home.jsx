/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../components/Banner/Banner'
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';
import Gallery from '../../components/Gallery/Gallery';
import About from '../../components/About/About';

const Home = () => {

  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <div className='py-20'>
        <div className='flex items-center justify-center mx-auto gap-3 mb-10'>
          <div className='h-0.5 w-12 bg-black'></div>
          <h1 className='uppercase font-bold text-base'>Our Services</h1>
          <div className='h-0.5 w-12 bg-black'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-12 mx-auto gap-8'>
            {services.map((service) => (
              <Services key={service.id} services={service}></Services>
            ))}
        </div>
      </div>

      <Gallery></Gallery>
    </div>
  )
}

export default Home
