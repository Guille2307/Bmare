import { SimpleContentPage } from "@/components/site";

export const metadata = { title: "About us | BMARE", description: "Maritime experience and integrated fleet management." };
export default function Page() { return <SimpleContentPage locale="en" currentHref="/en/about-us" alternateHref="/quienes-somos" title="About us" intro="Maritime experience, direct coordination and an integrated view of every operation." heading="A smarter way to move forward" />; }
