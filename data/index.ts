import { IFeatureERP, IProcessDiagram, IVentajaNosotros, Service } from "@/interfaces";
import { ClientesProp, CounterProp, ServiceType, TestimoniosProp, ValoresProp, VentajasProp } from "@/types/Props";
import { Award, BarChart3, Bed, Bird, Bug, Building2, CheckCircle2, Database, Droplets, Facebook, FileCheck, FileText, Instagram, Lightbulb, Linkedin, Pipette, Rat, Shield, Smartphone, Sparkles, SprayCan, Trash2, Users, Utensils, Warehouse, Zap } from "lucide-react";
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

export const CounterData: CounterProp[]  = [ 
  {
    id: 1,
    label: 'Clientes Satisfechos',
    end: 500,
    lineRight: true,
    lineRightMobile: true
  },
  {
    id: 2,
    label: 'Servicios Realizados',
    end: 1500,
    lineRight: true,
    lineRightMobile: true
  },
  {
    id: 3,
    label: 'Empresas Confían en Nosotros',
    end: 50,
    lineRight: true,
    lineRightMobile: true
  },
  {
    id: 4,
    label: 'Años de Experiencia',
    end: 5,
    lineRight: true,
    lineRightMobile: true
  },
]

export const VentajasData: VentajasProp[] = [
  {
    id: 1,
    title: 'Profesionales Especializados',
    description: 'Contamos cn un equipo de profesionales con experiencia comproada en el sector de saneamiento ambiental.',
    delay: 0.1,
    icon: Users
  },
  {
    id: 2,
    title: 'Procesos estandarizados',
    description: 'Aplicamos métodos comprobados y replicables para cada proceso, aumentando el porcentaje de éxito de cada servicio.',
    delay: 0.2,
    icon: Shield
  },
  {
    id: 3,
    title: 'Medidas de Bioseguridad',
    description: 'Utiizamos equipos de bioseguridad en todo momento para eliminar el contacto directo con fuentes de contagio.',
    delay: 0.3,
    icon: Sparkles
  },
  {
    id: 4,
    title: 'Equipos de Ata Tecnología',
    description: 'Trabajamos con equipos nuevos, de alta tecnología y eficacia para garantizar resultados óptimos.',
    delay: 0.4,
    icon: Zap
  },
  {
    id: 5,
    title: 'Insumos Certificados',
    description: 'Utilizamos insumos químicos biodegradables autorizados y certificados por la DIGESA y GERESA.',
    delay: 0.5,
    icon: CheckCircle2
  },
  {
    id: 6,
    title: 'Monitoreo y Seguimiento',
    description: 'Realizamos un control sistematizados de las visitas y programas de inactivación para garantizar resultados duraderos.',
    delay: 0.6,
    icon: FileText
  },

]

export const TestimoniosData: TestimoniosProp[] = [
  {
    id: 1,
    author: 'Carlos Rodriguez',
    job: 'Gerente de Operaciones',
    avatar: 'https://placehold.co/120',
    testimonial: 'Excelente servicio de fumigación. El personal fue muy profesional y el resultado fue inmediato. Recomiendo ampliamente a ProAmbiente.',
    stars: 5
  },
  {
    id: 2,
    author: 'María Sanchez',
    job: 'Administradora',
    avatar: 'https://placehold.co/120',
    testimonial: 'Contratamosa ProAmbiente para la limpieza de nuestras oficinas y el resultado fue impecable. El equipo es muy profesional y cumplen con todos los protocolos.',
    stars: 3.5
  },
  {
    id: 3,
    author: 'Jorge Mendoza',
    job: 'Gerente de Restaurante',
    avatar: 'https://placehold.co/120',
    testimonial: 'Llevamos trabajando con ProAmbiente más de 2 años y siempre han sido muy profesionales. Su servicio de control de plagas es excelente y su personal muy capacitado.',
    stars: 2.8
  },
]

export const ClientesData: ClientesProp[] = [
  {
    id: 1,
    name: '7 Sopas',
    slug: 'logo-7-sopas',
    ext: "jpg"
  },
  {
    id: 2,
    name: 'Aguafiel',
    slug: 'logo-aguafiel',
    ext: "jpg"
  },
  {
    id: 3,
    name: 'BCP',
    slug: 'logo-bcp',
    ext: "jpg"
  },
  {
    id: 4,
    name: 'Casinelli',
    slug: 'logo-casinelli',
    ext: "jpg"
  },
  {
    id: 5,
    name: 'Comercial RC',
    slug: 'logo-comercial-rc',
    ext: "jpg"
  },
  {
    id: 6,
    name: 'Cuatrero',
    slug: 'logo-cuatrero',
    ext: "jpg"
  },
  {
    id: 7,
    name: 'Entel',
    slug: 'logo-entel',
    ext: "jpg"
  },
  {
    id: 8,
    name: 'Escalabs',
    slug: 'logo-escalabs',
    ext: "jpg"
  },
  {
    id: 9,
    name: 'Estampida',
    slug: 'logo-estampida',
    ext: "jpg"
  },
  {
    id: 10,
    name: 'Eurotubo',
    slug: 'logo-eurotubo',
    ext: "jpg"
  },
  {
    id: 11,
    name: 'Fameca',
    slug: 'logo-fameca',
    ext: "jpg"
  },
  {
    id: 12,
    name: 'Ferreyros',
    slug: 'logo-ferreyros',
    ext: "jpg"
  },
  {
    id: 13,
    name: 'Gat',
    slug: 'logo-gat',
    ext: "jpg"
  },
  {
    id: 14,
    name: 'Golf y Country Club',
    slug: 'logo-golf-country',
    ext: "jpg"
  },
  {
    id: 15,
    name: 'La Lucha Sanguchería',
    slug: 'logo-la-lucha',
    ext: "jpg"
  },
  {
    id: 16,
    name: 'El Palmar',
    slug: 'logo-palmar',
    ext: "jpg"
  },
  {
    id: 17,
    name: 'San Jacinto',
    slug: 'logo-la-lucha',
    ext: "jpg"
  },
  {
    id: 18,
    name: 'Silvestre',
    slug: 'logo-silvestre',
    ext: "jpg"
  },
  {
    id: 19,
    name: 'Transpesa',
    slug: 'logo-transpesa',
    ext: "jpg"
  },
  {
    id: 20,
    name: 'Vitas',
    slug: 'logo-vitas',
    ext: "jpg"
  },
]

