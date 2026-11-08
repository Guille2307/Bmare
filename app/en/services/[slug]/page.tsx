import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/site";
import { serviceForSlug, services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.enSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceForSlug("en", slug);
  return { title: service ? `${service.en.title} | BMARE` : "Service | BMARE", description: service?.en.summary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceForSlug("en", slug);
  if (!service) notFound();
  return <ServiceDetailPage locale="en" service={service} />;
}
