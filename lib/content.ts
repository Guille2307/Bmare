export type Locale = "es" | "en";

export type ServiceSection = {
  title: string;
  body?: string[];
  items?: string[];
};

export type ServiceClosing = {
  heading: string;
  paragraphs?: string[];
  cta?: string;
};

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
  /** Optional copy used by the home popup. */
  modalHeading?: Record<Locale, string>;
  modalSubtitle?: Record<Locale, string>;
  modalLead?: Record<Locale, string>;
  modalDescription?: Record<Locale, string>;
  modalAreasTitle?: Record<Locale, string>;
  modalFeatures?: Record<Locale, string[]>;
  /** Optional long-form content used by the full service detail page. */
  detailLead?: Record<Locale, string>;
  detailSections?: Record<Locale, ServiceSection[]>;
  detailClosing?: Record<Locale, ServiceClosing>;
  es: { title: string; summary: string; features: string[]; sectionTitle?: string; detailHeading?: string; detailParagraphs?: string[]; detailTagline?: string };
  en: { title: string; summary: string; features: string[]; sectionTitle?: string; detailHeading?: string; detailParagraphs?: string[]; detailTagline?: string };
};

const technicalDetailSections: Record<Locale, ServiceSection[]> = {
  es: [
    { title: "NUESTROS SERVICIOS TÉCNICOS" },
    { title: "Gestión y supervisión técnica", items: ["Supervisión técnica e inspecciones de buques", "Evaluaciones del estado de los equipos y seguimiento del rendimiento", "Seguimiento de deficiencias y asistencia técnica"] },
    { title: "Planificación y optimización del mantenimiento", items: ["Supervisión del sistema de mantenimiento preventivo planificado (PMS)", "Programación y priorización de tareas de mantenimiento", "Mantenimiento preventivo y basado en el estado de los equipos"] },
    { title: "Fiabilidad de maquinaria y equipos", items: ["Monitorización de maquinaria y equipos críticos", "Diagnóstico técnico e investigación de averías", "Análisis de causas raíz y acciones correctivas"] },
    { title: "Reparaciones, revisiones generales y proyectos técnicos", items: ["Planificación y coordinación de reparaciones", "Elaboración de especificaciones técnicas y evaluación de presupuestos", "Sustitución, modernización y actualización de equipos"] },
    { title: "Gestión de varadas e inspecciones especiales", items: ["Preparación de varadas y especificaciones de reparación", "Coordinación con astilleros y subcontratistas", "Seguimiento del avance de los trabajos, la calidad y los costes"] },
    { title: "Cumplimiento de requisitos de clase, bandera y normativa", items: ["Planificación de inspecciones de clase y reglamentarias", "Seguimiento de certificaciones y recomendaciones", "Apoyo al cumplimiento de la normativa técnica"] },
    { title: "Compras técnicas y repuestos", items: ["Especificaciones técnicas e identificación de repuestos", "Coordinación con proveedores y fabricantes", "Evaluación de ofertas y seguimiento de entregas"] },
    { title: "Presupuestos técnicos y rendimiento", items: ["Elaboración de presupuestos técnicos anuales y control del gasto", "Seguimiento de costes de mantenimiento y reparación", "Optimización del ciclo de vida de los equipos y del rendimiento energético"] },
    { title: "NUESTRO ENFOQUE", body: ["ANTICIPAR – PLANIFICAR – COORDINAR – MEJORAR.", "Identificamos los riesgos técnicos de forma temprana, establecemos prioridades de mantenimiento y coordinamos soluciones eficaces para mejorar la fiabilidad de los buques, la eficiencia operativa y el control de costes."] },
    { title: "EL VALOR QUE APORTAMOS (OPCIONAL)", items: ["Mayor disponibilidad y fiabilidad de los buques", "Menor riesgo de averías imprevistas", "Mejor planificación del mantenimiento y control de costes", "Mayor vida útil de los equipos", "Mejor supervisión técnica y toma de decisiones fundamentadas"] },
  ],
  en: [
    { title: "OUR TECHNICAL SERVICES" },
    { title: "Technical Management & Supervision", items: ["Technical oversight and vessel inspections", "Condition assessments and performance monitoring", "Defect follow-up and technical support"] },
    { title: "Maintenance Planning & Optimisation", items: ["Planned Preventive Maintenance (PMS) oversight", "Maintenance scheduling and prioritisation", "Preventive and condition-based maintenance"] },
    { title: "Machinery & Equipment Reliability", items: ["Critical machinery and equipment monitoring", "Technical troubleshooting and defect investigation", "Root-cause analysis and corrective actions"] },
    { title: "Repairs, Overhauls & Technical Projects", items: ["Repair planning and coordination", "Technical specifications and quotation evaluations", "Equipment replacements, upgrades and retrofits"] },
    { title: "Drydock & Special Survey Management", items: ["Drydock preparation and repair specifications", "Shipyard and subcontractor coordination", "Work progress, quality and cost monitoring"] },
    { title: "Class, Flag & Statutory Compliance", items: ["Class and statutory survey planning", "Certification and recommendation follow-up", "Technical regulatory compliance support"] },
    { title: "Technical Procurement & Spare Parts", items: ["Technical specifications and spare parts identification", "Supplier and manufacturer coordination", "Quotation evaluation and delivery follow-up"] },
    { title: "Technical Budgeting & Performance", items: ["Annual technical budgets and expenditure control", "Maintenance and repair cost monitoring", "Equipment lifecycle and energy performance optimisation"] },
    { title: "OUR APPROACH", body: ["ANTICIPATE – PLAN – COORDINATE – IMPROVE.", "We identify technical risks early, establish maintenance priorities and coordinate effective solutions to improve vessel reliability, operational efficiency and cost control."] },
    { title: "THE VALUE WE BRING (OPTIONAL)", items: ["Increased vessel availability and reliability", "Reduced risk of unexpected breakdowns", "Improved maintenance planning and cost control", "Extended equipment service life", "Better technical oversight and informed decisions"] },
  ],
};

