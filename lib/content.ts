export type Locale = "es" | "en";

export type Service = {
  key: string;
  esSlug: string;
  enSlug: string;
  icon: string;
  iconSrc?: string;
  image: string;
  /** Optional image used by the home service modal; cards keep `image`. */
  modalImage?: string;
  /** Image used on the full service detail page. */
  detailImage?: string;
  es: { title: string; summary: string; features: string[]; sectionTitle?: string; detailHeading?: string; detailParagraphs?: string[]; detailTagline?: string };
  en: { title: string; summary: string; features: string[]; sectionTitle?: string; detailHeading?: string; detailParagraphs?: string[]; detailTagline?: string };
};

export const services: Service[] = [
  {
    key: "technical",
    esSlug: "gestion-tecnica",
    enSlug: "technical-management",
    icon: "⚙",
    iconSrc: "/assets/drive/iconos-bmare-01-crop.png",
    image: "/assets/service-01.webp",
    modalImage: "/assets/service-details/technical-modal.jpeg",
    detailImage: "/assets/service-details/detail-02.jpg",
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
    modalImage: "/assets/service-details/quality-compliance-modal.jpg",
    detailImage: "/assets/service-details/quality-compliance.jpg",
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
    modalImage: "/assets/service-details/operations-modal.png",
    detailImage: "/assets/service-details/detail-03.png",
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
    modalImage: "/assets/service-details/drydock-modal.jpeg",
    detailImage: "/assets/service-details/drydock-detail.jpg",
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
    modalImage: "/assets/service-details/procurement-modal.jpg",
    detailImage: "/assets/service-details/procurement-detail.jpg",
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
    detailImage: "/assets/service-details/cybersecurity-detail.png",
    es: { title: "Ciberseguridad", summary: "Apoyamos la protección de los sistemas, los datos y los procesos digitales esenciales para la operación marítima.", features: ["Identificación de riesgos", "Protección de información", "Procedimientos de seguridad", "Concienciación de equipos"] },
    en: { title: "Cybersecurity", summary: "We support the protection of systems, data and digital processes essential to maritime operations.", features: ["Digital risk identification", "Information protection", "Security procedures", "Crew awareness"] },
  },
  {
    key: "crewing",
    esSlug: "gestion-de-tripulaciones",
    enSlug: "crew-management",
    icon: "♙",
    image: "/assets/service-07.webp",
    modalImage: "/assets/service-details/crew-modal.jpg",
    detailImage: "/assets/service-07.webp",
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
    modalImage: "/assets/service-details/finance-modal.jpg",
    detailImage: "/assets/service-details/finance-detail.jpg",
    es: { title: "Finanzas y presupuestos", summary: "Ofrecemos control económico y apoyo en la gestión de riesgos para proteger la operación y los activos marítimos.", features: ["Presupuestos OPEX y CAPEX", "Informes de costes", "Análisis económico", "Seguros marítimos"] },
    en: { title: "Finance and budgeting", summary: "We provide financial oversight and risk management support to protect maritime operations and assets.", features: ["OPEX and CAPEX budgets", "Cost reporting", "Financial analysis", "Marine insurance"] },
  },
  {
    key: "newbuildings",
    esSlug: "nuevas-construcciones",
    enSlug: "newbuildings",
    icon: "⌂",
    iconSrc: "/assets/drive/iconos-bmare-17-crop.png",
    image: "/assets/service-09.webp",
    detailImage: "/assets/service-details/detail-09.jpg",
    es: { title: "Nuevas construcciones", summary: "Acompañamos los proyectos de nueva construcción con supervisión técnica y control de hitos.", features: ["Asistencia técnica", "Seguimiento en astillero", "Control de calidad", "Pruebas y entrega"] },
    en: { title: "Newbuildings", summary: "We support newbuilding projects with technical supervision, quality monitoring and milestone control.", features: ["Technical assistance", "Shipyard monitoring", "Quality control", "Trials and delivery"] },
  },
  {
    key: "sustainability",
    esSlug: "sostenibilidad",
    enSlug: "sustainability",
    icon: "❧",
    image: "/assets/service-10.webp",
    detailImage: "/assets/service-details/sustainability-detail.jpeg",
    es: { title: "Sostenibilidad", summary: "Ayudamos a las flotas a mejorar su desempeño ambiental y avanzar hacia operaciones más responsables.", features: ["Cumplimiento ambiental", "Emisiones y eficiencia", "Descarbonización", "Gestión ambiental"] },
    en: { title: "Sustainability", summary: "We help fleets improve environmental performance, manage emissions and advance more responsible operations.", features: ["Environmental compliance", "Emissions and efficiency", "Decarbonisation", "Environmental systems"] },
  },
  {
    key: "marineInsurance",
    esSlug: "seguros-maritimos-y-gestion-de-riesgos",
    enSlug: "marine-insurance-risk-management",
    icon: "▣",
    iconSrc: "/assets/drive/iconos-bmare-13-crop.png",
    image: "/assets/service-11.webp",
    modalImage: "/assets/service-details/insurance-modal.jpg",
    detailImage: "/assets/service-details/detail-11.jpg",
    es: {
      title: "Seguros marítimos y gestión de riesgos",
      summary: "Protegemos tus buques, personas y operaciones mediante asesoramiento experto en seguros y gestión de riesgos.",
      sectionTitle: "Nuestros servicios",
      detailHeading: "¿Por qué BMARE?",
      detailParagraphs: [
        "BMARE ofrece asesoramiento independiente en seguros a armadores, gestores y operadores. Ayudamos a identificar y mitigar riesgos, optimizar la cobertura y gestionar los siniestros con eficiencia. Nuestro objetivo es proteger los activos, apoyar la continuidad del negocio y reducir la exposición operativa y financiera durante todo el ciclo de vida de las operaciones marítimas.",
        "Combinamos experiencia marítima, técnica, operativa y de cumplimiento para ofrecer soluciones prácticas de seguros y gestión de riesgos adaptadas a las necesidades de la industria. Trabajamos junto a nuestros clientes para reforzar su resiliencia, gestionar sus responsabilidades y apoyar operaciones seguras, conformes y sostenibles.",
      ],
      detailTagline: "Asesoramiento independiente, soluciones prácticas y experiencia marítima de confianza.",
      features: [
        "Seguro de Casco y Maquinaria (H&M)",
        "Seguro de Protección e Indemnización (P&I)",
        "Seguro de tripulación y MLC",
        "Seguro de carga y responsabilidad civil",
        "Cobertura para buques offshore y especializados",
        "Asesoramiento en responsabilidad ambiental y riesgo de contaminación",
        "Revisión de seguros y análisis de brechas de cobertura",
        "Gestión y recuperación de siniestros",
        "Evaluaciones de riesgos de flota",
        "Asesoramiento en seguros de riesgos cibernéticos y digitales",
        "Prevención de pérdidas y mitigación de riesgos",
        "Apoyo en renovaciones de seguros",
        "Due diligence para adquisiciones de buques",
        "Interlocución con aseguradoras, brokers y clubes P&I",
      ],
    },
    en: {
      title: "Marine Insurance & Risk Management",
      summary: "Protecting your vessels, people, and operations through expert insurance and risk management support.",
      sectionTitle: "Our Services",
      detailHeading: "Why BMARE?",
      detailParagraphs: [
        "BMARE provides independent insurance advisory services to shipowners, managers, and operators. We help clients identify and mitigate risks, optimise insurance coverage, and navigate claims efficiently. Our focus is to protect assets, support business continuity and reduce operational and financial exposure throughout the lifecycle of your maritime operations.",
        "Combining maritime, technical, operational, and compliance expertise, BMARE delivers practical insurance and risk management solutions tailored to the needs of the maritime industry. We work alongside our clients to strengthen resilience, manage liabilities, and support safe, compliant and sustainable operations.",
      ],
      detailTagline: "Independent Advice, Practical Solutions & Trusted Maritime Expertise.",
      features: [
        "Hull & Machinery (H&M) Insurance",
        "Protection & Indemnity (P&I) Insurance",
        "Crew & MLC Insurance",
        "Cargo & Liability Insurance",
        "Offshore & Specialized Vessel Coverage",
        "Environmental Liability & Pollution Risk Advisory",
        "Insurance Reviews & Gap Analysis",
        "Claims Management & Recovery Support",
        "Fleet Risk Assessments",
        "Cyber & Digital Risk Insurance Advisory",
        "Loss Prevention & Risk Mitigation",
        "Insurance Renewal Support",
        "Due Diligence for Vessel Acquisitions",
        "Liaison with Insurers, Brokers & P&I Clubs",
      ],
    },
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
  { nameEs: "BMARE Vigo, España", nameEn: "BMARE Vigo, Spain", address: ["Muelle de Reparaciones de Bouzas, 12", "36208, Vigo"], phone: "+34 986 238767", email: "fernando.lema@bmareshipmanagement.com", map: "https://maps.google.com/?q=Muelle+de+Reparaciones+de+Bouzas+12+Vigo" },
  { nameEs: "BMARE A Coruña, España", nameEn: "BMARE A Coruña, Spain", address: ["Beldoña 39", "15318, Abegondo / A Coruña"], phone: "+34 636 094121", email: "pamor@bmareshipmanagement.com", map: "https://maps.google.com/?q=Beldoña+39+Abegondo" },
  { nameEs: "BMARE Harlingen, Países Bajos", nameEn: "BMARE Harlingen, Netherlands", address: ["Zuiderhaven 68", "8861 XV Harlingen"], phone: "+31 651 279603", email: "darends@bmareshipmanagement.com", map: "https://maps.google.com/?q=Zuiderhaven+68+Harlingen" },
];

export function serviceForSlug(locale: Locale, slug: string) {
  return services.find((service) => (locale === "es" ? service.esSlug : service.enSlug) === slug);
}
