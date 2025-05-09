import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ClientesData } from "@/data";
import Image from "next/image";

export function ClientesSection() {
  return <section className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <FadeInWhenVisible>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Empresas que confían en nuestros servicios</p>
        </div>
      </FadeInWhenVisible>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {
          ClientesData.map(({id, name, slug, ext}) => (
            <FadeInWhenVisible key={id} delay={id * 0.1}>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-24">
                  <Image
                    src={`/images/customers/${slug}.${ext}`}
                    alt={name}
                    width={150}
                    height={80}
                    className="max-h-20 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
            </FadeInWhenVisible>
          ))
        }
      </div>
    </div>
  </section>;
}
