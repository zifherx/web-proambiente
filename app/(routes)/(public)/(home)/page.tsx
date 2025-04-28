import { BannerCarrusel } from "./components/BannerCarrusel";
import { BrochureSection } from "./components/BrochureSection";
import { ClientesSection } from "./components/ClientesSection";
import { ContadorEstadisticas } from "./components/ContadorEstadisticas";
import { NosotrosSection } from "./components/NosotrosSection";
import { ServiciosSection } from "./components/ServiciosSection";
import { TestimoniosSection } from "./components/TestimoniosSection";
import { VentajasSection } from "./components/VentajasSection";

export default function HomePage() {
  return (
    <>
      <BannerCarrusel />
      <NosotrosSection />
      <ContadorEstadisticas />
      <ServiciosSection />
      <VentajasSection />
      <TestimoniosSection />
      <BrochureSection />
      <ClientesSection />
    </>
  );
}
