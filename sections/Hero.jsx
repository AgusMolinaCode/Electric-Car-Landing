'use client';
import Image from "next/image";
import { slideVariants } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="flex justify-end">
            <div className="w-full max-w-[800px] pr-2 md:pr-10">
                <motion.div variants={slideVariants} initial="hidden" whileInView="show">
                    <div className="flex flex-col items-end">
                        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] text-right text-white font-capitan">
                            MORE ECONOMY,
                        </h1>
                        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] text-right text-white font-capitan">
                            MORE{" "}
                            <span className="inline-block bg-gradient-to-r from-pink-300 via-red-400 to-yellow-300 bg-clip-text text-transparent">
                                POWER
                            </span>
                        </h1>
                        <div className="w-[310px] mt-8">
                            <p className="text-right text-white font-bold text-lg">
                                The most beloved cars of the moment for those who want to ride in style without spending too much
                            </p>
                            <button className="flex items-center justify-end mt-4 w-full h-12  rounded-lg  border-white">
                                <p className="text-lg font-bold text-white">Discover</p>
                                <Image
                                    src="/flecha_derecha_arriba.png"
                                    alt="Arrow icon"
                                    width={60}
                                    height={60}
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}
