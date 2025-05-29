import {
  IFeatureERP,
  IProcessDiagram,
  IVentajaNosotros,
  Product,
  ProductBenefit,
  ProductCategories,
  Service,
  ServiceCategories,
} from "@/interfaces";
import {
  ClientesProp,
  CounterProp,
  ProductCategory,
  ServiceType,
  TestimoniosProp,
  ValoresProp,
  VentajasProp,
} from "@/types/Props";
import {
  Award,
  BadgeCheck,
  BarChart3,
  Bed,
  Bird,
  Bug,
  Building2,
  CheckCircle2,
  Database,
  Droplets,
  Facebook,
  FileCheck,
  FileText,
  Flame,
  Instagram,
  Leaf,
  Lightbulb,
  Linkedin,
  Microscope,
  Pipette,
  Rat,
  Shield,
  Smartphone,
  Sparkles,
  SprayCan,
  Trash2,
  Users,
  Utensils,
  Warehouse,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const socialButtonData = [
  {
    id: 1,
    icon: FaWhatsapp,
    label: "Whatsapp",
    target: "_blank",
    link: "https://facebook.com/ProAmbienteSAC",
  },
  {
    id: 2,
    icon: Facebook,
    label: "Facebook",
    target: "_blank",
    link: "https://facebook.com/ProAmbienteSAC",
  },
  {
    id: 3,
    icon: Instagram,
    label: "Instagram",
    target: "_blank",
    link: "https://instagram.com",
  },
  {
    id: 4,
    icon: Linkedin,
    label: "Linkedin",
    target: "_blank",
    link: "https://pe.linkedin.com/company/proambiente-peru",
  },
];

export const CounterData: CounterProp[] = [
  {
    id: 1,
    label: "Clientes Satisfechos",
    end: 800,
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    label: "Servicios Realizados",
    end: 4500,
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    label: "Empresas Confían en Nosotros",
    end: 50,
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 4,
    label: "Años de Experiencia",
    end: 5,
    lineRight: true,
    lineRightMobile: true,
  },
];

export const VentajasData: VentajasProp[] = [
  {
    id: 1,
    title: "Profesionales Especializados",
    description:
      "Contamos con un equipo de profesionales con experiencia comproada en el sector de saneamiento ambiental.",
    delay: 0.1,
    icon: Users,
  },
  {
    id: 2,
    title: "Procesos estandarizados",
    description:
      "Aplicamos métodos comprobados y replicables para cada proceso, aumentando el porcentaje de éxito de cada servicio.",
    delay: 0.2,
    icon: Shield,
  },
  {
    id: 3,
    title: "Medidas de Bioseguridad",
    description:
      "Utiizamos equipos de bioseguridad en todo momento para eliminar el contacto directo con fuentes de contagio.",
    delay: 0.3,
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Equipos de Ata Tecnología",
    description:
      "Trabajamos con equipos nuevos, de alta tecnología y eficacia para garantizar resultados óptimos.",
    delay: 0.4,
    icon: Zap,
  },
  {
    id: 5,
    title: "Insumos Certificados",
    description:
      "Utilizamos insumos químicos biodegradables autorizados y certificados por la DIGESA y GERESA.",
    delay: 0.5,
    icon: CheckCircle2,
  },
  {
    id: 6,
    title: "Monitoreo y Seguimiento",
    description:
      "Realizamos un control sistematizados de las visitas y programas de inactivación para garantizar resultados duraderos.",
    delay: 0.6,
    icon: FileText,
  },
];

export const TestimoniosData: TestimoniosProp[] = [
  {
    id: 1,
    author: "Carlos Rodriguez",
    job: "Gerente de Operaciones",
    avatar: "https://placehold.co/120",
    testimonial:
      "Excelente servicio de fumigación. El personal fue muy profesional y el resultado fue inmediato. Recomiendo ampliamente a ProAmbiente.",
    stars: 5,
  },
  {
    id: 2,
    author: "María Sanchez",
    job: "Administradora",
    avatar: "https://placehold.co/120",
    testimonial:
      "Contratamosa ProAmbiente para la limpieza de nuestras oficinas y el resultado fue impecable. El equipo es muy profesional y cumplen con todos los protocolos.",
    stars: 3.5,
  },
  {
    id: 3,
    author: "Jorge Mendoza",
    job: "Gerente de Restaurante",
    avatar: "https://placehold.co/120",
    testimonial:
      "Llevamos trabajando con ProAmbiente más de 2 años y siempre han sido muy profesionales. Su servicio de control de plagas es excelente y su personal muy capacitado.",
    stars: 2.8,
  },
];

export const ClientesData: ClientesProp[] = [
  {
    id: 1,
    name: "7 Sopas",
    slug: "logo-7-sopas",
    ext: "jpg",
  },
  {
    id: 2,
    name: "Aguafiel",
    slug: "logo-aguafiel",
    ext: "jpg",
  },
  {
    id: 3,
    name: "BCP",
    slug: "logo-bcp",
    ext: "jpg",
  },
  {
    id: 4,
    name: "Casinelli",
    slug: "logo-casinelli",
    ext: "jpg",
  },
  {
    id: 5,
    name: "Comercial RC",
    slug: "logo-comercial-rc",
    ext: "jpg",
  },
  {
    id: 6,
    name: "Cuatrero",
    slug: "logo-cuatrero",
    ext: "jpg",
  },
  {
    id: 7,
    name: "Entel",
    slug: "logo-entel",
    ext: "jpg",
  },
  {
    id: 8,
    name: "Escalabs",
    slug: "logo-escalabs",
    ext: "jpg",
  },
  {
    id: 9,
    name: "Estampida",
    slug: "logo-estampida",
    ext: "jpg",
  },
  {
    id: 10,
    name: "Eurotubo",
    slug: "logo-eurotubo",
    ext: "jpg",
  },
  {
    id: 11,
    name: "Fameca",
    slug: "logo-fameca",
    ext: "jpg",
  },
  {
    id: 12,
    name: "Ferreyros",
    slug: "logo-ferreyros",
    ext: "jpg",
  },
  {
    id: 13,
    name: "Gat",
    slug: "logo-gat",
    ext: "jpg",
  },
  {
    id: 14,
    name: "Golf y Country Club",
    slug: "logo-golf-country",
    ext: "jpg",
  },
  {
    id: 15,
    name: "La Lucha Sanguchería",
    slug: "logo-la-lucha",
    ext: "jpg",
  },
  {
    id: 16,
    name: "El Palmar",
    slug: "logo-palmar",
    ext: "jpg",
  },
  {
    id: 17,
    name: "San Jacinto",
    slug: "logo-san-jacinto",
    ext: "jpg",
  },
  {
    id: 18,
    name: "Silvestre",
    slug: "logo-silvestre",
    ext: "jpg",
  },
  {
    id: 19,
    name: "Transpesa",
    slug: "logo-transpesa",
    ext: "jpg",
  },
  {
    id: 20,
    name: "Vitas",
    slug: "logo-vitas",
    ext: "jpg",
  },
  {
    id: 21,
    name: "Koi Maki Bar",
    slug: "logo-koi-maki",
    ext: "png",
  },
  {
    id: 22,
    name: "Sociedad Automotores Inka SAC",
    slug: "logo-sai",
    ext: "png",
  },
  {
    id: 23,
    name: "Rincon de Vallejo",
    slug: "logo-rincon-vallejo",
    ext: "jpg",
  },
  {
    id: 24,
    name: "Pizzeria San Remo",
    slug: "logo-san-remo",
    ext: "jpg",
  },
];

export const ValoresData: ValoresProp[] = [
  {
    id: 1,
    valor: "Responsabilidad",
  },
  {
    id: 2,
    valor: "Puntualidad",
  },
  {
    id: 3,
    valor: "Seguridad",
  },
  {
    id: 4,
    valor: "Higiene",
  },
  {
    id: 5,
    valor: "Transparencia",
  },
  {
    id: 6,
    valor: "Pasión",
  },
];

export const StepProcessDiagram: IProcessDiagram[] = [
  {
    id: 1,
    key: "professionals",
    title: "Profesionales Especializados",
    icon: Users,
    description:
      "Nuestro equipo está formado por profesionales con amplia experiencia en el sector de saneamiento ambiental, capacitados constantemente para ofrecer el mejor servicio.",
    position: {
      x: "10%",
      y: "20%",
    },
  },
  {
    id: 2,
    key: "certifications",
    title: "Certificaciones HODELPE",
    icon: Award,
    description:
      "Contamos con certificaciones homologadas de HODELPE que garantizan la calidad y seguridad de nuestros servicios, cumpliendo con los ás altos estándares del sector.",
    position: {
      x: "50%",
      y: "10%",
    },
  },
  {
    id: 3,
    key: "erp",
    title: "ERP",
    icon: Database,
    description:
      "Implementamos el innovador sistema ERP que nos permite optimizar procesos, mejorar la gestión de recursos y ofrecer un servicio más eficiente a nuestros clientes.",
    position: {
      x: "90%",
      y: "20%",
    },
  },
  {
    id: 4,
    key: "monitoring",
    title: "Monitoreo en Tiempo Real",
    icon: BarChart3,
    description:
      "Gracias a nuestro sistema ERP, realizamos un seguimiento en tiempo real de todos nuestros servicios, garantizando resultados óptimos y respuesta inmediata ante cualquier incidencia.",
    position: {
      x: "90%",
      y: "80%",
    },
  },
  {
    id: 5,
    key: "mobile",
    title: "Aplicación Móvil",
    icon: Smartphone,
    description:
      "Nuestros técnicos utilizan una aplicación móvil conectada al ERP para registrar cada servicio, documentar con fotografias y generar informes detallados para nuestros clientes.",
    position: {
      x: "50%",
      y: "90%",
    },
  },
  {
    id: 6,
    key: "reports",
    title: "Informes Detallados",
    icon: FileCheck,
    description:
      "Generamos informes detallados de cada servicio, incluyendo fotografías, productos utilizados y recomendaciones para mantener los espacios libres de plagas a largo plazo.",
    position: {
      x: "10%",
      y: "80%",
    },
  },
];

export const FeaturesData: IFeatureERP[] = [
  {
    id: 1,
    title: "Gestión Integral",
    description:
      "Control completo de todos los procesos operativos, desde la programación de servicioshasta la generación de informes.",
    icon: Database,
  },
  {
    id: 2,
    title: "Monitoreo en Tiempo Real",
    description:
      "Seguimiento en tiempo real de los técnicos y servicios, permitiendo una respuesta inmediata ante cualquier incidencia.",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Aplicación Móvil",
    description:
      "Los técnicos registran cada servicio a través de una aplicación móvil, documentando con fotografías y generando informes detallados.",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Informes Automáticos",
    description:
      "Generación automática de informes detallados para cada cliente, incluyendo fotografías, productos utilizados y recomendaciones.",
    icon: FileCheck,
  },
];

export const VentajasNosotrosData: IVentajaNosotros[] = [
  {
    id: 1,
    title: "Experiencia Comprobada",
    description:
      "Contamos con más de 5 años de experiencia en el sector de saneamiento ambiental, brindando soluciones efectivas a nuestros clientes.",
    delay: 0.1,
    icon: Users,
  },
  {
    id: 2,
    title: "Insumos Biodegradables",
    description:
      "Utilizamos insumos biodegradables aprobados por el MINSA, garantizando la seguridad de nuestros clientes y el cuidado del medio ambiente.",
    delay: 0.2,
    icon: Zap,
  },
  {
    id: 3,
    title: "Asesoría Gratuita",
    description:
      "Ofrecemos asesoría gratuita para identificar la necesidad del cliente, brindando soluciones personalizadas para cada situación.",
    delay: 0.3,
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: "Equipos de Alta Tecnología",
    description:
      "Contamos con equipos de fumigación de alta tecnología, lo que nos permite ofrecer servicios más eficientes y con mejores resultados.",
    delay: 0.4,
    icon: Sparkles,
  },
];

export const ServiciosData: Service[] = [
  {
    id: 1,
    slug: "desratizacion",
    title: "Desratización",
    isActive: true,
    shortDescription: "Control y eliminación de roedores.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio de desratización está diseñado para eliminar de manera efectiva y segura las infestaciones de roedores en hogares, empresas e industrias. Utilizamos métodos avanzados y productos certificados que garantizan resultados duraderos sin comprometer la seguridad de las personas, mascotas o el medio ambiente. Servicio integrado con nuestro ERP, para un monitoreo de la trazabilidad en tiempo real para cumplir futuras auditorias.",
    category: "saneamiento",
    icon: Rat,
    features: [
      {
        id: 1,
        title: "Inspección detallada",
        description:
          "Realizamos una evaluación exhaustiva para identificar puntos de entrada, nidos y patrones de actividad de los roedores.",
      },
      {
        id: 2,
        title: "Tratamiento personalizado",
        description:
          "Desarrollamos un plan de acción específico según el tipo de roedor, nivel de infestación y características del espacio.",
      },
      {
        id: 3,
        title: "Métodos seguros",
        description:
          "Utilizamos cebos y trampas estratégicamente ubicados para maximizar la efectividad sin riesgos para personas o mascotas.",
      },
      {
        id: 4,
        title: "Prevención continua",
        description:
          "Implementamos medidas preventivas para evitar futuras infestaciones, incluyendo sellado de entradas y recomendaciones.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación inicial",
        description:
          "Inspección completa del área para identificar la magnitud del problema y sus causas.",
      },
      {
        id: 2,
        title: "Plan de acción",
        description:
          "Diseño de estrategia personalizada según el tipo de plaga y características del espacio.",
      },
      {
        id: 3,
        title: "Implementación",
        description:
          "Aplicación de tratamientos utilizando productos certificados y técnicas avanzadas.",
      },
      {
        id: 4,
        title: "Seguimiento",
        description:
          "Visitas periódicas para evaluar resultados y realizar ajustes si es necesario.",
      },
      {
        id: 5,
        title: "Prevención",
        description:
          "Recomendaciones y medidas para prevenir futuras infestaciones.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Eliminación efectiva de roedores",
      },
      {
        id: 2,
        title: "Prevención de enfermedades transmitidas por roedores",
      },
      {
        id: 3,
        title: "Protección de la infraestructura y bienes",
      },
      {
        id: 4,
        title: "Cumplimiento de normativas sanitarias",
      },
      {
        id: 5,
        title: "Ambiente más saludable y seguro",
      },
      {
        id: 6,
        title: "Monitoreo y trazabilidad en tiempo real",
      }
    ],
    coverImage: "desratizacion-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: "desratizacion-1.jpg",
      },
      {
        id: 2,
        url: "desratizacion-2.jpg",
      },
      {
        id: 3,
        url: "desratizacion-3.jpeg",
      },
      {
        id: 4,
        url: "desratizacion-4.jpeg",
      },
      {
        id: 5,
        url: "desratizacion-5.jpeg",
      },
    ],
    faqs: [
      {
        id: 1,
        question: "¿Cuánto tiempo toma eliminar una infestación de roedores?",
        answer:
          "El tiempo varía según la magnitud de la infestación, pero generalmente se observan resultados significativos en 1-2 semanas, con control completo en 1-2 meses para casos severos.",
      },
      {
        id: 2,
        question:
          "¿Los productos utilizados son seguros para niños y mascotas?",
        answer:
          "Sí, utilizamos productos certificados y aplicamos métodos que minimizan el riesgo para personas y mascotas, colocando los cebos en áreas inaccesibles para ellos.",
      },
      {
        id: 3,
        question: "¿Con qué frecuencia se debe realizar este servicio?",
        answer:
          "Recomendamos tratamientos trimestrales para prevención, pero la frecuencia puede ajustarse según el nivel de riesgo y las características del lugar.",
      },
    ],
    delay: 0.1,
  },
  {
    id: 2,
    slug: "desinsectacion",
    title: "Desinsectación",
    isActive: true,
    shortDescription: "Control y eliminación de insectos.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio de desinsectación combate eficazmente todo tipo de insectos plaga como cucarachas, hormigas, moscas, mosquitos, pulgas y otros. Utilizamos técnicas avanzadas y productos biodegradables que eliminan las plagas existentes y previenen futuras infestaciones, garantizando espacios libres de insectos.",
    category: "saneamiento",
    icon: Bug,
    features: [
      {
        id: 1,
        title: "Identificación precisa",
        description:
          "Determinamos exactamente qué tipo de insectos están presentes para aplicar el tratamiento adecuado.",
      },
      {
        id: 2,
        title: "Tratamientos específicos",
        description:
          "Aplicamos soluciones adaptadas a cada tipo de insecto y entorno para máxima efectividad.",
      },
      {
        id: 3,
        title: "Productos ecológicos",
        description:
          "Utilizamos insecticidas biodegradables que son efectivos contra las plagas pero seguros para el ambiente.",
      },
      {
        id: 4,
        title: "Control integral",
        description:
          "Combinamos métodos químicos, físicos y biológicos para un control completo y duradero.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Diagnóstico",
        description:
          "Identificación del tipo de insectos y evaluación del nivel de infestación.",
      },
      {
        id: 2,
        title: "Planificación",
        description:
          "Desarrollo de estrategia específica según el tipo de insecto y características del lugar.",
      },
      {
        id: 3,
        title: "Aplicación",
        description:
          "Tratamiento con técnicas y productos seleccionados específicamente para cada caso.",
      },
      {
        id: 4,
        title: "Monitoreo",
        description:
          "Seguimiento para verificar la efectividad del tratamiento y realizar ajustes si es necesario.",
      },
      {
        id: 5,
        title: "Mantenimiento",
        description:
          "Programa de control preventivo para evitar reinfestaciones.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Eliminación efectiva de insectos plaga",
      },
      {
        id: 2,
        title: "Prevención de enfermedades transmitidas por insectos",
      },
      {
        id: 3,
        title: "Protección de alimentos e instalaciones",
      },
      {
        id: 4,
        title: "Cumplimiento de normativas sanitarias",
      },
    ],
    coverImage: "desinsectacion-2.jpeg",
    galleryImages: [
      {
        id: 1,
        url: "desinsectacion-2.jpeg",
      },
      {
        id: 2,
        url: "desinsectacion-3.jpeg",
      },
      {
        id: 3,
        url: "desinsectacion-11.jpeg",
      },
      {
        id: 4,
        url: "desinsectacion-5.jpeg",
      },
      {
        id: 5,
        url: "desinsectacion-6.jpeg",
      },
      {
        id: 6,
        url: "desinsectacion-7.jpeg",
      },
      {
        id: 7,
        url: "desinsectacion-12.jpeg",
      },
      {
        id: 8,
        url: "desinsectacion-10.jpeg",
      },
    ],
    faqs: [
      {
        id: 1,
        question: "¿Los tratamientos de desinsectación tienen olor?",
        answer:
          "Utilizamos productos de baja volatilidad que generan mínimo olor, el cual se disipa rápidamente con ventilación adecuada.",
      },
      {
        id: 2,
        question: "¿Cuánto tiempo debo esperar para ingresar al área tratada?",
        answer:
          "Generalmente recomendamos esperar 2-3 horas después del tratamiento, aunque esto puede variar según el tipo de aplicación y producto utilizado.",
      },
      {
        id: 3,
        question: "¿El tratamiento elimina los huevos de los insectos?",
        answer:
          "Algunos productos afectan los huevos, pero principalmente diseñamos tratamientos secuenciales que rompen el ciclo reproductivo para eliminar completamente la infestación.",
      },
    ],
    delay: 0.2,
  },
  {
    id: 3,
    slug: "desinfeccion",
    title: "Desinfección",
    isActive: true,
    shortDescription: "Eliminación de microorganismos.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio de desinfección elimina virus, bacterias, hongos y otros microorganismos patógenos de superficies y ambientes. Utilizamos desinfectantes de amplio espectro y equipos de última generación para garantizar la higienización completa de espacios residenciales, comerciales e industriales, creando entornos más saludables y seguros.",
    category: "saneamiento",
    icon: SprayCan,
    features: [
      {
        id: 1,
        title: "Desinfección profunda",
        description:
          "Eliminamos microorganismos patógenos de superficies, equipos y ambientes.",
      },
      {
        id: 2,
        title: "Tecnología avanzada",
        description:
          "Utilizamos nebulizadores ULV y equipos especializados para una aplicación uniforme y efectiva.",
      },
      {
        id: 3,
        title: "Productos certificados",
        description:
          "Empleamos desinfectantes de amplio espectro aprobados por autoridades sanitarias.",
      },
      {
        id: 4,
        title: "Protocolos específicos",
        description:
          "Adaptamos nuestros procedimientos según el tipo de espacio y sus necesidades particulares.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description:
          "Análisis del espacio y determinación de necesidades específicas de desinfección.",
      },
      {
        id: 2,
        title: "Preparación",
        description:
          "Acondicionamiento del área y selección de productos y equipos adecuados.",
      },
      {
        id: 3,
        title: "Aplicación",
        description:
          "Desinfección mediante nebulización, pulverización o limpieza manual según el caso.",
      },
      {
        id: 4,
        title: "Verificación",
        description:
          "Comprobación de la efectividad del tratamiento mediante métodos apropiados.",
      },
      {
        id: 5,
        title: "Certificación",
        description:
          "Entrega de certificado de desinfección para fines sanitarios y regulatorios.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Reducción significativa de microorganismos patógenos",
      },
      {
        id: 2,
        title: "Prevención de enfermedades infecciosas",
      },
      {
        id: 3,
        title: "Creación de ambientes más saludables",
      },
      {
        id: 4,
        title: "Cumplimiento de protocolos sanitarios",
      },
      {
        id: 5,
        title: "Mayor seguridad para ocupantes y visitantes",
      },
    ],
    coverImage: "desinfeccion-1.jpg",
    galleryImages: [
      {
        id: 1,
        url: "desinfeccion-1.jpg",
      },
      {
        id: 2,
        url: "desinfeccion-2.jpg",
      },
      {
        id: 3,
        url: "desinfeccion-3.jpg",
      },
      {
        id: 4,
        url: "desinfeccion-4.jpg",
      },
      {
        id: 5,
        url: "desinfeccion-5.jpg",
      },
      {
        id: 6,
        url: "desinfeccion-6.jpg",
      },
      {
        id: 7,
        url: "desinfeccion-7.jpg",
      },
      {
        id: 8,
        url: "desinfeccion-8.jpg",
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe realizar la desinfección?",
        answer:
          "Depende del tipo de espacio y su nivel de tránsito. Para áreas de alto tráfico recomendamos desinfecciones semanales o quincenales, mientras que para hogares puede ser mensual o trimestral.",
      },
      {
        id: 2,
        question:
          "¿Es necesario evacuar completamente el área durante la desinfección?",
        answer:
          "Sí, recomendamos que las personas y mascotas evacuen el área durante el tratamiento y por 1-2 horas después para permitir que los productos actúen y se sequen adecuadamente.",
      },
      {
        id: 3,
        question: "¿Los productos de desinfección manchan o dañan superficies?",
        answer:
          "Utilizamos productos especialmente formulados para no dañar ni manchar superficies. Sin embargo, para materiales delicados realizamos pruebas previas para garantizar su seguridad.",
      },
    ],
    delay: 0.3,
  },
  {
    id: 4,
    slug: "limpieza-ambientes",
    title: "Limpieza de Ambientes",
    isActive: true,
    shortDescription: "Servicio profesional para empresas.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Ofrecemos un servicio integral de limpieza y mantenimiento para oficinas y espacios de trabajo. Nuestro equipo profesional se encarga de mantener impecables todas las áreas, desde escritorios y salas de reuniones hasta baños y áreas comunes, utilizando productos y técnicas que garantizan un ambiente laboral limpio, ordenado y saludable.",
    category: "auxiliares",
    icon: Building2,
    features: [
      {
        id: 1,
        title: "Limpieza integral",
        description:
          "Cubrimos todas las áreas de la oficina, desde espacios de trabajo hasta zonas comunes.",
      },
      {
        id: 2,
        title: "Personal capacitado",
        description:
          "Nuestro equipo está entrenado en técnicas profesionales de limpieza y protocolos de seguridad.",
      },
      {
        id: 3,
        title: "Productos especializados",
        description:
          "Utilizamos limpiadores de alta calidad, seguros para equipos electrónicos y mobiliario de oficina.",
      },
      {
        id: 4,
        title: "Horarios flexibles",
        description:
          "Adaptamos nuestros servicios a sus horarios para no interrumpir las actividades laborales.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación inicial",
        description:
          "Análisis de las necesidades específicas de limpieza y frecuencia requerida.",
      },
      {
        id: 2,
        title: "Planificación",
        description:
          "Desarrollo de un programa de limpieza adaptado a las características de la oficina.",
      },
      {
        id: 3,
        title: "Implementación",
        description:
          "Ejecución de tareas de limpieza según el cronograma establecido.",
      },
      {
        id: 4,
        title: "Supervisión",
        description:
          "Control de calidad para garantizar que se cumplan los estándares establecidos.",
      },
      {
        id: 5,
        title: "Mejora continua",
        description:
          "Evaluación periódica y ajustes para optimizar el servicio.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Ambiente de trabajo más saludable y productivo",
      },
      {
        id: 2,
        title: "Reducción de alergias y enfermedades respiratorias",
      },
      {
        id: 3,
        title: "Mejor imagen corporativa ante clientes y visitantes",
      },
      {
        id: 4,
        title: "Mayor durabilidad de mobiliario y equipos",
      },
      {
        id: 5,
        title: "Cumplimiento de normativas de higiene y seguridad laboral",
      },
    ],
    coverImage: "limpieza-ambientes-3.jpeg",
    galleryImages: [
      {
        id: 1,
        url: "limpieza-ambientes-1.jpeg",
      },
      {
        id: 2,
        url: "limpieza-ambientes-2.jpeg",
      },
      {
        id: 3,
        url: "limpieza-ambientes-3.jpeg",
      },
      {
        id: 4,
        url: "limpieza-ambientes-4.jpeg",
      },
      {
        id: 5,
        url: "limpieza-ambientes-5.jpeg",
      },
      {
        id: 6,
        url: "limpieza-ambientes-6.jpeg",
      },
      {
        id: 7,
        url: "limpieza-ambientes-7.jpeg",
      },
      {
        id: 8,
        url: "limpieza-ambientes-8.jpeg",
      },
      {
        id: 9,
        url: "limpieza-ambientes-9.jpeg",
      },
      {
        id: 10,
        url: "limpieza-ambientes-10.jpeg",
      },
      {
        id: 11,
        url: "limpieza-ambientes-11.jpeg",
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Qué incluye el servicio de limpieza de ambientes?",
        answer:
          "Incluye limpieza de pisos, mobiliario, equipos, baños, cocinas, salas de reuniones, recepción y áreas comunes. También ofrecemos servicios adicionales como limpieza de vidrios, alfombras y desinfección profunda.",
      },
      {
        id: 2,
        question: "¿Con qué frecuencia recomiendan realizar la limpieza?",
        answer:
          "Para oficinas con tráfico regular, recomendamos limpieza diaria de áreas comunes y baños, y limpieza profunda semanal. Sin embargo, adaptamos la frecuencia según las necesidades específicas de cada cliente.",
      },
      {
        id: 3,
        question: "¿Proporcionan los materiales y equipos de limpieza?",
        answer:
          "Sí, nosotros proporcionamos todos los productos, materiales y equipos necesarios para realizar un servicio profesional y completo.",
      },
      {
        id: 4,
        question: "¿La limpieza de fachadas puede dañar los materiales?",
        answer:
          "No cuando se realiza correctamente. Utilizamos técnicas y productos específicos para cada tipo de material, ajustando la presión y temperatura del agua para evitar daños.",
      },
      {
        id: 5,
        question: "¿Cuánto tiempo toma limpiar una fachada?",
        answer:
          "Depende del tamaño, altura, accesibilidad y nivel de suciedad. Una fachada pequeña puede tomar 1 día, mientras que edificios grandes pueden requerir varios días.",
      },
      {
        id: 6,
        question: "¿Con qué frecuencia se debe limpiar una fachada?",
        answer:
          "Recomendamos una limpieza profesional anual o bianual, dependiendo de la exposición a contaminación, clima y tipo de superficie.",
      },
    ],
    delay: 0.4,
  },
  {
    id: 6,
    slug: "limpieza-tanques",
    title: "Limpieza de Tanques",
    isActive: true,
    shortDescription: "Mantenimiento de cisternas y reservorios.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio de limpieza y desinfección de tanques de agua garantiza que su suministro de agua se mantenga limpio y seguro. Eliminamos sedimentos, algas, bacterias y otros contaminantes que pueden acumularse en cisternas y reservorios, cumpliendo con todas las normativas sanitarias vigentes y proporcionando certificados de limpieza.",
    category: "auxiliares",
    icon: Droplets,
    features: [
      {
        id: 1,
        title: "Limpieza completa",
        description:
          "Eliminación de sedimentos, lodos, algas y todo tipo de contaminantes físicos.",
      },
      {
        id: 2,
        title: "Desinfección profesional",
        description:
          "Aplicación de desinfectantes aprobados para uso en sistemas de agua potable.",
      },
      {
        id: 3,
        title: "Inspección estructural",
        description:
          "Revisión del estado del tanque para detectar fisuras, filtraciones u otros problemas.",
      },
      {
        id: 4,
        title: "Certificación sanitaria",
        description:
          "Entrega de certificado de limpieza y desinfección para fines regulatorios.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Vaciado",
        description:
          "Drenaje controlado del agua preservando la mayor cantidad posible.",
      },
      {
        id: 2,
        title: "Limpieza física",
        description:
          "Remoción manual y mecánica de sedimentos y residuos acumulados.",
      },
      {
        id: 3,
        title: "Lavado",
        description:
          "Limpieza de paredes, piso y techo del tanque con equipos especializados.",
      },
      {
        id: 4,
        title: "Desinfección",
        description:
          "Aplicación de desinfectantes específicos para sistemas de agua potable.",
      },
      {
        id: 5,
        title: "Enjuague y llenado",
        description:
          "Eliminación de residuos de desinfectante y llenado del tanque.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Agua más limpia y segura para consumo",
      },
      {
        id: 2,
        title: "Prevención de enfermedades transmitidas por agua contaminada",
      },
      {
        id: 3,
        title: "Eliminación de olores y sabores desagradables",
      },
      {
        id: 4,
        title: "Cumplimiento de normativas sanitarias",
      },
      {
        id: 5,
        title: "Mayor vida útil del tanque y sistemas de distribución",
      },
    ],
    coverImage: "limpieza-tanques-1.jpg",
    galleryImages: [
      {
        id: 1,
        url: "limpieza-tanques-2.jpg",
      },
      {
        id: 2,
        url: "limpieza-tanques-3.jpg",
      },
      {
        id: 3,
        url: "limpieza-tanques-4.jpg",
      },
      {
        id: 4,
        url: "limpieza-tanques-5.jpg",
      },
      {
        id: 5,
        url: "limpieza-tanques-6.jpg",
      },
      {
        id: 6,
        url: "limpieza-tanques-7.jpg",
      },
      {
        id: 7,
        url: "limpieza-tanques-8.jpg",
      },
      {
        id: 8,
        url: "limpieza-tanques-9.jpeg",
      },
      {
        id: 9,
        url: "limpieza-tanques-10.jpeg",
      },
      {
        id: 10,
        url: "limpieza-tanques-11.jpeg",
      },
      {
        id: 11,
        url: "limpieza-tanques-12.jpeg",
      },
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe limpiar un tanque de agua?",
        answer:
          "Las normativas sanitarias generalmente recomiendan limpieza y desinfección cada 6 meses. Sin embargo, en zonas con agua de mala calidad puede ser necesario hacerlo con mayor frecuencia.",
      },
      {
        id: 2,
        question:
          "¿Cuánto tiempo debo esperar para usar el agua después de la limpieza?",
        answer:
          "Generalmente el agua está disponible para uso inmediato después del llenado del tanque. Sin embargo, para consumo directo recomendamos esperar 2-3 horas para asegurar que el cloro residual se haya estabilizado.",
      },
      {
        id: 3,
        question:
          "¿Es necesario vaciar completamente el tanque para limpiarlo?",
        answer:
          "Sí, para realizar una limpieza efectiva es necesario vaciar completamente el tanque para poder acceder a todas las superficies y eliminar todos los sedimentos acumulados.",
      },
    ],
    delay: 0.6,
  },
  {
    id: 7,
    slug: "control-aviar",
    title: "Control Aviar",
    isActive: true,
    shortDescription: "Soluciones para el control de aves.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Ofrecemos soluciones efectivas y humanitarias para el control de aves en edificios y estructuras. Implementamos sistemas que impiden la anidación y percha de aves sin causarles daño, protegiendo su propiedad de los problemas asociados con la presencia de aves como palomas, gaviotas y otras especies urbanas.",
    category: "saneamiento",
    icon: Bird,
    features: [
      {
        id: 1,
        title: "Métodos no letales",
        description:
          "Utilizamos exclusivamente sistemas disuasivos que no dañan a las aves.",
      },
      {
        id: 2,
        title: "Soluciones permanentes",
        description:
          "Instalamos sistemas duraderos que ofrecen protección a largo plazo.",
      },
      {
        id: 3,
        title: "Adaptación arquitectónica",
        description:
          "Diseñamos soluciones que se integran estéticamente con la estructura del edificio.",
      },
      {
        id: 4,
        title: "Cumplimiento normativo",
        description:
          "Nuestros métodos cumplen con las regulaciones de protección animal y medio ambiente.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description:
          "Análisis del problema, identificación de especies y patrones de comportamiento.",
      },
      {
        id: 2,
        title: "Diseño",
        description:
          "Desarrollo de solución personalizada según las características del edificio y tipo de ave.",
      },
      {
        id: 3,
        title: "Limpieza",
        description:
          "Remoción de nidos, excrementos y desinfección de áreas afectadas.",
      },
      {
        id: 4,
        title: "Instalación",
        description:
          "Montaje de sistemas disuasivos seleccionados (púas, redes, cables, etc.).",
      },
      {
        id: 5,
        title: "Seguimiento",
        description: "Monitoreo de efectividad y ajustes si es necesario.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Prevención de daños estructurales causados por excrementos",
      },
      {
        id: 2,
        title: "Eliminación de riesgos sanitarios asociados a las aves",
      },
      {
        id: 3,
        title: "Protección de fachadas, techos y equipos",
      },
      {
        id: 4,
        title: "Solución estética que no afecta la apariencia del edificio",
      },
      {
        id: 5,
        title: "Reducción de costos de limpieza y mantenimiento",
      },
    ],
    coverImage: "control-aviar-1.jpg",
    galleryImages: [
      {
        id: 1,
        url: "control-aviar-2.jpg",
      },
      {
        id: 2,
        url: "control-aviar-3.jpg",
      },
      {
        id: 3,
        url: "control-aviar-4.jpg",
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Los sistemas de control aviar dañan a las aves?",
        answer:
          "No, todos nuestros sistemas son no letales y están diseñados para disuadir a las aves sin causarles daño físico. Simplemente hacen que las superficies sean incómodas para posarse o anidar.",
      },
      {
        id: 2,
        question:
          "¿Cuánto tiempo dura la instalación de un sistema de control aviar?",
        answer:
          "Depende del tamaño del área a proteger y el tipo de sistema. Instalaciones pequeñas pueden completarse en un día, mientras que proyectos grandes pueden tomar varios días.",
      },
      {
        id: 3,
        question: "¿Qué mantenimiento requieren los sistemas de control aviar?",
        answer:
          "Recomendamos inspecciones anuales para verificar que los sistemas estén intactos y funcionando correctamente. Algunos sistemas como redes pueden requerir ajustes o reparaciones ocasionales.",
      },
    ],
    delay: 0.7,
  },
  {
    id: 8,
    slug: "lamparas-insectocutoras",
    title: "Lámparas Insectocutoras",
    isActive: false,
    shortDescription: "Control de insectos voladores.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Instalamos y mantenemos lámparas insectocutoras de alta eficiencia para el control de insectos voladores en interiores. Estos dispositivos atraen y eliminan moscas, mosquitos, polillas y otros insectos voladores de manera higiénica y discreta, siendo ideales para restaurantes, cocinas industriales, áreas de procesamiento de alimentos y otros espacios donde la presencia de insectos es inaceptable.",
    category: "auxiliares",
    icon: Lightbulb,
    features: [
      {
        id: 1,
        title: "Alta efectividad",
        description:
          "Capturan insectos voladores las 24 horas sin usar productos químicos.",
      },
      {
        id: 2,
        title: "Diseño higiénico",
        description:
          "Los insectos quedan atrapados en placas adhesivas o electrocutados sin contaminar el ambiente.",
      },
      {
        id: 3,
        title: "Bajo consumo",
        description:
          "Utilizan tubos UV de bajo consumo energético y larga duración.",
      },
      {
        id: 4,
        title: "Instalación estratégica",
        description:
          "Ubicamos las lámparas en puntos óptimos para maximizar su eficacia.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description:
          "Análisis del espacio para determinar número y tipo de lámparas necesarias.",
      },
      {
        id: 2,
        title: "Selección",
        description:
          "Recomendación de modelos adecuados según el ambiente y nivel de infestación.",
      },
      {
        id: 3,
        title: "Instalación",
        description:
          "Montaje de lámparas en ubicaciones estratégicas para máxima efectividad.",
      },
      {
        id: 4,
        title: "Mantenimiento",
        description:
          "Servicio periódico para cambio de tubos UV y placas adhesivas.",
      },
      {
        id: 5,
        title: "Monitoreo",
        description:
          "Seguimiento de efectividad y ajustes de ubicación si es necesario.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Control continuo de insectos voladores",
      },
      {
        id: 2,
        title: "Método higiénico sin productos químicos",
      },
      {
        id: 3,
        title: "Cumplimiento de normativas sanitarias",
      },
      {
        id: 4,
        title: "Mejora de la imagen ante clientes e inspectores",
      },
      {
        id: 5,
        title: "Reducción de riesgos de contaminación de alimentos",
      },
    ],
    coverImage: "/auxiliar-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: "",
      },
    ],
    faqs: [
      {
        id: 1,
        question:
          "¿Con qué frecuencia se deben cambiar los tubos UV y las placas adhesivas?",
        answer:
          "Los tubos UV deben reemplazarse cada 8-12 meses ya que, aunque sigan iluminados, pierden efectividad para atraer insectos. Las placas adhesivas deben cambiarse cada 1-3 meses dependiendo del nivel de captura.",
      },
      {
        id: 2,
        question: "¿Las lámparas insectocutoras son ruidosas?",
        answer:
          "Los modelos con rejilla electrocutora pueden emitir un pequeño sonido al eliminar insectos. Si esto es una preocupación, recomendamos modelos con placa adhesiva que son completamente silenciosos.",
      },
      {
        id: 3,
        question: "¿Dónde es mejor instalar las lámparas insectocutoras?",
        answer:
          "Deben instalarse lejos de ventanas y puertas (para no atraer insectos del exterior), a una altura de 2-2.5 metros, y en áreas no visibles para clientes pero estratégicas para interceptar insectos antes de que lleguen a zonas críticas.",
      },
    ],
    delay: 0.8,
  },
  {
    id: 9,
    slug: "limpieza-campanas",
    title: "Limpieza de Campanas.",
    isActive: true,
    shortDescription: "Mantenimiento de campanas extractoras.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio especializado de limpieza de ductos y campanas y sistemas de extracción eliminando la acumulación de grasa y residuos en cocinas comerciales e industriales. Este mantenimiento es crucial para prevenir incendios, mejorar la eficiencia de los equipos, cumplir con normativas de seguridad y mantener un ambiente de trabajo saludable.",
    category: "auxiliares",
    icon: Utensils,
    features: [
      {
        id: 1,
        title: "Limpieza profunda",
        description:
          "Eliminación completa de grasa y residuos de toda la campana y ductos.",
      },
      {
        id: 2,
        title: "Equipos especializados",
        description:
          "Utilizamos herramientas y productos específicos para sistemas de extracción.",
      },
      {
        id: 3,
        title: "Certificación",
        description:
          "Proporcionamos certificado de limpieza para cumplimiento de normativas.",
      },
      {
        id: 4,
        title: "Servicio integral",
        description:
          "Limpiamos campanas, filtros, ductos, extractores y sistemas completos.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Inspección",
        description:
          "Evaluación del estado actual y nivel de acumulación de grasa.",
      },
      {
        id: 2,
        title: "Protección",
        description:
          "Cubrimiento de equipos y superficies circundantes para evitar daños.",
      },
      {
        id: 3,
        title: "Desmontaje",
        description:
          "Remoción de filtros y componentes accesibles para limpieza individual.",
      },
      {
        id: 4,
        title: "Limpieza",
        description:
          "Aplicación de desengrasantes y limpieza mecánica de todas las superficies.",
      },
      {
        id: 5,
        title: "Remontaje",
        description:
          "Instalación de componentes limpios y verificación de funcionamiento.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Prevención de incendios en cocinas",
      },
      {
        id: 2,
        title: "Mejora de la eficiencia de extracción",
      },
      {
        id: 3,
        title: "Cumplimiento de normativas de seguridad",
      },
      {
        id: 4,
        title: "Ambiente de trabajo más limpio y saludable",
      },
      {
        id: 5,
        title: "Mayor vida útil de los equipos de ventilación",
      },
    ],
    coverImage: "limpieza-campanas-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: "limpieza-campanas-1.jpg",
      },
      {
        id: 2,
        url: "limpieza-campanas-2.jpg",
      },
      {
        id: 3,
        url: "limpieza-campanas-3.jpg",
      },
      {
        id: 4,
        url: "limpieza-campanas-4.jpg",
      },
      {
        id: 5,
        url: "limpieza-campanas-5.jpg",
      },
      {
        id: 6,
        url: "limpieza-campanas-6.jpg",
      },
      {
        id: 7,
        url: "limpieza-campanas-7.jpg",
      },
      {
        id: 8,
        url: "limpieza-campanas-8.jpg",
      },
      {
        id: 9,
        url: "limpieza-campanas-9.jpg",
      },
      {
        id: 10,
        url: "limpieza-campanas-10.jpg",
      },
      {
        id: 11,
        url: "limpieza-campanas-11.jpg",
      }
    ],
    faqs: [
      {
        id: 1,
        question:
          "¿Con qué frecuencia se debe limpiar una campana extractora comercial?",
        answer:
          "La normativa NFPA 96 recomienda: Mensual para operaciones de alto volumen (24h), trimestral para operación moderada (12h diarias), semestral para operación ligera (6h diarias) y anual para operaciones ocasionales.",
      },
      {
        id: 2,
        question: "¿Cuánto tiempo toma limpiar una campana extractora?",
        answer:
          "Para una campana estándar de restaurante, el proceso toma entre 3-5 horas. Sistemas más grandes o con ductos extensos pueden requerir un día completo.",
      },
      {
        id: 3,
        question: "¿Es necesario cerrar la cocina durante la limpieza?",
        answer:
          "Sí, la limpieza requiere que la cocina esté inoperativa. Por eso, generalmente programamos estos servicios durante horas de cierre o períodos de baja actividad.",
      },
    ],
    delay: 0.9,
  },
  {
    id: 10,
    slug: "limpieza-pozos-septicos",
    title: "Limpieza de Pozos Sépticos",
    isActive: true,
    shortDescription: "Mantenimiento preventivo y correctivo.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Ofrecemos un servicio completo de limpieza, mantenimiento y desatoro de pozos sépticos, cajas de registro y sistemas de drenaje. Utilizamos equipos de succión al vacío y técnicas especializadas para eliminar lodos, sedimentos y obstrucciones, previniendo desbordamientos, malos olores y problemas sanitarios.",
    category: "saneamiento",
    icon: Trash2,
    features: [
      {
        id: 1,
        title: "Succión potente",
        description:
          "Equipos de alta capacidad para extracción eficiente de residuos y lodos.",
      },
      {
        id: 2,
        title: "Desatoro profesional",
        description:
          "Eliminación de obstrucciones en tuberías y sistemas de drenaje.",
      },
      {
        id: 3,
        title: "Inspección técnica",
        description:
          "Evaluación del estado del sistema para identificar problemas potenciales.",
      },
      {
        id: 4,
        title: "Disposición responsable",
        description:
          "Gestión adecuada de residuos en cumplimiento con normativas ambientales.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Diagnóstico",
        description:
          "Evaluación del estado del pozo séptico y nivel de llenado.",
      },
      {
        id: 2,
        title: "Acceso",
        description:
          "Localización y apertura de tapas de inspección y accesos.",
      },
      {
        id: 3,
        title: "Bombeo",
        description:
          "Extracción de líquidos, lodos y residuos mediante equipos de succión.",
      },
      {
        id: 4,
        title: "Limpieza",
        description:
          "Lavado de paredes y componentes del sistema cuando es posible.",
      },
      {
        id: 5,
        title: "Verificación",
        description:
          "Comprobación del funcionamiento correcto después de la limpieza.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Prevención de desbordamientos y filtraciones",
      },
      {
        id: 2,
        title: "Eliminación de malos olores",
      },
      {
        id: 3,
        title: "Prolongación de la vida útil del sistema séptico",
      },
      {
        id: 4,
        title: "Prevención de problemas sanitarios y ambientales",
      },
      {
        id: 5,
        title: "Cumplimiento de normativas de saneamiento",
      },
    ],
    coverImage: "limpieza-pozos-septicos-2.jpeg",
    galleryImages: [
      {
        id: 1,
        url: "limpieza-pozos-septicos-1.jpeg",
      },
      {
        id: 2,
        url: "limpieza-pozos-septicos-2.jpeg",
      },
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe limpiar un pozo séptico?",
        answer:
          "Generalmente se recomienda cada 3-5 años para viviendas familiares, pero puede variar según el tamaño del tanque, número de usuarios y volumen de aguas residuales generadas.",
      },
      {
        id: 2,
        question:
          "¿Cuáles son las señales de que un pozo séptico necesita limpieza?",
        answer:
          "Drenaje lento, malos olores, acumulación de agua alrededor del tanque, césped inusualmente verde sobre el área del drenaje, o retorno de aguas residuales en inodoros y desagües.",
      },
      {
        id: 3,
        question: "¿Qué sucede si no se limpia un pozo séptico regularmente?",
        answer:
          "Puede provocar obstrucciones, desbordamientos, daños estructurales al sistema, contaminación del suelo y aguas subterráneas, y costosas reparaciones o reemplazos del sistema completo.",
      },
    ],
    delay: 1.0,
  },
  {
    id: 11,
    slug: "limpieza-trampas-grasa",
    title: "Limpieza de Trampas de Grasa.",
    isActive: true,
    shortDescription: "Mantenimiento para restaurantes y cocinas.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio especializado de limpieza de trampas de grasa previene obstrucciones en sistemas de drenaje de restaurantes y cocinas industriales. Removemos la acumulación de grasas, aceites y sólidos que pueden causar bloqueos, malos olores y problemas con las autoridades sanitarias, ayudando a mantener sus instalaciones funcionando correctamente.",
    category: "saneamiento",
    icon: Pipette,
    features: [
      {
        id: 1,
        title: "Limpieza completa",
        description:
          "Eliminación total de grasas, aceites y sólidos acumulados.",
      },
      {
        id: 2,
        title: "Equipos especializados",
        description:
          "Utilizamos bombas de succión y herramientas específicas para este servicio.",
      },
      {
        id: 3,
        title: "Gestión de residuos",
        description:
          "Disposición adecuada de los desechos en cumplimiento con normativas ambientales.",
      },
      {
        id: 4,
        title: "Documentación",
        description:
          "Proporcionamos certificados de mantenimiento para cumplimiento regulatorio.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Inspección",
        description:
          "Evaluación del estado y nivel de llenado de la trampa de grasa.",
      },
      {
        id: 2,
        title: "Apertura",
        description: "Remoción segura de tapas y accesos a la trampa.",
      },
      {
        id: 3,
        title: "Extracción",
        description:
          "Bombeo y remoción de grasas, aceites y sólidos acumulados.",
      },
      {
        id: 4,
        title: "Limpieza",
        description:
          "Lavado de paredes, deflectores y componentes de la trampa.",
      },
      {
        id: 5,
        title: "Verificación",
        description:
          "Comprobación del funcionamiento correcto después de la limpieza.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Prevención de obstrucciones en tuberías",
      },
      {
        id: 2,
        title: "Eliminación de malos olores",
      },
      {
        id: 3,
        title: "Cumplimiento de normativas sanitarias y ambientales",
      },
      {
        id: 4,
        title: "Prevención de multas por incumplimiento",
      },
      {
        id: 5,
        title: "Prolongación de la vida útil del sistema de drenaje",
      },
    ],
    coverImage: "limpieza-trampas-grasa-3.jpg",
    galleryImages: [
      {
        id: 1,
        url: "limpieza-trampas-grasa-1.jpg",
      },
      {
        id: 2,
        url: "limpieza-trampas-grasa-2.jpg",
      },
      {
        id: 3,
        url: "limpieza-trampas-grasa-3.jpg",
      },
      {
        id: 4,
        url: "limpieza-trampas-grasa-4.jpg",
      },
      {
        id: 5,
        url: "limpieza-trampas-grasa-5.jpg",
      },
      {
        id: 6,
        url: "limpieza-trampas-grasa-6.jpg",
      },
      {
        id: 8,
        url: "limpieza-trampas-grasa-8.jpg",
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe limpiar una trampa de grasa?",
        answer:
          "La frecuencia recomendada es mensual para restaurantes de alto volumen, y trimestral para establecimientos más pequeños. Sin embargo, algunas normativas locales pueden exigir frecuencias específicas.",
      },
      {
        id: 2,
        question:
          "¿Qué problemas puede causar una trampa de grasa sin mantenimiento?",
        answer:
          "Puede provocar obstrucciones en las tuberías, reflujo de aguas residuales, malos olores, problemas sanitarios, multas por incumplimiento de normativas, y en casos extremos, cierre temporal del establecimiento.",
      },
      {
        id: 3,
        question: "¿El servicio interrumpe las operaciones del restaurante?",
        answer:
          "Intentamos minimizar las interrupciones programando el servicio en horarios de baja actividad. Durante la limpieza, el uso de los desagües conectados a la trampa debe ser limitado, pero generalmente no requiere el cierre completo del establecimiento.",
      },
    ],
    delay: 1.1,
  },
  {
    id: 12,
    slug: "limpieza-colchones",
    title: "Limpieza de Colchones",
    isActive: false,
    shortDescription: "Eliminación de ácaros y alérgenos.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio profesional de limpieza y desinfección de colchones elimina ácaros, bacterias, hongos y alérgenos que se acumulan con el tiempo. Utilizamos equipos de aspiración profunda, vapor seco y tratamientos anti-ácaros para proporcionar un ambiente de descanso más limpio y saludable, especialmente beneficioso para personas con alergias o problemas respiratorios.",
    category: "auxiliares",
    icon: Bed,
    features: [
      {
        id: 1,
        title: "Limpieza profunda",
        description: "Eliminación de ácaros, polvo, células de piel y manchas.",
      },
      {
        id: 2,
        title: "Desinfección completa",
        description:
          "Tratamiento con vapor seco a alta temperatura que elimina bacterias y hongos.",
      },
      {
        id: 3,
        title: "Tratamiento anti-ácaros",
        description:
          "Aplicación de productos específicos que previenen la proliferación de ácaros.",
      },
      {
        id: 4,
        title: "Eliminación de olores",
        description:
          "Neutralización de olores mediante tratamientos especializados.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Inspección",
        description:
          "Evaluación del estado del colchón y tipo de tratamiento necesario.",
      },
      {
        id: 2,
        title: "Aspirado profundo",
        description:
          "Eliminación de polvo, ácaros y partículas con equipos de alta potencia.",
      },
      {
        id: 3,
        title: "Tratamiento de manchas",
        description:
          "Aplicación de productos específicos para eliminar manchas visibles.",
      },
      {
        id: 4,
        title: "Desinfección",
        description:
          "Aplicación de vapor seco a alta temperatura para eliminar microorganismos.",
      },
      {
        id: 5,
        title: "Protección",
        description:
          "Aplicación opcional de tratamiento protector anti-ácaros y anti-manchas.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Reducción significativa de alérgenos",
      },
      {
        id: 2,
        title: "Mejora de la calidad del sueño",
      },
      {
        id: 3,
        title: "Prevención de problemas respiratorios y alergias",
      },
      {
        id: 4,
        title: "Eliminación de olores desagradables",
      },
      {
        id: 5,
        title: "Prolongación de la vida útil del colchón",
      },
    ],
    coverImage: "/adicional-4.jpg",
    galleryImages: [
      {
        id: 1,
        url: "",
      },
    ],
    faqs: [
      {
        id: 1,
        question:
          "¿Con qué frecuencia se debe limpiar profesionalmente un colchón?",
        answer:
          "Recomendamos una limpieza profesional cada 6-12 meses. Sin embargo, personas con alergias, asma o problemas respiratorios pueden beneficiarse de limpiezas más frecuentes, cada 3-6 meses.",
      },
      {
        id: 2,
        question:
          "¿Cuánto tiempo tarda en secarse el colchón después de la limpieza?",
        answer:
          "Nuestro método utiliza mínima humedad, por lo que el tiempo de secado es de aproximadamente 2-4 horas, dependiendo de la ventilación y condiciones ambientales.",
      },
      {
        id: 3,
        question: "¿La limpieza elimina todas las manchas del colchón?",
        answer:
          "Podemos eliminar la mayoría de las manchas recientes, pero algunas manchas antiguas o profundas pueden ser difíciles de eliminar completamente. Durante la inspección inicial, le informaremos sobre las expectativas realistas para su caso específico.",
      },
    ],
    delay: 1.2,
  },
  {
    id: 13,
    slug: "limpieza-sumideros",
    title: "Limpieza de Red de Sumideros",
    isActive: true,
    shortDescription: "Prevención de inundaciones y problemas de drenaje.\nNuestros servicios incorporan un ecosistema digital integral que comprende aplicativo móvil y plataforma web, soportado por la robusta infraestructura del ERP, lo que nos posiciona como líderes en innovación tecnológica del sector.",
    fullDescription:
      "Nuestro servicio especializado de limpieza y mantenimiento de redes de sumideros y sistemas de drenaje pluvial previene inundaciones y problemas de acumulación de agua. Eliminamos sedimentos, residuos y obstrucciones que pueden bloquear el flujo normal del agua, garantizando el funcionamiento óptimo del sistema de drenaje en épocas de lluvia.",
    category: "auxiliares",
    icon: Warehouse,
    features: [
      {
        id: 1,
        title: "Limpieza integral",
        description:
          "Eliminación de sedimentos, basura y obstrucciones en sumideros y tuberías.",
      },
      {
        id: 2,
        title: "Equipos especializados",
        description:
          "Utilizamos camiones hidrojet y de succión para una limpieza efectiva.",
      },
      {
        id: 3,
        title: "Inspección con cámara",
        description:
          "Verificación del estado interno de tuberías para detectar problemas ocultos.",
      },
      {
        id: 4,
        title: "Mantenimiento preventivo",
        description:
          "Programas regulares para evitar acumulaciones y obstrucciones.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description:
          "Inspección del estado actual de sumideros y sistema de drenaje.",
      },
      {
        id: 2,
        title: "Limpieza superficial",
        description: "Remoción de residuos visibles y accesibles manualmente.",
      },
      {
        id: 3,
        title: "Limpieza profunda",
        description:
          "Utilización de equipos hidrojet para eliminar obstrucciones en tuberías.",
      },
      {
        id: 4,
        title: "Succión",
        description:
          "Extracción de lodos y sedimentos acumulados mediante equipos de vacío.",
      },
      {
        id: 5,
        title: "Verificación",
        description:
          "Comprobación del flujo correcto y funcionamiento del sistema.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: "Prevención de inundaciones en épocas de lluvia",
      },
      {
        id: 2,
        title: "Eliminación de malos olores por agua estancada",
      },
      {
        id: 3,
        title: "Reducción de riesgos sanitarios y ambientales",
      },
      {
        id: 4,
        title: "Prolongación de la vida útil del sistema de drenaje",
      },
      {
        id: 5,
        title: "Cumplimiento de normativas municipales",
      },
    ],
    coverImage: "limpieza-sumideros-1.jpeg",
    galleryImages: [
      {
        id: 1,
        url: "limpieza-sumideros-1.jpeg",
      },
      {
        id: 2,
        url: "limpieza-sumideros-2.jpeg",
      },
      {
        id: 3,
        url: "limpieza-sumideros-3.jpeg",
      },
    ],
    faqs: [
      {
        id: 1,
        question:
          "¿Con qué frecuencia se debe realizar la limpieza de sumideros?",
        answer:
          "Recomendamos limpieza preventiva semestral, idealmente antes de las temporadas de lluvia. En zonas con alta acumulación de hojas o residuos, puede ser necesaria una frecuencia trimestral.",
      },
      {
        id: 2,
        question:
          "¿Qué problemas puede causar un sistema de sumideros obstruido?",
        answer:
          "Puede provocar inundaciones, daños a la propiedad, erosión del suelo, proliferación de mosquitos y otros vectores en agua estancada, malos olores y deterioro acelerado de pavimentos y estructuras.",
      },
      {
        id: 3,
        question: "¿El servicio incluye la reparación de sumideros dañados?",
        answer:
          "Nuestro servicio principal es la limpieza y mantenimiento. Sin embargo, durante la inspección identificamos daños estructurales y podemos ofrecer servicios de reparación como un servicio adicional o referirle a especialistas en caso necesario.",
      },
    ],
    delay: 1.3,
  },
];

