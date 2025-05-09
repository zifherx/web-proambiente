import { motion } from "framer-motion";

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

import { VentajasERPProp } from "@/types/Props";

export function VentajasERPSection({ features }: VentajasERPProp) {
  return (
    <section id="ventajaserp" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Ventajas de nuestro ERP Ruppiest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Implementamos tecnología de vanguardia para optimizar nuestros
              procesos y ofrecer un servicio de excelencia
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ id, title, description, icon: Icon }) => (
            <motion.div
              key={id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
            >
              <div className="flex items-start">
                <div className="bg-blueAmbiente/10 p-3 rounded-full mr-4 shrink-0">
                  <Icon className="h-6 w-6 text-blueAmbiente" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
