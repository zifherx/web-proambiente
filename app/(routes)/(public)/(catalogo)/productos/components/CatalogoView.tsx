"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { HeroSection } from "./HeroSection";
import { SearchToolbarSection } from "./SearchToolbarSection";
import { SearchResultsSection } from "./SearchResultsSection";

export function CatalogoView() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Hace tarea 01");
    } else {
      console.log("Hace tarea 02");
    }
  };

  return (
    <>
      <HeroSection />
      <SearchToolbarSection
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SearchResultsSection />
    </>
  );
}
