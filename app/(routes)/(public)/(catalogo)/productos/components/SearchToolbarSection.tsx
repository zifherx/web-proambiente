"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SearchToolbarProp } from "@/types/Props";

export function SearchToolbarSection({
  gestorBusqueda,
  parametroBusqueda,
  setParametroBusqueda,
}: SearchToolbarProp) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={gestorBusqueda} className="relative">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={parametroBusqueda}
              onChange={(e) => setParametroBusqueda(e.target.value)}
              className="pl-10 pr-16"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              Buscar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
