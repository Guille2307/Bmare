import { SimpleContentPage } from "@/components/site";

export const metadata = { title: "Equipo | BMARE", description: "El equipo que acompaña cada travesía." };
export default function Page() { return <SimpleContentPage locale="es" currentHref="/equipo" alternateHref="/en/team" title="Equipo" intro="Personas, experiencia y criterio para acompañar cada decisión." heading="Las personas detrás de BMARE" />; }
