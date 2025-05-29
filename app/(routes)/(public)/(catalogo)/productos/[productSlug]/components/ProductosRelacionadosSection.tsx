import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";
import { RelatedProducts } from "./Shared/RelatedProducts";
import { getProductsByCategory } from "@/data";
import { ProductCardProp } from "@/types/Props";

export function ProductosRelacionadosSection({product} : ProductCardProp) {
  return (
    <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Productos Relacionados</h2>
            <RelatedProducts products={getProductsByCategory(product.category)} currentProductId={product.id} />
          </FadeInWhenVisible>
        </div>
      </section>
  )
}
