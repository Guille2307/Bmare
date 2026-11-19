"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { locations, navigation, services, type Locale, type Service } from "@/lib/content";
import type { LegalDocument } from "@/lib/legal-content";

const copy = {
  es: { eyebrow: "GESTIÓN INTELIGENTE DE FLOTAS MARÍTIMAS", title: "Te acompañamos en cada travesía", intro: "Gestión integral de flotas para buques mercantes, pesqueros y operaciones offshore.", discover: "DESCUBRE NUESTROS SERVICIOS", quote: ["Tu travesía,", "nuestra responsabilidad.", "Tu socio", "en cada ruta."], serviceLabel: "SERVICIOS", full: "VER SERVICIO COMPLETO", close: "Cerrar ficha", stats: ["Experiencia marítima", "Gestión integral de flotas", "Presencia internacional", "Compromiso ambiental"] },
  en: { eyebrow: "SMART MARITIME FLEET MANAGEMENT", title: "With you on every voyage", intro: "Integrated fleet management for merchant, fishing and offshore vessels.", discover: "EXPLORE OUR SERVICES", quote: ["Your voyage,", "our responsibility.", "Your partner", "on every route."], serviceLabel: "SERVICES", full: "VIEW FULL SERVICE", close: "Close service panel", stats: ["Maritime experience", "Integrated fleet management", "International presence", "Environmental commitment"] },
};

function hrefFor(locale: Locale, service: Service) {
  return locale === "es" ? `/servicios/${service.esSlug}` : `/en/services/${service.enSlug}`;
}

const homeServiceDescriptions: Record<Locale, Record<string, string>> = {
  es: {
    technical: "Optimización del mantenimiento y monitorización del buque.",
    quality: "Cumplimiento normativo y seguridad en todas las operaciones.",
    operations: "Gestión eficiente de viajes y operaciones.",
    drydock: "Planificación y supervisión de reparaciones en varada.",
    procurement: "Gestión eficiente de la cadena de suministro.",
    cybersecurity: "Protección de sistemas y datos del buque.",
    finance: "Control financiero y optimización de costes.",
    newbuildings: "Supervisión integral desde el diseño hasta la entrega.",
    crewing: "Selección y supervisión de profesionales a bordo.",
    sustainability: "Reducción de emisiones y mejora de la eficiencia energética.",
    marineInsurance: "Asesoramiento independiente para proteger activos y gestionar riesgos marítimos.",
  },
  en: {
    technical: "Maintenance optimisation and vessel monitoring.",
    quality: "Regulatory compliance and safety across all operations.",
    operations: "Efficient voyage and operational management.",
    drydock: "Planning and supervision of drydock repairs.",
    procurement: "Efficient supply-chain management.",
    cybersecurity: "Protection of vessel systems and data.",
    finance: "Financial control and cost optimisation.",
    newbuildings: "Full supervision from design to delivery.",
    crewing: "Selection and supervision of onboard professionals.",
    sustainability: "Emission reduction and energy-efficiency improvements.",
    marineInsurance: "Independent advice to protect assets and manage maritime risks.",
  },
};

function ServiceGlyph({ service }: { service: Service }) {
  if (service.iconSrc) return <img src={service.iconSrc} alt="" />;
  if (service.key === "crewing") return <svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8"><circle cx="32" cy="18" r="7"/><circle cx="15" cy="25" r="5"/><circle cx="49" cy="25" r="5"/><path d="M20 47c0-9 5-15 12-15s12 6 12 15M4 48c0-7 4-12 11-12 3 0 5 1 7 3M60 48c0-7-4-12-11-12-3 0-5 1-7 3"/></g></svg>;
  if (service.key === "sustainability") return <svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8"><path d="M34 54C15 49 9 35 13 14c20 2 33 14 31 31"/><path d="M18 42c9-2 18-8 27-19M33 34c0-8-2-14-7-20M29 36c-7 0-12-2-16-6"/></g></svg>;
  return <span>{service.icon}</span>;
}

