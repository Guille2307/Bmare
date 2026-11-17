import { LegalDocumentPage } from "@/components/site";
import { legalDocuments } from "@/lib/legal-content";

export const metadata = {
  title: "Aviso legal | BMARE",
  description: "Información legal de BMARE Ship Management.",
};

export default function Page() {
  return (
    <LegalDocumentPage
      locale="es"
      currentHref="/aviso-legal"
      alternateHref="/en/legal-advice"
      document={legalDocuments.legalNotice.es}
    />
  );
}
