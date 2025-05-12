import { ProductView } from "./components/ProductView";

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