const technicalDetailClosing: Record<Locale, ServiceClosing> = {
  es: { heading: "CRITERIO TÉCNICO PARA SEGUIR AVANZANDO", paragraphs: ["Combinamos conocimientos técnicos con experiencia operativa práctica para ayudarte a anticipar desafíos, proteger tus activos y mantener tu flota al máximo rendimiento.", "HABLEMOS DE TUS NECESIDADES DE GESTIÓN TÉCNICA."], cta: "HABLA CON NUESTRO EQUIPO" },
  en: { heading: "TECHNICAL JUDGEMENT TO MOVE FORWARD", paragraphs: ["We combine technical expertise with practical operational experience to help you anticipate challenges, protect your assets and keep your fleet performing at its best.", "LET'S DISCUSS YOUR TECHNICAL MANAGEMENT REQUIREMENTS."], cta: "TALK TO OUR TEAM" },
};

export const services: Service[] = [
  {
    key: "technical",
    esSlug: "gestion-tecnica",
    enSlug: "technical-management",
    icon: "⚙",
    iconSrc: "/assets/drive/iconos-bmare-01-crop.png",
    image: "/assets/service-01.webp",
    modalImage: "/assets/service-details/technical-management-modal.png",
    detailImage: "/assets/service-details/technical-management-detail.png",
    modalHeading: { es: "Gestión técnica", en: "Technical Management" },
    modalSubtitle: { es: "Optimización del mantenimiento y supervisión de buques", en: "Maintenance Optimisation & Vessel Monitoring" },
    modalLead: { es: "COMBINAMOS CRITERIO TÉCNICO Y EXPERIENCIA OPERATIVA PARA MAXIMIZAR LA DISPONIBILIDAD, LA FIABILIDAD Y EL RENDIMIENTO DE LOS BUQUES.", en: "WE COMBINE TECHNICAL JUDGEMENT AND OPERATIONAL EXPERIENCE TO MAXIMISE VESSEL AVAILABILITY, RELIABILITY AND PERFORMANCE." },
    modalDescription: {
      es: "Proporcionamos supervisión técnica proactiva y coordinación del mantenimiento para maximizar la fiabilidad, la disponibilidad y el rendimiento de los buques.",
      en: "We provide proactive technical oversight and maintenance coordination to maximise vessel reliability, availability and performance.",
    },
    modalAreasTitle: { es: "Áreas de especialización", en: "Areas of expertise" },
    modalFeatures: {
      es: ["Supervisión técnica y seguimiento de buques", "Planificación y optimización del mantenimiento", "Fiabilidad de la maquinaria y reparaciones", "Coordinación de varadas e inspecciones especiales", "Cumplimiento de los requisitos de la sociedad de clasificación, el Estado de abanderamiento y la normativa aplicable", "Compras técnicas y control de costes"],
      en: ["Technical supervision & vessel monitoring", "Maintenance planning & optimisation", "Machinery reliability & repairs", "Drydock & special survey coordination", "Class, flag & statutory compliance", "Technical procurement & cost control"],
    },
    detailLead: { es: "COMBINAMOS CRITERIO TÉCNICO Y EXPERIENCIA OPERATIVA PARA MAXIMIZAR LA DISPONIBILIDAD, LA FIABILIDAD Y EL RENDIMIENTO DE LOS BUQUES.", en: "WE COMBINE TECHNICAL JUDGEMENT AND OPERATIONAL EXPERIENCE TO MAXIMISE VESSEL AVAILABILITY, RELIABILITY AND PERFORMANCE." },
    detailSections: technicalDetailSections,
    detailClosing: technicalDetailClosing,
    es: { title: "Gestión técnica y mantenimiento", summary: "Optimización del mantenimiento y supervisión de buques.", features: ["Supervisión técnica y seguimiento de buques", "Planificación y optimización del mantenimiento", "Fiabilidad de la maquinaria y reparaciones", "Coordinación de varadas e inspecciones especiales", "Cumplimiento de clase, bandera y normativa", "Compras técnicas y control de costes"], detailHeading: "Mantenemos tu flota segura, fiable y con el máximo rendimiento", detailParagraphs: ["BMARE ofrece apoyo en gestión técnica, supervisión del mantenimiento y asesoramiento técnico independiente. Mediante la planificación, la monitorización y la coordinación proactivas, ayudamos a los armadores a mantener sus buques seguros, fiables y eficientes, controlando los costes y protegiendo sus activos."] },
    en: { title: "Technical management and maintenance", summary: "Maintenance optimisation and vessel monitoring.", features: ["Technical supervision & vessel monitoring", "Maintenance planning & optimisation", "Machinery reliability & repairs", "Drydock & special survey coordination", "Class, flag & statutory compliance", "Technical procurement & cost control"], detailHeading: "Keeping Your Fleet Safe, Reliable and Performing at Its Best", detailParagraphs: ["BMARE provides technical management support, maintenance oversight and independent technical guidance. Through proactive planning, monitoring and coordination, we help shipowners maintain safe, reliable and efficient vessels while controlling costs and protecting their assets."] },
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
