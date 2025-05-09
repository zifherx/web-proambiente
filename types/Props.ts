import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { IFeatureERP, IProcessDiagram, IVentajaNosotros, Service } from "@/interfaces";

export type SocialButtonProp = {
  href: string;
  target: HTMLAttributeAnchorTarget | undefined;
  iconName: IconProp
  srOnly: string;
};

export type ExtendedHoverCardProp = {
  icon: IconProp
  title: string;
  description: string;
  delay: number;
}

export type ProcessDiagramProp = {
  steps: IProcessDiagram[]
}

export type VentajasERPProp = {
  features: IFeatureERP[]
}

export type VentajasNosotrosProp = Partial<IVentajaNosotros>

export type RevealProp = {
  children: ReactNode;
  position: Position
  delay?: number
}

export type CounterProp = {
  id?: number;
  label: string
  end: number
  icon?: IconProp
  lineRight: boolean
  lineRightMobile: boolean
}

export type ServicioCardProp = {
  index: number,
  service: Service
}

export type VentajasProp = {
  id?: number;
  delay?: number;
  icon: IconProp
  title: string;
  description: string;
}

export type TestimoniosProp = {
  id?: number;
  testimonial: string;
  stars: number;
  avatar: string;
  author: string;
  job: string;
}

export type DownloadButtonProp = {
  filePath: string;
  fileName: string;
  variant: VariantButton;
  children: ReactNode;
}

export type ClientesProp = {
  id: number;
  name: string;
  slug: string;
  ext: ExtensionType;
}

export type ValoresProp = {
  id: number;
  valor: string;
}

export type PositionProp = {
  x: string;
  y: string;
}

export type HeroServiceProp = {
  service: Service;
  icon: IconProp
}

export type VariantButton = "default" | "destructive" | "ghost" | "link" | "outline" |"secondary"

export type ServiceType = 'saneamiento' | 'auxiliares'

export type Position = "bottom" | "right"

export type TypeTransition = "tween" | "spring" | "inertia"

export type ExtensionType = 'jpg' | 'jpeg' | 'png' | 'webp'

export type DirectionProp = "up" | "down" | "left" | "right" | null

export type IconProp = LucideIcon | IconType