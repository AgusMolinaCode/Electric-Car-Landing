'use client';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { TypingText } from "@/components/Text";
import { staggerContainer,fadeIn } from '@/utils/motion'


export default function About() {

  return (
    <div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="About" textStyles="text-center text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] pt-5 font-capitan text-white" />
      

      <motion.div 
      variants={fadeIn('right', 'tween', 0.3, 1)}
      className=' lg:pt-10 gap-5 flex container justify-center items-center mx-auto px-[5px] pb-4 lg:pb-16'>
        
        <div className='h-full w-full m-2  lg:w-[50%]'>
            <p className='lg:text-xl mt-5 text-white font-semibold'>
            We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for.
            </p>

            <p className='lg:text-xl mt-5 text-white font-semibold'>
            We are a family owned and operated business that has been in the automotive industry for over 30 years. We have a wide selection of vehicles and the expertise to deal with what you are looking for.
            </p>
          
            <p className='lg:text-xl mt-5 text-white font-semibold'>
              Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices. We have a wide selection of vehicles and the expertise to deal with what you are looking for.
            </p>

          </div>
        
        <div className='flex w-full lg:w-[50%] mx-auto justify-center pt-2 '>
          <Image src='/about_image.png' className='object-contain' width={800} height={800} />
        </div>

        </motion.div>
      </motion.div>
    </div>
  )
}
