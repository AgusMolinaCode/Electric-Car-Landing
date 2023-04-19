'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { staggerContainer,fadeIn,slideIn } from '@/utils/motion'

export default function Benefits() {
    return (

        <div>

            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative">
                <div className='hidden md:block'>
                    <div className="absolute bottom-0 right-0">
                        <Image src={'/Lines.png'} width={120} height={120} />
                    </div>
                    <div className="lg:absolute top-0 left-0">
                        <Image src={'/Lines.png'} className='rotate-180' width={120} height={120} />
                    </div>
                </div>
                

                <motion.div
                variants={fadeIn('right', 'backIn', 0.3, 1.7)}
                >
                    <h1 className='text-white w-full md:max-w-[850px] text-center pt-[90px] font-capitan flex justify-center mx-auto uppercase text-[2rem] p-2 md:text-[3.5rem]'>All the benefits you will get when you shop with us</h1>
                    <p className='font-bold text-white p-2 text-center pt-5'>Take advantage of everything you can have now by buying your new car at Prime Car</p>
                </motion.div>

                <motion.div 
                variants={slideIn('left', 'spring', 0.8, 1.9)}
                className='lg:flex grid p-2 justify-center mx-auto gap-16 pt-[200px] pb-12 md:pb-32'>

                    <motion.div 
                    variants={slideIn('left', 'backIn', 0.3, 1.7)}
                    className='bg-green-800 rounded-2xl relative w-[300px] h-[300px]'>

                        <div className='absolute bottom-[15rem] mt-10 lg:m-0 left-[5.2rem]'>
                            <Image src={'/figura1.png'} className='' width={140} height={140} />
                        </div>

                        <div className='pt-[5rem] px-5'>
                            <h1 className='text-center text-white font-capitan text-2xl'>Several Headquarters</h1>
                            <p className='text-center text-white font-semibold pt-7 text-lg'>You can find several Prime Car stores around the United States!</p>
                            <p className='text-center text-white font-semibold pt-2 text-lg'>Find the store closest to you now</p>
                        </div>
                    </motion.div>

                    <motion.div 
                    variants={slideIn('left', 'backIn', 0.9, 1.7)}
                    className='bg-red-900 rounded-2xl mt-10 lg:m-0 w-[300px] relative h-[300px]'>
                        <div className='absolute bottom-[15rem] left-[5.2rem]'>
                            <Image src={'/figura2.png'} className='' width={140} height={140} />
                        </div>

                        <div className='pt-[5rem] px-5'>
                            <h1 className='text-center text-white font-capitan text-2xl'>Schedule Your Best Day</h1>
                            <p className='text-center text-white font-semibold pt-7 text-lg'>Choose the day and time to take </p>
                            <p className='text-center text-white font-semibold pt-2 text-lg'>a test drive for free!</p>
                        </div>
                    </motion.div>

                    <motion.div 
                    variants={slideIn('left', 'backIn', 1.2, 1.7)}
                    className='w-[300px] rounded-2xl mt-16 md:mt-10 lg:m-0 bg-blue-900 relative h-[300px]'>
                        <div className='absolute bottom-[15rem] left-[5.2rem]'>
                            <Image src={'/figura3.png'} className='' width={140} height={140} />
                        </div>

                        <div className='pt-[5rem] px-5'>
                            <h1 className='text-center text-white font-capitan text-2xl'>Receive your car right away</h1>
                            <p className='text-center text-white font-semibold pt-7 text-lg'>Close the contract and you get</p>
                            <p className='text-center text-white font-semibold pt-2 text-lg'>the keys right away</p>
                        </div>
                    </motion.div>

                </motion.div>

            </motion.div>





        </div>
    );

}
