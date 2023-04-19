'use client';
import Map from '@/components/Map'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion'

export default function Contact() {
    return (
        <div>
            <div className='m-2 md:px-[55px]'>
                <div>
                    <h1 className='text-[7rem] uppercase opacity-5 font-capitan absolute top-[-50]  text-white'>contact us</h1>
                </div>

                <div className='flex flex-wrap justify-evenly w-full pt-2'>
                    <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='mt-[10vh] mb-10'>
                        <motion.h1 
                        variants={fadeIn('down', 'tween', 0.3, 1)}
                        className='text-white font-capitan text-[2rem] md:text-[3.5rem]'>CONTACT US</motion.h1>
                        <p className='text-white font-semibold text-lg md:w-[500px]'>To find out more information about cars and quotes, fill out the form on the side or contact us by phone.</p>
                    </motion.div>

                    <div>
                        <form className="w-full max-w-lg mx-auto">
                            <div className="flex  -mx-3 mb-2">
                                
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide font-capitan text-white text-md font-bold mb-2" htmlFor="nombre">
                                        Name
                                    </label>
                                    <input className="appearance-none block w-full bg-transparent font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-white focus:border-gray-500" id="nombre" type="text" placeholder="Your Name" />
                                </div>

                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-white font-capitan text-md font-bold mb-2" htmlFor="correo">
                                        E-mail
                                    </label>
                                    <input className="appearance-none block w-full bg-transparent font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-white " id="correo" type="email" placeholder="Your Email" />
                                </div>

                            </div>

                            <div className="flex  -mx-3 mb-2">
                                
                                <div className="w-full px-3 mb-2 md:mb-0">
                                    <label className="block uppercase tracking-wide font-capitan text-white text-md font-bold mb-2" htmlFor="nombre">
                                        Phone Number
                                    </label>
                                    <input className="appearance-none block w-full bg-transparent font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-white focus:border-gray-500" id="telefono" type="text" placeholder="Phone Number" pattern="^[0-9]*$" maxLength="10" />
                                </div>

                                <div className="w-full px-3 mb-2 md:mb-0">
                                    <label className="block uppercase tracking-wide text-white font-capitan text-md font-bold mb-2" htmlFor="correo">
                                        Country
                                    </label>
                                    <input className="appearance-none block w-full bg-transparent font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-white " id="correo" type="text" placeholder="Your Country" />
                                </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 ">
                                
                            </div>
                            <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="mensaje">
                                        Mesaje
                                    </label>
                                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mensaje" placeholder="How can we help you?"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className='mt-[116px]'>
                <Map />
            </div> */}
        </div>
    )
}
