import { RevealIn } from "@/components/shared/RevealIn";
import { ServiceProcessProp } from "@/types/Props";

export function ServiceProcess({ process }: ServiceProcessProp) {
  return (
    <div className="space-y-6">
      {process.map(({ id, description, title }, index) => (
        <RevealIn key={id} delay={index * 0.1} direction="left">
          <div className="flex">
            <div className="mr-4 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blueAmbiente text-white">
                <span className="text-sm font-bold">{index + 1}</span>
              </div>
              {index < process.length - 1 && (
                <div className="mx-auto mt-2 h-full w-0.5 bg-gray-200"></div>
              )}
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-gray-800">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </RevealIn>
      ))}
    </div>
  );
}
