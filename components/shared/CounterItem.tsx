"use client";

import CountUp from "react-countup";

import { CounterProp } from "@/types/Props";

export function CounterItem({
  end,
  label,
  lineRight,
  lineRightMobile,
}: CounterProp) {
  return (
    <div className={`${lineRight && "ltr"}`}>
      <div
        className={`${
          lineRight && "px-10 border-2 border-transparent md:border-e-white"
        } ${lineRightMobile && "border-e-white"}`}
      >
        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-white">
          + <CountUp end={end} start={0} duration={2.5} startOnMount />
        </p>
        <p className="uppercase max-w-[100px]">{label}</p>
      </div>
    </div>
  );
}