export function Header({ locale, currentHref, alternateHref, autoHide = true }: { locale: Locale; currentHref: string; alternateHref: string; autoHide?: boolean }) {
  const [open, setOpen] = useState(false);
  const [autoHidden, setAutoHidden] = useState(false);
  useEffect(() => {
    if (!autoHide || !window.matchMedia("(min-width: 1181px)").matches) {
      setAutoHidden(false);
      return;
    }
    const timer = window.setTimeout(() => setAutoHidden(true), 2000);
    return () => window.clearTimeout(timer);
  }, [autoHide]);
  return (
    <header className={`site-header${autoHidden ? " is-auto-hidden" : ""}`}>
      <Link className="brand" href={locale === "es" ? "/" : "/en"} aria-label={locale === "es" ? "Inicio de BMARE" : "BMARE home"}>
        <img src="/assets/bmare-logo-official.png" alt={locale === "es" ? "BMARE Gestión naval" : "BMARE Ship Management"} />
      </Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>
        {open ? (locale === "es" ? "Cerrar" : "Close") : (locale === "es" ? "Menú" : "Menu")}
      </button>
      <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
        {navigation[locale].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="language-switch" aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}>
        <Link className={locale === "es" ? "active" : ""} href={locale === "es" ? currentHref : alternateHref}>ES</Link><span>|</span><Link className={locale === "en" ? "active" : ""} href={locale === "en" ? currentHref : alternateHref}>EN</Link>
      </div>
      <Link className="header-cta" href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "CONTACTA" : "CONTACT US"}</Link>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return <footer className="footer"><div className="footer-inner"><span>{locale === "es" ? "BMARE · GESTIÓN NAVAL © 2026" : "BMARE · SHIP MANAGEMENT © 2026"}</span><span><Link href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "Contacto" : "Locations"}</Link> · <Link href={locale === "es" ? "/politica-de-privacidad" : "/en/privacy-policy"}>{locale === "es" ? "Privacidad" : "Privacy"}</Link> · <Link href={locale === "es" ? "/aviso-legal" : "/en/legal-advice"}>{locale === "es" ? "Aviso legal" : "Legal notice"}</Link></span></div></footer>;
}

function PageShell({ locale, currentHref, alternateHref, autoHideHeader = true, children }: { locale: Locale; currentHref?: string; alternateHref: string; autoHideHeader?: boolean; children: React.ReactNode }) {
  return <><Link href="#main" className="skip-link">{locale === "es" ? "Saltar al contenido" : "Skip to content"}</Link><Header locale={locale} currentHref={currentHref ?? (locale === "es" ? "/" : "/en")} alternateHref={alternateHref} autoHide={autoHideHeader} /><main id="main" lang={locale}>{children}</main><Footer locale={locale} /></>;
}

