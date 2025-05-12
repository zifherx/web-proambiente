import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ProductsCTA } from "./Shared/ProductsCTA";

export function CTA1Section() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <ProductsCTA />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
