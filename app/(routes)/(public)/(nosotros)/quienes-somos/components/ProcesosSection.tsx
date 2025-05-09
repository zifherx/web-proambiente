"use client"

import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ProcessDiagram } from "@/components/shared/ProcessDiagram";
import { StepProcessDiagram } from "@/data";

export function ProcesosSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Procesos de Trabajo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metodología innovadora para garantizar resultados óptimos
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <ProcessDiagram steps={StepProcessDiagram}/>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
