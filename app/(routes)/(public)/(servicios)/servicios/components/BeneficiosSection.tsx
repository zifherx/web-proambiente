"use client"

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { RevealIn } from "@/components/shared/RevealIn";
import { Card } from "@/components/ui/card";

export function BeneficiosSection() {
  return (
    <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeInWhenVisible>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Beneficios de Nuestros Servicios</h2>
              <p className="text-lg text-gray-600">
                Al elegirnos, obtiene mucho más que un simple servicio de saneamiento ambiental
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RevealIn delay={0.1} direction="left">
              <Card className="overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Resultados Garantizados</h3>
                <p className="text-gray-600">
                  Nuestros métodos probados y experiencia garantizan la efectividad de todos nuestros servicios.
                </p>
              </Card>
            </RevealIn>

            <RevealIn delay={0.2} direction="left">
              <Card className="overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19.73 14.87a7.24 7.24 0 0 0 0-5.74" />
                    <path d="M16.73 17.9a7.24 7.24 0 0 1-9.46 0" />
                    <path d="M7.27 9.13a7.24 7.24 0 0 1 9.46 0" />
                    <path d="M4.27 14.87a7.24 7.24 0 0 1 0-5.74" />
                    <path d="M12 22v-4" />
                    <path d="M12 6V2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Productos Ecológicos</h3>
                <p className="text-gray-600">
                  Utilizamos productos biodegradables y respetuosos con el medio ambiente sin comprometer la eficacia.
                </p>
              </Card>
            </RevealIn>

            <RevealIn delay={0.3} direction="left">
              <Card className="overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Seguridad Garantizada</h3>
                <p className="text-gray-600">
                  Priorizamos la seguridad de su familia, mascotas y empleados en todos nuestros procedimientos.
                </p>
              </Card>
            </RevealIn>

            <RevealIn delay={0.4} direction="right">
              <Card className="overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Conocimiento Especializado</h3>
                <p className="text-gray-600">
                  Nuestro equipo cuenta con amplia formación y experiencia en todas las áreas de saneamiento ambiental.
                </p>
              </Card>
            </RevealIn>

            <RevealIn delay={0.5} direction="right">
              <Card className="overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Cumplimiento Normativo</h3>
                <p className="text-gray-600">
                  Todos nuestros servicios cumplen con las normativas sanitarias y ambientales vigentes.
                </p>
              </Card>
            </RevealIn>

            <RevealIn delay={0.6} direction="right">
              <Card className="overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blueAmbiente/10 text-blueAmbiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 8a2 2 0 0 1 0 4 2 2 0 0 1 0-4z" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Soluciones Integrales</h3>
                <p className="text-gray-600">
                  Ofrecemos un enfoque completo que aborda tanto los problemas actuales como la prevención futura.
                </p>
              </Card>
            </RevealIn>
          </div>
        </div>
      </section>
  )
}
