import type { Locale } from "./content";

export type LegalSubsection = { title: string; body: string };

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  items?: LegalSubsection[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  closing: string[];
};

export const legalDocuments: Record<"privacy" | "legalNotice", Record<Locale, LegalDocument>> = {
  privacy: {
    es: {
      title: "Política de privacidad",
      intro: "Información sobre el tratamiento de datos personales en BMARE.",
      updated: "Última actualización: 16 de noviembre de 2026",
      sections: [
        {
          title: "1. Responsable del tratamiento",
          paragraphs: [
            "En BMARE Ship Management, S.L. (en adelante, «BMARE») respetamos la privacidad de las personas que visitan nuestro sitio web y nos comprometemos a proteger sus datos personales, garantizando un tratamiento transparente, seguro y conforme a la legislación vigente.",
            "En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), facilitamos la siguiente información:",
          ],
          bullets: [
            "Razón social: BMARE SHIP MANAGEMENT, S.L.",
            "CIF: B21877410",
            "Domicilio social: Lugar Beldoña, 39 A, 15318 Abegondo, A Coruña, España.",
            "Correo electrónico: pamor@bmareshipmanagement.com",
            "Sitio web: www.bmareshipmanagement.com",
          ],
        },
        {
          title: "2. Datos personales que recopilamos",
          paragraphs: [
            "BMARE podrá recopilar y tratar los datos personales facilitados voluntariamente por los usuarios a través de los formularios de contacto, correos electrónicos y demás canales de comunicación disponibles.",
            "Estos datos podrán incluir:",
            "Asimismo, podrán tratarse determinados datos técnicos necesarios para el funcionamiento, mantenimiento y seguridad del sitio web, como la dirección IP y los registros técnicos de acceso.",
            "Solicitamos a los usuarios que no incluyan datos personales sensibles o información confidencial innecesaria en los formularios de contacto.",
          ],
          bullets: [
            "Nombre y apellidos.",
            "Empresa u organización a la que pertenece.",
            "Cargo o responsabilidad profesional.",
            "Dirección de correo electrónico.",
            "Número de teléfono.",
            "Información facilitada en consultas, solicitudes de servicios o comunicaciones profesionales.",
          ],
        },
        {
          title: "3. Finalidades del tratamiento",
          items: [
            { title: "Atención de consultas y solicitudes", body: "Responder a solicitudes de información, consultas profesionales y comunicaciones recibidas a través del sitio web." },
            { title: "Gestión de relaciones comerciales y profesionales", body: "Mantener comunicaciones con clientes, potenciales clientes, proveedores, colaboradores y otros profesionales del sector marítimo." },
            { title: "Preparación y prestación de servicios", body: "Elaborar propuestas, gestionar solicitudes y desarrollar las relaciones precontractuales o contractuales correspondientes a los servicios de BMARE." },
            { title: "Cumplimiento de obligaciones legales", body: "Atender las obligaciones administrativas, fiscales, mercantiles y demás responsabilidades legales aplicables." },
            { title: "Seguridad y mantenimiento del sitio web", body: "Garantizar su correcto funcionamiento, prevenir accesos no autorizados y detectar posibles incidencias de seguridad." },
            { title: "Comunicaciones comerciales", body: "Enviar información sobre actividades, servicios o novedades de BMARE únicamente cuando exista una base jurídica que lo permita y respetando los derechos de los destinatarios." },
          ],
        },
        {
          title: "4. Legitimación para el tratamiento",
          paragraphs: ["Las bases jurídicas que permiten tratar los datos personales son, según corresponda:"],
          bullets: [
            "Consentimiento del interesado: cuando el usuario autorice expresamente un tratamiento que lo requiera.",
            "Aplicación de medidas precontractuales o ejecución de un contrato: cuando el tratamiento sea necesario para atender una solicitud de servicios o desarrollar una relación contractual.",
            "Cumplimiento de obligaciones legales: cuando BMARE deba tratar determinados datos para cumplir la normativa aplicable.",
            "Interés legítimo: para determinadas comunicaciones profesionales, medidas de seguridad o gestión de relaciones empresariales, siempre que dicho interés no prevalezca sobre los derechos y libertades de los interesados.",
          ],
        },
        {
          title: "5. Conservación de los datos",
          paragraphs: [
            "Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron recopilados.",
            "Los datos relacionados con consultas profesionales se conservarán mientras resulte necesario para atenderlas y realizar el seguimiento correspondiente.",
            "Los datos vinculados a relaciones contractuales se conservarán durante la vigencia de dichas relaciones y, posteriormente, durante los plazos establecidos por las obligaciones legales aplicables.",
            "Cuando proceda su supresión, los datos podrán permanecer bloqueados durante los plazos de responsabilidad legal exigibles.",
          ],
        },
        {
          title: "6. Destinatarios de los datos",
          paragraphs: [
            "BMARE no vende ni comercializa los datos personales de los usuarios.",
            "Los datos podrán ser comunicados a administraciones públicas, autoridades competentes u otros destinatarios cuando exista una obligación legal.",
            "También podrán acceder a determinados datos los proveedores tecnológicos o profesionales que prestan servicios a BMARE, como alojamiento web, correo electrónico, mantenimiento informático o soporte administrativo.",
            "Cuando estos proveedores actúen como encargados del tratamiento, BMARE establecerá los correspondientes acuerdos y garantías de protección de datos.",
          ],
        },
        {
          title: "7. Transferencias internacionales",
          paragraphs: [
            "La actividad de BMARE se desarrolla en un entorno marítimo internacional, con posibles relaciones profesionales con empresas, operadores, proveedores y colaboradores establecidos en diferentes países.",
            "Cuando el tratamiento de datos implique transferencias internacionales fuera del Espacio Económico Europeo, BMARE aplicará las garantías exigidas por el RGPD, como decisiones de adecuación, cláusulas contractuales tipo u otros mecanismos legalmente reconocidos.",
          ],
        },
        {
          title: "8. Seguridad y confidencialidad",
          paragraphs: [
            "BMARE adoptará medidas técnicas y organizativas apropiadas para proteger los datos personales frente a su destrucción, pérdida, alteración, divulgación o acceso no autorizado.",
            "Estas medidas se establecerán atendiendo a los riesgos asociados al tratamiento, la naturaleza de la información y las tecnologías utilizadas.",
            "El acceso a los datos personales estará limitado a quienes necesiten conocerlos para desarrollar funciones legítimas y autorizadas.",
          ],
        },
        {
          title: "9. Derechos de las personas interesadas",
          paragraphs: ["Los usuarios podrán ejercer los derechos reconocidos por la normativa de protección de datos:"],
          bullets: [
            "Acceso: conocer qué datos personales trata BMARE.",
            "Rectificación: solicitar la corrección de datos inexactos o incompletos.",
            "Supresión: solicitar la eliminación de sus datos cuando proceda.",
            "Oposición: oponerse a determinados tratamientos.",
            "Limitación: solicitar la restricción del tratamiento en los supuestos legalmente previstos.",
            "Portabilidad: recibir o transmitir sus datos cuando resulte aplicable.",
            "Retirada del consentimiento: retirar en cualquier momento el consentimiento previamente otorgado, sin afectar a la licitud del tratamiento anterior.",
          ],
          paragraphs: [
            "Para ejercer estos derechos, el interesado podrá enviar una solicitud a:",
            "pamor@bmareshipmanagement.com",
            "BMARE podrá solicitar información adicional cuando resulte necesario para verificar la identidad del solicitante.",
            "Asimismo, los interesados podrán presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), a través de www.aepd.es, si consideran que sus derechos no han sido debidamente atendidos.",
          ],
        },
        {
          title: "10. Cookies y tecnologías de seguimiento",
          paragraphs: [
            "El sitio web podrá utilizar cookies y tecnologías similares necesarias para su funcionamiento y, cuando corresponda, otras destinadas a obtener estadísticas de navegación o mejorar la experiencia de los usuarios.",
            "La utilización de cookies no esenciales estará sujeta al consentimiento previo del usuario cuando así lo exija la normativa.",
            "La información detallada sobre las cookies efectivamente utilizadas se facilitará en la correspondiente Política de Cookies.",
          ],
        },
        {
          title: "11. Enlaces a sitios web externos",
          paragraphs: [
            "El sitio web de BMARE podrá incluir enlaces a páginas de terceros, como colaboradores, proveedores, entidades del sector marítimo o redes profesionales.",
            "BMARE no controla las políticas de privacidad de estos sitios externos y recomienda consultar sus respectivas condiciones antes de facilitar información personal.",
          ],
        },
        {
          title: "12. Actualizaciones de esta política",
          paragraphs: [
            "BMARE podrá modificar la presente Política de Privacidad para adaptarla a cambios legislativos, tecnológicos u organizativos.",
            "La versión vigente estará disponible en el sitio web, con indicación de la fecha de su última actualización.",
          ],
        },
      ],
      closing: ["BMARE SHIP MANAGEMENT, S.L.", "Your Partner at Sea", "Contacto: pamor@bmareshipmanagement.com"],
    },
    en: {
      title: "Privacy policy",
      intro: "Information about the processing of personal data at BMARE.",
      updated: "Last updated: 16 November 2026",
      sections: [
        {
          title: "1. Data controller",
          paragraphs: [
            "At BMARE Ship Management, S.L. (hereinafter, “BMARE”), we respect the privacy of people who visit our website and are committed to protecting their personal data through transparent, secure processing that complies with applicable law.",
            "In accordance with Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), and Organic Law 3/2018 on the protection of personal data and the guarantee of digital rights, we provide the following information:",
          ],
          bullets: [
            "Corporate name: BMARE SHIP MANAGEMENT, S.L.",
            "Tax ID (CIF): B21877410",
            "Registered office: Lugar Beldoña, 39 A, 15318 Abegondo, A Coruña, Spain.",
            "Email: pamor@bmareshipmanagement.com",
            "Website: www.bmareshipmanagement.com",
          ],
        },
        {
          title: "2. Personal data we collect",
          paragraphs: [
            "BMARE may collect and process personal data voluntarily provided by users through contact forms, email and other available communication channels.",
            "This data may include:",
            "Certain technical data necessary for the operation, maintenance and security of the website may also be processed, such as IP addresses and technical access logs.",
            "We ask users not to include sensitive personal data or unnecessary confidential information in contact forms.",
          ],
          bullets: [
            "First and last name.",
            "The company or organisation to which the person belongs.",
            "Professional position or responsibility.",
            "Email address.",
            "Telephone number.",
            "Information provided in enquiries, service requests or professional communications.",
          ],
        },
        {
          title: "3. Purposes of processing",
          items: [
            { title: "Handling enquiries and requests", body: "Responding to requests for information, professional enquiries and communications received through the website." },
            { title: "Managing business and professional relationships", body: "Maintaining communications with clients, prospective clients, suppliers, partners and other professionals in the maritime sector." },
            { title: "Preparing and providing services", body: "Preparing proposals, managing requests and developing the pre-contractual or contractual relationships associated with BMARE’s services." },
            { title: "Compliance with legal obligations", body: "Meeting applicable administrative, tax, commercial and other legal responsibilities." },
            { title: "Website security and maintenance", body: "Ensuring proper operation, preventing unauthorised access and detecting potential security incidents." },
            { title: "Commercial communications", body: "Sending information about BMARE activities, services or news only where there is a lawful basis to do so and respecting recipients’ rights." },
          ],
        },
        {
          title: "4. Legal basis for processing",
          paragraphs: ["The legal bases that may allow personal data to be processed are, as applicable:"],
          bullets: [
            "Consent: where the user expressly authorises processing that requires it.",
            "Pre-contractual measures or performance of a contract: where processing is necessary to respond to a service request or develop a contractual relationship.",
            "Compliance with legal obligations: where BMARE must process certain data to comply with applicable regulations.",
            "Legitimate interest: for certain professional communications, security measures or management of business relationships, provided that this interest does not override the rights and freedoms of the data subjects.",
          ],
        },
        {
          title: "5. Data retention",
          paragraphs: [
            "Personal data will be retained for as long as necessary to fulfil the purposes for which it was collected.",
            "Data relating to professional enquiries will be retained for as long as necessary to handle them and provide the relevant follow-up.",
            "Data linked to contractual relationships will be retained for the duration of those relationships and thereafter for the periods required by applicable legal obligations.",
            "Where deletion is appropriate, data may remain blocked for the applicable legal liability periods.",
          ],
        },
        {
          title: "6. Data recipients",
          paragraphs: [
            "BMARE does not sell or trade users’ personal data.",
            "Data may be disclosed to public authorities, competent bodies or other recipients where there is a legal obligation to do so.",
            "Certain data may also be accessed by technology or professional providers that provide services to BMARE, such as web hosting, email, IT maintenance or administrative support.",
            "Where these providers act as data processors, BMARE will put in place the relevant agreements and data-protection safeguards.",
          ],
        },
        {
          title: "7. International transfers",
          paragraphs: [
            "BMARE operates in an international maritime environment and may have professional relationships with companies, operators, suppliers and partners established in different countries.",
            "Where processing involves international transfers outside the European Economic Area, BMARE will apply the safeguards required by the GDPR, such as adequacy decisions, standard contractual clauses or other legally recognised mechanisms.",
          ],
        },
        {
          title: "8. Security and confidentiality",
          paragraphs: [
            "BMARE will adopt appropriate technical and organisational measures to protect personal data from destruction, loss, alteration, disclosure or unauthorised access.",
            "These measures will be established taking into account the risks associated with processing, the nature of the information and the technologies used.",
            "Access to personal data will be limited to those who need to know it in order to perform legitimate and authorised functions.",
          ],
        },
        {
          title: "9. Data-subject rights",
          paragraphs: ["Users may exercise the rights recognised by data-protection law:"],
          bullets: [
            "Access: find out which personal data BMARE processes.",
            "Rectification: request correction of inaccurate or incomplete data.",
            "Erasure: request deletion of data where applicable.",
            "Objection: object to certain processing activities.",
            "Restriction: request restriction of processing in the legally established circumstances.",
            "Portability: receive or transmit data where applicable.",
            "Withdrawal of consent: withdraw previously given consent at any time, without affecting the lawfulness of processing carried out before withdrawal.",
          ],
          paragraphs: [
            "To exercise these rights, the data subject may send a request to:",
            "pamor@bmareshipmanagement.com",
            "BMARE may request additional information where necessary to verify the applicant’s identity.",
            "Data subjects may also lodge a complaint with the Spanish Data Protection Agency (AEPD) through www.aepd.es if they believe their rights have not been properly addressed.",
          ],
        },
        {
          title: "10. Cookies and tracking technologies",
          paragraphs: [
            "The website may use cookies and similar technologies that are necessary for its operation and, where applicable, others intended to obtain browsing statistics or improve the user experience.",
            "The use of non-essential cookies will be subject to the user’s prior consent where required by law.",
            "Detailed information about the cookies actually used will be provided in the relevant Cookie Policy.",
          ],
        },
        {
          title: "11. Links to external websites",
          paragraphs: [
            "The BMARE website may include links to third-party pages, such as partners, suppliers, maritime-sector organisations or professional networks.",
            "BMARE does not control the privacy policies of these external websites and recommends reviewing their terms before providing personal information.",
          ],
        },
        {
          title: "12. Updates to this policy",
          paragraphs: [
            "BMARE may amend this Privacy Policy to reflect legislative, technological or organisational changes.",
            "The current version will be available on the website with its date of last update.",
          ],
        },
      ],
      closing: ["BMARE SHIP MANAGEMENT, S.L.", "Your Partner at Sea", "Contact: pamor@bmareshipmanagement.com"],
    },
  },
  legalNotice: {
    es: {
      title: "Aviso legal",
      intro: "Información legal y condiciones de uso del sitio web de BMARE.",
      updated: "Última actualización: 16 de noviembre de 2026",
      sections: [
        {
          title: "1. Información general e identificación del titular",
          paragraphs: [
            "En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el presente sitio web pertenece a:",
            "En adelante, la entidad titular será denominada «BMARE».",
          ],
          bullets: [
            "Razón social: BMARE SHIP MANAGEMENT, S.L.",
            "Nombre comercial: BMARE Ship Management",
            "CIF: B21877410",
            "Domicilio social: Lugar Beldoña, 39 A, 15318 Abegondo, A Coruña, España.",
            "Registro Mercantil: A Coruña.",
            "Hoja registral: C-66460.",
            "Correo electrónico: pamor@bmareshipmanagement.com",
            "Teléfono: +34 986 238 767",
            "Sitio web: www.bmareshipmanagement.com",
          ],
        },
        {
          title: "2. Objeto y finalidad del sitio web",
          paragraphs: [
            "El presente sitio web tiene como finalidad proporcionar información corporativa y profesional sobre BMARE, sus actividades, experiencia y servicios especializados para la industria marítima.",
            "BMARE ofrece soluciones de gestión, asesoramiento y soporte técnico y operativo dirigidas a armadores, gestores de flotas, operadores marítimos y otras organizaciones vinculadas al sector naval.",
            "Sus principales áreas de actividad comprenden:",
            "La información publicada tiene carácter general y corporativo. No constituye, por sí misma, una oferta contractual vinculante ni garantiza la disponibilidad de servicios concretos.",
          ],
          numbered: [
            "Gestión técnica y mantenimiento.",
            "Calidad y cumplimiento normativo.",
            "Operaciones marítimas.",
            "Gestión de varadas.",
            "Compras y aprovisionamiento.",
            "Ciberseguridad marítima.",
            "Gestión de tripulaciones.",
            "Finanzas y presupuestos.",
            "Nuevas construcciones.",
            "Sostenibilidad y gestión ambiental.",
            "Seguros marítimos y gestión de riesgos.",
          ],
        },
        {
          title: "3. Condiciones de acceso y utilización",
          paragraphs: [
            "El acceso y navegación por el sitio web atribuyen la condición de usuario e implican la aceptación de las condiciones de utilización establecidas en este Aviso Legal.",
            "El usuario se compromete a utilizar el sitio web de manera lícita, diligente y respetuosa con los derechos de BMARE y de terceros.",
            "Queda prohibido:",
            "BMARE podrá adoptar las medidas legalmente permitidas para prevenir o impedir usos indebidos de sus servicios digitales.",
          ],
          bullets: [
            "Utilizar el sitio web con fines ilícitos o fraudulentos.",
            "Introducir virus, programas maliciosos o cualquier tecnología que pueda perjudicar su funcionamiento.",
            "Intentar acceder sin autorización a sistemas, servidores o información restringida.",
            "Reproducir, distribuir o explotar comercialmente contenidos protegidos sin autorización.",
            "Realizar actividades que comprometan la seguridad, disponibilidad o integridad del sitio web.",
          ],
        },
        {
          title: "4. Propiedad intelectual e industrial",
          paragraphs: [
            "Los contenidos originales del sitio web, incluidos textos, diseños, elementos gráficos, logotipos, marcas, estructura, programación y demás materiales protegidos, pertenecen a BMARE o se utilizan con la correspondiente autorización de sus titulares.",
            "Todos los derechos de propiedad intelectual e industrial quedan reservados en los términos establecidos por la legislación vigente.",
            "La consulta y navegación por el sitio web no implican la cesión de derechos de explotación sobre sus contenidos.",
            "Queda prohibida su reproducción, transformación, distribución, comunicación pública o utilización comercial sin autorización previa, salvo en los supuestos legalmente permitidos.",
            "Las fotografías, ilustraciones, vídeos y otros recursos de terceros utilizados en el sitio web estarán sujetos a sus correspondientes licencias y condiciones de uso.",
          ],
        },
        {
          title: "5. Información sobre los servicios",
          paragraphs: [
            "BMARE desarrolla su actividad en el ámbito de la gestión y consultoría marítima, proporcionando soporte especializado en aspectos técnicos, operativos, económicos, ambientales y de cumplimiento normativo.",
            "Las descripciones de servicios incluidas en el sitio web tienen finalidad informativa y no constituyen un compromiso de prestación en condiciones determinadas.",
            "La contratación de cualquier servicio requerirá, cuando corresponda, una propuesta, acuerdo o contrato específico en el que se establezcan su alcance, condiciones, responsabilidades y honorarios.",
            "La información publicada no sustituye las evaluaciones, inspecciones, certificaciones, autorizaciones o asesoramientos especializados que puedan resultar necesarios conforme a la normativa marítima aplicable.",
          ],
        },
        {
          title: "6. Seguros marítimos y gestión de riesgos",
          paragraphs: [
            "La información relativa a seguros marítimos, coberturas, prevención de pérdidas y gestión de riesgos tiene carácter general y orientativo.",
            "Las referencias a seguros de casco y maquinaria (Hull & Machinery), protección e indemnización (P&I), tripulaciones, responsabilidad civil, contaminación, riesgos digitales y otras coberturas no constituyen una póliza de seguro, una garantía de cobertura ni una oferta vinculante de contratación.",
            "Las condiciones, límites, exclusiones y obligaciones de cualquier cobertura serán exclusivamente las recogidas en la documentación contractual correspondiente.",
            "Los servicios de asesoramiento y apoyo en materia de seguros se prestarán dentro del marco de las actividades legalmente permitidas a BMARE.",
            "En caso de realizar actividades sujetas a autorización, inscripción o supervisión administrativa, estas se desarrollarán únicamente cuando se disponga de la habilitación legal correspondiente.",
          ],
        },
        {
          title: "7. Responsabilidad sobre los contenidos",
          paragraphs: [
            "BMARE procurará mantener la información publicada actualizada, precisa y adecuada a sus finalidades.",
            "No obstante, los contenidos podrán contener errores involuntarios, omisiones o información que haya quedado desactualizada por cambios técnicos, comerciales o normativos.",
            "BMARE podrá modificar, actualizar o retirar contenidos sin necesidad de comunicación individual previa.",
            "La responsabilidad por los contenidos y servicios del sitio web se determinará conforme a la legislación aplicable, sin perjuicio de los derechos y garantías legalmente reconocidos a los usuarios.",
          ],
        },
        {
          title: "8. Disponibilidad y seguridad del sitio web",
          paragraphs: [
            "BMARE adoptará medidas razonables para garantizar el funcionamiento y la seguridad de su sitio web.",
            "Sin embargo, no puede garantizar su disponibilidad permanente ni la ausencia absoluta de interrupciones, errores técnicos o incidencias ajenas a su control.",
            "El sitio web podrá quedar temporalmente fuera de servicio por motivos de mantenimiento, actualización, seguridad o causas técnicas.",
            "BMARE no excluye las responsabilidades que legalmente le correspondan por daños derivados de su actuación.",
          ],
        },
        {
          title: "9. Enlaces a terceros",
          paragraphs: [
            "El sitio web podrá contener enlaces a páginas externas pertenecientes a otras empresas, entidades profesionales, proveedores, organizaciones marítimas o plataformas digitales.",
            "Estos enlaces se facilitan exclusivamente para ampliar información o facilitar el acceso a recursos relacionados.",
            "BMARE no controla de forma general los contenidos, políticas o prácticas de los sitios externos.",
            "La responsabilidad por dichos contenidos se regirá por la normativa aplicable.",
          ],
        },
        {
          title: "10. Protección de datos personales",
          paragraphs: [
            "BMARE tratará los datos personales de los usuarios de conformidad con el Reglamento General de Protección de Datos (RGPD), la Ley Orgánica 3/2018 y demás disposiciones aplicables.",
            "La información relativa al responsable del tratamiento, finalidades, legitimación, conservación y derechos de los interesados se encuentra disponible en la Política de Privacidad del sitio web.",
            "Los usuarios podrán dirigir cualquier consulta relacionada con el tratamiento de sus datos personales a:",
            "pamor@bmareshipmanagement.com",
          ],
        },
        {
          title: "11. Uso de cookies",
          paragraphs: [
            "El sitio web podrá utilizar cookies técnicas necesarias para su funcionamiento y otras tecnologías sujetas, cuando corresponda, al consentimiento del usuario.",
            "La información detallada sobre estas tecnologías se facilitará en la Política de Cookies.",
          ],
        },
        {
          title: "12. Modificación de las condiciones",
          paragraphs: [
            "BMARE se reserva el derecho de modificar este Aviso Legal para adaptarlo a cambios legislativos, técnicos, comerciales u organizativos.",
            "Las modificaciones serán aplicables desde su publicación en el sitio web, sin perjuicio de los derechos que correspondan a los usuarios conforme a la legislación vigente.",
          ],
        },
        {
          title: "13. Legislación aplicable y jurisdicción",
          paragraphs: [
            "El presente Aviso Legal se rige por la legislación española, sin perjuicio de las disposiciones imperativas que puedan resultar aplicables en otros territorios.",
            "Para cualquier controversia derivada del acceso o utilización del sitio web, serán competentes los juzgados y tribunales que correspondan conforme a las normas legales aplicables.",
            "Cuando la normativa permita un acuerdo válido de sumisión jurisdiccional entre profesionales o empresas, las partes podrán establecerlo expresamente.",
          ],
        },
      ],
      closing: ["BMARE SHIP MANAGEMENT, S.L.", "Your Partner at Sea", "Contacto: pamor@bmareshipmanagement.com"],
    },
    en: {
      title: "Legal notice",
      intro: "Legal information and terms of use for the BMARE website.",
      updated: "Last updated: 16 November 2026",
      sections: [
        {
          title: "1. General information and identification of the owner",
          paragraphs: [
            "In compliance with Article 10 of Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), this website is owned by:",
            "The owner will hereinafter be referred to as “BMARE”.",
          ],
          bullets: [
            "Corporate name: BMARE SHIP MANAGEMENT, S.L.",
            "Trading name: BMARE Ship Management",
            "Tax ID (CIF): B21877410",
            "Registered office: Lugar Beldoña, 39 A, 15318 Abegondo, A Coruña, Spain.",
            "Commercial Registry: A Coruña.",
            "Registration sheet: C-66460.",
            "Email: pamor@bmareshipmanagement.com",
            "Telephone: +34 986 238 767",
            "Website: www.bmareshipmanagement.com",
          ],
        },
        {
          title: "2. Purpose and scope of the website",
          paragraphs: [
            "The purpose of this website is to provide corporate and professional information about BMARE, its activities, experience and specialised services for the maritime industry.",
            "BMARE provides management, advisory and technical and operational support solutions for shipowners, fleet managers, maritime operators and other organisations connected with the naval sector.",
            "Its main areas of activity include:",
            "Published information is general and corporate in nature. It does not, by itself, constitute a binding contractual offer or guarantee the availability of specific services.",
          ],
          numbered: [
            "Technical management and maintenance.",
            "Quality and regulatory compliance.",
            "Maritime operations.",
            "Dry-dock management.",
            "Procurement and supply.",
            "Maritime cybersecurity.",
            "Crew management.",
            "Finance and budgeting.",
            "Newbuildings.",
            "Sustainability and environmental management.",
            "Marine insurance and risk management.",
          ],
        },
        {
          title: "3. Conditions of access and use",
          paragraphs: [
            "Accessing and browsing the website confers the status of user and implies acceptance of the terms of use set out in this Legal Notice.",
            "The user undertakes to use the website lawfully, diligently and respectfully towards BMARE’s rights and those of third parties.",
            "The following is prohibited:",
            "BMARE may take legally permitted measures to prevent or stop improper use of its digital services.",
          ],
          bullets: [
            "Using the website for unlawful or fraudulent purposes.",
            "Introducing viruses, malicious programmes or any technology that may impair its operation.",
            "Attempting to access systems, servers or restricted information without authorisation.",
            "Reproducing, distributing or commercially exploiting protected content without authorisation.",
            "Carrying out activities that compromise the security, availability or integrity of the website.",
          ],
        },
        {
          title: "4. Intellectual and industrial property",
          paragraphs: [
            "The original content of the website, including texts, designs, graphic elements, logos, trademarks, structure, programming and other protected materials, belongs to BMARE or is used with the relevant authorisation from its owners.",
            "All intellectual and industrial property rights are reserved under applicable law.",
            "Viewing and browsing the website do not imply the transfer of exploitation rights in its content.",
            "Reproduction, transformation, distribution, public communication or commercial use without prior authorisation is prohibited, except where legally permitted.",
            "Photographs, illustrations, videos and other third-party resources used on the website are subject to their corresponding licences and terms of use.",
          ],
        },
        {
          title: "5. Information about the services",
          paragraphs: [
            "BMARE operates in the field of maritime management and consultancy, providing specialised support on technical, operational, financial, environmental and regulatory-compliance matters.",
            "Service descriptions on the website are for information purposes and do not constitute a commitment to provide services under specific conditions.",
            "The engagement of any service will, where applicable, require a specific proposal, agreement or contract setting out its scope, conditions, responsibilities and fees.",
            "Published information does not replace any evaluations, inspections, certifications, authorisations or specialist advice that may be required under applicable maritime regulations.",
          ],
        },
        {
          title: "6. Marine insurance and risk management",
          paragraphs: [
            "Information concerning marine insurance, coverage, loss prevention and risk management is general and for guidance only.",
            "References to Hull & Machinery, Protection & Indemnity (P&I), crew, liability, pollution, digital risks and other coverage do not constitute an insurance policy, a coverage guarantee or a binding offer to contract.",
            "The terms, limits, exclusions and obligations of any coverage are exclusively those set out in the relevant contractual documentation.",
            "Insurance advisory and support services will be provided within the scope of activities legally permitted for BMARE.",
            "Where activities are subject to authorisation, registration or administrative supervision, they will only be carried out when the corresponding legal authorisation is available.",
          ],
        },
        {
          title: "7. Liability for content",
          paragraphs: [
            "BMARE will endeavour to keep published information up to date, accurate and suitable for its purposes.",
            "However, content may contain inadvertent errors, omissions or information that has become outdated due to technical, commercial or regulatory changes.",
            "BMARE may modify, update or remove content without prior individual notice.",
            "Liability for the website’s content and services will be determined in accordance with applicable law, without prejudice to the rights and guarantees legally recognised for users.",
          ],
        },
        {
          title: "8. Website availability and security",
          paragraphs: [
            "BMARE will take reasonable measures to ensure the operation and security of its website.",
            "However, it cannot guarantee permanent availability or the complete absence of interruptions, technical errors or incidents beyond its control.",
            "The website may be temporarily unavailable for maintenance, updates, security reasons or technical causes.",
            "BMARE does not exclude liabilities that may legally arise from its actions.",
          ],
        },
        {
          title: "9. Third-party links",
          paragraphs: [
            "The website may contain links to external pages belonging to other companies, professional bodies, suppliers, maritime organisations or digital platforms.",
            "These links are provided solely to expand information or facilitate access to related resources.",
            "BMARE does not generally control the content, policies or practices of external websites.",
            "Liability for such content will be governed by applicable law.",
          ],
        },
        {
          title: "10. Personal data protection",
          paragraphs: [
            "BMARE will process users’ personal data in accordance with the General Data Protection Regulation (GDPR), Organic Law 3/2018 and other applicable provisions.",
            "Information about the controller, purposes, legal bases, retention and data-subject rights is available in the website’s Privacy Policy.",
            "Users may direct any query related to the processing of their personal data to:",
            "pamor@bmareshipmanagement.com",
          ],
        },
        {
          title: "11. Use of cookies",
          paragraphs: [
            "The website may use technical cookies that are necessary for its operation and other technologies that, where applicable, are subject to the user’s consent.",
            "Detailed information about these technologies will be provided in the Cookie Policy.",
          ],
        },
        {
          title: "12. Amendment of the terms",
          paragraphs: [
            "BMARE reserves the right to amend this Legal Notice to reflect legislative, technical, commercial or organisational changes.",
            "Amendments will apply from their publication on the website, without prejudice to the rights users may have under applicable law.",
          ],
        },
        {
          title: "13. Applicable law and jurisdiction",
          paragraphs: [
            "This Legal Notice is governed by Spanish law, without prejudice to mandatory provisions that may apply in other territories.",
            "Any dispute arising from access to or use of the website will be submitted to the courts and tribunals having jurisdiction under applicable legal rules.",
            "Where applicable law permits a valid jurisdiction agreement between professionals or companies, the parties may expressly establish one.",
          ],
        },
      ],
      closing: ["BMARE SHIP MANAGEMENT, S.L.", "Your Partner at Sea", "Contact: pamor@bmareshipmanagement.com"],
    },
  },
};