export const ValoresData: ValoresProp[] = [
  {
    id: 1,
    valor: 'Responsabilidad'
  },
  {
    id: 2,
    valor: 'Puntualidad'
  },
  {
    id: 3,
    valor: 'Seguridad'
  },
  {
    id: 4,
    valor: 'Higiene'
  },
  {
    id: 5,
    valor: 'Transparencia'
  },
  {
    id: 6,
    valor: 'Pasión'
  },
]

export const StepProcessDiagram: IProcessDiagram[] = [
  {
    id: 1,
    key: 'professionals',
    title: 'Profesionales Especializados',
    icon: Users,
    description: 'Nuestro equipo está formado por profesionales con amplia experiencia en el sector de saneamiento ambiental, capacitados constantemente para ofrecer el mejor servicio.',
    position: {
      x:'10%',
      y: '20%'
    }
  },
  {
    id: 2,
    key: 'certifications',
    title: 'Certificaciones HODELPE',
    icon: Award,
    description: 'Contamos con certificaciones homologadas de HODELPE que garantizan la calidad y seguridad de nuestros servicios, cumpliendo con los ás altos estándares del sector.',
    position: {
      x: '50%',
      y: '10%'
    }
  },
  {
    id: 3,
    key: 'erp',
    title: 'ERP Ruppiest',
    icon: Database,
    description: 'Implementamos el innovador sistema ERP Ruppiest que nos permite optimizar procesos, mejorar la gestión de recursos y ofrecer un servicio más eficiente a nuestros clientes.',
    position: {
      x:'90%',
      y: '20%'
    }
  },
  {
    id: 4,
    key: 'monitoring',
    title: 'Monitoreo en Tiempo Real',
    icon: BarChart3,
    description: 'Gracias a nuestro sistema ERP, realizamos un seguimiento en tiempo real de todos nuestros servicios, garantizando resultados óptimos y respuesta inmediata ante cualquier incidencia.',
    position: {
      x:'90%',
      y: '80%'
    }
  },
  {
    id: 5,
    key: 'mobile',
    title: 'Aplicación Móvil',
    icon: Smartphone,
    description: 'Nuestros técnicos utilizan una aplicación móvil conectada al ERP Ruppiest para registrar cada servicio, documentar con fotografias y generar informes detallados para nuestros clientes.',
    position: {
      x:'50%',
      y: '90%'
    }
  },
  {
    id: 6,
    key: 'reports',
    title: 'Informes Detallados',
    icon: FileCheck,
    description: 'Generamos informes detallados de cada servicio, incluyendo fotografías, productos utilizados y recomendaciones para mantener los espacios libres de plagas a largo plazo.',
    position: {
      x:'10%',
      y: '80%'
    }
  },
]

