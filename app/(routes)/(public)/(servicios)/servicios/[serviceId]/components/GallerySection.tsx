"use client";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ImageGallery } from "./shared/ImageGallery";
import { ServiceCard } from "@/types/Props";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function GallerySection({ service }: ServiceCard) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Galería</h2>
          <AspectRatio ratio={16 / 9}>
            <ImageGallery
              galleryImages={service.galleryImages}
              title={service.title}
              slug={service.slug}
            />
          </AspectRatio>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
