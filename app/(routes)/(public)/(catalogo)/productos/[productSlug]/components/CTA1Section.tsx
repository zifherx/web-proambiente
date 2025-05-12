import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { ProductCTA } from "./Shared/ProductCTA";
import { Product } from "@/interfaces";

export function CTA1Section({ product }: { product: Product }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInWhenVisible>
          <ProductCTA product={product} />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
