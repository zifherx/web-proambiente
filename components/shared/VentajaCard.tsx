import { VentajasNosotrosProp } from "@/types/Props";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export function VentajaCard({
  delay,
  description,
  icon: Icon,
  title,
}: VentajasNosotrosProp) {
  return (
    <FadeInWhenVisible delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full group hover:shadow-lg transition-all duration-300 overflow-hidden relative">
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-blueAmbiente" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
