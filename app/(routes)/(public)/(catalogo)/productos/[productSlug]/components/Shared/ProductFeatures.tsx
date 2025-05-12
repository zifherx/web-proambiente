"use client";

import { FeatureType } from "@/interfaces";
import { Check } from "lucide-react";

export function ProductFeatures({ features }: { features: FeatureType[] }) {
  return (
    <div className="space-y-3">
      {features.map(({ id, title }) => (
        <div key={id} className="flex items-start">
          <div className="mr-3 mt-1 flex-shrink-0 text-green-500">
            <Check className="h-5 w-5" />
          </div>
          <p className="text-gray-700">{title}</p>
        </div>
      ))}
    </div>
  );
}
