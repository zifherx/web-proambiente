import { ServiceView } from "./components/ServiceView";

export default function ServiceOnePage({
    params,
  }: {
    params: { serviceId: string };
  }) {

    return (
    <>
      <ServiceView serviceSlug={params.serviceId} />
    </>
  );
}
