import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ServiceFAQs } from "./shared/ServiceFAQs";
import { ServiceCard } from "@/types/Props";

export function FaqSection({ service }: ServiceCard) {
  return (
    <div>
      {service.faqs && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <FadeInWhenVisible>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">
                  Preguntas Frecuentes
                </h2>
                <ServiceFAQs faqs={service.faqs} />
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
