import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ServiceCTA } from "@/components/shared/ServiceCTA";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInWhenVisible>
            <ServiceCTA />
          </FadeInWhenVisible>
        </div>
      </section>
  )
}
