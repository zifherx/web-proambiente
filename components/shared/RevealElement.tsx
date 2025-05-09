"use client"

import { useEffect, useRef } from "react"
import { useAnimation, useInView, motion, } from "framer-motion"

import { RevealProp } from "@/types/Props"
import { fadeIn } from "@/lib/fadeLib"

export function RevealElement({ children, position, delay }: RevealProp) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={fadeIn(position, delay)}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
            >
                {children}
            </motion.div>
        </div>
    )
}
