"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { locations, navigation, services, type Locale, type Service } from "@/lib/content";

const copy = {
  es: { eyebrow: "SMART MARITIME FLEET MANAGEMENT", title: "Te acompañamos en cada travesía", intro: "Gestión integral de flotas para buques mercantes, pesqueros y operaciones offshore.", promise: "Anticipar. Coordinar. Resolver.", discover: "DESCUBRE NUESTROS SERVICIOS", quote: ["Your voyage,", "our responsibility.", "Your partner", "on every route."], team: "CONOCE NUESTRO EQUIPO", serviceLabel: "SERVICIOS", full: "VER SERVICIO COMPLETO", close: "Cerrar ficha", stats: ["Experiencia marítima", "Gestión integral de flotas", "Presencia internacional", "Compromiso ambiental"] },
  en: { eyebrow: "SMART MARITIME FLEET MANAGEMENT", title: "With you on every voyage", intro: "Integrated fleet management for merchant, fishing and offshore vessels.", promise: "Anticipate. Coordinate. Resolve.", discover: "EXPLORE OUR SERVICES", quote: ["Your voyage,", "our responsibility.", "Your partner", "on every route."], team: "MEET OUR TEAM", serviceLabel: "SERVICES", full: "VIEW FULL SERVICE", close: "Close service panel", stats: ["Maritime experience", "Integrated fleet management", "International presence", "Environmental commitment"] },
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
  },
};

function ServiceGlyph({ service }: { service: Service }) {
  if (service.iconSrc) return <img src={service.iconSrc} alt="" />;
  if (service.key === "crewing") return <svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8"><circle cx="32" cy="18" r="7"/><circle cx="15" cy="25" r="5"/><circle cx="49" cy="25" r="5"/><path d="M20 47c0-9 5-15 12-15s12 6 12 15M4 48c0-7 4-12 11-12 3 0 5 1 7 3M60 48c0-7-4-12-11-12-3 0-5 1-7 3"/></g></svg>;
  if (service.key === "sustainability") return <svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8"><path d="M34 54C15 49 9 35 13 14c20 2 33 14 31 31"/><path d="M18 42c9-2 18-8 27-19M33 34c0-8-2-14-7-20M29 36c-7 0-12-2-16-6"/></g></svg>;
  return <span>{service.icon}</span>;
}

export function Header({ locale, currentHref, alternateHref }: { locale: Locale; currentHref: string; alternateHref: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href={locale === "es" ? "/" : "/en"} aria-label="BMARE home">
        <img src="/assets/bmare-logo-official.png" alt="BMARE Ship Management" />
      </Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>
        {open ? "Cerrar" : "Menú"}
      </button>
      <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
        {navigation[locale].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="language-switch" aria-label="Language selector">
        <Link className={locale === "es" ? "active" : ""} href={locale === "es" ? currentHref : alternateHref}>ES</Link><span>|</span><Link className={locale === "en" ? "active" : ""} href={locale === "en" ? currentHref : alternateHref}>EN</Link>
      </div>
      <Link className="header-cta" href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "CONTACTA" : "CONTACT US"} <span aria-hidden="true">→</span></Link>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return <footer className="footer"><div className="footer-inner"><span>BMARE · SHIP MANAGEMENT © 2026</span><span><Link href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "Contacto" : "Locations"}</Link> · <Link href={locale === "es" ? "/politica-de-privacidad" : "/en/privacy-policy"}>{locale === "es" ? "Privacidad" : "Privacy"}</Link> · <Link href={locale === "es" ? "/aviso-legal" : "/en/legal-advice"}>{locale === "es" ? "Aviso legal" : "Legal advice"}</Link></span></div></footer>;
}

function PageShell({ locale, currentHref, alternateHref, children }: { locale: Locale; currentHref?: string; alternateHref: string; children: React.ReactNode }) {
  return <><Link href="#main" className="skip-link">{locale === "es" ? "Saltar al contenido" : "Skip to content"}</Link><Header locale={locale} currentHref={currentHref ?? (locale === "es" ? "/" : "/en")} alternateHref={alternateHref} /><main id="main" lang={locale}>{children}</main><Footer locale={locale} /></>;
}

