export type Locale = "es" | "en";

export type Service = {
  key: string;
  esSlug: string;
  enSlug: string;
  icon: string;
  iconSrc?: string;
  image: string;
  es: { title: string; summary: string; features: string[] };
  en: { title: string; summary: string; features: string[] };
};

export const services: Service[] = [
  {
    key: "technical",
    esSlug: "gestion-tecnica",
    enSlug: "technical-management",
    icon: "⚙",
    iconSrc: "/assets/drive/iconos-bmare-01-crop.png",
    image: "/assets/service-01.webp",
    es: { title: "Gestión técnica y mantenimiento", summary: "Anticipamos incidencias y coordinamos el mantenimiento para mantener cada buque seguro, disponible y eficiente.", features: ["Planificación del mantenimiento", "Supervisión técnica a bordo", "Seguimiento de equipos", "Coordinación de reparaciones"] },
    en: { title: "Technical management and maintenance", summary: "We anticipate incidents and coordinate maintenance to keep every vessel safe, available and efficient.", features: ["Maintenance planning", "Onboard technical supervision", "Equipment monitoring", "Repair coordination"] },
  },
  {
    key: "quality",
    esSlug: "calidad-y-cumplimiento",
    enSlug: "quality-and-compliance",
    icon: "▤",
    iconSrc: "/assets/drive/iconos-bmare-05-crop.png",
    image: "/assets/service-02.webp",
    es: { title: "Calidad y cumplimiento", summary: "Acompañamos a cada flota en la aplicación de estándares de seguridad, calidad y cumplimiento marítimo.", features: ["Sistemas de gestión", "Auditorías e inspecciones", "Seguridad operacional", "Seguimiento normativo"] },
    en: { title: "Quality and compliance", summary: "We support fleets in applying maritime safety, quality and compliance standards.", features: ["Management systems", "Audits and inspections", "Operational safety", "Regulatory monitoring"] },
  },
  {
    key: "operations",
    esSlug: "operaciones",
    enSlug: "operations",
    icon: "⚓",
    iconSrc: "/assets/drive/iconos-bmare-06-crop.png",
    image: "/assets/service-03.webp",
    es: { title: "Operaciones", summary: "Coordinamos la operativa diaria para facilitar decisiones ágiles, continuidad de servicio y travesías eficientes.", features: ["Coordinación de viajes", "Seguimiento operativo", "Relación con puertos", "Respuesta ante incidencias"] },
    en: { title: "Operations", summary: "We coordinate daily operations to support timely decisions, service continuity and efficient voyages.", features: ["Voyage coordination", "Operational monitoring", "Port and agent liaison", "Incident response"] },
  },
  {
    key: "drydock",
    esSlug: "gestion-de-varadas",
    enSlug: "drydock-management",
    icon: "⚒",
    iconSrc: "/assets/drive/iconos-bmare-07-crop.png",
    image: "/assets/service-04.webp",
    es: { title: "Gestión de varadas", summary: "Planificamos y supervisamos las intervenciones en astillero para controlar plazos, calidad y costes.", features: ["Planificación de varadas", "Coordinación con astilleros", "Supervisión de trabajos", "Control de presupuesto"] },
    en: { title: "Drydock management", summary: "We plan and supervise shipyard interventions to control schedules, quality and costs.", features: ["Drydock planning", "Shipyard coordination", "Work supervision", "Time and budget control"] },
  },
  {
    key: "procurement",
    esSlug: "compras-y-aprovisionamiento",
    enSlug: "procurement-and-supply",
    icon: "▣",
    iconSrc: "/assets/drive/iconos-bmare-02-crop.png",
    image: "/assets/service-05.webp",
    es: { title: "Compras y aprovisionamiento", summary: "Gestionamos suministros, proveedores y logística para que cada buque cuente con lo que necesita.", features: ["Compras técnicas", "Gestión de proveedores", "Aprovisionamiento", "Coordinación logística"] },
    en: { title: "Procurement and supply", summary: "We manage supplies, vendors and logistics so every vessel has what it needs, when it needs it.", features: ["Technical purchasing", "Vendor management", "Vessel supply", "Logistics coordination"] },
  },
  {
    key: "cybersecurity",
    esSlug: "ciberseguridad",
    enSlug: "cybersecurity",
    icon: "⬡",
    iconSrc: "/assets/drive/iconos-bmare-08-crop.png",
    image: "/assets/service-06.webp",
    es: { title: "Ciberseguridad", summary: "Apoyamos la protección de los sistemas, los datos y los procesos digitales esenciales para la operación marítima.", features: ["Identificación de riesgos", "Protección de información", "Procedimientos de seguridad", "Concienciación de equipos"] },
    en: { title: "Cybersecurity", summary: "We support the protection of systems, data and digital processes essential to maritime operations.", features: ["Digital risk identification", "Information protection", "Security procedures", "Crew awareness"] },
  },
  {
    key: "crewing",
    esSlug: "gestion-de-tripulaciones",
    enSlug: "crew-management",
    icon: "♙",
    image: "/assets/service-07.webp",
    es: { title: "Gestión de tripulaciones", summary: "Coordinamos los recursos humanos embarcados para favorecer la seguridad y el buen funcionamiento a bordo.", features: ["Selección y coordinación", "Documentación y certificaciones", "Incorporaciones y relevos", "Apoyo a la tripulación"] },
    en: { title: "Crew management", summary: "We coordinate onboard personnel to support safety, preparedness and efficient operations.", features: ["Selection and coordination", "Documents and certifications", "Joining and rotations", "Crew support"] },
  },
  {
    key: "finance",
    esSlug: "finanzas-y-presupuestos",
    enSlug: "finance-and-budgeting",
    icon: "▥",
    iconSrc: "/assets/drive/iconos-bmare-04-crop.png",
    image: "/assets/service-08.webp",
    es: { title: "Finanzas y presupuestos", summary: "Ofrecemos control económico y apoyo en la gestión de riesgos para proteger la operación y los activos marítimos.", features: ["Presupuestos OPEX y CAPEX", "Reporting de costes", "Análisis económico", "Seguros marítimos"] },
    en: { title: "Finance and budgeting", summary: "We provide financial oversight and risk management support to protect maritime operations and assets.", features: ["OPEX and CAPEX budgets", "Cost reporting", "Financial analysis", "Marine insurance"] },
  },
  {
    key: "newbuildings",
    esSlug: "nuevas-construcciones",
    enSlug: "newbuildings",
    icon: "⌂",
    iconSrc: "/assets/drive/iconos-bmare-17-crop.png",
    image: "/assets/service-09.webp",
    es: { title: "Nuevas construcciones", summary: "Acompañamos los proyectos de nueva construcción con supervisión técnica y control de hitos.", features: ["Asistencia técnica", "Seguimiento en astillero", "Control de calidad", "Pruebas y entrega"] },
    en: { title: "Newbuildings", summary: "We support newbuilding projects with technical supervision, quality monitoring and milestone control.", features: ["Technical assistance", "Shipyard monitoring", "Quality control", "Trials and delivery"] },
  },
  {
    key: "sustainability",
    esSlug: "sostenibilidad",
    enSlug: "sustainability",
    icon: "❧",
    image: "/assets/service-10.webp",
    es: { title: "Sostenibilidad", summary: "Ayudamos a las flotas a mejorar su desempeño ambiental y avanzar hacia operaciones más responsables.", features: ["Cumplimiento ambiental", "Emisiones y eficiencia", "Descarbonización", "Gestión ambiental"] },
    en: { title: "Sustainability", summary: "We help fleets improve environmental performance, manage emissions and advance more responsible operations.", features: ["Environmental compliance", "Emissions and efficiency", "Decarbonisation", "Environmental systems"] },
  },
];

