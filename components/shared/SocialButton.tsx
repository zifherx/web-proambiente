"use client";

import Link from "next/link";

import { SocialButtonProp } from "@/types/props.types";

export function SocialButton({
  href,
  iconName: Icon,
  srOnly,
  target,
}: SocialButtonProp) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="hover:text-primary-foreground/80 transition"
    >
      <Icon className="h-5 w-5" strokeWidth="2" />
      <span className="sr-only">{srOnly}</span>
    </Link>
  );
}
