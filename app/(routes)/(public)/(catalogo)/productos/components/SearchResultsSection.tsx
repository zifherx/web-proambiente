"use client";

import { SearchResults } from "./Shared/SearchResults";
import ProductCategories from "./Shared/ProductCategories";

import { SearchSectionProp } from "@/types/Props";

export function SearchResultsSection({
  isSearching,
  clearSearch,
  filteredProducts,
  searchTerm,
  activeCategory,
  categories,
  handleCategoryChange,
}: SearchSectionProp) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {isSearching ? (
          <SearchResults
            clearSearch={clearSearch}
            filteredProducts={filteredProducts}
            searchTerm={searchTerm}
          />
        ) : (
          <ProductCategories
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        )}
      </div>
    </section>
  );
}