function ServicePanel({ locale, service, onClose }: { locale: Locale; service: Service; onClose: () => void }) {
  const text = service[locale];
  const modalSubtitle = service.modalSubtitle?.[locale] ?? homeServiceDescriptions[locale][service.key];
  const modalLead = service.modalLead?.[locale] ?? (locale === "es" ? "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA." : "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE.");
  const modalDescription = service.modalDescription?.[locale] ?? text.summary;
  const modalFeatures = service.modalFeatures?.[locale];
  return <aside className="service-panel" aria-live="polite">
    <button className="panel-close" type="button" onClick={onClose} aria-label={copy[locale].close}>×</button>
    <div className="panel-heading"><span className="panel-icon" aria-hidden="true">{service.iconSrc ? <img src={service.iconSrc} alt="" /> : service.icon}</span><span className="panel-kicker">{text.title}</span></div>
    <h2>{service.modalHeading?.[locale] ?? (locale === "es" && service.key === "technical" ? <>Gestión técnica<br />y mantenimiento</> : text.title)}</h2>
    <p className="panel-service-intro">{modalSubtitle}</p>
    <p className="panel-lead">{modalLead}</p>
    <p>{modalDescription}</p>
    {modalFeatures && <><h3 className="panel-section-title">{service.modalAreasTitle?.[locale] ?? (locale === "es" ? "Áreas de especialización" : "Areas of expertise")}</h3><ul className="panel-feature-list">{modalFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}
    <img src={service.modalImage ?? service.image} alt="" />
    <div className="panel-actions"><Link className="lime-button" href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "HABLA CON NUESTRO EQUIPO" : "TALK TO OUR TEAM"} <span aria-hidden="true">→</span></Link><Link className="secondary-button" href={hrefFor(locale, service)}>{locale === "es" ? "MÁS INFORMACIÓN" : "MORE INFORMATION"}</Link></div>
  </aside>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<Service | null>(null);
  const text = copy[locale];
  useEffect(() => {
    if (!active || !window.matchMedia("(max-width: 900px)").matches) return;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
    };
  }, [active]);
  const positions: Record<string, { x: string; y: string }> = {
    technical: { x: "34%", y: "9%" }, quality: { x: "66%", y: "9%" },
    sustainability: { x: "18%", y: "28%" }, operations: { x: "82%", y: "28%" },
    crewing: { x: "10%", y: "49%" }, drydock: { x: "90%", y: "49%" },
    newbuildings: { x: "15%", y: "70%" }, procurement: { x: "85%", y: "70%" },
    finance: { x: "28%", y: "87%" }, cybersecurity: { x: "72%", y: "87%" },
    marineInsurance: { x: "50%", y: "95%" },
  };
  const executiveText = locale === "es" ? {
    paulaRole: "CEO",
    paulaQuote: "Conectamos experiencia, personas y soluciones para que tu flota avance con seguridad.",
    dirkRole: "Director General",
    dirkQuote: "Criterio técnico y experiencia operativa para anticipar desafíos y resolver incidencias antes de que se conviertan en urgencias.",
  } : {
    paulaRole: "CEO",
    paulaQuote: "We connect experience, people and solutions so your fleet can move forward safely.",
    dirkRole: "Managing Director",
    dirkQuote: "Technical judgement and operational experience to anticipate challenges and resolve issues before they become urgent.",
  };

  return <PageShell locale={locale} currentHref={locale === "es" ? "/" : "/en"} alternateHref={locale === "es" ? "/en" : "/"} autoHideHeader>
    <section className={`hero-stage${active ? " has-active" : ""}`}>
      <div className="home-grid">
        <div className="hero-copy">
          <span className="eyebrow">{text.eyebrow}</span><h1>{text.title}</h1><p>{text.intro}</p>
        </div>
        <div className="orbit-wrap" id="services">
          <div className="orbit" aria-label={text.serviceLabel}>
            {services.map((service) => {
              const position = positions[service.key] ?? { x: "50%", y: "50%" };
              return <button key={service.key} className={`petal petal-${service.key}`} type="button" style={{ "--x": position.x, "--y": position.y } as CSSProperties} aria-expanded={active?.key === service.key} onClick={() => setActive(active?.key === service.key ? null : service)}>
                <span className="petal-icon" aria-hidden="true"><ServiceGlyph service={service} /></span>
                <span className="petal-label">{service.key === "technical" ? <><span className="petal-label-line">{locale === "es" ? "Gestión técnica" : "Technical management"}</span><span className="petal-label-line">{locale === "es" ? "y mantenimiento" : "and maintenance"}</span></> : service[locale].title}</span>
              </button>;
            })}
            <div className="ship-core" aria-hidden="true" />
          </div>
        </div>
        {!active && <div className="quote">{text.quote.map((line) => <span key={line}>{line}<br /></span>)}</div>}
        {active && <button className="service-modal-backdrop" type="button" aria-label={copy[locale].close} onClick={() => setActive(null)} />}
        {active && <ServicePanel locale={locale} service={active} onClose={() => setActive(null)} />}
      </div>
      <div className="executive-pair">
        <article className="executive executive-paula">
          <img src="/assets/paula-hero-v2.png" alt="Paula Amor Freire" />
          <div className="executive-copy"><strong><a className="executive-link" href="https://www.linkedin.com/in/paula-amor-freire-10279467/" target="_blank" rel="noopener noreferrer" aria-label="Paula Amor Freire en LinkedIn">Paula Amor Freire</a></strong><span>{executiveText.paulaRole}</span><blockquote>“{executiveText.paulaQuote}”</blockquote></div>
        </article>
        <article className="executive executive-dirk">
          <img src="/assets/dirk-hero-v2.png" alt="Dirk Arends" />
          <div className="executive-copy"><strong><a className="executive-link" href="https://www.linkedin.com/in/dirk-arends/" target="_blank" rel="noopener noreferrer" aria-label="Dirk Arends en LinkedIn">Dirk Arends</a></strong><span>{executiveText.dirkRole}</span><blockquote>“{executiveText.dirkQuote}”</blockquote></div>
        </article>
      </div>
    </section>
    <section className="trust-bar">{text.stats.map((stat) => <span className="trust-item" key={stat}>{stat}</span>)}<div className="trust-actions"><Link className="lime-button trust-cta" href={locale === "es" ? "/servicios" : "/en/services"}>{text.discover}</Link><a className="trust-download" href={locale === "es" ? "/assets/bmare-corporate-profile-es.pdf" : "/assets/bmare-corporate-profile-en.pdf"} download={locale === "es" ? "bmare-dossier-corporativo.pdf" : "bmare-company-profile.pdf"}>{locale === "es" ? "Descargar dossier corporativo" : "Download Company Profile"}</a></div></section>
  </PageShell>;
}

