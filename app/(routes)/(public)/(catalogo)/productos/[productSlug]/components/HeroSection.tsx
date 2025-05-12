"use client";

import { ArrowLeft, FileText, Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "./Shared/ImageGallery";

import { createWhatsAppLink } from "@/lib/global";
import { HeroProductProp } from "@/types/Props";

export function HeroSection({ product, icon: Icon }: HeroProductProp) {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/productos"
            className="inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-blueAmbiente"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Catálogo
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <ImageGallery gallery={product.gallery} name={product.name} />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-sm font-medium text-primary"
                >
                  {product.category === "insecticidas"
                    ? "Insecticida"
                    : product.category === "rodenticidas"
                    ? "Rodenticida"
                    : product.category === "desinfectantes"
                    ? "Desinfectante"
                    : product.category === "sanitizantes"
                    ? "Sanitizante"
                    : product.category === "repelentes"
                    ? "Repelente"
                    : product.category === "trampas"
                    ? "Trampa"
                    : "Equipo"}
                </Badge>
                <Badge
                  variant={
                    product.stock === "disponible"
                      ? "default"
                      : product.stock === "bajo"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {product.stock === "disponible"
                    ? "Disponible"
                    : product.stock === "bajo"
                    ? "Stock bajo"
                    : "Agotado"}
                </Badge>
                {product.isNew && (
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    Nuevo
                  </Badge>
                )}
              </div>

              <div className="mb-2 flex items-center">
                <Icon className="mr-2 h-6 w-6 text-blueAmbiente" />
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  {product.name}
                </h1>
              </div>

              <p className="mb-6 text-xl text-gray-600">
                {product.shortDescription}
              </p>

              <div className="mb-8">
                <h2 className="mb-3 text-lg font-semibold text-gray-800">
                  Descripción
                </h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {product.price && (
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-semibold text-gray-800">
                    Precio
                  </h2>
                  <p className="text-2xl font-bold text-blueAmbiente">
                    {product.price}
                  </p>
                </div>
              )}

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <a
                    href={createWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Solicitar por WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacto">
                    <Phone className="mr-2 h-4 w-4" />
                    Contactar
                  </Link>
                </Button>
              </div>

              {product.technicalSheet && (
                <div className="mt-6">
                  <Button variant="ghost" asChild className="text-blueAmbiente">
                    <a
                      href={product.technicalSheet}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Descargar ficha técnica
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
