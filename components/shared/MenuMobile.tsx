"use client"

import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, Phone } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function MenuMobile() {
  return (
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
                <Link href="/productos" className="text-lg font-medium">
                  Productos
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
  )
}
