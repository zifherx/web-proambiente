import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import Image from "next/image";

export function NosotrosSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blueAmbiente/10 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blueAmbiente/20 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Nosotros-proambiente.jpeg"
                  alt="Nosotros Pro Ambiente"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Somos una empresa del rubro de saneamiento ambiental,
                especialistas en fumigaciones, gestión, monitoreo y control de
                plagas.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nuestra empresa está autorizada por el Ministerio de Salud para
                realizar los servicios que brindamos. Manejamos equipos nuevos,
                de alta tecnología y eficacia.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blueAmbiente mr-2 flex-shrink-0 hover:fill-blueAmbiente hover:text-white" />
                  <span>
                    Experiencia comprobada para el control y erradicación de
                    plagas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blueAmbiente mr-2 flex-shrink-0 hover:fill-blueAmbiente hover:text-white" />
                  <span>
                    Insumos químicos autorizados y certificados por la DIGESA y
                    GERESA
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blueAmbiente mr-2 flex-shrink-0 hover:fill-blueAmbiente hover:text-white" />
                  <span>
                    Profesionales capacitados y con amplia experiencia
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-blueAmbiente hover:bg-blueAmbiente/80"
              >
                <Link href="/quienes-somos">
                  Conoce más sobre nosotros
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2}/>
                </Link>
              </Button>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