export const getServiceById = (id: number): Service | undefined => {
  return ServiciosData.find((service) => service.id === id);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return ServiciosData.find((service) => service.slug === slug && service.isActive);
};

export const getServicesByCategory = (category: ServiceType): Service[] => {
  return ServiciosData.filter((service) => service.category === category && service.isActive);
};

export const getAllServiceCategories = (): ServiceCategories[] => {
  return [
    { key: "saneamiento", label: "Saneamiento Ambiental" },
    { key: "auxiliares", label: "Servicios Auxiliares" },
  ];
};

export const getAllServices = (): Service[] => {
  return ServiciosData.filter((servicio) => servicio.isActive);
};

export const ProductosData: Product[] = [
  {
    id: 1,
    slug: "portacebo-roek-101",
    name: "Portacebo Roek 101",
    description:
      "Fabricado en polipropileno con protección U.V. posee 3 compartimientos independientes para Cebo en bloque, pellets y contiene una trampa de captura guillotina. De plástico duro accesible para los ratones, evita peligros a niños y animales domésticos y protege el cebo. Cierre, con llave.",
    shortDescription:
      "Fabricado en polipropileno con protección U.V. posee 3 compartimientos independientes para Cebo en bloque, pellets y contiene una trampa de captura guillotina.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Amplio espectro de acción",
        description: "",
      },
      {
        id: 2,
        title: "Efecto de derribe rápido",
        description: "",
      },
      {
        id: 3,
        title: "Buena residualidad",
        description: "",
      },
      {
        id: 4,
        title: "Baja toxicidad para mamíferos",
        description: "",
      },
      {
        id: 5,
        title: "Estable en diversas condiciones ambientales",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Control de insectos voladores (moscas, mosquitos)",
      },
      {
        id: 2,
        aplication: "Control de insectos rastreros (cucarachas, hormigas)",
      },
      {
        id: 3,
        aplication: "Tratamiento residual en superficies",
      },
      {
        id: 4,
        aplication: "Aplicación en grietas y hendiduras",
      },
    ],
    coverImage: "portacebo-roek-101.jpg",
    gallery: [
      {
        id: 1,
        url: "portacebo-roek-101.jpg",
      },
    ],
    icon: Bug,
    stock: "disponible",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "portacebo-roek-1847",
    name: "Portacebo Roek-1847P",
    description:
      "Cebadero para roedor Roek 1847P. Fabricado en polipropileno con protección UV muy útil para la protección del cebo. Su uso, evita el peligro a niños y animales domésticos. El portacebo se cierra herméticamente con una llave de seguridad y también se puede empotrar muy fácilmente en la pared para evitar su movimiento.",
    shortDescription:
      "Cebadero para roedor Roek 1847P. Fabricado en polipropileno con protección UV muy útil para la protección del cebo.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Acción por contacto e ingestión",
        description: "",
      },
      {
        id: 2,
        title: "Efecto residual prolongado",
        description: "",
      },
      {
        id: 3,
        title: "Estabilidad a la luz solar",
        description: "",
      },
      {
        id: 4,
        title: "Baja toxicidad para mamíferos",
        description: "",
      },
      {
        id: 5,
        title: "Versátil en diferentes aplicaciones",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Control de cucarachas, hormigas y arañas",
      },
      {
        id: 2,
        aplication: "Tratamiento de moscas y mosquitos",
      },
      {
        id: 3,
        aplication: "Aplicación en interiores y exteriores",
      },
      {
        id: 4,
        aplication: "Tratamiento perimetral de edificaciones",
      },
    ],
    coverImage: "portacebo-roek-1847.jpg",
    gallery: [
      {
        id: 1,
        url: "portacebo-roek-1847.jpg",
      },
    ],
    icon: Bug,
    stock: "disponible",
  },
  {
    id: 3,
    slug: "portacebo-roek-1822",
    name: "Portacebo Roek 1822",
    description:
      "Cebadero para roedor Roek 1822. Fabricado en polipropileno con protección UV muy útil para la protección del cebo. Su uso, evita el peligro a niños y animales domésticos. El portacebo se cierra herméticamente con una llave de seguridad. Fabricado en plástico rígido con soporte para bloques de cebo en varilla. comportamiento hermético en su base hasta una altura: 86.5.",
    shortDescription:
      "Cebadero para roedor Roek 1822. Fabricado en polipropileno con protección UV muy útil para la protección del cebo.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Mayor potencia a dosis más bajas",
        description: "",
      },
      {
        id: 2,
        title: "Excelente efecto de derribe",
        description: "",
      },
      {
        id: 3,
        title: "Buena residualidad",
        description: "",
      },
      {
        id: 4,
        title: "Menor impacto ambiental",
        description: "",
      },
      {
        id: 5,
        title: "Ideal para rotación de productos",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Control de insectos resistentes",
      },
      {
        id: 2,
        aplication: "Tratamiento de áreas sensibles",
      },
      {
        id: 3,
        aplication: "Aplicación en interiores y exteriores",
      },
      {
        id: 4,
        aplication: "Control de plagas en industria alimentaria",
      },
    ],
    coverImage: "portacebo-roek-1822.jpg",
    gallery: [
      {
        id: 1,
        url: "portacebo-roek-1822.jpg",
      },
    ],
    icon: Bug,
    stock: "disponible",
    isNew: true,
  },
  {
    id: 4,
    slug: "cebadero-raticida-montana",
    name: "Cebadero Raticida Montana",
    description:
      "Características:\n\t- Material de polipropileno\n\t- Dimensiones: 34.5 x 22.8 x 8.5 cm\n\t- Color: negro.\n\t- País de origen: China.\nBeneficios:\n\t1. Se colocan en esquinas y a lo largo de paredes por donde viajan los roedores.\n\t2. Posibilidad de fijarse lateralmente o al suelo con tornillos y tarugos.\n\t3. Material resistente a altas temperaturas y golpes.\n\t4. Fácil de lavar y reemplazar los cebos.\n\t5. Se cierra herméticamente y se desbloquea con una llave especial de dos dientes.\n\t6. Para colgar todo tipo de cebos, incluso bloques en barras horizontales y verticales.\n\t7. Bandeja rectangular interior que permite utilizar cebo raticida líquido.",
    shortDescription:
      "Características:\n\t- Material de polipropileno\n\t- Dimensiones: 34.5 x 22.8 x 8.5 cm\n\t- Color: negro.\n\t- País de origen: China.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Alta palatabilidad para roedores",
        description: "",
      },
      {
        id: 2,
        title: "Efectivo con una sola ingesta",
        description: "",
      },
      {
        id: 3,
        title: "Resistente a condiciones húmedas",
        description: "",
      },
      {
        id: 4,
        title: "Contiene amargante para prevenir ingesta accidental",
        description: "",
      },
      {
        id: 5,
        title: "Formulación en bloques parafinados",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Control de ratas y ratones",
      },
      {
        id: 2,
        aplication: "Uso en estaciones de cebo",
      },
      {
        id: 3,
        aplication: "Aplicación en áreas húmedas",
      },
      {
        id: 4,
        aplication: "Tratamiento perimetral de edificaciones",
      },
    ],
    coverImage: "cebadero-raticida-montana.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-raticida-montana.jpg",
      },
    ],
    icon: Rat,
    stock: "disponible",
    isFeatured: true,
  },
  {
    id: 5,
    slug: "cebadero-evo-ambush",
    name: "Protecta Evo Ambush",
    description:
      "El mantenimiento se simplifica gracias a un mecanismo de bloqueo individual. La limpieza se facilita gracias a la bandeja extraíble Las varillas del bloqueo de cebo no se caen durante la limpieza. Es inviolable: perros y niños están a salvo y puede contener: 4-1 oz. De cebo BLOX en cuatro varillas verticales 1 trampa para ratas marca T-rex Medidas 21x26x10cm 0.64 kg.",
    shortDescription:
      "El mantenimiento se simplifica gracias a un mecanismo de bloqueo individual.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Excelente palatabilidad",
        description: "",
      },
      {
        id: 2,
        title: "Acción anticoagulante retardada",
        description: "",
      },
      {
        id: 3,
        title: "Efectivo contra roedores resistentes",
        description: "",
      },
      {
        id: 4,
        title: "Formulación en pellets",
        description: "",
      },
      {
        id: 5,
        title: "Contiene amargante de seguridad",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Control de infestaciones severas",
      },
      {
        id: 2,
        aplication: "Uso en estaciones de cebo",
      },
      {
        id: 3,
        aplication: "Aplicación en áreas secas",
      },
      {
        id: 4,
        aplication: "Programas de control integrado",
      },
    ],
    coverImage: "cebadero-evo-ambush.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-evo-ambush.jpg",
      },
    ],
    icon: Rat,
    stock: "disponible",
  },
  {
    id: 6,
    slug: "cebadero-beta",
    name: "Cebadero Beta",
    description:
      "Ideal para ambientes reducidos, posee doble llave de seguridad, bandeja interior removible para un mejor aseo, varillas de fierro para anclar el cebo y altamente resistente gracias a su protección UV.",
    shortDescription:
      "Ideal para ambientes reducidos, posee doble llave de seguridad.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Amplio espectro antimicrobiano",
        description: "",
      },
      {
        id: 2,
        title: "No corrosivo para superficies",
        description: "",
      },
      {
        id: 3,
        title: "Baja toxicidad",
        description: "",
      },
      {
        id: 4,
        title: "Efectivo en presencia de materia orgánica",
        description: "",
      },
      {
        id: 5,
        title: "Residualidad prolongada",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Desinfección de superficies",
      },
      {
        id: 2,
        aplication: "Sanitización de áreas críticas",
      },
      {
        id: 3,
        aplication: "Uso en industria alimentaria",
      },
      {
        id: 4,
        aplication: "Desinfección de equipos médicos",
      },
    ],
    coverImage: "cebadero-beta.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-beta.jpg",
      },
    ],
    icon: Droplets,
    stock: "disponible",
    isFeatured: true,
  },
  {
    id: 7,
    slug: "cebadera-bora",
    name: "Cebadero Bora",
    description:
      "Ideal para establecimientos que requieran un aislamiento total del cebo con el medio ambiente, robusta y de mayor resistencia a caída de agua, posee dos compartimientos de alimentación, llave de seguridad doble, fijadores externos para pared.",
    shortDescription: "Ideal para establecimientos que requieran un aislamiento total del cebo con el medio ambiente.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Acción desinfectante rápida",
        description: "",
      },
      {
        id: 2,
        title: "Efectivo contra esporas",
        description: "",
      },
      {
        id: 3,
        title: "Económico y versátil",
        description: "",
      },
      {
        id: 4,
        title: "Alto poder oxidante",
        description: "",
      },
      {
        id: 5,
        title: "Desinfección de nivel intermedio-alto",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Desinfección de superficies resistentes",
      },
      {
        id: 2,
        aplication: "Tratamiento de agua",
      },
      {
        id: 3,
        aplication: "Desinfección de áreas críticas",
      },
      {
        id: 4,
        aplication: "Eliminación de biofilms",
      },
    ],
    coverImage: "cebadera-bora.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadera-bora.jpg",
      },
    ],
    icon: Droplets,
    stock: "disponible",
  },
  {
    id: 8,
    slug: "cebadero-first",
    name: "Cebadero First",
    description:
      "Solución desinfectante de rápida acción y evaporación. Efectiva contra bacterias, hongos y algunos virus. Su formulación permite una aplicación versátil en diversas superficies sin dejar residuos. Ideal para la desinfección rápida de superficies de contacto frecuente y equipos.",
    shortDescription: "Solución desinfectante de rápida acción y evaporación.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Rápida acción desinfectante",
        description: "",
      },
      {
        id: 2,
        title: "No deja residuos",
        description: "",
      },
      {
        id: 3,
        title: "Fácil aplicación",
        description: "",
      },
      {
        id: 4,
        title: "Evaporación rápida",
        description: "",
      },
      {
        id: 5,
        title: "No requiere enjuague",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Desinfección de superficies de contacto frecuente",
      },
      {
        id: 2,
        aplication: "Limpieza de equipos electrónicos",
      },
      {
        id: 3,
        aplication: "Desinfección rápida entre usos",
      },
      {
        id: 4,
        aplication: "Aplicación en áreas donde no se puede usar agua",
      },
    ],
    coverImage: "cebadero-first.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-first.jpg",
      },
    ],
    icon: Droplets,
    stock: "disponible",
  },
  {
    id: 9,
    slug: "cebadero-pilot",
    name: "Cebadero Pilot",
    description:
      "Cebadero Pilot fuertes y resistentes cumplen las normas sanitarias más exigentes uso en interiores y exteriores posee triple zona de alimentación gran espacio para colocar pegantes para ratas adultas.",
    shortDescription:
      "Cebadero Pilot fuertes y resistentes cumplen las normas sanitarias",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Elimina 99.9% de bacterias",
        description: "",
      },
      {
        id: 2,
        title: "Fórmula suave para uso frecuente",
        description: "",
      },
      {
        id: 3,
        title: "pH balanceado",
        description: "",
      },
      {
        id: 4,
        title: "Con agentes humectantes",
        description: "",
      },
      {
        id: 5,
        title: "Fragancia agradable",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Higiene de manos en áreas críticas",
      },
      {
        id: 2,
        aplication: "Uso en dispensadores automáticos",
      },
      {
        id: 3,
        aplication: "Lavado frecuente de manos",
      },
      {
        id: 4,
        aplication: "Instalaciones de procesamiento de alimentos",
      },
    ],
    coverImage: "cebadero-pilot.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-pilot.jpg",
      },
    ],
    icon: Shield,
    stock: "disponible",
  },
  {
    id: 10,
    slug: "cebadero-rock",
    name: "Cebadero Rock",
    description:
      "Protección de ingredientes tóxicos sobre niños y animales. protección del cebo químico de las lluvias. características: ideal para uso en jardines o áreas abiertas, con estaca para clavar en el suelo y llave de seguridad, exclusivo para cebo químico.",
    shortDescription: "Protección de ingredientes tóxicos sobre niños y animales.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Desinfección sin agua ni jabón",
        description: "",
      },
      {
        id: 2,
        title: "Secado rápido",
        description: "",
      },
      {
        id: 3,
        title: "Con emolientes para proteger la piel",
        description: "",
      },
      {
        id: 4,
        title: "No pegajoso",
        description: "",
      },
      {
        id: 5,
        title: "Fragancia agradable",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Desinfección de manos en movimiento",
      },
      {
        id: 2,
        aplication: "Uso en dispensadores",
      },
      {
        id: 3,
        aplication: "Áreas sin acceso a agua",
      },
      {
        id: 4,
        aplication: "Complemento de higiene de manos",
      },
    ],
    coverImage: "cebadero-rock.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-rock.jpg",
      },
    ],
    icon: Shield,
    stock: "disponible",
    isNew: true,
  },
  {
    id: 11,
    slug: "bebedero-para-roedores",
    name: "Bebedero para roedor",
    description:
      "Bebedero para roedores de plástico con capacidad de 1/2 o de 1 litro contenedor de agua para roedores, utilizable cuando existe fuente de alimento y poco acceso a líquidos.",
    shortDescription:
      "Bebedero para roedores de plástico con capacidad de 1/2 o de 1 litro",
    category: "equipos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "No tóxico para aves",
        description: "",
      },
      {
        id: 2,
        title: "Resistente a la intemperie",
        description: "",
      },
      {
        id: 3,
        title: "Fácil aplicación",
        description: "",
      },
      {
        id: 4,
        title: "Larga duración",
        description: "",
      },
      {
        id: 5,
        title: "No daña superficies",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Cornisas y salientes",
      },
      {
        id: 2,
        aplication: "Letreros y estructuras",
      },
      {
        id: 3,
        aplication: "Equipos exteriores",
      },
      {
        id: 4,
        aplication: "Áreas de anidación",
      },
    ],
    coverImage: "bebedero-para-roedores.jpg",
    gallery: [
      {
        id: 1,
        url: "bebedero-para-roedores.jpg",
      },
    ],
    icon: Bird,
    stock: "disponible",
  },
  {
    id: 12,
    slug: "cebadero-para-moscas",
    name: "Cebadero para moscas",
    description:
      "Dispositivo para el control de moscas. Cebadero para la colocación de insecticidas neonicotinoides en presentación de cebos granulados o similares.",
    shortDescription:
      "Dispositivo para el control de moscas.",
    category: "trampas",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "No utiliza productos químicos",
        description: "",
      },
      {
        id: 2,
        title: "Seguro para niños y mascotas",
        description: "",
      },
      {
        id: 3,
        title: "Bajo consumo energético",
        description: "",
      },
      {
        id: 4,
        title: "Cobertura hasta 100 m²",
        description: "",
      },
      {
        id: 5,
        title: "Frecuencia variable para evitar habituación",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Áreas residenciales",
      },
      {
        id: 2,
        aplication: "Espacios con alimentos",
      },
      {
        id: 3,
        aplication: "Complemento a programas de control",
      },
      {
        id: 4,
        aplication: "Áreas sensibles a químicos",
      },
    ],
    coverImage: "cebadero-para-moscas.jpg",
    gallery: [
      {
        id: 1,
        url: "cebadero-para-moscas.jpg",
      },
    ],
    icon: Zap,
    stock: "disponible",
  },
  {
    id: 13,
    slug: "portagel-forex",
    name: "Portagel Forex",
    description:
      "Para protección de gel foval, para mayor duración y efectividad.\nCaracterísticas:\n\t– Material de Plástico\n\t– Medida 15 x 40 mm.",
    shortDescription:
      "Para protección de gel foval, para mayor duración y efectividad.",
    category: "equipos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Adhesivo de alta potencia",
        description: "",
      },
      {
        id: 2,
        title: "Diseño plano y discreto",
        description: "",
      },
      {
        id: 3,
        title: "No contiene venenos",
        description: "",
      },
      {
        id: 4,
        title: "Atrayente incorporado",
        description: "",
      },
      {
        id: 5,
        title: "Fácil de usar",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Monitoreo de actividad",
      },
      {
        id: 2,
        aplication: "Captura en áreas sensibles",
      },
      {
        id: 3,
        aplication: "Complemento a programas de control",
      },
      {
        id: 4,
        aplication: "Identificación de especies",
      },
    ],
    coverImage: "portagel-forex.jpg",
    gallery: [
      {
        id: 1,
        url: "portagel-forex.jpg",
      },
    ],
    icon: Rat,
    stock: "disponible",
  },
  {
    id: 14,
    slug: "platinum",
    name: "Platinum",
    description:
      "Gel insecticida / cucarachicida con adherencia a distintas superficies. Puede ser usado en establecimientos en funcionamiento. Producto autorizado por el MINSA.",
    shortDescription:
      "Gel insecticida / cucarachicida",
    category: "insumos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Tubos UV de alta eficiencia",
        description: "",
      },
      {
        id: 2,
        title: "Placa adhesiva de fácil reemplazo",
        description: "",
      },
      {
        id: 3,
        title: "Diseño discreto y elegante",
        description: "",
      },
      {
        id: 4,
        title: "Operación silenciosa",
        description: "",
      },
      {
        id: 5,
        title: "Cobertura hasta 80 m²",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Restaurantes y cocinas",
      },
      {
        id: 2,
        aplication: "Áreas de procesamiento de alimentos",
      },
      {
        id: 3,
        aplication: "Oficinas y áreas comerciales",
      },
      {
        id: 4,
        aplication: "Hospitales y centros de salud",
      },
    ],
    coverImage: "platinum.jpeg",
    gallery: [
      {
        id: 1,
        url: "platinum.jpeg",
      },
    ],
    icon: Bug,
    stock: "disponible",
    isFeatured: true,
  },
  {
    id: 15,
    slug: "trampa-tomahawk",
    name: "Trampa Tomahawk",
    description:
      "Accesorio para ser usado en el control de roedores en Salud Pública, Saneamiento Ambiental e Industria en general. Diseño y fabricado en Malla galvanizada.",
    shortDescription:
      "Accesorio para ser usado en el control de roedores en Salud Pública",
    category: "equipos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Tamaño de gota ajustable (5-50 micras)",
        description: "",
      },
      {
        id: 2,
        title: "Motor eléctrico de alta durabilidad",
        description: "",
      },
      {
        id: 3,
        title: "Tanque de 5 litros",
        description: "",
      },
      {
        id: 4,
        title: "Alcance hasta 8-10 metros",
        description: "",
      },
      {
        id: 5,
        title: "Flujo ajustable",
        description: "",
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Desinfección de grandes espacios",
      },
      {
        id: 2,
        aplication: "Control de insectos voladores",
      },
      {
        id: 3,
        aplication: "Aplicación de sanitizantes",
      },
      {
        id: 4,
        aplication: "Tratamientos de choque",
      },
    ],
    coverImage: "trampa-tomahawk.jpeg",
    gallery: [
      {
        id: 1,
        url: "trampa-tomahawk.jpeg",
      },
    ],
    icon: SprayCan,
    stock: "disponible",
    isFeatured: true,
  },
  {
    id: 16,
    slug: "precision-health",
    name: "Precision Health",
    description: "Es un potente insecticida no sistémico con contacto y acción estomacal. Modulador de canal de sodio; penetra con facilidad el esqueleto externo, circulando con la hemolinfa hasta estacionarse en los axones neuronales, actuando sobre la bomba de sodio, abriéndolos y produciendo su despolarización anormal y letal.",
    shortDescription: "Es un potente insecticida no sistémico con contacto y acción estomacal.",
    category: "insumos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Concentrado Emulsionable",
        description: ""
      },
      {
        id: 2,
        title: "Insecticida de uso Doméstico, Industrial y Salud Pública",
        description: ""
      },
      {
        id: 3,
        title: "Grupo químico Piretroide",
        description: ""
      }
    ],
    applications: [
      {
        id: 1,
        aplication: "En equipo aspersor, usar 5 ml de PRECISION HEALTH por cada litro de agua."
      },
      {
        id: 2,
        aplication: "En mochila a motor, usar 20 ml de PRECISION HEALTH por cada litro de agua."
      },
      {
        id: 3,
        aplication: "Para termonebulizadores, usar de 20 ml de PRECISION HEALTH por litro de solvente (agua, diésel, o aceite vegetal)."
      },
    ],
    coverImage: "precision-health.png",
    gallery: [
      {
        id: 1,
        url: "precision-health.png"
      }
    ],
    icon: SprayCan,
    stock: "disponible",
    isFeatured: true
  },
  {
    id: 17,
    slug: "bomba-max",
    name: "Bomba Max",
    description: "Es un novedoso insecticida formulado como concentrado emulsionable a partir de la mezcla de dos ingredientes activos, la Alfacipermetrina, piretroide de última generación y el Piriproxyfen, insecticida regulador de crecimiento que controla selectivamente los estadios inmaduros de la plagas.",
    shortDescription: "Es un novedoso insecticida concentrado emulsionable",
    category: "insumos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Líquido traslúcido",
        description: ""
      },
      {
        id: 2,
        title: "Incompatible con sustancias alcalinas",
        description: ""
      },
      {
        id: 3,
        title: "Se comercializará en envases de polietileno Terftalato (PET) con tapón sello trilaminado de 3 capas",
        description: ""
      },
      {
        id: 4,
        title: "Presentaciones de 250 ml y 1 Litro",
        description: ""
      },
    ],
    applications: [
      {
        id: 1,
        aplication: "Motomochila aplica 20-25 ML/ agua o diesel"
      },
      {
        id: 2,
        aplication: "Aspersor aplica 10 ML / agua."
      }
    ],
    coverImage: "bomba-max-1.png",
    gallery: [
      {
        id: 1,
        url: "bomba-max-1.png"
      }
    ],
    icon: SprayCan,
    stock: "disponible",
    isFeatured: true
  },
  {
    id: 18,
    slug: "cipervox-ec",
    name: "Cipervox EC",
    description: "Es un poderoso insecticida formulado en emulsionable concentrado que combina dos poderosos ingredientes activos de distintos grupos químicos y mecanismos de acción. Se puede aplicar en ductos, elevadores, líneas de transportes, plantas de alimentos, almacenes en general y bodegas planas.",
    shortDescription: "Es un poderoso insecticida formulado en emulsionable concentrado.",
    category: "insumos",
    price: "Consultar",
    features: [
      {
        id: 1,
        title: "Concentrado Emulsionable",
        description: ""
      },
      {
        id: 2,
        title: "Grupo químico: piretroide + organofosforado",
        description: ""
      },
      {
        id: 3,
        title: "Evite el contacto con la piel y ojos",
        description: ""
      }
    ],
    applications: [
      {
        id: 1,
        aplication: "Cipervox 10ml + 1000ml de agua en moscas, cucarachas y mosquitos."
      },
      {
        id: 2,
        aplication: "Tóxico para contacto, ingestión e inhalación con hombres y animales."
      },
      {
        id: 3,
        aplication: "Aplica en uso de equipos aspersores, pulveerizadores y atomizadores."
      },
    ],
    coverImage: "cipervox-ec.jpeg",
    gallery: [
      {
        id: 1,
        url: "cipervox-ec.jpeg"
      }
    ],
    icon: SprayCan,
    stock: "disponible",
    isFeatured: true
  },
];

