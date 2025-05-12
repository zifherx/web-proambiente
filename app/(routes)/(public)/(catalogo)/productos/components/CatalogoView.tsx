/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { HeroSection } from "./HeroSection";
import { SearchToolbarSection } from "./SearchToolbarSection";
import { SearchResultsSection } from "./SearchResultsSection";
import { CTA1Section } from "./CTA1Section";
import { VentajasSection } from "./VentajasSection";
import { CTA2Section } from "./CTA2Section";

import { ProductCategory } from "@/types/Props";
import {
  getAllProductCategories,
  getFeaturedProducts,
  getProductsByCategory,
  searchProducts,
} from "@/data";

export function CatalogoView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("insecticidas");
  const [filteredProducts, setFilteredProducts] = useState(
    getProductsByCategory("insecticidas")
  );
  const [isSearching, setIsSearching] = useState(false);
  const categories = getAllProductCategories();
  const featuredProducts = getFeaturedProducts();

  // Manejar cambios en la URL
  useEffect(() => {
    const category = searchParams.get("categoria") as ProductCategory;
    const search = searchParams.get("buscar");

    if (category && categories.some((c) => c.key === category)) {
      setActiveCategory(category);
      setIsSearching(false);
    }

    if (search) {
      setSearchTerm(search);
      setFilteredProducts(searchProducts(search));
      setIsSearching(true);
    } else if (category) {
      setFilteredProducts(getProductsByCategory(category));
    }
  }, []);

  // Actualizar productos filtrados cuando cambia la categoria activa
  useEffect(() => {
    if (!isSearching) {
      setFilteredProducts(getProductsByCategory(activeCategory));
    }
  }, [activeCategory, isSearching]);

  // Manejar búsquedas
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Hace tarea 01");
      setFilteredProducts(searchProducts(searchTerm));
      setIsSearching(true);
      router.push(`/productos?buscar=${encodeURIComponent(searchTerm)}`);
    } else {
      console.log("Hace tarea 02");
      setIsSearching(false);
      setFilteredProducts(getProductsByCategory(activeCategory));
      router.push(`/productos?categoria=${activeCategory}`);
    }
  };

  // Manejar cambio de categoría
  const handleCategoryChange = (value: ProductCategory) => {
    setActiveCategory(value);
    setIsSearching(false);
    setSearchTerm("");
    router.push(`/productos?categoria=${value}`);
  };

  // Limpiar búsqueda
  const clearSearch = () => {
    setSearchTerm("");
    setIsSearching(false);
    setFilteredProducts(getProductsByCategory(activeCategory));
    router.push(`/productos?categoria=${activeCategory}`);
  };

  return (
    <>
      <HeroSection />
      <SearchToolbarSection
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SearchResultsSection
        searchTerm={searchTerm}
        isSearching={isSearching}
        clearSearch={clearSearch}
        filteredProducts={filteredProducts}
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <CTA1Section />
      <VentajasSection />
      <CTA2Section />
    </>
  );
}
