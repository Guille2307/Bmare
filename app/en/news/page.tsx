import { SimpleContentPage } from "@/components/site";

export const metadata = { title: "News | BMARE", description: "BMARE updates and maritime insights." };
export default function Page() { return <SimpleContentPage locale="en" currentHref="/en/news" alternateHref="/noticias" title="News" intro="Ideas, projects and updates from our maritime environment." heading="BMARE updates" />; }
