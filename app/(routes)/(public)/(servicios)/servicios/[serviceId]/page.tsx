import { ServiciosData } from "@/data";
import { ServiceView } from "./components/ServiceView";

export async function generateStaticParams(){
  return ServiciosData.map((item) => {
    return { serviceId: item.slug}
  })
}

export default async function ServiceOnePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const resolvedParams = await params;
  const { serviceId } = resolvedParams;

  return (
    <>
      <ServiceView serviceSlug={serviceId} />
    </>
  );
}
