import { SimpleContentPage } from "@/components/site";

export const metadata = {
  title: "Legal advice | BMARE",
  description: "Legal information for the BMARE Ship Management website.",
};

export default function Page() {
  return (
    <SimpleContentPage
      locale="en"
      currentHref="/en/legal-advice"
      alternateHref="/aviso-legal"
      title="Legal advice"
      intro="Legal information and terms of use for the BMARE website."
      heading="Legal content under review"
      paragraphs={["BMARE's official legal notice will be added here after validating the company details, website ownership and applicable terms of use.", "This page is prepared as the publication point for the final legal version and should not yet be treated as the final legal text."]}
    />
  );
}
