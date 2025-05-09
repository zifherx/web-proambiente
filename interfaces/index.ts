import { IconProp, PositionProp, ServiceType } from "@/types/Props";

export interface BaseModel {
  id: number;
}

export interface IProcessDiagram extends BaseModel {
  key: string;
  title: string;
  icon: IconProp;
  description: string;
  position: PositionProp
}

export interface IFeatureERP extends BaseModel {
  title: string;
  description: string;
  icon: IconProp
}

export interface IVentajaNosotros extends BaseModel{
  title: string;
  description: string;
  delay: number;
  icon: IconProp;
}

export interface ServiceFeature extends BaseModel {
  title: string;
  description: string;
}

export interface ServiceProcess extends BaseModel{
  title: string;
  description: string;
}

export interface ServiceBenefits extends BaseModel {
  title: string;
}

export interface ServiceGallery extends BaseModel{
  url: string;
}

export interface ServiceFaqs extends BaseModel{
  question: string;
  answer: string
}

export interface Service extends BaseModel {
  title:string;
  slug: string
  shortDescription: string;
  fullDescription: string;
  category: ServiceType;
  icon: IconProp;
  features: ServiceFeature[]
  process: ServiceProcess[]
  benefits: ServiceBenefits[]
  coverImage: string;
  galleryImages: ServiceGallery[]
  faqs: ServiceFaqs[]
  delay: number
}