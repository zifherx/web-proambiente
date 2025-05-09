import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

export function MapaSection() {
  const frameMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.6215965276065!2d-78.9930047!3d-8.139949200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad170120e9e93b%3A0xbddbba37299cb82a!2sPro%20Ambiente%20SAC!5e0!3m2!1ses-419!2spe!4v1746567203859!5m2!1ses-419!2spe"
  
  return (
    <section className="py-16 md:py:24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xlfont-bold mb-4">Cobertura Nacional</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Brindamos nuestros servicios en todo el Perú
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src={frameMaps}
              width="100%"
              height={450}
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
