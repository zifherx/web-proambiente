"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { HeroServiceProp } from "@/types/Props";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HeroSection({ icon: Icon, service }: HeroServiceProp) {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/servicios"
            className="inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-blueAmbiente"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Servicios
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-blueAmbiente/10 px-3 py-1 text-sm font-medium text-blueAmbiente">
                <Icon className="mr-2 h-4 w-4" />
                {service.category === "saneamiento"
                  ? "Saneamiento Ambiental"
                  : "Servicios Auxiliares"}
              </div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                {service.title}
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                {service.shortDescription}
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <Link href="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:966188038">
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blueAmbiente/5 blur-xl"></div>
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-blueAmbiente/10 blur-xl"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* <AspectRatio ratio={16 / 9}> */}
              <Image
                src={`/images/services/${service.slug}/${service.coverImage}`}
                alt={service.title}
                width={600}
                height={400}
                className="object-contain"
                />
                {/* </AspectRatio> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
