"use client"

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTAFinalSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blueAmbiente to-blueAmbiente/80 p-8 text-center text-white shadow-xl">
            <FadeInWhenVisible>
              <h2 className="mb-4 text-3xl font-bold">¿Listo para crear un entorno más saludable?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Contáctenos hoy mismo y descubra cómo nuestros servicios profesionales pueden ayudarle a mantener su
                hogar o negocio libre de plagas y contaminantes.
              </p>
              <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-lg">
                <Link href="/contacto">Solicitar Cotización Gratuita</Link>
              </Button>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
  )
}
