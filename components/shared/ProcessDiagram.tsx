"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProcessDiagramProp } from "@/types/Props";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcessDiagram({ steps }: ProcessDiagramProp) {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[650px] bg-gray-50 rounded-md p-6 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M10,20 Q30,15 50,10 T90,20 T90,80 T50,90 T10,80 Z"
          fill="none"
          stroke="rgba(0, 120, 180, 0.1)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M10,20 Q30,35 50,10 T90,20 T50,50 T10,80 Z"
          fill="none"
          stroke="rgba(0, 120, 180, 0.15)"
          strokeWidth="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      {steps.map(({ key, icon: Icon, position, description, title }, index) => (
        <motion.div
          key={key}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onMouseEnter={() => setActiveStep(key)}
          onMouseLeave={() => setActiveStep(null)}
        >
          <div
            className={cn(
              "bg-white rounded-full p-4 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg",
              activeStep === key ? "scale-110 ring-2 ring-blueAmbiente" : ""
            )}
          >
            <Icon />
          </div>

          <motion.div
            className={cn(
              'absolute bg-white p-4 rounded-lg',
              position.y > '50%' ? 'bottom-full mb-2' : 'top-full mt-2',
              'transform -tranlate-x-1/2 w-64 shadow-lg z-20'
            )}
            initial={{opacity: 0, y: position.y > '50%' ? 10 : -10, scale: 0.9}}
            animate={{
              opacity: activeStep === key ? 1 : 0, 
              y: activeStep === key ? 0 : position.y > '50%' ? 10 : -10, 
              scale: activeStep === key ? 1 : 0.9}}
            transition={{duration: 0.2}}
          >
            <h4 className="font-semibold text-blueAmbiente mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blueAmbiente text-white rounded-full p-6 shadow-lg z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <Clock className="h-10 w-10" strokeWidth={2} />
      </motion.div>
    </div>
  );
}
