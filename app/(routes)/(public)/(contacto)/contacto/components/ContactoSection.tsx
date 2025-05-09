import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { Mail, MapPin, Phone } from "lucide-react";
import { FormularioSection } from "./FormularioSection";

export function ContactoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeInWhenVisible>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Información de Contacto
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ponte en contacto con nosotros para solicitar una cotización o
                para cualquier consulta
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blueAmbiente/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blueAmbiente" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfonos</h3>
                    <p className="text-muted-foreground mb-1">
                      <a
                        href="tel:96618038"
                        className="hover:text-blueAmbiente transition-colors"
                      >
                        966 188 038
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:965359339"
                        className="hover:text-blueAmbiente transition-colors"
                      >
                        965 359 339
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blueAmbiente/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blueAmbiente"/>
                  </div>
                  <div >
                      <h3 className="font-semibold text-lg mb-1">Correo Electrónico</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:ventas@proambiente.com.pe" className="hover:text-blueAmbiente transition-colors">
                          ventas@proambiente.com.pe
                        </a>
                      </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blueAmbiente/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blueAmbiente" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cobertura</h3>
                    <p className="text-muted-foreground">
                      Atención a todo el Perú
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Horario de Atención</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Lunes a Viernes</p>
                      <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Sábados</p>
                      <p className="text-muted-foreground">8:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <FormularioSection/>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