function ServicePanel({ locale, service, onClose }: { locale: Locale; service: Service; onClose: () => void }) {
  const text = service[locale];
  return <aside className="service-panel" aria-live="polite">
    <button className="panel-close" type="button" onClick={onClose} aria-label={copy[locale].close}>×</button>
    <div className="panel-heading"><span className="panel-icon" aria-hidden="true">{service.iconSrc ? <img src={service.iconSrc} alt="" /> : service.icon}</span><span className="panel-kicker">{text.title}</span></div>
    <h2>{text.title}</h2>
    <p className="panel-lead">{locale === "es" ? "MAXIMIZAMOS LA DISPONIBILIDAD Y EL RENDIMIENTO DE SU FLOTA." : "WE MAXIMISE YOUR FLEET'S AVAILABILITY AND PERFORMANCE."}</p>
    <p>{text.summary}</p>
    <img src={service.image} alt="" />
    <ul className="feature-list">{text.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    <div className="panel-actions"><Link className="lime-button" href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "HABLA CON NUESTRO EQUIPO" : "TALK TO OUR TEAM"} <span aria-hidden="true">→</span></Link><Link className="secondary-button" href={hrefFor(locale, service)}>{locale === "es" ? "MÁS INFORMACIÓN" : "MORE INFORMATION"}</Link></div>
  </aside>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<Service | null>(null);
  const text = copy[locale];
  const positions: Record<string, { x: string; y: string }> = {
    technical: { x: "34%", y: "9%" }, quality: { x: "66%", y: "9%" },
    sustainability: { x: "18%", y: "28%" }, operations: { x: "82%", y: "28%" },
    crewing: { x: "10%", y: "49%" }, drydock: { x: "90%", y: "49%" },
    newbuildings: { x: "15%", y: "70%" }, procurement: { x: "85%", y: "70%" },
    finance: { x: "34%", y: "90%" }, cybersecurity: { x: "66%", y: "90%" },
  };
  const executiveText = locale === "es" ? {
    paulaRole: "CEO",
    paulaQuote: "Conectamos experiencia, personas y soluciones para que tu flota avance con seguridad.",
    dirkRole: "Director General",
    dirkQuote: "Criterio técnico y experiencia operativa para anticipar y resolver antes de la urgencia.",
  } : {
    paulaRole: "CEO",
    paulaQuote: "We connect experience, people and solutions so your fleet can move forward safely.",
    dirkRole: "Managing Director",
    dirkQuote: "Technical judgement and operational experience to anticipate and solve issues before they become urgent.",
  };

  return <PageShell locale={locale} currentHref={locale === "es" ? "/" : "/en"} alternateHref={locale === "es" ? "/en" : "/"}>
    <section className={`hero-stage${active ? " has-active" : ""}`}>
      <div className="home-grid">
        <div className="hero-copy">
          <span className="eyebrow">{text.eyebrow}</span><h1>{text.title}</h1><p>{text.intro}</p><strong>{text.promise}</strong>
          <Link className="lime-button" href={locale === "es" ? "/servicios" : "/en/services"}>{text.discover} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="orbit-wrap" id="services">
          <div className="orbit" aria-label={text.serviceLabel}>
            {services.map((service) => {
              const position = positions[service.key] ?? { x: "50%", y: "50%" };
              return <button key={service.key} className="petal" type="button" style={{ "--x": position.x, "--y": position.y } as CSSProperties} aria-expanded={active?.key === service.key} onClick={() => setActive(active?.key === service.key ? null : service)}>
                <span className="petal-icon" aria-hidden="true"><ServiceGlyph service={service} /></span>
                <span className="petal-label">{service[locale].title}</span>
                <span className="petal-summary">{homeServiceDescriptions[locale][service.key]}</span>
              </button>;
            })}
            <div className="ship-core" aria-hidden="true" />
          </div>
        </div>
        {!active && <div className="quote">{text.quote.map((line) => <span key={line}>{line}<br /></span>)}</div>}
        {active && <ServicePanel locale={locale} service={active} onClose={() => setActive(null)} />}
      </div>
      <div className="executive-pair">
        <article className="executive executive-paula">
          <img src="/assets/paula-hero-v2.png" alt="Paula Amor Freire" />
          <div className="executive-copy"><strong>Paula Amor Freire</strong><span>{executiveText.paulaRole}</span><blockquote>“{executiveText.paulaQuote}”</blockquote></div>
        </article>
        <article className="executive executive-dirk">
          <img src="/assets/dirk-hero-v2.png" alt="Dirk Arends" />
          <div className="executive-copy"><strong>Dirk Arends</strong><span>{executiveText.dirkRole}</span><blockquote>“{executiveText.dirkQuote}”</blockquote></div>
        </article>
      </div>
    </section>
    <section className="trust-bar">{text.stats.map((stat, index) => <span key={stat}>{["⚓", "▣", "◎", "❧"][index]} {stat}</span>)}<Link href={locale === "es" ? "/equipo" : "/en/team"}>{text.team} →</Link></section>
  </PageShell>;
}

