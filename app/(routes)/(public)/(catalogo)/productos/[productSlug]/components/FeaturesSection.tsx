"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

import { ProductFeatures } from "./Shared/ProductFeatures";
import { ProductApplications } from "./Shared/ProductApplications";
import { Product } from "@/interfaces";

export function FeaturesSection({ product }: { product: Product }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Tabs defaultValue="caracteristicas" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="caracteristicas">Características</TabsTrigger>
            <TabsTrigger value="aplicaciones">Aplicaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="caracteristicas">
            <FadeInWhenVisible>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">
                  Características Principales
                </h2>
                <ProductFeatures features={product.features} />
              </div>
            </FadeInWhenVisible>
          </TabsContent>
          <TabsContent value="aplicaciones">
            <FadeInWhenVisible>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">
                  Aplicaciones Recomendadas
                </h2>
                <ProductApplications applications={product.applications} />
              </div>
            </FadeInWhenVisible>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
