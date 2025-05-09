import Image from "next/image";

import { DownloadButton } from "@/components/shared/DownloadButton";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

export function BrochureSection() {
  return <section className="py-16 md:py-24 bg-blueAmbiente text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl font-bold mb-6">Descarga nuestro brochure</h2>
            <p className="text-lg text-white/90 mb-8">
              Conoce más sobre nuestros servicios, procesos y ventajas. Descarga nuestro brochure informático y descubre cómo podemos ayudarte.
            </p>
            <DownloadButton 
              filePath="/documents/brochure-2025.pdf" 
              fileName="Brochure-ProAmbiente-2025.pdf"
              variant="secondary"
              >
              Descargar Brochure
            </DownloadButton>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ProAmbiente-brochure-2.jpeg"
                alt="Brochure"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  </section>;
}
