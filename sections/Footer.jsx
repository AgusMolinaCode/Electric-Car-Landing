'use client';
import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import { motion } from 'framer-motion';
import { footerVariants } from '@/utils/motion'

export default function Footer() {
  return (
    <div className='px-[55px] w-full h-full mt-10 pb-10 bg-black'>
        <motion.footer 
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className='flex flex-wrap justify-between gap-2 bg-black'>
                
            <h1 className='text-[2rem] md:text-[3.5rem] mt-3 md:mt-0 font-capitan text-white'>PRIME CAR</h1>

            <div className='hidden lg:flex flex-col mt-4'>
                <h1 className='text-white text-2xl font-bold'>Where Are We</h1>
                <p className='text-white'>Georgia</p>
                <p className='text-white'>Texas</p>
                <p className='text-white'>California</p>
                <p className='text-white'>Virginia</p>
                <p className='text-white'>Colorado</p>
            </div>

            <div className='hidden lg:flex flex-col mt-4'>
                <h1 className='text-white text-2xl font-bold'>Quick Links</h1>
                <p className='text-white'>About Us</p>
                <p className='text-white'>Our Services</p>
                <p className='text-white'>Contact Us</p>
            </div>

            <div className='hidden lg:flex flex-col mt-4'>
                <h1 className='text-white text-2xl font-bold'>Email Us</h1>
                <p className='text-white'>contact@primecar.com</p>
            </div>

            <div className='flex-col mt-4'>
                <h1 className='text-white text-2xl font-bold'>Call Us</h1>
                <p className='text-white'>+111 1111 1111 1111</p>
                <p className='text-white'>+999 9999 9999 9999</p>
                <div className='flex justify-around'>
                    <BsFacebook className='text-white text-3xl mt-5'/>
                    <BsInstagram className='text-white text-3xl mt-5'/>
                    <BsTwitter className='text-white text-3xl mt-5'/>
                </div>
            </div>
        </motion.footer>
    </div>
  )
}
