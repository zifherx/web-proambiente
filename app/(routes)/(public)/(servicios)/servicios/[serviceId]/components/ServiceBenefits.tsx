"use client";

import { RevealIn } from "@/components/shared/RevealIn";

import { BenefitsServiceProp } from "@/types/Props";

import { CheckCircle2 } from "lucide-react";

export function ServiceBenefits({ benefits }: BenefitsServiceProp) {
  return (
    <div className="space-y-4">
      {benefits.map(({ id, title }, index) => (
        <RevealIn key={id} delay={index * 0.1} direction="right">
          <div className="flex items-start">
            <div className="mr-3 mt-0.5 flex-shrink-0 text-blueAmbiente">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <p className="text-gray-700">{title}</p>
          </div>
        </RevealIn>
      ))}
    </div>
  );
}
