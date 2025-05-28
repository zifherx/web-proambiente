"use client";

import Image from "next/image";
import Link from "next/link";

import { SocialButton } from "./SocialButton";

import { socialButtonData } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const today = new Date().getFullYear();
  return (
    <footer className="bg-blueAmbiente text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/images/Logo_Pro_Ambiente_Blanco.png"
              alt="ProAmbiente Logo"
              width={180}
              height={50}
              className="mx-auto"
            />
            <p className="text-primary-foreground/90 max-w-xs">
              Empresa especialziada en saneamiento ambiental, fumigaciones,
              gestión, monitoreo y control de plagas.
            </p>
            <div className="flex space-x-4 justify-center">
              {socialButtonData.map(({ id, icon, label, link, target }) => (
                <SocialButton
                  key={id}
                  href={link}
                  iconName={icon}
                  srOnly={label}
                  target={target}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Saneamiento Ambiental
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Limpieza Integral
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Desinfección
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground/80 transition"
                >
                  Control Aviar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <div>
                  <a
                    href="tel:966188038"
                    className="hover:text-primary-foreground/80 transition"
                  >
                    966 188 038
                  </a>
                  <br />
                  <a
                    href="tel:965359339"
                    className="hover:text-primary-foreground/80 transition"
                  >
                    965359339
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <a
                  href="mailto:966188038"
                  className="hover:text-primary-foreground/80 transition"
                >
                  ventas@proambiente.com.pe
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 shrink-0" />
                <span>Atención a todo el Perú</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">
            © {today} ProAmbiente. Todos los derechos reservados
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground/100 transition"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground/100 transition"
            >
              Términos y Condiciones
            </Link>
            <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground/100 transition">
              Diseñado por{" "}
              <Link
                href="https://ziphonex.com"
                target="_blank"
                className="font-bold"
              >
                Ziphonex
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
