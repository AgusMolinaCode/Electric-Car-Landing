'use client';

import { motion } from "framer-motion"
import { navVariants } from "@/utils/motion"

export default function Navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
  >
    
    <div className='pt-[32px] pb-[32px] flex justify-between md:pl-[100px] pl-2 pr-2 md:pr-[100px] items-center '>
      
      <div>
        <h2 className="font-capitan text-[30px] md:text-[38px] lg:text-[56px] text-white">Prime Car</h2>
      </div>
      
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-4">
            <li className="text-[20px] font-bold text-white">Home</li>
            <li className="text-[20px] font-bold text-white">About</li>
            <li className="text-[20px] font-bold text-white">Services</li>
            <li className="text-[20px] font-bold text-white">Contact</li>
        </ul>
      </div>

      <div>
        <button className="text-white bg-transparent border-[1px] p-2 rounded-[8px] pt-[8px] pb-[8px] md:pl-[32px] pl-2 pr-2 md:pr-[32px] font-bold">
            Contact Us
        </button>
      </div>

    </div>
  </motion.nav>
  )
}
