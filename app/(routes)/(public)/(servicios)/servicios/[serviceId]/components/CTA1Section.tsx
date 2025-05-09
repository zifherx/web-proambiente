"use client";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ServiceCTA } from "./shared/ServiceCTA";
import { ServiceCard } from "@/types/Props";

export function CTA1Section({ service }: ServiceCard) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <ServiceCTA title={service.title} />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
