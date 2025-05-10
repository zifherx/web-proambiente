"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ServiceCard } from "@/components/shared/ServiceCard";

import { getAllServiceCategories, getServicesByCategory } from "@/data";
import { ServiceType } from "@/types/Props";

export function ServiciosSection() {
  const [activeCategory, setActiveCategory] =
    useState<ServiceType>("saneamiento");
  const [filteredServices, setFilteredServices] = useState(
    getServicesByCategory("saneamiento")
  );
  const categories = getAllServiceCategories();

  useEffect(() => {
    setFilteredServices(getServicesByCategory(activeCategory));
  }, [activeCategory]);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones integrales de saneamiento ambiental y
              servicios auxiliares para empresas y hogares
            </p>
          </div>
        </FadeInWhenVisible>

        <Tabs
          defaultValue="saneamiento"
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as ServiceType)}
          className="w-full"
        >
          <div className="mb-12 flex justify-center">
            <TabsList className="gid w-full max-w-3xl grid-cols-1 md:grid-cols-3">
              {categories.map(({ key, label }) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="text-sm md:text-base"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="sync">
            {categories.map(({ key }) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                  {getServicesByCategory(key).map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                    />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="flex justify-between items-center mx-auto w-fit px-3 py-2 text-white rounded-md bg-blueAmbiente hover:bg-blueAmbiente/80"
          >
            Ver todos nuestros servicios
            <ArrowRight className="h-4 w-4 ml-2" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
