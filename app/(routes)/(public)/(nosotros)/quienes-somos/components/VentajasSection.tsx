import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { VentajaCard } from "@/components/shared/VentajaCard";
import { Button } from "@/components/ui/button";
import { VentajasNosotrosData } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function VentajasSection() {
  return (
    <section id="ventajas" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestras Ventajas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Por qué elegirnos? Estas son algunas de nuestras ventajas
              competitivas
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VentajasNosotrosData.map(
            ({ id, delay, description, icon, title }) => (
              <VentajaCard
                key={id}
                delay={delay}
                description={description}
                title={title}
                icon={icon}
              />
            )
          )}
        </div>

        <div className="mt-12 text-center w-fit mx-auto text-white">
          <Link href="/contacto" className="px-6 py-3 bg-blueAmbiente rounded-md flex items-center justify-center hover:bg-blueAmbiente/80 hover:shadow-lg">
            Contáctanos
            <ArrowRight className="ml-2 h-4 w-4"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