export const FeaturesData: IFeatureERP[] = [
  {
    id: 1,
    title: 'Gestión Integral',
    description: 'Control completo de todos los procesos operativos, desde la programación de servicioshasta la generación de informes.',
    icon: Database
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
]

export const VentajasNosotrosData: IVentajaNosotros[] = [
  {
    id: 1,
    title: 'Experiencia Comprobada',
    description: 'Contamos con más de 5 años de experiencia en el sector de saneamiento ambiental, brindando soluciones efectivas a nuestros clientes.',
    delay: 0.1,
    icon: Users
  },
  {
    id: 2,
    title: 'Insumos Biodegradables',
    description: 'Utilizamos insumos biodegradables aprobados por el MINSA, garantizando la seguridad de nuestros clientes y el cuidado del medio ambiente.',
    delay: 0.2,
    icon: Zap
  },
  {
    id: 3,
    title: 'Asesoría Gratuita',
    description: 'Ofrecemos asesoría gratuita para identificar la necesidad del cliente, brindando soluciones personalizadas para cada situación.',
    delay: 0.3,
    icon: CheckCircle2
  },
  {
    id: 4,
    title: 'Equipos de Alta Tecnología',
    description: 'Contamos con equipos de fumigación de alta tecnología, lo que nos permite ofrecer servicios más eficientes y con mejores resultados.',
    delay: 0.4,
    icon: Sparkles
  }
]

export const ServiciosData: Service[] = [
  {
    id: 1,
    slug: 'desratizacion',
    title: 'Desratización',
    shortDescription: 'Control y eliminació de roedores',
    fullDescription: 'Nuestro servicio de desratización está diseñado para eliminar de manera efectiva y segura las infestaciones de roedores en hogares, empresas e industrias. Utilizamos métodos avanzados y productos certificados que garantizan resultados duraderos sin comprometer la seguridad de las personas, mascotas o el medio ambiente.',
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
        description: "Inspección completa del área para identificar la magnitud del problema y sus causas.",
      },
      {
        id: 2,
        title: "Plan de acción",
        description: "Diseño de estrategia personalizada según el tipo de plaga y características del espacio.",
      },
      {
        id: 3,
        title: "Implementación",
        description: "Aplicación de tratamientos utilizando productos certificados y técnicas avanzadas.",
      },
      {
        id: 4,
        title: "Seguimiento",
        description: "Visitas periódicas para evaluar resultados y realizar ajustes si es necesario.",
      },
      {
        id: 5,
        title: "Prevención",
        description: "Recomendaciones y medidas para prevenir futuras infestaciones.",
      }
    ],
    benefits: [
      {
        id: 1,
        title: "Eliminación efectiva de roedores"
      },
      {
        id: 2,
        title: "Prevención de enfermedades transmitidas por roedores"
      },
      {
        id: 3,
        title: "Protección de la infraestructura y bienes"
      },
      {
        id: 4,
        title: "Cumplimiento de normativas sanitarias"
      },
      {
        id: 5,
        title: "Ambiente más saludable y seguro"
      },
    ],
    coverImage: '',
    galleryImages: [
      {
        id: 1,
        url: '',
      }
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
        question: "¿Los productos utilizados son seguros para niños y mascotas?",
        answer:
          "Sí, utilizamos productos certificados y aplicamos métodos que minimizan el riesgo para personas y mascotas, colocando los cebos en áreas inaccesibles para ellos.",
      },
      {
        id:3,
        question: "¿Con qué frecuencia se debe realizar este servicio?",
        answer:
          "Recomendamos tratamientos trimestrales para prevención, pero la frecuencia puede ajustarse según el nivel de riesgo y las características del lugar.",
      }
    ],
    delay: 0.1
  },
  {
    id: 2,
    slug: "desinsectacion",
    title: "Desinsectación",
    shortDescription: "Control y eliminación de insectos",
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
        description: "Aplicamos soluciones adaptadas a cada tipo de insecto y entorno para máxima efectividad.",
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
        description: "Combinamos métodos químicos, físicos y biológicos para un control completo y duradero.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Diagnóstico",
        description: "Identificación del tipo de insectos y evaluación del nivel de infestación.",
      },
      {
        id: 2,
        title: "Planificación",
        description: "Desarrollo de estrategia específica según el tipo de insecto y características del lugar.",
      },
      {
        id: 3,
        title: "Aplicación",
        description: "Tratamiento con técnicas y productos seleccionados específicamente para cada caso.",
      },
      {
        id: 4,
        title: "Monitoreo",
        description: "Seguimiento para verificar la efectividad del tratamiento y realizar ajustes si es necesario.",
      },
      {
        id: 5,
        title: "Mantenimiento",
        description: "Programa de control preventivo para evitar reinfestaciones.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Eliminación efectiva de insectos plaga'
      },
      {
        id: 2,
        title: 'Prevención de enfermedades transmitidas por insectos'
      },
      {
        id: 3,
        title: 'Protección de alimentos e instalaciones'
      },
      {
        id: 4,
        title: 'Mejora de la calidad de vida y confort'
      },
      {
        id: 5,
        title: 'Cumplimiento de normativas sanitarias'
      },
    ],
    coverImage: "/service-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
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
    delay: 0.2
  },
  {
    id: 3,
    slug: "desinfeccion",
    title: "Desinfección",
    shortDescription: "Eliminación de microorganismos",
    fullDescription:
      "Nuestro servicio de desinfección elimina virus, bacterias, hongos y otros microorganismos patógenos de superficies y ambientes. Utilizamos desinfectantes de amplio espectro y equipos de última generación para garantizar la higienización completa de espacios residenciales, comerciales e industriales, creando entornos más saludables y seguros.",
    category: "saneamiento",
    icon: SprayCan,
    features: [
      {
        id: 1,
        title: "Desinfección profunda",
        description: "Eliminamos microorganismos patógenos de superficies, equipos y ambientes.",
      },
      {
        id: 2,
        title: "Tecnología avanzada",
        description: "Utilizamos nebulizadores ULV y equipos especializados para una aplicación uniforme y efectiva.",
      },
      {
        id: 3,
        title: "Productos certificados",
        description: "Empleamos desinfectantes de amplio espectro aprobados por autoridades sanitarias.",
      },
      {
        id: 4,
        title: "Protocolos específicos",
        description: "Adaptamos nuestros procedimientos según el tipo de espacio y sus necesidades particulares.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description: "Análisis del espacio y determinación de necesidades específicas de desinfección.",
      },
      {
        id: 2,
        title: "Preparación",
        description: "Acondicionamiento del área y selección de productos y equipos adecuados.",
      },
      {
        id: 3,
        title: "Aplicación",
        description: "Desinfección mediante nebulización, pulverización o limpieza manual según el caso.",
      },
      {
        id: 4,
        title: "Verificación",
        description: "Comprobación de la efectividad del tratamiento mediante métodos apropiados.",
      },
      {
        id: 5,
        title: "Certificación",
        description: "Entrega de certificado de desinfección para fines sanitarios y regulatorios.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Reducción significativa de microorganismos patógenos'
      },
      {
        id: 2,
        title: 'Prevención de enfermedades infecciosas'
      },
      {
        id: 3,
        title: 'Creación de ambientes más saludables'
      },
      {
        id: 4,
        title: 'Cumplimiento de protocolos sanitarios'
      },
      {
        id: 5,
        title: 'Mayor seguridad para ocupantes y visitantes'
      },
    ],
    coverImage: "/service-3.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
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
        question: "¿Es necesario evacuar completamente el área durante la desinfección?",
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
    delay: 0.3
  },
  {
    id: 4,
    slug: "limpieza-oficinas",
    title: "Limpieza de Oficinas",
    shortDescription: "Servicio profesional para empresas",
    fullDescription:
      "Ofrecemos un servicio integral de limpieza y mantenimiento para oficinas y espacios de trabajo. Nuestro equipo profesional se encarga de mantener impecables todas las áreas, desde escritorios y salas de reuniones hasta baños y áreas comunes, utilizando productos y técnicas que garantizan un ambiente laboral limpio, ordenado y saludable.",
    category: "auxiliares",
    icon: Building2,
    features: [
      {
        id: 1,
        title: "Limpieza integral",
        description: "Cubrimos todas las áreas de la oficina, desde espacios de trabajo hasta zonas comunes.",
      },
      {
        id: 2,
        title: "Personal capacitado",
        description: "Nuestro equipo está entrenado en técnicas profesionales de limpieza y protocolos de seguridad.",
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
        description: "Adaptamos nuestros servicios a sus horarios para no interrumpir las actividades laborales.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación inicial",
        description: "Análisis de las necesidades específicas de limpieza y frecuencia requerida.",
      },
      {
        id: 2,
        title: "Planificación",
        description: "Desarrollo de un programa de limpieza adaptado a las características de la oficina.",
      },
      {
        id: 3,
        title: "Implementación",
        description: "Ejecución de tareas de limpieza según el cronograma establecido.",
      },
      {
        id: 4,
        title: "Supervisión",
        description: "Control de calidad para garantizar que se cumplan los estándares establecidos.",
      },
      {
        id: 5,
        title: "Mejora continua",
        description: "Evaluación periódica y ajustes para optimizar el servicio.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Ambiente de trabajo más saludable y productivo'
      },
      {
        id: 2,
        title: 'Reducción de alergias y enfermedades respiratorias'
      },
      {
        id: 3,
        title: 'Mejor imagen corporativa ante clientes y visitantes'
      },
      {
        id: 4,
        title: 'Mayor durabilidad de mobiliario y equipos'
      },
      {
        id: 5,
        title: 'Cumplimiento de normativas de higiene y seguridad laboral'
      },
    ],
    coverImage: "/limpieza-1.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Qué incluye el servicio de limpieza de oficinas?",
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
    ],
    delay: 0.4
  },
  {
    id: 5,
    slug: "limpieza-fachadas",
    title: "Limpieza de Fachadas",
    shortDescription: "Restauración de imagen exterior",
    fullDescription:
      "Nuestro servicio especializado de limpieza de fachadas devuelve el aspecto original a los exteriores de edificios y negocios. Eliminamos suciedad, polvo, contaminación, grafitis y manchas utilizando técnicas específicas para cada tipo de superficie, ya sea vidrio, concreto, ladrillo, metal o piedra, mejorando significativamente la apariencia e imagen de su propiedad.",
    category: "auxiliares",
    icon: Building2,
    features: [
      {
        id: 1,
        title: "Limpieza especializada",
        description: "Técnicas adaptadas a cada tipo de material y superficie para resultados óptimos.",
      },
      {
        id:2,
        title: "Equipos profesionales",
        description: "Utilizamos hidrolavadoras, plataformas elevadoras y herramientas especializadas.",
      },
      {
        id:3,
        title: "Productos no abrasivos",
        description: "Empleamos limpiadores que eliminan la suciedad sin dañar los materiales de la fachada.",
      },
      {
        id:4,
        title: "Tratamientos protectores",
        description: "Aplicamos selladores y protectores que prolongan la limpieza y protegen la superficie.",
      },
    ],
    process: [
      {
        id:1,
        title: "Inspección",
        description: "Evaluación del tipo de superficie, nivel de suciedad y accesibilidad.",
      },
      {
        id:2,
        title: "Planificación",
        description: "Selección de técnicas, productos y equipos adecuados para cada caso.",
      },
      {
        id:3,
        title: "Preparación",
        description: "Protección de áreas adyacentes y elementos que no deben ser mojados o limpiados.",
      },
      {
        id:4,
        title: "Limpieza",
        description: "Aplicación de productos y técnicas de limpieza según el plan establecido.",
      },
      {
        id:5,
        title: "Protección",
        description: "Aplicación opcional de tratamientos protectores para prolongar los resultados.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Mejora significativa de la imagen exterior'
      },
      {
        id: 2,
        title: 'Aumento del valor percibido de la propiedad'
      },
      {
        id: 3,
        title: 'Prevención del deterioro de materiales'
      },
      {
        id: 4,
        title: 'Eliminación de agentes contaminantes'
      },
      {
        id: 5,
        title: 'Mayor durabilidad de la fachada'
      },
    ],
    coverImage: "/limpieza-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿La limpieza de fachadas puede dañar los materiales?",
        answer:
          "No cuando se realiza correctamente. Utilizamos técnicas y productos específicos para cada tipo de material, ajustando la presión y temperatura del agua para evitar daños.",
      },
      {
        id: 2,
        question: "¿Cuánto tiempo toma limpiar una fachada?",
        answer:
          "Depende del tamaño, altura, accesibilidad y nivel de suciedad. Una fachada pequeña puede tomar 1 día, mientras que edificios grandes pueden requerir varios días.",
      },
      {
        id: 3,
        question: "¿Con qué frecuencia se debe limpiar una fachada?",
        answer:
          "Recomendamos una limpieza profesional anual o bianual, dependiendo de la exposición a contaminación, clima y tipo de superficie.",
      },
    ],
    delay: 0.5
  },
  {
    id: 6,
    slug: "limpieza-tanques",
    title: "Limpieza de Tanques",
    shortDescription: "Mantenimiento de cisternas y reservorios",
    fullDescription:
      "Nuestro servicio de limpieza y desinfección de tanques de agua garantiza que su suministro de agua se mantenga limpio y seguro. Eliminamos sedimentos, algas, bacterias y otros contaminantes que pueden acumularse en cisternas y reservorios, cumpliendo con todas las normativas sanitarias vigentes y proporcionando certificados de limpieza.",
    category: "auxiliares",
    icon: Droplets,
    features: [
      {
        id: 1,
        title: "Limpieza completa",
        description: "Eliminación de sedimentos, lodos, algas y todo tipo de contaminantes físicos.",
      },
      {
        id: 2,
        title: "Desinfección profesional",
        description: "Aplicación de desinfectantes aprobados para uso en sistemas de agua potable.",
      },
      {
        id: 3,
        title: "Inspección estructural",
        description: "Revisión del estado del tanque para detectar fisuras, filtraciones u otros problemas.",
      },
      {
        id: 4,
        title: "Certificación sanitaria",
        description: "Entrega de certificado de limpieza y desinfección para fines regulatorios.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Vaciado",
        description: "Drenaje controlado del agua preservando la mayor cantidad posible.",
      },
      {
        id: 2,
        title: "Limpieza física",
        description: "Remoción manual y mecánica de sedimentos y residuos acumulados.",
      },
      {
        id: 3,
        title: "Lavado",
        description: "Limpieza de paredes, piso y techo del tanque con equipos especializados.",
      },
      {
        id: 4,
        title: "Desinfección",
        description: "Aplicación de desinfectantes específicos para sistemas de agua potable.",
      },
      {
        id: 5,
        title: "Enjuague y llenado",
        description: "Eliminación de residuos de desinfectante y llenado del tanque.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Agua más limpia y segura para consumo'
      },
      {
        id: 2,
        title: 'Prevención de enfermedades transmitidas por agua contaminada'
      },
      {
        id: 3,
        title: 'Eliminación de olores y sabores desagradables'
      },
      {
        id: 4,
        title: 'Cumplimiento de normativas sanitarias'
      },
      {
        id: 5,
        title: 'Mayor vida útil del tanque y sistemas de distribución'
      },
    ],
    coverImage: "/limpieza-3.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
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
        question: "¿Cuánto tiempo debo esperar para usar el agua después de la limpieza?",
        answer:
          "Generalmente el agua está disponible para uso inmediato después del llenado del tanque. Sin embargo, para consumo directo recomendamos esperar 2-3 horas para asegurar que el cloro residual se haya estabilizado.",
      },
      {
        id: 3,
        question: "¿Es necesario vaciar completamente el tanque para limpiarlo?",
        answer:
          "Sí, para realizar una limpieza efectiva es necesario vaciar completamente el tanque para poder acceder a todas las superficies y eliminar todos los sedimentos acumulados.",
      },
    ],
    delay: 0.6
  },
  {
    id: 7,
    slug: "control-aviar",
    title: "Control Aviar",
    shortDescription: "Soluciones para el control de aves",
    fullDescription:
      "Ofrecemos soluciones efectivas y humanitarias para el control de aves en edificios y estructuras. Implementamos sistemas que impiden la anidación y percha de aves sin causarles daño, protegiendo su propiedad de los problemas asociados con la presencia de aves como palomas, gaviotas y otras especies urbanas.",
    category: "auxiliares",
    icon: Bird,
    features: [
      {
        id: 1,
        title: "Métodos no letales",
        description: "Utilizamos exclusivamente sistemas disuasivos que no dañan a las aves.",
      },
      {
        id: 2,
        title: "Soluciones permanentes",
        description: "Instalamos sistemas duraderos que ofrecen protección a largo plazo.",
      },
      {
        id: 3,
        title: "Adaptación arquitectónica",
        description: "Diseñamos soluciones que se integran estéticamente con la estructura del edificio.",
      },
      {
        id: 4,
        title: "Cumplimiento normativo",
        description: "Nuestros métodos cumplen con las regulaciones de protección animal y medio ambiente.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description: "Análisis del problema, identificación de especies y patrones de comportamiento.",
      },
      {
        id: 2,
        title: "Diseño",
        description: "Desarrollo de solución personalizada según las características del edificio y tipo de ave.",
      },
      {
        id: 3,
        title: "Limpieza",
        description: "Remoción de nidos, excrementos y desinfección de áreas afectadas.",
      },
      {
        id: 4,
        title: "Instalación",
        description: "Montaje de sistemas disuasivos seleccionados (púas, redes, cables, etc.).",
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
        title: 'Prevención de daños estructurales causados por excrementos'
      },
      {
        id: 2,
        title: 'Eliminación de riesgos sanitarios asociados a las aves'
      },
      {
        id: 3,
        title: 'Protección de fachadas, techos y equipos'
      },
      {
        id: 4,
        title: 'Solución estética que no afecta la apariencia del edificio'
      },
      {
        id: 5,
        title: 'Reducción de costos de limpieza y mantenimiento'
      },
    ],
    coverImage: "/auxiliar-1.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
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
        question: "¿Cuánto tiempo dura la instalación de un sistema de control aviar?",
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
    delay: 0.7
  },
  {
    id: 8,
    slug: "lamparas-insectocutoras",
    title: "Lámparas Insectocutoras",
    shortDescription: "Control de insectos voladores",
    fullDescription:
      "Instalamos y mantenemos lámparas insectocutoras de alta eficiencia para el control de insectos voladores en interiores. Estos dispositivos atraen y eliminan moscas, mosquitos, polillas y otros insectos voladores de manera higiénica y discreta, siendo ideales para restaurantes, cocinas industriales, áreas de procesamiento de alimentos y otros espacios donde la presencia de insectos es inaceptable.",
    category: "auxiliares",
    icon: Lightbulb,
    features: [
      {
        id: 1,
        title: "Alta efectividad",
        description: "Capturan insectos voladores las 24 horas sin usar productos químicos.",
      },
      {
        id: 2,
        title: "Diseño higiénico",
        description: "Los insectos quedan atrapados en placas adhesivas o electrocutados sin contaminar el ambiente.",
      },
      {
        id: 3,
        title: "Bajo consumo",
        description: "Utilizan tubos UV de bajo consumo energético y larga duración.",
      },
      {
        id: 4,
        title: "Instalación estratégica",
        description: "Ubicamos las lámparas en puntos óptimos para maximizar su eficacia.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description: "Análisis del espacio para determinar número y tipo de lámparas necesarias.",
      },
      {
        id: 2,
        title: "Selección",
        description: "Recomendación de modelos adecuados según el ambiente y nivel de infestación.",
      },
      {
        id: 3,
        title: "Instalación",
        description: "Montaje de lámparas en ubicaciones estratégicas para máxima efectividad.",
      },
      {
        id: 4,
        title: "Mantenimiento",
        description: "Servicio periódico para cambio de tubos UV y placas adhesivas.",
      },
      {
        id: 5,
        title: "Monitoreo",
        description: "Seguimiento de efectividad y ajustes de ubicación si es necesario.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Control continuo de insectos voladores'
      },
      {
        id: 2,
        title: 'Método higiénico sin productos químicos'
      },
      {
        id: 3,
        title: 'Cumplimiento de normativas sanitarias'
      },
      {
        id: 4,
        title: 'Mejora de la imagen ante clientes e inspectores'
      },
      {
        id: 5,
        title: 'Reducción de riesgos de contaminación de alimentos'
      },
    ],
    coverImage: "/auxiliar-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se deben cambiar los tubos UV y las placas adhesivas?",
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
    delay: 0.8
  },
  {
    id: 9,
    slug: "limpieza-campanas",
    title: "Limpieza de Campanas",
    shortDescription: "Mantenimiento de campanas extractoras",
    fullDescription:
      "Nuestro servicio especializado de limpieza de campanas extractoras y sistemas de ventilación elimina la acumulación de grasa y residuos en cocinas comerciales e industriales. Este mantenimiento es crucial para prevenir incendios, mejorar la eficiencia de los equipos, cumplir con normativas de seguridad y mantener un ambiente de trabajo saludable.",
    category: "auxiliares",
    icon: Utensils,
    features: [
      {
        id: 1,
        title: "Limpieza profunda",
        description: "Eliminación completa de grasa y residuos de toda la campana y ductos.",
      },
      {
        id: 2,
        title: "Equipos especializados",
        description: "Utilizamos herramientas y productos específicos para sistemas de extracción.",
      },
      {
        id: 3,
        title: "Certificación",
        description: "Proporcionamos certificado de limpieza para cumplimiento de normativas.",
      },
      {
        id: 4,
        title: "Servicio integral",
        description: "Limpiamos campanas, filtros, ductos, extractores y sistemas completos.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Inspección",
        description: "Evaluación del estado actual y nivel de acumulación de grasa.",
      },
      {
        id: 2,
        title: "Protección",
        description: "Cubrimiento de equipos y superficies circundantes para evitar daños.",
      },
      {
        id: 3,
        title: "Desmontaje",
        description: "Remoción de filtros y componentes accesibles para limpieza individual.",
      },
      {
        id: 4,
        title: "Limpieza",
        description: "Aplicación de desengrasantes y limpieza mecánica de todas las superficies.",
      },
      {
        id: 5,
        title: "Remontaje",
        description: "Instalación de componentes limpios y verificación de funcionamiento.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Prevención de incendios en cocinas'
      },
      {
        id: 2,
        title: 'Mejora de la eficiencia de extracción'
      },
      {
        id: 3,
        title: 'Cumplimiento de normativas de seguridad'
      },
      {
        id: 4,
        title: 'Ambiente de trabajo más limpio y saludable'
      },
      {
        id: 5,
        title: 'Mayor vida útil de los equipos de ventilación'
      },
    ],
    coverImage: "/auxiliar-3.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe limpiar una campana extractora comercial?",
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
    delay: 0.9
  },
  {
    id: 10,
    slug: "limpieza-pozos-septicos",
    title: "Limpieza de Pozos Sépticos",
    shortDescription: "Mantenimiento preventivo y correctivo",
    fullDescription:
      "Ofrecemos un servicio completo de limpieza, mantenimiento y desatoro de pozos sépticos, cajas de registro y sistemas de drenaje. Utilizamos equipos de succión al vacío y técnicas especializadas para eliminar lodos, sedimentos y obstrucciones, previniendo desbordamientos, malos olores y problemas sanitarios.",
    category: "auxiliares",
    icon: Trash2,
    features: [
      {
        id: 1,
        title: "Succión potente",
        description: "Equipos de alta capacidad para extracción eficiente de residuos y lodos.",
      },
      {
        id: 2,
        title: "Desatoro profesional",
        description: "Eliminación de obstrucciones en tuberías y sistemas de drenaje.",
      },
      {
        id: 3,
        title: "Inspección técnica",
        description: "Evaluación del estado del sistema para identificar problemas potenciales.",
      },
      {
        id: 4,
        title: "Disposición responsable",
        description: "Gestión adecuada de residuos en cumplimiento con normativas ambientales.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Diagnóstico",
        description: "Evaluación del estado del pozo séptico y nivel de llenado.",
      },
      {
        id: 2,
        title: "Acceso",
        description: "Localización y apertura de tapas de inspección y accesos.",
      },
      {
        id: 3,
        title: "Bombeo",
        description: "Extracción de líquidos, lodos y residuos mediante equipos de succión.",
      },
      {
        id: 4,
        title: "Limpieza",
        description: "Lavado de paredes y componentes del sistema cuando es posible.",
      },
      {
        id: 5,
        title: "Verificación",
        description: "Comprobación del funcionamiento correcto después de la limpieza.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Prevención de desbordamientos y filtraciones'
      },
      {
        id: 2,
        title: 'Eliminación de malos olores'
      },
      {
        id: 3,
        title: 'Prolongación de la vida útil del sistema séptico'
      },
      {
        id: 4,
        title: 'Prevención de problemas sanitarios y ambientales'
      },
      {
        id: 5,
        title: 'Cumplimiento de normativas de saneamiento'
      },
    ],
    coverImage: "/adicional-1.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
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
        question: "¿Cuáles son las señales de que un pozo séptico necesita limpieza?",
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
    delay: 1.0
  },
  {
    id: 11,
    slug: "limpieza-trampas-grasa",
    title: "Limpieza de Trampas de Grasa",
    shortDescription: "Mantenimiento para restaurantes y cocinas",
    fullDescription:
      "Nuestro servicio especializado de limpieza de trampas de grasa previene obstrucciones en sistemas de drenaje de restaurantes y cocinas industriales. Removemos la acumulación de grasas, aceites y sólidos que pueden causar bloqueos, malos olores y problemas con las autoridades sanitarias, ayudando a mantener sus instalaciones funcionando correctamente.",
    category: "auxiliares",
    icon: Pipette,
    features: [
      {
        id: 1,
        title: "Limpieza completa",
        description: "Eliminación total de grasas, aceites y sólidos acumulados.",
      },
      {
        id: 2,
        title: "Equipos especializados",
        description: "Utilizamos bombas de succión y herramientas específicas para este servicio.",
      },
      {
        id: 3,
        title: "Gestión de residuos",
        description: "Disposición adecuada de los desechos en cumplimiento con normativas ambientales.",
      },
      {
        id: 4,
        title: "Documentación",
        description: "Proporcionamos certificados de mantenimiento para cumplimiento regulatorio.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Inspección",
        description: "Evaluación del estado y nivel de llenado de la trampa de grasa.",
      },
      {
        id: 2,
        title: "Apertura",
        description: "Remoción segura de tapas y accesos a la trampa.",
      },
      {
        id: 3,
        title: "Extracción",
        description: "Bombeo y remoción de grasas, aceites y sólidos acumulados.",
      },
      {
        id: 4,
        title: "Limpieza",
        description: "Lavado de paredes, deflectores y componentes de la trampa.",
      },
      {
        id: 5,
        title: "Verificación",
        description: "Comprobación del funcionamiento correcto después de la limpieza.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Prevención de obstrucciones en tuberías'
      },
      {
        id: 2,
        title: 'Eliminación de malos olores'
      },
      {
        id: 3,
        title: 'Cumplimiento de normativas sanitarias y ambientales'
      },
      {
        id: 4,
        title: 'Prevención de multas por incumplimiento'
      },
      {
        id: 5,
        title: 'Prolongación de la vida útil del sistema de drenaje'
      },
    ],
    coverImage: "/adicional-2.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
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
        question: "¿Qué problemas puede causar una trampa de grasa sin mantenimiento?",
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
    delay: 1.1
  },
  {
    id: 12,
    slug: "limpieza-colchones",
    title: "Limpieza de Colchones",
    shortDescription: "Eliminación de ácaros y alérgenos",
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
        description: "Tratamiento con vapor seco a alta temperatura que elimina bacterias y hongos.",
      },
      {
        id: 3,
        title: "Tratamiento anti-ácaros",
        description: "Aplicación de productos específicos que previenen la proliferación de ácaros.",
      },
      {
        id: 4,
        title: "Eliminación de olores",
        description: "Neutralización de olores mediante tratamientos especializados.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Inspección",
        description: "Evaluación del estado del colchón y tipo de tratamiento necesario.",
      },
      {
        id: 2,
        title: "Aspirado profundo",
        description: "Eliminación de polvo, ácaros y partículas con equipos de alta potencia.",
      },
      {
        id: 3,
        title: "Tratamiento de manchas",
        description: "Aplicación de productos específicos para eliminar manchas visibles.",
      },
      {
        id: 4,
        title: "Desinfección",
        description: "Aplicación de vapor seco a alta temperatura para eliminar microorganismos.",
      },
      {
        id: 5,
        title: "Protección",
        description: "Aplicación opcional de tratamiento protector anti-ácaros y anti-manchas.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Reducción significativa de alérgenos'
      },
      {
        id: 2,
        title: 'Mejora de la calidad del sueño'
      },
      {
        id: 3,
        title: 'Prevención de problemas respiratorios y alergias'
      },
      {
        id: 4,
        title: 'Eliminación de olores desagradables'
      },
      {
        id: 5,
        title: 'Prolongación de la vida útil del colchón'
      },
    ],
    coverImage: "/adicional-4.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe limpiar profesionalmente un colchón?",
        answer:
          "Recomendamos una limpieza profesional cada 6-12 meses. Sin embargo, personas con alergias, asma o problemas respiratorios pueden beneficiarse de limpiezas más frecuentes, cada 3-6 meses.",
      },
      {
        id: 2,
        question: "¿Cuánto tiempo tarda en secarse el colchón después de la limpieza?",
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
    delay: 1.2
  },
  {
    id: 13,
    slug: "limpieza-sumideros",
    title: "Limpieza de Red de Sumideros",
    shortDescription: "Prevención de inundaciones y problemas de drenaje",
    fullDescription:
      "Nuestro servicio especializado de limpieza y mantenimiento de redes de sumideros y sistemas de drenaje pluvial previene inundaciones y problemas de acumulación de agua. Eliminamos sedimentos, residuos y obstrucciones que pueden bloquear el flujo normal del agua, garantizando el funcionamiento óptimo del sistema de drenaje en épocas de lluvia.",
    category: "auxiliares",
    icon: Warehouse,
    features: [
      {
        id: 1,
        title: "Limpieza integral",
        description: "Eliminación de sedimentos, basura y obstrucciones en sumideros y tuberías.",
      },
      {
        id: 2,
        title: "Equipos especializados",
        description: "Utilizamos camiones hidrojet y de succión para una limpieza efectiva.",
      },
      {
        id: 3,
        title: "Inspección con cámara",
        description: "Verificación del estado interno de tuberías para detectar problemas ocultos.",
      },
      {
        id: 4,
        title: "Mantenimiento preventivo",
        description: "Programas regulares para evitar acumulaciones y obstrucciones.",
      },
    ],
    process: [
      {
        id: 1,
        title: "Evaluación",
        description: "Inspección del estado actual de sumideros y sistema de drenaje.",
      },
      {
        id: 2,
        title: "Limpieza superficial",
        description: "Remoción de residuos visibles y accesibles manualmente.",
      },
      {
        id: 3,
        title: "Limpieza profunda",
        description: "Utilización de equipos hidrojet para eliminar obstrucciones en tuberías.",
      },
      {
        id: 4,
        title: "Succión",
        description: "Extracción de lodos y sedimentos acumulados mediante equipos de vacío.",
      },
      {
        id: 5,
        title: "Verificación",
        description: "Comprobación del flujo correcto y funcionamiento del sistema.",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Prevención de inundaciones en épocas de lluvia',
      },
      {
        id: 2,
        title: 'Eliminación de malos olores por agua estancada',
      },
      {
        id: 3,
        title: 'Reducción de riesgos sanitarios y ambientales',
      },
      {
        id: 4,
        title: 'Prolongación de la vida útil del sistema de drenaje',
      },
      {
        id: 5,
        title: 'Cumplimiento de normativas municipales',
      },
    ],
    coverImage: "/adicional-3.jpg",
    galleryImages: [
      {
        id: 1,
        url: ''
      }
    ],
    faqs: [
      {
        id: 1,
        question: "¿Con qué frecuencia se debe realizar la limpieza de sumideros?",
        answer:
          "Recomendamos limpieza preventiva semestral, idealmente antes de las temporadas de lluvia. En zonas con alta acumulación de hojas o residuos, puede ser necesaria una frecuencia trimestral.",
      },
      {
        id: 2,
        question: "¿Qué problemas puede causar un sistema de sumideros obstruido?",
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
    delay: 1.3
  }
]

export const getServiceById = (id: number): Service | undefined => {
  return ServiciosData.find((service) => service.id === id);
}

export const getServiceBySlug = (slug: string): Service | undefined => {
  return ServiciosData.find((service) => service.slug === slug)
}

export const getServicesByCategory = (category: ServiceType): Service[] => {
  return ServiciosData.filter((service) => service.category === category)
}

export const getAllServiceCategories = (): { key: ServiceType; label: string }[] => {
  return [
    { key: "saneamiento", label: "Saneamiento Ambiental" },
    { key: "auxiliares", label: "Servicios Auxiliares" },
  ]
}

export const getAllServices = (): Service[] => {
  return ServiciosData
}