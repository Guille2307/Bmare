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

const baseServices: Service[] = [
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

type ReviewedLocaleCopy = {
  title: string;
  modalHeading: string;
  modalSubtitle: string;
  modalLead: string;
  modalDescription: string;
  detailHeading: string;
  detailParagraphs: string[];
  features: string[];
  detailSections?: ServiceSection[];
  detailTagline?: string;
  detailClosing?: ServiceClosing;
};

function reviewedServiceText(copy: { es: ReviewedLocaleCopy; en: ReviewedLocaleCopy }) {
  return {
    modalHeading: { es: copy.es.modalHeading, en: copy.en.modalHeading },
    modalSubtitle: { es: copy.es.modalSubtitle, en: copy.en.modalSubtitle },
    modalLead: { es: copy.es.modalLead, en: copy.en.modalLead },
    modalDescription: { es: copy.es.modalDescription, en: copy.en.modalDescription },
    modalAreasTitle: undefined,
    modalFeatures: undefined,
    detailSections: { es: copy.es.detailSections ?? [], en: copy.en.detailSections ?? [] },
    detailClosing: copy.es.detailClosing && copy.en.detailClosing
      ? { es: copy.es.detailClosing, en: copy.en.detailClosing }
      : undefined,
    es: {
      title: copy.es.title,
      summary: copy.es.modalDescription,
      features: copy.es.features,
      detailHeading: copy.es.detailHeading,
      detailParagraphs: copy.es.detailParagraphs,
      detailTagline: copy.es.detailTagline,
    },
    en: {
      title: copy.en.title,
      summary: copy.en.modalDescription,
      features: copy.en.features,
      detailHeading: copy.en.detailHeading,
      detailParagraphs: copy.en.detailParagraphs,
      detailTagline: copy.en.detailTagline,
    },
  };
}

const reviewCopyByService: Record<string, ReturnType<typeof reviewedServiceText>> = {
  technical: reviewedServiceText({
    es: {
      title: "Gestión técnica y mantenimiento",
      modalHeading: "Gestión técnica y mantenimiento",
      modalSubtitle: "Experiencia técnica. Optimización del mantenimiento. Rendimiento del buque.",
      modalLead: "COMBINAMOS CONOCIMIENTOS DE INGENIERÍA Y EXPERIENCIA OPERATIVA PARA MAXIMIZAR LA DISPONIBILIDAD, FIABILIDAD Y RENDIMIENTO DE LOS BUQUES.",
      modalDescription: "BMARE proporciona gestión técnica proactiva, supervisión de buques y coordinación del mantenimiento para proteger sus activos, mejorar la eficiencia operativa y controlar los costes técnicos.",
      detailHeading: "Apoyo técnico integral. Operaciones fiables de los buques.",
      detailParagraphs: ["Supervisión técnica, mantenimiento planificado, optimización del sistema PMS, gestión de motores y maquinaria, inspecciones, auditorías, reparaciones, varadas, cumplimiento normativo, compras técnicas, eficiencia energética y documentación."],
      features: ["Supervisión técnica", "Mantenimiento planificado", "Gestión de motores y maquinaria", "Inspecciones y auditorías", "Reparaciones y varadas", "Compras técnicas y control de costes"],
    },
    en: {
      title: "Technical Management & Maintenance",
      modalHeading: "TECHNICAL MANAGEMENT & MAINTENANCE",
      modalSubtitle: "Technical Expertise. Maintenance Optimisation. Vessel Performance.",
      modalLead: "WE COMBINE ENGINEERING KNOWLEDGE AND OPERATIONAL EXPERIENCE TO MAXIMISE VESSEL AVAILABILITY, RELIABILITY AND PERFORMANCE.",
      modalDescription: "BMare provides proactive technical management, vessel monitoring and maintenance coordination to protect your assets, improve operational efficiency and control technical expenditure.",
      detailHeading: "Comprehensive Technical Support. Reliable Vessel Operations.",
      detailParagraphs: ["BMare supports vessel owners and operators with professional technical management, engineering assistance and maintenance optimisation. Combining practical maritime experience with technical expertise, we focus on maintaining vessel condition, improving reliability and protecting long-term asset value."],
      features: ["Technical supervision & vessel monitoring", "Planned maintenance & PMS optimisation", "Engine & machinery management", "Technical inspections & audits", "Repairs & breakdown management", "Technical procurement & cost control"],
      detailSections: [
        {
          title: "Our Technical Management Services",
          items: [
            "Technical Supervision & Vessel Monitoring - Technical oversight, vessel condition monitoring and coordination between onboard and shore-based teams.",
            "Planned Maintenance & PMS Optimisation - Maintenance planning, scheduling, monitoring and follow-up of preventive and corrective maintenance.",
            "Engine & Machinery Management - Monitoring machinery condition, engine performance, operating parameters and equipment reliability.",
            "Technical Inspections & Audits - Vessel condition assessments, technical inspections, onboard audits and compliance reviews.",
            "Repairs & Breakdown Management - Technical troubleshooting, repair coordination, deficiency management and corrective actions.",
            "Drydocking & Repair Supervision - Drydock planning, shipyard coordination, repair specifications, project supervision and cost control.",
            "Class, Flag & Statutory Compliance - Monitoring certificates, inspections, surveys and applicable regulatory requirements.",
            "Technical Procurement & Cost Control - Spare parts sourcing, supplier coordination, quotation evaluation and maintenance budget control.",
            "Energy Efficiency & Performance - Monitoring fuel consumption, machinery efficiency and opportunities to improve operational performance.",
            "Technical Documentation & Reporting - Maintenance records, vessel reports, technical histories and documentation management.",
          ],
        },
        {
          title: "Digital Technical Monitoring & Vessel Assurance",
          body: ["BMare developed digital solutions connecting PMS information, machinery performance, inspections, deficiencies and maintenance history, providing vessel owners and technical managers with a clearer overview of vessel condition, maintenance status and operational readiness."],
        },
        {
          title: "Our Commitment",
          body: ["Effective technical management goes beyond routine maintenance. It requires anticipating challenges, maintaining control and making informed decisions to reduce unexpected downtime, optimise expenditure and improve vessel reliability.", "BMare works alongside vessel owners, ship managers and crews as a committed technical partner throughout the vessel's operational lifecycle."],
        },
      ],
      detailClosing: { heading: "TECHNICAL EXPERTISE. OPERATIONAL CONTROL. MAXIMUM VESSEL PERFORMANCE.", paragraphs: ["BMare - Professional Support. Reliable Partnership. Maritime Excellence."] },
    },
  }),
  cybersecurity: reviewedServiceText({
    es: {
      title: "Ciberseguridad",
      modalHeading: "Ciberseguridad",
      modalSubtitle: "Protección de los sistemas y datos del buque.",
      modalLead: "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA.",
      modalDescription: "Protegemos los sistemas digitales, las redes y los datos esenciales para garantizar unas operaciones marítimas seguras y fiables.",
      detailHeading: "Protección de los sistemas y datos del buque.",
      detailParagraphs: ["Protección de sistemas y redes, evaluación de riesgos, formación de tripulaciones, integración de la ciberseguridad en el Sistema de Gestión de la Seguridad (SMS), protección de datos y cumplimiento de las directrices de la OMI."],
      features: ["Protección de sistemas y redes", "Evaluación de riesgos", "Formación de tripulaciones", "Protección de datos"],
    },
    en: {
      title: "Cybersecurity",
      modalHeading: "CYBERSECURITY",
      modalSubtitle: "Protection of vessel systems and data.",
      modalLead: "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE.",
      modalDescription: "We protect the digital systems, networks and data essential to safe and reliable maritime operations.",
      detailHeading: "Protecting your digital maritime operations.",
      detailParagraphs: ["Modern vessels depend on interconnected digital systems for navigation, communication, automation and operational management. BMare supports the protection of these systems against cyber threats, helping to safeguard operational continuity and fleet availability."],
      features: ["System & network protection", "Risk assessment", "Crew cyber awareness", "SMS implementation", "Data protection"],
      detailSections: [
        { title: "Our focus includes", items: ["System & Network Protection - Safeguarding onboard systems and digital infrastructure.", "Risk Assessment - Identifying cybersecurity risks and vulnerabilities.", "Crew Cyber Awareness - Promoting crew awareness through guidance, training and practical procedures.", "SMS Implementation - Integrating cyber risk management into the Safety Management System (SMS).", "Data Protection - Safeguarding operational data and supporting business continuity."] },
        { title: "Applicable Maritime Regulations & Guidelines", body: ["Our approach takes into account relevant maritime regulations and guidelines, including:"], items: ["IMO MSC.428(98) - Cyber risk management within the Safety Management System.", "IMO MSC-FAL.1/Circ.3 - Guidelines for maritime cyber risk management.", "SOLAS & ISM Code - Maritime safety and safety management requirements." ] },
        { title: "Applicability", body: ["Applicability depends on vessel type, flag state and operational requirements."] },
      ],
      detailClosing: { heading: "BMARE KEEPS YOUR FLEET, CREW AND DIGITAL INFRASTRUCTURE SECURE AND OPERATIONAL." },
    },
  }),
  procurement: reviewedServiceText({
    es: {
      title: "Compras y suministros",
      modalHeading: "Compras y suministros",
      modalSubtitle: "Gestión de compras, repuestos y cadena de suministro.",
      modalLead: "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA.",
      modalDescription: "Gestionamos las compras, los repuestos, los acuerdos con proveedores y la logística para garantizar que cada buque reciba los materiales adecuados, en el momento oportuno y al coste correcto.",
      detailHeading: "Gestión de compras, repuestos y cadena de suministro.",
      detailParagraphs: ["Gestión de compras, repuestos, proveedores, acuerdos comerciales, logística internacional, control de costes, garantía de calidad y cumplimiento de los requisitos del Inventario de Materiales Peligrosos (IHM)."],
      features: ["Compras y repuestos", "Gestión de proveedores", "Acuerdos comerciales", "Logística internacional", "Control de costes"],
    },
    en: {
      title: "Procurement & Supply",
      modalHeading: "PROCUREMENT & SUPPLY",
      modalSubtitle: "Procurement, spare parts and supply-chain management.",
      modalLead: "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE.",
      modalDescription: "We manage purchasing, spare parts, supplier agreements and logistics to ensure every vessel receives the right materials, at the right time and at the right cost.",
      detailHeading: "Reliable procurement. Efficient supply. Better control.",
      detailParagraphs: ["Keeping vessels operational requires reliable suppliers, timely deliveries and effective cost management. BMare manages procurement and supply processes, ensuring that equipment, spare parts and operational materials are sourced and delivered when needed."],
      features: ["Procurement management", "Spare parts management", "Supplier management", "Framework agreements", "Logistics & delivery", "Cost control"],
      detailSections: [
        { title: "Our focus includes", items: ["Procurement Management - Sourcing and purchasing equipment, materials and operational supplies.", "Spare Parts Management - Sourcing, tracking and coordinating spare parts to minimise vessel downtime.", "Supplier Management - Selecting, evaluating and coordinating reliable suppliers.", "Framework Agreements - Establishing long-term supplier agreements to secure competitive pricing, reliable availability and consistent supply conditions.", "Logistics & Delivery - Coordinating shipments and deliveries to vessels worldwide.", "Cost Control - Monitoring purchasing costs and identifying opportunities for savings.", "Quality Assurance - Ensuring supplied products meet required specifications and quality standards.", "IHM Compliance Support - Supporting the identification, documentation and verification of materials in accordance with applicable IHM requirements."] },
      ],
      detailClosing: { heading: "BMARE ENSURES THE RIGHT PARTS AND SUPPLIES, FROM RELIABLE SOURCES, AT THE RIGHT TIME - KEEPING YOUR FLEET OPERATIONAL." },
    },
  }),
  drydock: reviewedServiceText({
    es: {
      title: "Gestión de varadas",
      modalHeading: "Gestión de varadas",
      modalSubtitle: "Planificación, coordinación y supervisión de proyectos de varada.",
      modalLead: "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA.",
      modalDescription: "Gestionamos los proyectos de varada desde su preparación hasta su finalización, garantizando un control eficaz de las reparaciones, los plazos, la calidad y los costes.",
      detailHeading: "Planificación, coordinación y supervisión de proyectos de varada.",
      detailParagraphs: ["Inspecciones previas, planificación, coordinación con astilleros y contratistas, supervisión técnica, seguridad, control ambiental, materiales, presupuestos, seguimiento y entrega final del buque."],
      features: ["Inspecciones previas", "Planificación de varadas", "Coordinación con astilleros", "Supervisión técnica", "Control de costes y plazos"],
    },
    en: {
      title: "Drydock Management",
      modalHeading: "DRYDOCK MANAGEMENT",
      modalSubtitle: "Planning, coordination and supervision of drydock projects.",
      modalLead: "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE.",
      modalDescription: "We manage drydock projects from preparation to completion, ensuring repairs, schedules, quality and costs are effectively controlled.",
      detailHeading: "Efficient planning. Controlled execution. Reliable results.",
      detailParagraphs: ["Successful drydock projects require thorough preparation, technical expertise and close coordination between shipowners, shipyards, classification societies, suppliers and contractors. BMare manages the drydock process from initial planning through to final delivery, ensuring repairs and maintenance are completed efficiently, within agreed schedules and budgets."],
      features: ["Planning & preparation", "Shipyard & contractor coordination", "Technical supervision", "HSE & quality control", "Cost & schedule control"],
      detailSections: [
        { title: "Our focus includes", items: ["Planning & Preparation - Pre-docking inspections, repair specifications, work scopes, budgets and schedules.", "Shipyard & Contractor Coordination - Managing communication and coordination between shipyards, contractors and suppliers.", "Class & Flag State Coordination - Coordinating surveys, inspections and required approvals.", "Technical Supervision - Monitoring repair works and ensuring compliance with agreed specifications.", "HSE & Quality Control - Monitoring safety arrangements, workmanship and quality standards.", "Environmental Compliance - Supporting environmentally responsible repair activities, waste management and pollution prevention in accordance with applicable requirements.", "Spare Parts & Material Readiness - Ensuring required parts and materials are available when needed.", "Cost & Schedule Control - Monitoring progress, budgets, additional works and variations.", "Progress Reporting - Keeping owners informed throughout the drydock project.", "Trials & Final Handover - Coordinating testing, final inspections, documentation and vessel delivery."] },
        { title: "Applicable Regulations & Requirements", body: ["Drydock projects take into account relevant maritime requirements, including:"], items: ["SOLAS - Applicable vessel safety requirements.", "MARPOL - Pollution prevention requirements.", "Class Requirements - Applicable surveys, inspections and technical standards.", "Flag State Requirements - Relevant statutory inspections and certification." ] },
        { title: "Applicability", body: ["Applicable requirements depend on vessel type, repair scope, classification society and flag state."] },
      ],
      detailClosing: { heading: "BMARE ENSURES YOUR DRYDOCK PROJECTS ARE PROFESSIONALLY MANAGED, CONTROLLED AND COMPLETED, WITH YOUR VESSEL READY TO RETURN TO SERVICE." },
    },
  }),
  operations: reviewedServiceText({
    es: {
      title: "Operaciones",
      modalHeading: "Operaciones",
      modalSubtitle: "Gestión eficiente de viajes y operaciones marítimas.",
      modalLead: "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA.",
      modalDescription: "Coordinamos las operaciones diarias de los buques, los viajes, las actividades de carga, las escalas portuarias y la logística. Mediante una planificación proactiva, una supervisión continua y una comunicación eficaz, garantizamos la continuidad operativa, la eficiencia de los viajes y la fiabilidad del servicio.",
      detailHeading: "Gestión eficiente de viajes y operaciones marítimas.",
      detailParagraphs: ["Operaciones diarias, planificación de viajes, carga y descarga, coordinación portuaria, suministro de combustible, seguimiento de flotas, gestión de incidencias y apoyo comercial."],
      features: ["Operaciones diarias", "Planificación de viajes", "Carga y descarga", "Coordinación portuaria", "Suministro de combustible"],
    },
    en: {
      title: "Operations",
      modalHeading: "OPERATIONS",
      modalSubtitle: "Efficient voyage and operational management.",
      modalLead: "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE.",
      modalDescription: "We coordinate daily vessel operations, voyages, cargo activities, port calls and logistics. Through proactive planning, continuous monitoring and effective communication, we ensure operational continuity, efficient voyages and reliable service delivery.",
      detailHeading: "EFFICIENT VOYAGE AND OPERATIONAL MANAGEMENT.",
      detailParagraphs: ["We coordinate daily vessel operations, voyages, cargo activities and port logistics. Through proactive planning, continuous monitoring and effective communication, we ensure operational continuity, minimise delays and maximise fleet performance."],
      features: ["Daily operations coordination", "Voyage management", "Cargo operations", "Port & logistics coordination", "Fleet monitoring"],
      detailSections: [
        { title: "OUR OPERATIONAL SERVICES", items: ["Daily Operations - Coordination and monitoring of daily vessel activities, schedules and operational requirements.", "Voyage Management - Voyage planning, schedule monitoring and operational follow-up to ensure efficient and timely voyages.", "Cargo Operations - Coordination of cargo handling, loading and discharging activities, and terminal communication.", "Port & Logistics Coordination - Coordination of port calls, berth arrangements, terminal operations and logistical requirements.", "Port Agency & Call Coordination - Liaison with local agents, port authorities and service providers for vessel arrivals, departures and port formalities.", "Bunkering & Operational Supplies - Coordination of fuel, lubricants, bunkering arrangements and essential vessel supplies.", "Fleet Monitoring & Performance - Monitoring vessel availability, operational performance and schedules to support efficient fleet utilisation.", "Operational Communication, Reporting & Disruption Management - Communication with vessels and shore-based parties, operational reporting and coordination of delays or unforeseen circumstances.", "Sale & Purchase (S&P) Coordination - Supporting vessel owners with the coordination of vessel sale and purchase activities, including communication with potential buyers, sellers, brokers and other relevant commercial parties to facilitate the transaction process.", "Commercial Coordination & Vessel Employment - Supporting vessel owners with commercial coordination, cargo opportunities and communication with charterers, brokers and other commercial partners to facilitate efficient vessel employment and fleet utilisation."] },
      ],
      detailClosing: { heading: "BMare ensures careful planning, proactive coordination and clear communication, we keep vessels productive, voyages efficient and operations running smoothly." },
    },
  }),
  quality: reviewedServiceText({
    es: {
      title: "Calidad y cumplimiento normativo",
      modalHeading: "Calidad y cumplimiento normativo",
      modalSubtitle: "Cumplimiento normativo y seguridad en todas las operaciones.",
      modalLead: "GARANTIZAMOS ELEVADOS ESTÁNDARES DE SEGURIDAD, CALIDAD Y CUMPLIMIENTO NORMATIVO.",
      modalDescription: "Ayudamos a las flotas a mantener los estándares de seguridad marítima, calidad y cumplimiento normativo mediante procedimientos eficaces, gestión de riesgos y mejora continua.",
      detailHeading: "Cumplimiento normativo y seguridad en todas las operaciones.",
      detailParagraphs: ["Normativa marítima, gestión de seguridad, calidad, códigos ISM e ISPS, auditorías, inspecciones, prevención de riesgos, emergencias, incidentes, documentación y formación."],
      features: ["Seguimiento normativo", "Gestión de seguridad", "Auditorías e inspecciones", "Prevención de riesgos", "Emergencias y formación"],
    },
    en: {
      title: "Quality & Compliance",
      modalHeading: "QUALITY & COMPLIANCE",
      modalSubtitle: "Regulatory compliance and safety across all operations.",
      modalLead: "WE ENSURE HIGH STANDARDS OF SAFETY, QUALITY AND COMPLIANCE.",
      modalDescription: "We support fleets in maintaining maritime safety, quality and regulatory standards through effective procedures, risk management and continuous improvement.",
      detailHeading: "Regulatory compliance and safety across all operations.",
      detailParagraphs: ["We support the implementation and monitoring of maritime regulations, safety procedures and quality standards, promoting safe, responsible and compliant operations across the fleet."],
      features: ["Regulatory compliance", "Safety management", "Quality management", "ISM & ISPS compliance", "Audits and inspections"],
      detailSections: [
        { title: "OUR QUALITY & COMPLIANCE SERVICES", items: ["Regulatory Compliance - Monitoring applicable maritime regulations, international conventions and industry requirements.", "Safety Management - Supporting the implementation and monitoring of the Safety Management System (SMS), including Designated Person Ashore (DPA) responsibilities and communication between vessels and shore management.", "Quality Management - Maintaining quality standards, consistent procedures and effective management practices.", "ISM & ISPS Compliance - Supporting the implementation and monitoring of applicable safety and security management requirements.", "Environmental Compliance - Supporting compliance with environmental regulations and responsible maritime practices.", "Audits & Inspections - Coordination and follow-up of internal and external audits, inspections, findings and corrective actions.", "Risk Assessment & Prevention - Identifying operational risks and supporting preventive measures to reduce incidents and improve safety.", "Emergency Preparedness & Response - Developing, maintaining and reviewing emergency response plans (ERP), procedures and drills, ensuring clear responsibilities and effective communication during maritime emergencies.", "Incident & Near-Miss Management - Reporting, investigation and follow-up of incidents, accidents and near misses, including corrective actions.", "Documentation, Training & Continuous Improvement - Maintaining compliance records, promoting safety awareness and supporting continuous improvement across all operations."] },
      ],
      detailClosing: { heading: "We believe that quality, safety and compliance are fundamental to responsible ship management. Through structured procedures, proactive monitoring and continuous improvement, we promote a strong safety culture and high standards across the fleet." },
    },
  }),
  crewing: reviewedServiceText({
    es: {
      title: "Gestión de tripulaciones",
      modalHeading: "Gestión de tripulaciones",
      modalSubtitle: "Selección y supervisión de profesionales a bordo.",
      modalLead: "GARANTIZAMOS QUE LAS PERSONAS ADECUADAS ESTÉN A BORDO.",
      modalDescription: "Coordinamos la contratación, planificación, certificación y bienestar de las tripulaciones, garantizando la disponibilidad de personal cualificado y preparado para desarrollar operaciones marítimas seguras y eficientes.",
      detailHeading: "Selección y supervisión de profesionales a bordo.",
      detailParagraphs: ["Bienestar de las tripulaciones, cumplimiento del Convenio sobre el Trabajo Marítimo (MLC), viajes, visados, coordinación con gestores de tripulaciones, evaluación del desempeño, retención del talento y administración de nóminas."],
      features: ["Bienestar de las tripulaciones", "Cumplimiento MLC", "Viajes y visados", "Evaluación del desempeño", "Administración de nóminas"],
    },
    en: {
      title: "Crew Management",
      modalHeading: "CREW MANAGEMENT",
      modalSubtitle: "Selection and supervision of onboard professionals.",
      modalLead: "WE ENSURE THE RIGHT PEOPLE ARE ON BOARD.",
      modalDescription: "We coordinate crew recruitment, planning, certification and welfare, ensuring qualified and well-prepared personnel are available to support safe and efficient vessel operations.",
      detailHeading: "CREW MANAGEMENT",
      detailParagraphs: [],
      features: ["Crew welfare & support", "MLC & labour compliance", "Crew travel, visa & immigration", "Crew manager coordination", "Performance and retention", "Payroll administration"],
      detailSections: [
        { title: "CREW MANAGEMENT SERVICES", items: ["Crew Welfare & Support - Supporting seafarer wellbeing, working conditions, onboard welfare, crew relations and grievance handling throughout their assignments.", "MLC & Labour Compliance - Supporting compliance with the Maritime Labour Convention (MLC), including employment agreements, working and rest hours, accommodation and seafarer welfare.", "Crew Travel, Visa & Immigration - Coordination of crew changes, travel arrangements, visa applications, immigration formalities, joining instructions and repatriation.", "Crew Manager Coordination & Communication - Maintaining regular communication with crew managers, masters and onboard personnel to coordinate crew requirements, rotations and personnel matters.", "Performance, Evaluation & Retention - Monitoring crew performance, coordinating appraisals, identifying development needs and supporting long-term crew retention.", "Payroll & Crew Administration - Coordination of crew payroll, wage documentation, allotments and employment-related administrative matters."] },
      ],
      detailClosing: { heading: "We believe that qualified, motivated and well-supported seafarers are essential to safe and efficient vessel operations. Through careful selection, effective planning and continuous support, we ensure the right people are in the right positions, ready to perform their responsibilities." },
    },
  }),
  newbuildings: reviewedServiceText({
    es: {
      title: "Nuevas construcciones",
      modalHeading: "Nuevas construcciones",
      modalSubtitle: "Supervisión integral desde el diseño hasta la entrega.",
      modalLead: "GARANTIZAMOS LA CALIDAD Y EL CONTROL EN CADA ETAPA DE LA CONSTRUCCIÓN.",
      modalDescription: "Prestamos apoyo en proyectos de nueva construcción mediante supervisión técnica, seguimiento de obra, garantía de calidad y control de hitos, asegurando que los buques se construyan conforme a las especificaciones y requisitos acordados.",
      detailHeading: "Supervisión integral desde el diseño hasta la entrega.",
      detailParagraphs: ["Coordinación de proyectos, supervisión de astilleros, revisión de especificaciones, control de calidad, seguimiento presupuestario, inspecciones, pruebas de mar, entrega y seguimiento de garantías."],
      features: ["Coordinación de proyectos", "Supervisión de astilleros", "Revisión de especificaciones", "Control de calidad", "Pruebas de mar y entrega"],
    },
    en: {
      title: "Newbuildings",
      modalHeading: "NEWBUILDINGS",
      modalSubtitle: "Full supervision from design to delivery.",
      modalLead: "WE ENSURE QUALITY AND CONTROL AT EVERY STAGE OF CONSTRUCTION.",
      modalDescription: "We support newbuilding projects through technical supervision, construction monitoring, quality assurance and milestone control, ensuring vessels are built according to agreed specifications and requirements.",
      detailHeading: "Comprehensive newbuilding supervision and project coordination.",
      detailParagraphs: ["BMare provides comprehensive newbuilding supervision and project coordination, representing and protecting the interests of vessel owners throughout every stage of the construction process.", "We support vessel owners from initial planning and design development through construction, inspections, sea trials and final vessel delivery."],
      features: ["Newbuilding project coordination", "Newbuilding supervision", "Technical specification review", "Shipyard coordination", "Quality control and inspection"],
      detailSections: [
        { title: "Our Newbuilding Services", items: ["Newbuilding Project Coordination - Coordinating the newbuilding process between vessel owners, shipyards and other involved parties.", "Newbuilding Supervision - Representing the owner's interests and monitoring the construction process on behalf of the owner.", "Technical Specification Review - Reviewing technical specifications, plans and building requirements to ensure alignment with the owner's expectations.", "Shipyard Coordination - Maintaining communication and coordination with shipyards, designers, suppliers and subcontractors.", "Construction Progress Monitoring - Monitoring construction progress against agreed schedules, milestones and project requirements.", "Quality Control & Inspection - Monitoring workmanship, materials and compliance with agreed quality standards and specifications.", "Classification & Regulatory Compliance - Coordinating with classification societies and relevant authorities to support compliance with applicable rules and regulations.", "Contract & Specification Compliance - Monitoring compliance with the shipbuilding contract, agreed specifications, technical requirements and contractual milestones.", "Project Budget & Cost Control - Supporting the monitoring of project budgets, cost developments, variations and additional work throughout the construction period.", "Design Development & Technical Review - Following up on design development, technical drawings, engineering changes and proposed modifications in coordination with the owner and relevant parties.", "Health, Safety & Environmental Monitoring - Monitoring relevant health, safety and environmental requirements during the construction process.", "Sea Trials & Commissioning - Coordinating inspections, testing, sea trials and commissioning prior to delivery.", "Final Inspection & Vessel Delivery - Supporting final acceptance, documentation and handover of the completed vessel.", "Warranty & Post-Delivery Follow-up - Coordinating warranty claims, defect rectification and outstanding technical matters following vessel delivery."] },
      ],
      detailClosing: { heading: "At BMare, we represent and protect the interests of vessel owners throughout every stage of the newbuilding process. Through independent supervision, technical oversight, project coordination and close cooperation with all involved parties, we strive to ensure that every vessel is constructed in accordance with agreed specifications, contractual requirements, quality standards and project objectives." },
    },
  }),
  finance: reviewedServiceText({
    es: {
      title: "Finanzas y presupuestos",
      modalHeading: "Finanzas y presupuestos",
      modalSubtitle: "Gestión financiera, control presupuestario y apoyo a la inversión.",
      modalLead: "APOYAMOS LAS DECISIONES FINANCIERAS SÓLIDAS Y EL VALOR A LARGO PLAZO DE SUS ACTIVOS MARÍTIMOS.",
      modalDescription: "BMARE ofrece supervisión financiera, elaboración de presupuestos, previsiones y apoyo administrativo a los armadores, ayudándoles a mantener la transparencia financiera, controlar los costes operativos y explorar oportunidades de inversión a través de nuestra red profesional marítima.",
      detailHeading: "Gestión financiera, control presupuestario y apoyo a la inversión.",
      detailParagraphs: ["Presupuestos, previsiones, informes financieros, control de costes, administración, cuentas por pagar y cobrar, rentabilidad, optimización financiera y apoyo a inversiones."],
      features: ["Presupuestos y previsiones", "Informes financieros", "Control de costes", "Administración financiera", "Apoyo a inversiones"],
    },
    en: {
      title: "Finance & Budgeting",
      modalHeading: "FINANCE & BUDGETING",
      modalSubtitle: "Financial management, budget control and investment support.",
      modalLead: "WE SUPPORT SOUND FINANCIAL DECISIONS AND THE LONG-TERM VALUE OF YOUR MARITIME ASSETS.",
      modalDescription: "BMare provides financial oversight, budgeting, forecasting and administrative support to vessel owners, helping maintain financial transparency, control operational costs and explore investment opportunities through our professional maritime network.",
      detailHeading: "Financial management, administrative coordination and investment support.",
      detailParagraphs: ["BMare supports vessel owners with financial management, administrative coordination and investment-related opportunities, providing greater financial insight and control over maritime assets."],
      features: ["Budgeting & financial forecasting", "Monthly & quarterly reporting", "Financial & cost control", "Financial administration", "Investment & funding support"],
      detailSections: [
        { title: "Our Finance & Budgeting Services", items: ["Budgeting & Financial Forecasting - Preparation and monitoring of annual budgets, financial plans and forecasts.", "Monthly & Quarterly Reporting - Periodic financial figures, performance reviews and budget comparisons.", "Financial & Cost Control - Monitoring operational expenditure, cash flow and vessel running costs.", "Financial Administration - Coordination of financial documentation, invoices, payments and administrative matters.", "Accounts Payable & Receivable Coordination - Monitoring outstanding invoices, payments due and receivables.", "Financial Performance Monitoring - Reviewing vessel profitability, operating costs and financial performance.", "Cost Optimisation - Identifying opportunities to improve cost efficiency and financial performance.", "Investment & Funding Support - Supporting business plans and financial projections, and using BMare's professional maritime network to connect vessel owners with potential investors and financing opportunities."] },
      ],
      detailClosing: { heading: "At BMare, we combine financial oversight, practical management support and established industry connections to help vessel owners maintain financial control, make informed decisions and explore opportunities for sustainable growth.", paragraphs: ["BMARE - PROFESSIONAL SUPPORT. RELIABLE PARTNERSHIP. MARITIME EXCELLENCE."] },
    },
  }),
  sustainability: reviewedServiceText({
    es: {
      title: "Sostenibilidad",
      modalHeading: "Sostenibilidad",
      modalSubtitle: "Supervisión ambiental, informes, cumplimiento normativo y reducción de emisiones.",
      modalLead: "AYUDAMOS A LOS ARMADORES A SUPERVISAR, GESTIONAR Y MEJORAR SU RENDIMIENTO MEDIOAMBIENTAL.",
      modalDescription: "BMARE proporciona servicios integrales de supervisión ambiental, elaboración de informes y coordinación, ayudando a los armadores a gestionar las emisiones, el consumo de combustible, el cumplimiento normativo y los costes asociados al CO₂ en toda su flota.",
      detailHeading: "Supervisión ambiental, informes, cumplimiento normativo y reducción de emisiones.",
      detailParagraphs: ["Informes ambientales, EU MRV, EU ETS, FuelEU Maritime, IMO DCS, CII, EEXI, SEEMP, gestión de derechos de emisión, eficiencia energética, residuos y prevención de la contaminación."],
      features: ["Supervisión ambiental", "Informes y cumplimiento", "Emisiones y eficiencia", "Gestión de residuos", "Prevención de la contaminación"],
    },
    en: {
      title: "Sustainability",
      modalHeading: "SUSTAINABILITY",
      modalSubtitle: "Environmental monitoring, reporting, compliance and emission reduction.",
      modalLead: "WE HELP VESSEL OWNERS MONITOR, MANAGE AND IMPROVE THEIR ENVIRONMENTAL PERFORMANCE.",
      modalDescription: "BMare provides comprehensive environmental monitoring, reporting and coordination support, helping vessel owners manage emissions, fuel consumption, regulatory compliance and CO₂-related costs throughout their fleet.",
      detailHeading: "Environmental management, compliance, emissions reporting and cost management.",
      detailParagraphs: ["BMare supports vessel owners with environmental management, regulatory compliance, emissions reporting and cost management, providing a structured approach to sustainability across their fleet."],
      features: ["Environmental monitoring & reporting", "EU MRV, EU ETS & FuelEU Maritime", "IMO DCS, CII, EEXI & SEEMP", "Emissions & fuel efficiency", "Waste & pollution prevention"],
      detailSections: [
        { title: "Our Sustainability Services", items: ["Environmental Monitoring & Reporting - Environmental data collection, monitoring, documentation and periodic fleet reporting.", "EU MRV, EU ETS & FuelEU Maritime - Monitoring, reporting and compliance coordination under applicable European maritime regulations.", "IMO DCS, CII, EEXI & SEEMP - Supporting fuel consumption reporting, carbon intensity monitoring and energy efficiency requirements.", "CO₂ Emissions Cost Management & Allowance Procurement - Coordinating EU Allowance (EUA) sourcing and purchases through relevant market participants, monitoring exposure and managing emissions-related costs.", "Emissions & Fuel Efficiency - Monitoring fuel consumption, CO₂ emissions and identifying opportunities to improve operational efficiency.", "Environmental Compliance & Documentation - Maintaining environmental records, regulatory follow-up and audit preparation.", "Environmental Performance & Sustainability Planning - Reviewing environmental performance, setting improvement objectives and identifying energy-saving opportunities.", "Waste & Pollution Prevention - Supporting waste management, discharge monitoring and pollution prevention procedures.", "SMS & ISM Environmental Integration - Integrating environmental requirements, monitoring and reporting procedures into the vessel's Safety Management System, both onboard and ashore."] },
      ],
      detailClosing: { heading: "At BMare, we combine environmental monitoring, regulatory coordination and practical cost management to help vessel owners maintain compliance, control emissions-related expenditure and improve the environmental performance of their fleet.", paragraphs: ["BMare - Professional Support - Reliable Partnership - Maritime Excellence."] },
    },
  }),
  marineInsurance: reviewedServiceText({
    es: {
      title: "Seguros marítimos y gestión de riesgos",
      modalHeading: "Seguros marítimos y gestión de riesgos",
      modalSubtitle: "Asesoramiento independiente para proteger sus activos y gestionar los riesgos marítimos.",
      modalLead: "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA.",
      modalDescription: "Ayudamos a armadores y operadores a proteger sus buques, personas y operaciones mediante asesoramiento independiente en seguros, soluciones de cobertura adaptadas y gestión profesional de riesgos.",
      detailHeading: "Asesoramiento independiente para proteger sus activos y gestionar los riesgos marítimos.",
      detailParagraphs: ["Seguros de casco y maquinaria, protección e indemnización, riesgos de guerra, pérdida de ingresos por inactividad, responsabilidad civil marítima, contratación y renovación de pólizas, gestión de siniestros, evaluación de riesgos y control de primas. También se incorpora un módulo digital integrado de análisis de riesgos que reúne información técnica, operativa, ambiental, de tripulaciones y seguros."],
      features: ["Seguros de casco y maquinaria", "Protección e indemnización", "Responsabilidad civil marítima", "Gestión de siniestros", "Evaluación de riesgos", "Renovación de pólizas"],
    },
    en: {
      title: "Marine Insurance & Risk Management",
      modalHeading: "MARINE INSURANCE & RISK MANAGEMENT",
      modalSubtitle: "Independent advice to protect your assets and manage maritime risks.",
      modalLead: "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE.",
      modalDescription: "We support vessel owners and operators in protecting their vessels, people and operations through independent insurance advice, tailored coverage solutions and professional risk management.",
      detailHeading: "Independent advice to protect your assets and manage maritime risks.",
      detailParagraphs: ["BMare supports vessel owners, ship managers and maritime stakeholders with independent marine insurance advice, insurance placement support and professional risk management. Our approach focuses on protecting assets, controlling exposure and safeguarding the continuity of maritime operations."],
      features: ["Hull & Machinery (H&M)", "Protection & Indemnity (P&I)", "War risks and loss of hire", "Marine liability", "Claims assistance", "Risk assessment and insurance review"],
      detailSections: [
        { title: "Our Marine Insurance & Risk Management Services", items: ["Hull & Machinery (H&M) - Insurance solutions covering physical damage to vessels, machinery and associated equipment.", "Protection & Indemnity (P&I) - Support with liability insurance, including third-party claims, crew-related liabilities, pollution and other maritime exposures.", "War Risks Insurance - Insurance arrangements addressing war-related risks, trading area restrictions and additional premiums.", "Loss of Hire Insurance - Protection against loss of income resulting from insured incidents affecting vessel operations.", "Marine Liability & Additional Covers - Support with relevant marine insurance requirements tailored to vessel operations and trading profiles.", "Insurance Placement & Renewal - Assistance with quotations, market presentations, policy negotiations and annual renewals.", "Claims Assistance & Coordination - Support throughout the claims process, including documentation, insurer communication and follow-up.", "Risk Assessment & Insurance Review - Reviewing existing insurance arrangements, identifying potential coverage gaps and assessing operational and financial exposures.", "Premium & Cost Management - Reviewing insurance costs, deductibles, policy conditions and coverage structures to identify opportunities for improved value.", "Insurance Documentation & Compliance - Assistance with policy reviews, certificates, insurance records and contractual insurance requirements."] },
        { title: "Digital Insurance Module - Integrated Vessel Risk Intelligence", body: ["BMare developed an integrated digital dashboard that goes beyond traditional insurance monitoring. It connects technical, operational, environmental and human factors to provide shipowners, fleet managers and insurers with a comprehensive, at-a-glance overview of vessel condition, performance and risk exposure.", "The dashboard brings together key information covering:"], items: ["Safety & Incidents - Accidents, near misses, injuries and safety performance.", "Technical Condition & Maintenance - PMS status, engine performance, machinery monitoring, deficiencies and breakdowns.", "Fuel & Environmental Performance - Fuel consumption, CO₂ emissions, energy efficiency and environmental compliance.", "Crew & Manning - Crew qualifications, certifications, manning compliance and crew-related incidents.", "Inspections & Compliance - Class surveys, PSC inspections, audits and outstanding deficiencies.", "Vessel Operations - Operational availability, downtime, off-hire periods and performance trends.", "Insurance & Claims - Insurance exposure, claims history, incidents and follow-up actions.", "Risk Monitoring & Analysis - Identifying trends, recurring issues and potential areas of increased operational and insurance risk."] },
      ],
      detailClosing: { heading: "More than an insurance overview - an integrated view of vessel risk, performance and operational reliability.", paragraphs: ["At BMare, we believe effective marine insurance is about more than simply arranging policies. It requires an understanding of vessel operations, technical condition, trading patterns and the risks associated with maritime activities."] },
    },
  }),
};

export const services: Service[] = baseServices.map((service) => ({
  ...service,
  ...(reviewCopyByService[service.key] ?? {}),
}));

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
