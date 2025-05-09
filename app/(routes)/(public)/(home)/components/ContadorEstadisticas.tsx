"use client"

import { CounterItem } from "@/components/shared/CounterItem";
import { CounterData } from "@/data";

export function ContadorEstadisticas() {
  return <section className="w-full py-10 md:py-16 bg-blueAmbiente text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestras cifras</h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
          5 años transformando espacios y creando entornos saludables para nuestros clientes
        </p>
      </div>
      <div className="grid grid-cols-2 max-w-5xl mx-auto md:grid-cols-4 gap-4 md:gap-8">
        {
          CounterData.map(({id,end,label, lineRight, lineRightMobile}) => (
            <CounterItem key={id} end={end} label={label} lineRight={lineRight} lineRightMobile={lineRightMobile}/>
          ))
        }
      </div>
    </div>
  </section>;
}
