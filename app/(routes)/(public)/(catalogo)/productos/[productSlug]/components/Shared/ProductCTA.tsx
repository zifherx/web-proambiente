"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces";
import { createWhatsAppLink } from "@/lib/global";
import { Phone, ShoppingCart } from "lucide-react";

export function ProductCTA({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blueAmbiente to-blueAmbiente/80 p-8 text-white shadow-lg">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10">
        <h3 className="mb-4 text-2xl font-bold">
          ¿Interesado en {product.name}?
        </h3>
        <p className="mb-6 max-w-lg text-white/90">
          Contáctenos hoy mismo para obtener más información, precios y
          disponibilidad. Nuestro equipo de expertos está listo para ayudarle.
        </p>
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button size="lg" variant="secondary" asChild>
            <a
              href={createWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Solicitar por WhatsApp
            </a>
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
    </div>
  );
}
