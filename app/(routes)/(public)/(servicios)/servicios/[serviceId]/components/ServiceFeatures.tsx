"use client";

import { RevealIn } from "@/components/shared/RevealIn";
import { FeaturesServiceProp } from "@/types/Props";

export function ServiceFeatures({ features }: FeaturesServiceProp) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map(({ description, id, title }, index) => (
        <RevealIn key={id} delay={index * 0.1} direction="up">
          <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="mb-3 text-lg font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </RevealIn>
      ))}
    </div>
  );
}
