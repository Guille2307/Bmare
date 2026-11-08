import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/site";
import { serviceForSlug, services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.esSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceForSlug("es", slug);
  return { title: service ? `${service.es.title} | BMARE` : "Servicio | BMARE", description: service?.es.summary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceForSlug("es", slug);
  if (!service) notFound();
  return <ServiceDetailPage locale="es" service={service} />;
}