function PageHero({ title, intro }: { title: string; intro: string }) {
  return <section className="page-hero"><span className="eyebrow">BMARE · SHIP MANAGEMENT</span><h1>{title}</h1><p>{intro}</p></section>;
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const text = locale === "es" ? { title: "Servicios marítimos integrales", intro: "Coordinamos cada dimensión de la gestión de buques para que tu flota avance con seguridad, eficiencia y visión de futuro." } : { title: "Integrated maritime services", intro: "We coordinate every dimension of vessel management so your fleet moves with safety, efficiency and a clear view of the future." };
  return <PageShell locale={locale} currentHref={locale === "es" ? "/servicios" : "/en/services"} alternateHref={locale === "es" ? "/en/services" : "/servicios"}><PageHero {...text} /><section className="content-section"><h2>{locale === "es" ? "Un socio para cada travesía" : "A partner for every voyage"}</h2><p>{locale === "es" ? "Explora nuestras áreas de trabajo y descubre cómo conectamos criterio técnico, coordinación operativa y control económico." : "Explore our areas of work and discover how we connect technical judgement, operational coordination and financial control."}</p><div className="cards-grid">{services.map((service) => <article className="service-card" key={service.key}><img src={service.image} alt="" /><div className="card-body"><h3>{service[locale].title}</h3><p>{service[locale].summary}</p><Link href={hrefFor(locale, service)}>{locale === "es" ? "VER SERVICIO" : "VIEW SERVICE"} →</Link></div></article>)}</div></section></PageShell>;
}

export function ServiceDetailPage({ locale, service }: { locale: Locale; service: Service }) {
  const text = service[locale];
  return <PageShell locale={locale} currentHref={hrefFor(locale, service)} alternateHref={locale === "es" ? `/en/services/${service.enSlug}` : `/servicios/${service.esSlug}`}><PageHero title={text.title} intro={text.summary} /><section className="content-section"><div className="cards-grid"><article className="service-card"><img src={service.image} alt="" /><div className="card-body"><h3>{locale === "es" ? "Ámbitos de trabajo" : "Areas of work"}</h3><ul className="feature-list">{text.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link href={locale === "es" ? "/localizaciones" : "/en/locations"}>{locale === "es" ? "HABLEMOS DE TU FLOTA" : "TALK TO OUR TEAM"} →</Link></div></article><article><h2>{locale === "es" ? "Criterio técnico para avanzar" : "Technical judgement to move forward"}</h2><p>{locale === "es" ? "Integramos información técnica y operativa para facilitar decisiones oportunas, proteger tus activos y acompañar cada etapa de la travesía." : "We connect technical and operational information to support timely decisions, protect your assets and guide every stage of the voyage."}</p></article></div></section></PageShell>;
}

export function LocationsPage({ locale }: { locale: Locale }) {
  const text = locale === "es" ? { title: "Estamos donde nos necesitas", intro: "Con oficinas en España y Países Bajos, combinamos conocimiento local con una mirada internacional para acompañar tus operaciones." } : { title: "Wherever you are, we are close", intro: "With offices in Spain and the Netherlands, we combine local expertise with an international mindset to support your operations." };
  return <PageShell locale={locale} currentHref={locale === "es" ? "/localizaciones" : "/en/locations"} alternateHref={locale === "es" ? "/en/locations" : "/localizaciones"}><PageHero {...text} /><section className="content-section"><div className="locations-grid">{locations.map((location) => <article className="location-card" key={location.name}><h3>{location.name}</h3><address>{location.address.map((line) => <span key={line}>{line}<br /></span>)}</address><a href={`tel:${location.phone.replaceAll(" ", "")}`}>{location.phone}</a><a href={`mailto:${location.email}`}>{location.email}</a><a href={location.map} target="_blank" rel="noreferrer">{locale === "es" ? "Abrir ubicación" : "Open location"} →</a></article>)}</div><div className="location-map"><span>{locale === "es" ? "Tres oficinas. Una misma forma de acompañar cada travesía." : "Three offices. One shared commitment to every voyage."}</span></div></section></PageShell>;
}

export function SimpleContentPage({ locale, title, intro, currentHref, alternateHref, heading, paragraphs }: { locale: Locale; title: string; intro: string; currentHref: string; alternateHref: string; heading: string; paragraphs?: string[] }) {
  const defaultParagraphs = locale === "es"
    ? ["Construimos relaciones de largo plazo con armadores, tripulaciones y socios técnicos. Nuestro trabajo combina experiencia marítima, comunicación directa y una cultura de mejora continua.", "Esta primera versión organiza el contenido para que cada servicio, persona y ubicación tenga una ruta clara y una experiencia coherente en cualquier dispositivo."]
    : ["We build long-term relationships with shipowners, crews and technical partners. Our work combines maritime experience, direct communication and a culture of continuous improvement.", "This first version structures the content so every service, person and location has a clear route and a consistent experience on every device."];
  return <PageShell locale={locale} currentHref={currentHref} alternateHref={alternateHref}><PageHero title={title} intro={intro} /><section className="content-section"><h2>{heading}</h2>{(paragraphs ?? defaultParagraphs).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></PageShell>;
}
