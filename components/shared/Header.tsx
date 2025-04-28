"use client";

import { cn } from "@/lib/utils";
import { Mail, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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
        isScrolled ? "bg-white/50 backdrop-blur-sm shadow-sm" : "bg-white"
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
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Logo_Pro_Ambiente_Blanco.png"
            alt="ProAmbiente Logo"
            width={180}
            height={50}
            className="mx-auto"
          />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/quienes-somos"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blueAmbiente/50 to-blueAmbiente p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Quiénes Somos
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Empresa especializada en saneamiento ambiental,
                          fumigaciones y control de plagas.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link
                      href="/quienes-somos#mision"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Misión y Visión
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Conoce nuestra misión, visión y valores.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quienes-somos#ventajas"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Ventajas
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Descubre por qué elegirnos.
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <Link
                      href="/servicios/saneamiento-ambiental"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Saneamiento Ambiental
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug">
                        Desratización, desinsectación y más
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/limpieza-integral"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Limpieza Integral
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Limpieza de oficinas, fachadas y más.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/desinfeccion"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Desinfección
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Servicios de desinfección profesional.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/control-aviar"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Control Aviar
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Soluciones para el control de aves.
                      </p>
                    </Link>
                  </li>
                  <li className="md:col-span-2">
                    <Link
                      href="/servicios"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Ver todos los servicios
                      </div>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button asChild className="bg-blueAmbiente hover:bg-blueAmbiente/80 ">
            <Link href="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/images/Logo_Pro_Ambiente_Blanco.png"
                    alt="ProAmbiente Logo"
                    width={150}
                    height={40}
                    className="mx-auto"
                  />
                </Link>
              </div>
              <nav className="flex flex-col gap-4 py-6 px-2">
                <Link href="/" className="text-lg font-medium">
                  Inicio
                </Link>
                <Link href="/quienes-somos" className="text-lg font-medium">
                  Quiénes Somos
                </Link>
                <Link href="/servicios" className="text-lg font-medium">
                  Servicios
                </Link>
                <Link href="/contacto" className="text-lg font-medium">
                  Contacto
                </Link>
              </nav>
              <div className="mt-auto space-y-4 px-2 mb-2">
                <div className="flex flex-col space-y-2 text-sm">
                  <a
                    href="mailto:ventas@proambiente.com.pe"
                    className="flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    ventas@proambiente.com.pe
                  </a>
                  <Link href="tel:966188038" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    966 188 038
                  </Link>
                </div>
                <Button
                  asChild
                  className="w-full bg-blueAmbiente hover:bg-blueAmbiente/80"
                >
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
