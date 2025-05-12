import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA2Section() {
  return (
    <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blueAmbiente to-blueAmbiente/80 p-8 text-center text-white shadow-xl">
            <FadeInWhenVisible>
              <h2 className="mb-4 text-3xl font-bold">¿Necesita asesoría profesional?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Nuestro equipo de expertos puede ayudarle a seleccionar los productos más adecuados para sus necesidades
                específicas de control de plagas y saneamiento ambiental.
              </p>
              <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-lg">
                <Link href="/contacto">Solicitar Asesoría Gratuita</Link>
              </Button>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
  )
}
