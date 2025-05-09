"use client";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ServiceProcess } from "./shared/ServiceProcess";
import { ServiceCard } from "@/types/Props";

export function ProcesoTrabajoSection({ service }: ServiceCard) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <FadeInWhenVisible>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Nuestro Proceso
            </h2>
            <ServiceProcess process={service.process} />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
