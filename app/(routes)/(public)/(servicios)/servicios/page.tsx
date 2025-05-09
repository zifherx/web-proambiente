import { BeneficiosSection } from "./components/BeneficiosSection";
import { CategoriasSection } from "./components/CategoriasSection";
import { CTAFinalSection } from "./components/CTAFinalSection";
import { CTASection } from "./components/CTASection";
import { HeroSection } from "./components/HeroSection";
import { ProcesoTrabajoSection } from "./components/ProcesoTrabajoSection";

export default function ServiciosPage() {
    
  return (
    <>
        <HeroSection/>
        <CategoriasSection/>
        <CTASection/>
        <ProcesoTrabajoSection/>
        <BeneficiosSection/>
        <CTAFinalSection/>
    </>
  )
}
