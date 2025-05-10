"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ServiceType } from "@/types/Props";
import { getAllServiceCategories, getServicesByCategory } from "@/data";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function CategoriasSection() {
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Tabs
          defaultValue="saneamiento"
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as ServiceType)}
          className="w-full"
        >
          <div className="mb-12 flex justify-center">
            <TabsList className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-2">
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
      </div>
    </section>
  );
}
