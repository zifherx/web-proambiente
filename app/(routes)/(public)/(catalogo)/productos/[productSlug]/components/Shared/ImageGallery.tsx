"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/interfaces";

export function ImageGallery({ gallery, slug, name }: Partial<Product>) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <Image
              src={`/images/products/${gallery![selectedImage].url}`}
              alt={`${name} - Imagen ${selectedImage}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {gallery!.map(({ id, url }) => (
          <button
            key={id}
            onClick={() => setSelectedImage(id)}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md transition-all ${
              selectedImage === id
                ? "ring-2 ring-primary ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={`/images/products/${url}`}
              alt={`Miniatura ${id}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
