"use client";

import React from "react";
import { notFound } from "next/navigation";

import { HeroSection } from "./HeroSection";

import { getServiceBySlug } from "@/data";
import { CaracteristicasSection } from "./CaracteristicasSection";
import { GallerySection } from "./GallerySection";

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
    </>
  );
}
