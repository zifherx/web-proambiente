import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { BeneficiosProductosData } from "@/data";

export function BeneficiosSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <FadeInWhenVisible>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Beneficios de Nuestros Productos
            </h2>
            <p className="text-lg text-gray-600">
              Todos nuestros productos cumplen con los más altos estándares de
              calidad y eficacia
            </p>
          </FadeInWhenVisible>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BeneficiosProductosData.map(
            ({ id, beneficio, delay, description, icon: Icon }) => (
              <FadeInWhenVisible key={id} delay={delay}>
                <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {beneficio}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </FadeInWhenVisible>
            )
          )}
        </div>
      </div>
    </section>
  );
}