function PageHero({ locale, title, intro }: { locale: Locale; title: string; intro: string }) {
  return <section className="page-hero"><span className="eyebrow">{locale === "es" ? "BMARE · GESTIÓN NAVAL" : "BMARE · SHIP MANAGEMENT"}</span><h1>{title}</h1><p>{intro}</p></section>;
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const text = locale === "es" ? { title: "Servicios marítimos integrales", intro: "Coordinamos cada dimensión de la gestión de buques para que tu flota avance con seguridad, eficiencia y visión de futuro." } : { title: "Integrated maritime services", intro: "We coordinate every dimension of vessel management so your fleet moves with safety, efficiency and a clear view of the future." };
  return <PageShell locale={locale} currentHref={locale === "es" ? "/servicios" : "/en/services"} alternateHref={locale === "es" ? "/en/services" : "/servicios"}><PageHero locale={locale} {...text} /><section className="content-section"><h2>{locale === "es" ? "Un socio para cada travesía" : "A partner for every voyage"}</h2><p>{locale === "es" ? "Explora nuestras áreas de trabajo y descubre cómo conectamos criterio técnico, coordinación operativa y control económico." : "Explore our areas of work and discover how we connect technical judgement, operational coordination and financial control."}</p><div className="cards-grid">{services.map((service) => <article className="service-card" key={service.key}><img src={service.modalImage ?? service.image} alt="" /><div className="card-body"><h3>{service[locale].title}</h3><p>{service[locale].summary}</p><Link href={hrefFor(locale, service)}>{locale === "es" ? "VER SERVICIO" : "VIEW SERVICE"} →</Link></div></article>)}</div><div className="locations-home-action"><Link className="lime-button service-home-button" href={locale === "es" ? "/" : "/en"}>{locale === "es" ? "VOLVER A INICIO" : "BACK TO HOME"}</Link></div></section></PageShell>;
}

