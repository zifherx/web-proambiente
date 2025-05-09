"use client"

import { HeroSection } from "./components/HeroSection";
import { AboutUsSection } from "./components/AboutUsSection";
import { ValoresSection } from "./components/ValoresSection";
import { ProcesosSection } from "./components/ProcesosSection";
import { VentajasERPSection } from "./components/VentajasERPSection";
import { VentajasSection } from "./components/VentajasSection";

import { FeaturesData } from "@/data";

export default function NosotrosPage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ValoresSection />
      <ProcesosSection />
      <VentajasERPSection features={FeaturesData} />
      <VentajasSection />
    </>
  );
}
