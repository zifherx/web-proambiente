import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { VentajasData } from "@/data";

export function VentajasSection() {
  return <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <FadeInWhenVisible>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestras ventajas nos diferencian en el mercado del saneamiento ambiental
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          VentajasData.map(({id, delay,title, description, icon: Icon}) => (
            <FadeInWhenVisible key={id} delay={delay} >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="bg-blueAmbiente/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blueAmbiente" strokeWidth={2}/>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-muted-foreground">
                    {description}
                  </p>
                </div>
            </FadeInWhenVisible>
          ))
        }
      </div>
    </div>
  </section>;
}
