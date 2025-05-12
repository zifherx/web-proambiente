"use client";

import { ApplicationsType } from "@/interfaces";
import { ChevronRight } from "lucide-react";

export function ProductApplications({
  applications,
}: {
  applications: ApplicationsType[];
}) {
  return (
    <div className="space-y-3">
      {applications.map(({ id, aplication }) => (
        <div key={id} className="flex items-start">
          <div className="mr-3 mt-1 flex-shrink-0 text-primary">
            <ChevronRight className="h-5 w-5" />
          </div>
          <p className="text-gray-700">{aplication}</p>
        </div>
      ))}
    </div>
  );
}
