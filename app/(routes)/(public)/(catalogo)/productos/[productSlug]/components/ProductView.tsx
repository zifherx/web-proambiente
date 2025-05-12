"use client";

import { notFound } from "next/navigation";

import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";

import { getProductBySlug } from "@/data";
import { CTA1Section } from "./CTA1Section";

export function ProductView({ productSlug }: { productSlug: string }) {
  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <>
      <HeroSection index={product.id} icon={Icon} product={product} />
      <FeaturesSection product={product} />
      <CTA1Section product={product} />
    </>
  );
}
