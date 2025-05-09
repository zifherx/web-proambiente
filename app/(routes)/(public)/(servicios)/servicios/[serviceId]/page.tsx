import { ServiceView } from "./components/ServiceView";

export default async function ServiceOnePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const { serviceId } = await params;

  return (
    <>
      <ServiceView serviceSlug={serviceId} />
    </>
  );
}
