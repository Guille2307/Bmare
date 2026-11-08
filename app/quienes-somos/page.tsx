import { SimpleContentPage } from "@/components/site";

export const metadata = { title: "Quiénes somos | BMARE", description: "Experiencia marítima y gestión integral de flotas." };
export default function Page() { return <SimpleContentPage locale="es" currentHref="/quienes-somos" alternateHref="/en/about-us" title="Quiénes somos" intro="Experiencia marítima, coordinación directa y una visión integral de cada operación." heading="Una forma más inteligente de avanzar" />; }
