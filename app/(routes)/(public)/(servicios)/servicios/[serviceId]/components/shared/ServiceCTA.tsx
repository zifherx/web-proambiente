"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Service } from "@/interfaces";

export function ServiceCTA({ title }: Partial<Service>) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-greenAmbiente to-greenAmbiente/80 p-8 text-white shadow-lg z-10">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <h3 className="mb-4 text-2xl font-bold">
            ¿Necesita nuestro servicio de {title}?
          </h3>
          <p className="mb-6 max-w-lg text-white/90">
            Contáctenos hoy mismo para una evaluación gratuita y un presupuesto
            adaptado a sus necesidades específicas. Nuestro equipo de expertos
            está listo para ayudarle.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href="tel:966188038">
                <Phone className="mr-2 h-4 w-4" />
                Llamar Ahora
              </a>
            </Button>
          </div>
        </div>
        {/* <div className="hidden md:block relative">
          <div className="absolute -bottom-24 right-0 transform translate-x-1/12 translate-y-1/3 ">
            <div className="relative z-10" style={{ marginTop: "-180px" }}>

              <Image
                src="/images/CTA-image.png"
                alt="Servicio de Saneamiento Ambiental"
                width={500}
                height={600}
                className="border-2 border-black object-contain"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
