"use client"

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import {motion, scale} from 'framer-motion'

import { FadeInWhenVisible } from "./FadeInWhenVisible";

import { ServicioCardProp } from "@/types/Props"
import { ChevronRight } from "lucide-react";

export function ServiceCard({index, service}: ServicioCardProp) {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = service.icon;
  
    return (
    <FadeInWhenVisible delay={index * 0.1}>
        <Link href={`/servicios/${service.slug}`}>
            <motion.div
                className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{y: -5}}
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={`/images/services/${service.slug}/${service.coverImage}`}
                        alt={`${service.title}-${index}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>

                    {/* Icono Flotante */}
                    <motion.div
                        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-lg"
                        animate={isHovered ? {scale: 1.1, rotate: 5} : {scale:1, rotate: 0}}
                        transition={{duration: 0.3}}
                    >
                        <Icon className="h-6 w-6 text-blueAmbiente"/>
                    </motion.div>
                </div>

                <div className="p-5">
                    <h3 className="mb-2 text-xl font-bold text-gray-800">{service.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{service.shortDescription}</p>

                    <div className="flex items-center text-blueAmbiente">
                        <span className="text-sm font-medium">Ver detalles</span>
                        <motion.div
                            animate={isHovered ? { x: 5} : {x: 0}}
                            transition={{duration: 0.3}}
                        >
                            <ChevronRight className="ml-1 h-4 w-4" strokeWidth={2}/>
                        </motion.div>
                    </div>
                </div>

                {/* Borde animado */}
                <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-blueAmbiente"
                    initial={{width: 0}}
                    animate={ isHovered ? {width: '100%'} : { width: 0}}
                    transition={{duration: 0.3}}
                ></motion.div>
            </motion.div>
        </Link>
    </FadeInWhenVisible>
  )
}
