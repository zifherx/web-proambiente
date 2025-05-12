import {
  IconProp,
  PositionProp,
  ProductCategory,
  ProductStock,
  ServiceType,
} from "@/types/Props";

export interface BaseModel {
  id: number;
}

export interface IProcessDiagram extends BaseModel {
  key: string;
  title: string;
  icon: IconProp;
  description: string;
  position: PositionProp;
}

export interface IFeatureERP extends BaseModel {
  title: string;
  description: string;
  icon: IconProp;
}

export interface IVentajaNosotros extends BaseModel {
  title: string;
  description: string;
  delay: number;
  icon: IconProp;
}

export interface FeatureType extends BaseModel {
  title: string;
  description: string;
}

export interface ProcessType extends BaseModel {
  title: string;
  description: string;
}

export interface BenefitsType extends BaseModel {
  title: string;
}

export interface GalleryType extends BaseModel {
  url: string;
}

export interface FaqsType extends BaseModel {
  question: string;
  answer: string;
}

export interface ApplicationsType extends BaseModel {
  aplication: string;
}

export interface Service extends BaseModel {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceType;
  icon: IconProp;
  features: FeatureType[];
  process: ProcessType[];
  benefits: BenefitsType[];
  coverImage: string;
  galleryImages: GalleryType[];
  faqs: FaqsType[];
  delay: number;
}

export interface Product extends BaseModel {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  price?: string;
  features: FeatureType[];
  applications: ApplicationsType[];
  coverImage: string;
  gallery: GalleryType[];
  icon: IconProp;
  stock: ProductStock;
  isNew?: boolean;
  isFeatured?: boolean;
  technicalSheet?: string;
}

export interface ServiceCategories {
  key: ServiceType;
  label: string;
}

export interface ProductCategories {
  key: ProductCategory;
  label: string;
}

export interface ProductBenefit {
  id: number;
  delay: number;
  icon: IconProp;
  beneficio: string;
  description: string;
}
