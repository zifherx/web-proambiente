"use client";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ServiceBenefits } from "./shared/ServiceBenefits";
import { ServiceFeatures } from "./shared/ServiceFeatures";
import { ServiceCard } from "@/types/Props";

export function CaracteristicasSection({ service }: ServiceCard) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <FadeInWhenVisible>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Descripción del Servicio
              </h2>
              <div className="max-w-none text-gray-600">
                <p>{service.fullDescription}</p>
              </div>
            </FadeInWhenVisible>

            <div className="mt-12">
              <FadeInWhenVisible delay={0.2}>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Beneficios
                </h3>
                <ServiceBenefits benefits={service.benefits} />
              </FadeInWhenVisible>
            </div>
          </div>

          <div>
            <FadeInWhenVisible delay={0.3}>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Características
              </h2>
              <ServiceFeatures features={service.features} />
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
