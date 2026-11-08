import { SimpleContentPage } from "@/components/site";

export const metadata = { title: "Noticias | BMARE", description: "Actualidad y novedades de BMARE." };
export default function Page() { return <SimpleContentPage locale="es" currentHref="/noticias" alternateHref="/en/news" title="Noticias" intro="Ideas, proyectos y novedades de nuestro entorno marítimo." heading="Actualidad BMARE" />; }
