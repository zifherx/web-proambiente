"use client";

import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

import { RevealProp } from "@/types/Props";
import { fadeIn } from "@/lib/fadeLib";

export function RevealElement({ children, position, delay }: RevealProp) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            x: position === "bottom" ? -80 : 0,
            y: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
              type: "tween",
              duration: 0.5,
              delay: 0.5,
              ease: [0.25, 0.25, 0.25, 0.25],
            },
          },
          visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1.4,
              delay: delay ? delay : 0.5,
              ease: [0.25, 0.25, 0.25, 0.75],
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
