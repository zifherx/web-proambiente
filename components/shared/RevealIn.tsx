"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { DirectionProp } from "@/types/Props";

export function RevealIn({
  children,
  delay = 0,
  direction = null,
}: {
  children: ReactNode;
  delay: number | undefined;
  direction: DirectionProp;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
