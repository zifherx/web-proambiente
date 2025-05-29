"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Button } from "../ui/button";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white"
      )}
    >
      <div className="hidden md:flex items-center justify-end bg-blueAmbiente text-white px-5 py-1 text-sm">
        <div className="flex items-center space-x-4">
          <a
            href="mailto:ventas@proambiente.com.pe"
            className="flex items-center hover:text-primary-foreground/80 transition"
          >
            <Mail className="h-4 w-4 mr-1" />
            ventas@proambiente.com.pe
          </a>
          <Link
            href="tel:966188038"
            className="flex items-center hover:text-primary-foreground/80 transition"
          >
            <Phone className="h-4 w-4 mr-1" />
            966 188 038
          </Link>
          <span className="text-primary-foreground/80">
            Atención a todo el Perú
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Logo_Pro_Ambiente_PNG.png"
            alt="ProAmbiente Logo"
            width={180}
            height={50}
            className="mx-auto"
          />
        </Link>

        <MenuDesktop/>

        <div className="hidden md:block">
          <Button asChild className="bg-blueAmbiente hover:bg-blueAmbiente/80 ">
            <Link href="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        <MenuMobile/>
      </div>
    </header>
  );
}
