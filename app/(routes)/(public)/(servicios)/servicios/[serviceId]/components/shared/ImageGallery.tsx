"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { Service } from "@/interfaces";

export function ImageGallery({ slug, title, galleryImages }: Partial<Service>) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-xl">
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
              src={`/images/services/${slug}/${
                galleryImages![selectedImage].url
              }`}
              alt={`${title} - Imagen ${selectedImage + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-4">
        {galleryImages!.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all cursor-pointer ${
              selectedImage === index
                ? "ring-2 ring-blueAmbiente ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={`/images/services/${slug}/${image.url}`}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
