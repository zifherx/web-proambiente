"use client"

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export function MenuDesktop() {
  return (
    <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Nosotros
              </NavigationMenuTrigger>
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
              <NavigationMenuTrigger className="bg-transparent">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <Link
                      href="/servicios/desratizacion"
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
                      href="/servicios/limpieza-oficinas"
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
              <Link href="/productos" passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  <span className="flex items-center">
                    <ShoppingCart className="mr-1 h-4 w-4" />
                    Productos
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
  )
}
