import { LegalDocumentPage } from "@/components/site";
import { legalDocuments } from "@/lib/legal-content";

export const metadata = {
  title: "Legal notice | BMARE",
  description: "Legal information for the BMARE Ship Management website.",
};

export default function Page() {
  return (
    <LegalDocumentPage
      locale="en"
      currentHref="/en/legal-advice"
      alternateHref="/aviso-legal"
      document={legalDocuments.legalNotice.en}
    />
  );
}
