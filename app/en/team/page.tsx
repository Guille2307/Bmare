import { SimpleContentPage } from "@/components/site";

export const metadata = { title: "Team | BMARE", description: "The people guiding every voyage." };
export default function Page() { return <SimpleContentPage locale="en" currentHref="/en/team" alternateHref="/equipo" title="Team" intro="People, experience and judgement behind every decision." heading="The people behind BMARE" />; }