export const navigation = {
  es: [
    ["INICIO", "/"], ["QUIÉNES SOMOS", "/quienes-somos"], ["SERVICIOS", "/servicios"], ["SOSTENIBILIDAD", "/sostenibilidad"], ["EQUIPO", "/equipo"], ["NOTICIAS", "/noticias"], ["CONTACTO", "/localizaciones"],
  ],
  en: [
    ["HOME", "/en"], ["ABOUT US", "/en/about-us"], ["SERVICES", "/en/services"], ["SUSTAINABILITY", "/en/sustainability"], ["TEAM", "/en/team"], ["NEWS", "/en/news"], ["LOCATIONS", "/en/locations"],
  ],
} as const;

export const locations = [
  { name: "BMARE Vigo, Spain", address: ["Muelle de Reparaciones de Bouzas, 12", "36208, Vigo"], phone: "+34 986 238767", email: "fernando.lema@bmareshipmanagement.com", map: "https://maps.google.com/?q=Muelle+de+Reparaciones+de+Bouzas+12+Vigo" },
  { name: "BMARE A Coruña, Spain", address: ["Beldoña 39", "15318, Abegondo / A Coruña"], phone: "+34 636 094121", email: "pamor@bmareshipmanagement.com", map: "https://maps.google.com/?q=Beldoña+39+Abegondo" },
  { name: "BMARE Harlingen, Netherlands", address: ["Zuiderhaven 68", "8861 XV Harlingen"], phone: "+31 651 279603", email: "darends@bmareshipmanagement.com", map: "https://maps.google.com/?q=Zuiderhaven+68+Harlingen" },
];

export function serviceForSlug(locale: Locale, slug: string) {
  return services.find((service) => (locale === "es" ? service.esSlug : service.enSlug) === slug);
}
