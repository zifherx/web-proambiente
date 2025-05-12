"use client";

import { Button } from "@/components/ui/button";

import { ProductCard } from "@/components/shared/ProductCard";

import { SearchResultsProp } from "@/types/Props";

export function SearchResults({
  clearSearch,
  filteredProducts,
  searchTerm,
}: SearchResultsProp) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Resultados para "{searchTerm}" ({filteredProducts.length})
        </h2>
        <Button variant="ghost" onClick={clearSearch} className="text-sm">
          Limpiar Búsqueda
        </Button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} index={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold">
            No se encontraron productos
          </h3>
          <p className="mb-4 text-gray-600">
            No hemos encontrado productos que coincidan con tu búsqueda. Intenta
            con otros términos o explora nuestras categorias.
          </p>
          <Button onClick={clearSearch}>Ver todas la categorias</Button>
        </div>
      )}
    </div>
  );
}
