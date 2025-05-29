"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

import { ServiceCard } from "@/types/Props";
import { ServiciosData } from "@/data";

export function ServiciosRelacionadosSection({ service }: ServiceCard) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Servicios Relacionados
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {ServiciosData.filter(
              (s) => s.category === service.category && s.id !== service.id
            )
              .slice(0, 3)
              .map((relatedService, index) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <Link
                    key={relatedService.id}
                    href={`/servicios/${relatedService.slug}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`/images/services/${relatedService.slug}/${relatedService.coverImage}`}
                        alt={relatedService.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">
                          {relatedService.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <RelatedIcon className="mr-2 h-4 w-4 text-blueAmbiente" />
                          <span>{relatedService.shortDescription}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-blueAmbiente transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