export function ServiceDetailPage({ locale, service }: { locale: Locale; service: Service }) {
  const text = service[locale];
  const sectionTitle = text.sectionTitle ?? (locale === "es" ? "Ámbitos de trabajo" : "Areas of work");
  const detailHeading = text.detailHeading ?? (locale === "es" ? "Criterio técnico para avanzar" : "Technical judgement to move forward");
  const detailParagraphs = text.detailParagraphs ?? [locale === "es" ? "Integramos información técnica y operativa para facilitar decisiones oportunas, proteger tus activos y acompañar cada etapa de la travesía." : "We connect technical and operational information to support timely decisions, protect your assets and guide every stage of the voyage."];
  const detailSections = service.detailSections?.[locale];
  const detailClosing = service.detailClosing?.[locale];
  const detailLead = service.detailLead?.[locale];
  return <PageShell locale={locale} currentHref={hrefFor(locale, service)} alternateHref={locale === "es" ? `/en/services/${service.enSlug}` : `/servicios/${service.esSlug}`}><PageHero locale={locale} title={text.title} intro={text.summary} /><section className="content-section"><div className="cards-grid"><article className="service-card"><img src={service.detailImage ?? service.image} alt="" /><div className="card-body"><h3>{sectionTitle}</h3><ul className="feature-list">{text.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "HABLEMOS DE TU FLOTA" : "TALK TO OUR TEAM"} →</Link></div></article><article className="service-detail-copy"><h2>{detailHeading}</h2>{detailLead && <p className="service-detail-lead">{detailLead}</p>}{detailParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{detailSections?.map((section) => <section className="service-detail-section" key={section.title}><h3>{section.title}</h3>{section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && section.items.length > 0 && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}{detailClosing && <section className="service-detail-closing"><h3>{detailClosing.heading}</h3>{detailClosing.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{detailClosing.cta && <Link className="lime-button" href={locale === "es" ? "/localizaciones" : "/en/locations"}>{detailClosing.cta} <span aria-hidden="true">→</span></Link>}</section>}{text.detailTagline && <p className="service-detail-tagline">{text.detailTagline}</p>}<Link className="lime-button service-home-button" href={locale === "es" ? "/" : "/en"}>{locale === "es" ? "VOLVER A INICIO" : "BACK TO HOME"}</Link></article></div></section></PageShell>;
}

export function LocationsPage({ locale }: { locale: Locale }) {
  const text = locale === "es" ? { title: "Estamos donde nos necesitas", intro: "Con oficinas en España y Países Bajos, combinamos conocimiento local con una mirada internacional para acompañar tus operaciones." } : { title: "Wherever you are, we are close", intro: "With offices in Spain and the Netherlands, we combine local expertise with an international mindset to support your operations." };
  return <PageShell locale={locale} currentHref={locale === "es" ? "/localizaciones" : "/en/locations"} alternateHref={locale === "es" ? "/en/locations" : "/localizaciones"}><PageHero locale={locale} {...text} /><section className="content-section"><div className="locations-grid">{locations.map((location) => <article className="location-card" key={location.nameEs}><h3>{locale === "es" ? location.nameEs : location.nameEn}</h3><address>{location.address.map((line) => <span key={line}>{line}<br /></span>)}</address><a href={`tel:${location.phone.replaceAll(" ", "")}`}>{location.phone}</a><a href={`mailto:${location.email}`}>{location.email}</a><a href={location.map} target="_blank" rel="noreferrer">{locale === "es" ? "Abrir ubicación" : "Open location"} →</a></article>)}</div><div className="location-map"><span>{locale === "es" ? "Tres oficinas. Una misma forma de acompañar cada travesía." : "Three offices. One shared commitment to every voyage."}</span></div><div className="locations-home-action"><Link className="lime-button" href={locale === "es" ? "/" : "/en"}>{locale === "es" ? "VOLVER A INICIO" : "BACK TO HOME"}</Link></div></section></PageShell>;
}

export function SimpleContentPage({ locale, title, intro, currentHref, alternateHref, heading, paragraphs }: { locale: Locale; title: string; intro: string; currentHref: string; alternateHref: string; heading: string; paragraphs?: string[] }) {
  const defaultParagraphs = locale === "es"
    ? ["Construimos relaciones de largo plazo con armadores, tripulaciones y socios técnicos. Nuestro trabajo combina experiencia marítima, comunicación directa y una cultura de mejora continua.", "Esta primera versión organiza el contenido para que cada servicio, persona y ubicación tenga una ruta clara y una experiencia coherente en cualquier dispositivo."]
    : ["We build long-term relationships with shipowners, crews and technical partners. Our work combines maritime experience, direct communication and a culture of continuous improvement.", "This first version structures the content so every service, person and location has a clear route and a consistent experience on every device."];
  return <PageShell locale={locale} currentHref={currentHref} alternateHref={alternateHref}><PageHero locale={locale} title={title} intro={intro} /><section className="content-section"><h2>{heading}</h2>{(paragraphs ?? defaultParagraphs).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></PageShell>;
}

export function LegalDocumentPage({ locale, document, currentHref, alternateHref }: { locale: Locale; document: LegalDocument; currentHref: string; alternateHref: string }) {
  return <PageShell locale={locale} currentHref={currentHref} alternateHref={alternateHref}>
    <PageHero locale={locale} title={document.title} intro={document.intro} />
    <section className="content-section legal-document">
      <p className="legal-updated">{document.updated}</p>
      {document.sections.map((section) => <section className="legal-section" key={section.title}>
        <h2>{section.title}</h2>
        {section.paragraphs?.map((paragraph, index) => <p key={`${section.title}-paragraph-${index}`}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        {section.numbered && <ol>{section.numbered.map((item) => <li key={item}>{item}</li>)}</ol>}
        {section.items && <div className="legal-subsections">{section.items.map((item) => <div className="legal-subsection" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}</div>}
      </section>)}
      <div className="legal-closing">{document.closing.map((line) => <p key={line}>{line}</p>)}</div>
      <Link className="lime-button legal-home-button" href={locale === "es" ? "/" : "/en"}>{locale === "es" ? "VOLVER A INICIO" : "BACK TO HOME"}</Link>
    </section>
  </PageShell>;
}
