import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

const siteUrl = "https://bmareshipmanagement.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ["/", "/en"],
    ["/quienes-somos", "/en/about-us"],
    ["/servicios", "/en/services"],
    ["/sostenibilidad", "/en/sustainability"],
    ["/equipo", "/en/team"],
    ["/noticias", "/en/news"],
    ["/localizaciones", "/en/locations"],
    ["/politica-de-privacidad", "/en/privacy-policy"],
    ["/aviso-legal", "/en/legal-advice"],
  ];

  const serviceRoutes = services.map((service) => [`/servicios/${service.esSlug}`, `/en/services/${service.enSlug}`]);

  return [...staticRoutes, ...serviceRoutes].flatMap(([esPath, enPath]) => [
    { url: `${siteUrl}${esPath}`, changeFrequency: "monthly", priority: esPath === "/" ? 1 : 0.7 },
    { url: `${siteUrl}${enPath}`, changeFrequency: "monthly", priority: enPath === "/en" ? 1 : 0.7 },
  ]);
}
