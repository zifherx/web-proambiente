"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Catálogo de Productos
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              Descubra nuestra amplia gama de productos profesionales para el
              control de plagas, desinfección y saneamiento ambiental.
              Soluciones efectivas y seguras para cada necesidad.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-20 rounded bg-blueAmbiente"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Formas decorativas */}
      <motion.div
        className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blueAmbiente/5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="absolute right-10 top-20 h-32 w-32 rounded-full bg-blueAmbiente/5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      ></motion.div>
    </section>
  );
}
