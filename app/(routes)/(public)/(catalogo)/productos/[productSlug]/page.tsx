import { ProductosData } from "@/data";
import { ProductView } from "./components/ProductView";

export async function generateStaticParams(){
  return ProductosData.map((item) => {
    return { productSlug: item.slug}
  })
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const resolvedParams = await params;
  const { productSlug } = resolvedParams;

  return (
    <>
      <ProductView productSlug={productSlug} />
    </>
  );
}
