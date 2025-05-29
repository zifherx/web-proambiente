"use client"

import Image from "next/image";
import {motion} from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative">
        <div className="relative h-[50vh] md:h-[70vh] w-full">
            <Image
                src='/images/banners/banner-equipo4.jpg'
                alt="ProAmbiente - Quiénes Somos"
                fill
                className="object-cover brightness-40"
                priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <motion.div
                    initial={{opacity: 0, y:20}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 0.5}}
                    className="max-w-3xl"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Quiénes Somos</h1>
                    <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                        Conoce más sobre ProAmbiente, nuestra historia, misión, visión y valores.
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
