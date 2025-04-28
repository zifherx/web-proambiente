"use client";

import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { ArrowUpIcon } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toogleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toogleVisibility);

    return () => window.removeEventListener("scroll", toogleVisibility);
  }, []);

  const scrollingToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="fixed bottom-4 right-10 rounded-full p-3 shadow-lg transition-opacity duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={scrollingToTop}
            aria-label="Subir arriba"
          >
            <ArrowUpIcon className="h-6 w-6" strokeWidth={2} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Subir</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
