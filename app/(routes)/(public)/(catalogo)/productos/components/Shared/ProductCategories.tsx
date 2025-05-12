"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Filter } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/shared/ProductCard";

import { ProductCategoriesProp } from "@/types/Props";
import { getProductsByCategory } from "@/data";

export default function ProductCategories({
  activeCategory,
  categories,
  handleCategoryChange,
}: ProductCategoriesProp) {
  return (
    <Tabs
      defaultValue="insecticidas"
      value={activeCategory}
      onValueChange={(value) => handleCategoryChange(value)}
      className="w-full"
    >
      <div className="mb-8 flex justify-center">
        <TabsList className="grid w-full max-w-4xl grid-cols-2 md:grid-cols-7">
          {categories.map(({ key, label }) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-xs cursor-pointer md:text-sm hover:text-greenAmbiente hover:shadow-xl"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <AnimatePresence mode="wait">
        <div className="space-y-5">
          {categories.map(({ key, label }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 flex items-center">
                <Filter className="mr-2 h-5 w-5 text-blueAmbiente" />
                <h2 className="text-2xl font-bold text-gray-800">{label}</h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {getProductsByCategory(key).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    index={index}
                    product={product}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </Tabs>
  );
}
