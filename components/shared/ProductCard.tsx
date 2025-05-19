"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingCart } from "lucide-react";

import { Badge } from "../ui/badge";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

import { ProductCardProp } from "@/types/Props";
import { createWhatsAppLinkForProduct } from "@/lib/global";

export function ProductCard({ index, product }: ProductCardProp) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = product.icon;

  return (
    <FadeInWhenVisible delay={index * 0.1}>
      <motion.div
        className="group relative h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
      >
        {product.isNew && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
            Nuevo
          </div>
        )}

        <Link href={`/productos/${product.slug}`}>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={`/images/products/${product.coverImage}`}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

            {/* Icono Flotante */}
            <motion.div
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-lg"
              animate={
                isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-6 w-6 text-blueAmbiente" />
            </motion.div>
          </div>
        </Link>

        <div className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <Badge
              variant="outline"
              className="bg-blueAmbiente/10 text-xs font-medium text-blueAmbiente"
            >
              {product.category === "insumos"
                ? "Insumos"
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
              className="text-xs"
            >
              {product.stock === "disponible"
                ? "Disponible"
                : product.stock === "bajo"
                ? "Stock bajo"
                : "Agotado"}
            </Badge>
          </div>

          <Link href={`/productos/${product.slug}`}>
            <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors group-hover:text-blueAmbiente">
              {product.name}
            </h3>
          </Link>

          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {product.name}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <Link
              href={`/productos/${product.slug}`}
              className="flex items-center text-sm font-medium text-primary"
            >
              Ver detalles
              <motion.div
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="ml-1 h-4 w-4" />
              </motion.div>
            </Link>

            <a
              href={createWhatsAppLinkForProduct(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full bg-green-500 p-2 text-white shadow-sm transition-transform hover:scale-105"
            >
              <ShoppingCart className="h-4 w-4" />
            </a>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-blueAmbiente"
          initial={{ width: 0 }}
          animate={isHovered ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>
    </FadeInWhenVisible>
  );
}
