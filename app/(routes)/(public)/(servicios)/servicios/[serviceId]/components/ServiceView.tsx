"use client"

import React from 'react'
import { notFound } from 'next/navigation';

import { HeroSection } from './HeroSection';

import { getAllServices, getServiceBySlug } from '@/data';

export function ServiceView({serviceSlug} : {serviceSlug: string}) {
  const service = getServiceBySlug(serviceSlug);
    const services = getAllServices();
  
    if (!service) {
      notFound();
    }
  
    const Icon = service.icon;
  
    return (
      <>
        <HeroSection service={service} icon={Icon} />
      </>
    );
}
