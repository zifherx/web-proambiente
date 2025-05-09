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

export function BannerCarrusel() {

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false}))

  return (
    <section className="relativ">
      <Carousel className="w-full" opts={{ loop: true}} plugins={[plugin.current]}>
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[80vh] w-full bg-gray-200">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-left p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl"
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Creando entornos saludables
                  </h1>
                  <p className="text-lg md:text-xl text-black/90 mb-6 max-w-2xl mx-auto">
                    Especialistas en saneamiento ambiental, fumigaciones y
                    control de plagas para empresas y hogares.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/contacto">Solicitar Cotización</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-black/10 text-black border-black/20 hover:bg-black/20"
                      asChild
                    >
                      <Link href="/servicios">Nuestros Servicios</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[80vh] w-full bg-green-100">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl"
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Profesionales en nuestra labor
                  </h1>
                  <p className="text-lg md:text-xl text-black/90 mb-6 max-w-2xl mx-auto">
                    Trabajando tu espacio con eficiencia y caldiad de servicio.
                    Llegamos a tu empresa para brindarte un servicio de calidad
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/contacto">Contáctanos</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-black/10 text-black border-black/20 hover:bg-black/20"
                      asChild
                    >
                      <Link href="/servicios">Conoce más</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[80vh] w-full bg-cyan-100">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl"
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Equipos de alta tecnología
                  </h1>
                  <p className="text-lg md:text-xl text-black/90 mb-6 max-w-2xl mx-auto">
                    Utilizamos equipos nuevos, de alta tecnología y eficacia
                    para garantizar resultados óptimos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/contacto">Solicitar Servicio</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-black/10 text-black border-black/20 hover:bg-black/20"
                      asChild
                    >
                      <Link href="/servicios">Nuestras ventajas</Link>
                    </Button>
                  </div>
                </motion.div>
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
