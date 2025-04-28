import { HTMLAttributeAnchorTarget } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type SocialButtonProp = {
  href: string;
  target: HTMLAttributeAnchorTarget | undefined;
  iconName: LucideIcon | IconType;
  srOnly: string;
};
