"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BannerCarrusel() {

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false}))

  return (
    <section className="relativ">
      <Carousel className="w-full" opts={{ loop: true}} plugins={[plugin.current]}>
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[80vh] w-full bg-gradient-to-r from-blueAmbiente/10 to-blueAmbiente/30 overflow-hidden">
            <div className="max-w-7xl mx-auto h-full px-4">           
              <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-left"
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    Creando entornos saludables
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
                    Especialistas en saneamiento ambiental, fumigaciones y
                    control de plagas para empresas y hogares.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-blueAmbiente text-white hover:bg-blueAmbiente/60" asChild>
                      <Link href="/contacto">Solicitar Cotización</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-black hover:bg-black hover:text-white"
                      asChild
                    >
                      <Link href="/servicios">Nuestros Servicios</Link>
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden md:flex justify-center items-center"
                >
                  <div className="relative w-full max-w-md h-[400px]">
                    <Image
                      src="/images/banners/banner-desinfeccion1.png"
                      alt="Servicios de desinfección"
                      fill
                      className="object-cover rounded-lg shadow-xl"
                      priority
                    />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blueAmbiente/20 rounded-full"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blueAmbiente/10 rounded-lg z-0"></div>
                  </div>
                </motion.div>
              </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[80vh] w-full bg-gradient-to-l from-greenAmbiente/10 to-greenAmbiente/30 overflow-hidden">
            <div className="max-w-7xl mx-auto h-full px-4">           
              <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex justify-center items-center order-last md:order-first"
                >
                  <div className="relative w-full max-w-md h-[400px]">
                    <Image
                      src="/images/banners/banner-desinfeccion2.png"
                      alt="Servicios de Fumigacion profesional"
                      fill
                      className="object-cover rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-greenAmbiente/20 rounded-full"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-greenAmbiente/10 rounded-lg z-0"></div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-left"
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    Profesionales en nuestra labor
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
                    Trabajando tu espacio con eficiencia y calidad de servicio. Llegamos a tu empresa para brindarte un servicio de calidad.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-greenAmbiente text-white hover:bg-greenAmbiente/60" asChild>
                      <Link href="/contacto">Contáctanos</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-black hover:bg-black hover:text-white"
                      asChild
                    >
                      <Link href="/quienes-somos">Conoce más</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="relative h-[80vh] w-full bg-gradient-to-r from-blueAmbiente/10 to-blueAmbiente/30 overflow-hidden">
                <div className="max-w-7xl mx-auto h-full px-4">
                  <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-left"
                    >
                      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Equipos de alta tecnología</h1>
                      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
                        Utilizamos equipos nuevos, de alta tecnología y eficacia para garantizar resultados óptimos.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild className="bg-blueAmbiente text-white hover:bg-blueAmbiente/60">
                          <Link href="/contacto">Solicitar Servicio</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-black hover:bg-black hover:text-white" asChild>
                          <Link href="/quienes-somos#ventajas">Nuestras Ventajas</Link>
                        </Button>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="hidden md:flex justify-center items-center"
                    >
                      <div className="relative w-full max-w-md h-[400px]">
                        <Image
                          src="/images/banners/desinsectacion-7.jpeg"
                          alt="Equipos profesionales de saneamiento"
                          fill
                          className="object-cover rounded-lg shadow-xl"
                        />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blueAmbiente/20 rounded-full z-0"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blueAmbiente/10 rounded-lg z-0"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-white/20 text-black hover:bg-white/40 border-white/20" />
          <CarouselNext className="relative right-0 top-0 translate-y-0 bg-white/20 text-black hover:bg-white/40 border-white/20" />
        </div>
      </Carousel>
    </section>
  );
}
