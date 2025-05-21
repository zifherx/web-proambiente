import Link from "next/link";
import React from "react";

export default function NotFoundLayout() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] flex-col">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-6">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        href="/"
        className="bg-blueAmbiente text-white px-6 py-2 rounded hover:bg-greenAmbiente transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
