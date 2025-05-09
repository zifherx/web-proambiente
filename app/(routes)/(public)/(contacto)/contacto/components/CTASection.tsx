import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-blueAmbiente/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-6 text-white">
            ¿Listo para crear un entorno saludable?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte con nuestsros
            servicios de saneamiento ambiental y limpieza integral.
          </p>
          <div className="flex flex-colsm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:966188038">
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-black/30"
              asChild
            >
              <Link href="mailto:ventas@proambiente.com.pe">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Link>
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
