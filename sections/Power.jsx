'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer,slideVariants } from '@/utils/motion'

export default function Power() {
  return (
    <div className='mt-20 md:pb-32 relative'>
        <Image src={'/Star2.png'} width={200} height={200} alt='Star' className='absolute z-10 top-[19rem] w-[100px] md:w-[200px] lg:top-16'/>
        
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='m-2 md:px-[85px] flex flex-wrap justify-between'>
            
            <motion.div 
            variants={slideVariants}
            className='flex-col z-10'>
                <h1 className='text-white text-[2rem] md:text-[4rem] font-capitan'>BE AMAZED BY</h1>
                <h1 className='text-white text-[2rem] md:text-[4rem] font-capitan'>THE POWER</h1>
            </motion.div> 

            <motion.div 
            variants={slideVariants}
            className='flex items-center w-[250px]'>
                <p className='text-white text-xl font-semibold'>Speed and economy together in one place, use and abuse your car's potential.</p>
            </motion.div>   

        </motion.div>

        <div>
            <video className='w-full h-[700px] round' autoPlay loop muted>
                <source className='' src="/video3.mp4" type="video/mp4" />
            </video>
        </div>

        <Image src={'/Star1.png'} width={200} height={200} alt='Star' className='absolute bottom-[9rem] md:bottom-[0] w-[100px] md:w-[200px] right-0  md:right-20'/>

    </div>
  )
}
