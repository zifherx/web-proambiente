"use client";

import { CheckCircle2, Eye, Handshake, Target } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

import { ValoresData } from "@/data";

export function ValoresSection() {
  return (
    <section id="mision" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Misión, Visión y Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce los pilares que guían nuestro trabajo diario
            </p>
          </div>
        </FadeInWhenVisible>

        <Tabs defaultValue="mision" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="mision">Misión</TabsTrigger>
            <TabsTrigger value="vision">Visión</TabsTrigger>
            <TabsTrigger value="valores">Valores</TabsTrigger>
          </TabsList>
          <TabsContent value="mision">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-blueAmbiente/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                    <Target className="h-20 w-20" strokeWidth={2} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">
                    Nuestra Misión
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Cumplir todas las expectativas de nuestros clientes,
                    proveedores y accionistas, brindando el mejor servicio de
                    saneamiento ambiental en el Perú.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Nos enfocamos en brindar soluciones reales para ambientes
                    libres de plagas, a todo nivel, industrial, comercial y
                    residencial, promoviendo la seguridad, comodidad y salud de
                    las personas.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="vision">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-blueAmbiente/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                    <Eye className="h-20 w-20" strokeWidth={2} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">
                    Nuestra Visión
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Ser la empresa líder de saneamiento ambiental en el Perú,
                    ofreciendo soluciones rápidas y ecológicas, trabajando con
                    los mejores proveedores, colaboradores y equipos.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Buscamos expandir nuestros servicios a nivel nacional,
                    manteniendo siempre los más altos estándares de calidad y
                    compromiso con el medio ambiente y la salud de nuestros
                    clientes.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="valores">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-blueAmbiente/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                    <Handshake className="h-20 w-20" strokeWidth={2} />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">
                    Nuestros Valores
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {ValoresData.map(({ id, valor }) => (
                      <div key={id} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-blueAmbiente mr-2 shrink-0 hover:fill-blueAmbiente hover:text-white" />
                        <span className="font-medium">{valor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
