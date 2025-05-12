import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ProductBenefits } from "./Shared/ProductBenefits";

export function VentajasSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <FadeInWhenVisible>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              ¿Por qué elegir nuestros productos?
            </h2>
            <p className="text-lg text-gray-600">
              Ofrecemos soluciones profesionales respaldadas por años de
              experiencia en el sector
            </p>
          </FadeInWhenVisible>
        </div>

        <ProductBenefits />
      </div>
    </section>
  );
}