export const getProductById = (id: number): Product | undefined => {
  return ProductosData.find((product) => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return ProductosData.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return ProductosData.filter((product) => product.category === category);
};

export const getAllProductCategories = (): ProductCategories[] => {
  return [
    { key: "trampas", label: "Trampas" },
    { key: "equipos", label: "Equipos" },
    { key: "insumos", label: "Insumos" },
  ];
};

export const getFeaturedProducts = (): Product[] => {
  return ProductosData.filter((product) => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return ProductosData.filter((product) => product.isNew);
};

export const getAllProducts = (): Product[] => {
  return ProductosData;
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return ProductosData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
};

export const BeneficiosProductosData: ProductBenefit[] = [
  {
    id: 1,
    delay: 0.1,
    icon: BadgeCheck,
    beneficio: "Calidad Certificada",
    description:
      "Todos nuestros productos cumplen con los más altos estándares de calidad y están certificados por las autoridades competentes.",
  },
  {
    id: 2,
    delay: 0.2,
    icon: Leaf,
    beneficio: "Compromiso Ambiental",
    description:
      "Seleccionamos productos que minimizan el impacto ambiental sin comprometer la eficacia en el control de plagas y desinfección.",
  },
  {
    id: 3,
    delay: 0.3,
    icon: Microscope,
    beneficio: "Respaldo Técnico",
    description:
      "Nuestro equipo de profesionales brinda asesoría técnica para garantizar el uso correcto y seguro de todos nuestros productos.",
  },
  {
    id: 4,
    delay: 0.4,
    icon: Zap,
    beneficio: "Eficacia Comprobada",
    description:
      "Seleccionamos cuidadosamente cada producto para garantizar resultados óptimos en el control de plagas y saneamiento ambiental.",
  },
];
