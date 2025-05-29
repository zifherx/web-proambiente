"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Database, Lock, UserCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

export function ERPRuppiest() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible>
            <div>
              <div className="inline-block bg-blueAmbiente/10 text-blueAmbiente font-medium px-4 py-2 rounded-full mb-4">
                Tecnología Avanzada
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Sistema ERP ProAmbiente
              </h2>
              <p className="text-lg text-muted-foreground">
                Implementamos el innovador sistema ERP que nos permite
                optimizar procesos, mejorar la gestión de recursos y ofrecer un
                servicio más eficiente y transparente a nuestros clientes.
              </p>

              <div className="space-y-4 mb-8">{}</div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-blueAmbiente hover:bg-greenAmbiente"
                >
                  <Link
                    href="https://app.rupipest.com/users/sign_in"
                    target="_blank"
                  >
                    Portal Clientes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/quienes-somos#ventajaserp">Conocer más</Link>
                </Button>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blueAmbiente/10 rounded-lg z-0 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blueAmbiente/20 rounded-lg z-0"></div>

              {/* Smartphone Frame */}
              <div className="relative z-10 mx-auto max-w-[280px]">
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-3 border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-gray-900 rounded-b-xl z-20"></div>

                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden h-[540px] w-[260px]">
                    {/* App  Login Screen */}
                    <div className="h-full w-full bg-gradient-to-b from-blueAmbiente/10 to-white p-6 flex flex-col">
                      <div className="flex justify-center mb-8 pt-6">
                        <div className="bg-white p-3 rounded-xl shadow-xs">
                          <Image
                            src="/images/Logo_Pro_Ambiente_PNG.png"
                            alt="ProAmbiente Logo"
                            width={120}
                            height={40}
                          />
                        </div>
                      </div>

                      <h3 className="text-center text-xl font-bold text-gray-800 mb-2">
                        ERP ProAmbiente
                      </h3>
                      <p className="text-center text-sm text-gray-600 mb-8">
                        Sistema de gestión integral
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center">
                            <UserCheck className="h-5 w-5 text-gray-400 mr-2" />
                            <input
                              type="text"
                              placeholder="Usuario"
                              className="w-full bg-transparent text-sm outline-none"
                              disabled
                            />
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center">
                            <Lock className="h-5 w-5 text-gray-400 mr-2" />
                            <input
                              type="password"
                              placeholder="Contraseña"
                              className="w-full bg-transparent text-sm outline-none"
                              disabled
                            />
                          </div>
                        </div>
                      </div>

                      <button className="bg-blueAmbiente text-white py-3 rounded-lg font-medium shadow-md">
                        Iniciar Sesión
                      </button>

                      <div className="mt-auto">
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-blueAmbiente"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                          </div>
                          <p className="text-xs text-gray-500">v2.5.1</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Button */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
                </div>

                {/* Reflection */}
                <div className="absolute top-[5%] left-[5%] right-[40%] bottom-[70%] bg-gradient-to-br from-white/20 to-transparent rounded-full transform rotate-12 opacity-30"></div>
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute top-1/4 right-0 transform translate-x-1/2 bg-blueAmbiente/10 p-3 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Database className="h-6 w-6 text-blueAmbiente" />
              </div>

              <div
                className="absolute bottom-1/3 left-0 transform translate-x-1/2 bg-blueAmbiente/10 p-3 rounded-full animate-bounce"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              >
                <BarChart3 className="h-6 w-6 text-blueAmbiente" />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
