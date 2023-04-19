'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion'

export default function Cars() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='relative h-full'
    >
      <motion.div 
        variants={fadeIn('right', 'tween', 0.3, 1.7)}
        className='px-[55px]'
      >
        <div className='pt-10'>
          <h1 className='text-white font-capitan text-left text-[2rem] md:text-[3.5rem] uppercase'>
            The cars that are hot right now
          </h1>
          <p className='text-white font-semibold text-left pt-3'>
            Buy yours and be the most stylish in the neighborhood
          </p>
        </div>
      </motion.div>

      <motion.div 
      variants={fadeIn('up', 'spring', 0.3, 1.7)}
      className='lg:flex w-full justify-center mx-auto p-2 gap-4 mt-16'>
        
        <div className='bg-[url("/Rectangle2.png")] bg-cover rounded-e-2xl min-h-[500px] bg-center w-full lg:w-[500px]'>
          <div className=' h-full flex flex-col justify-center mx-auto'>
            <div className='mt-32 lg:mt-0'>
                <h1 className='text-white font-capitan text-center pt-4 text-[1.8rem]'>
                Tesla Model 3
                </h1>
                <p className='text-white text-md pt-2 font-semibold text-center'>
                Disruptive, avant-garde, futuristic, innovative.
                </p>
                <button className='pl-5 pt-1 pb-1 pr-5 border-2 text-white font-semibold flex justify-center mx-auto mt-4 rounded-2xl hover:text-black hover:bg-slate-200 duration-500'>
                Contact
                </button>
            </div>
          </div>
        </div>
        
        <Image src={'/4.jpg'} className=' object-cover object-center w-full lg:w-[750px] rounded-s-2xl' width={1550} height={550} />
        
      </motion.div>
    </motion.div>
    )
}

