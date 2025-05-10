import { ServiceView } from "./components/ServiceView";

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
