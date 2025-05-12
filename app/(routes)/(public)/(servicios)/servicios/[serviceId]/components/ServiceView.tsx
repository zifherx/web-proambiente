"use client";

import { notFound } from "next/navigation";

import { HeroSection } from "./HeroSection";

import { getServiceBySlug } from "@/data";
import { CaracteristicasSection } from "./CaracteristicasSection";
import { GallerySection } from "./GallerySection";
import { ProcesoTrabajoSection } from "./ProcesoTrabajoSection";
import { CTA1Section } from "./CTA1Section";
import { FaqSection } from "./FaqSection";
import { CTA2Section } from "./CTA2Section";
import { ServiciosRelacionadosSection } from "./ServiciosRelacionadosSection";

export function ServiceView({ serviceSlug }: { serviceSlug: string }) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <HeroSection service={service} icon={Icon} />
      <CaracteristicasSection service={service} />
      <GallerySection service={service} />
      <ProcesoTrabajoSection service={service} />
      <CTA1Section service={service} />
      <FaqSection service={service} />
      <CTA2Section service={service} />
      <ServiciosRelacionadosSection service={service} />
    </>
  );
}
