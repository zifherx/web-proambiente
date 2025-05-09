"use client"

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible"
import {RevealIn} from "@/components/shared/RevealIn"

export function ProcesoTrabajoSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeInWhenVisible>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Nuestro Proceso de Trabajo</h2>
              <p className="text-lg text-gray-600">
                Seguimos un enfoque metódico y profesional para garantizar resultados óptimos en todos nuestros
                servicios
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="relative">
            {/* Línea conectora */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 md:hidden"></div>
            <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 bg-gray-200 md:block"></div>

            <div className="grid gap-12 md:grid-cols-5">
              {/* Paso 1 */}
              <RevealIn delay={0.1} direction="up">
                <div className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blueAmbiente text-white shadow-lg md:mx-auto">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg md:mt-8">
                    <h3 className="mb-3 text-xl font-bold text-blueAmbiente">Evaluación</h3>
                    <p className="text-sm text-gray-600">
                      Realizamos una inspección detallada para identificar sus necesidades específicas y desarrollar un
                      plan personalizado.
                    </p>
                  </div>
                </div>
              </RevealIn>

              {/* Paso 2 */}
              <RevealIn delay={0.2} direction="up">
                <div className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blueAmbiente text-white shadow-lg md:mx-auto">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg md:mt-8">
                    <h3 className="mb-3 text-xl font-bold text-blueAmbiente">Planificación</h3>
                    <p className="text-sm text-gray-600">
                      Diseñamos una estrategia a medida utilizando las técnicas y productos más adecuados para su
                      situación.
                    </p>
                  </div>
                </div>
              </RevealIn>

              {/* Paso 3 */}
              <RevealIn delay={0.3} direction="up">
                <div className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blueAmbiente text-white shadow-lg md:mx-auto">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg md:mt-8">
                    <h3 className="mb-3 text-xl font-bold text-blueAmbiente">Ejecución</h3>
                    <p className="text-sm text-gray-600">
                      Implementamos el servicio con profesionales capacitados y equipos de última generación para
                      garantizar resultados óptimos.
                    </p>
                  </div>
                </div>
              </RevealIn>

              {/* Paso 4 */}
              <RevealIn delay={0.4} direction="up">
                <div className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blueAmbiente text-white shadow-lg md:mx-auto">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg md:mt-8">
                    <h3 className="mb-3 text-xl font-bold text-blueAmbiente">Seguimiento</h3>
                    <p className="text-sm text-gray-600">
                      Realizamos visitas de control para verificar la efectividad del tratamiento y realizar ajustes si
                      es necesario.
                    </p>
                  </div>
                </div>
              </RevealIn>

              {/* Paso 5 */}
              <RevealIn delay={0.5} direction="up">
                <div className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blueAmbiente text-white shadow-lg md:mx-auto">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div className="mt-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg md:mt-8">
                    <h3 className="mb-3 text-xl font-bold text-blueAmbiente">Prevención</h3>
                    <p className="text-sm text-gray-600">
                      Proporcionamos recomendaciones y programas de mantenimiento para prevenir futuros problemas y
                      mantener resultados duraderos.
                    </p>
                  </div>
                </div>
              </RevealIn>
            </div>
          </div>
        </div>
      </section>
  )
}
