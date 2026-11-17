import { LegalDocumentPage } from "@/components/site";
import { legalDocuments } from "@/lib/legal-content";

export const metadata = {
  title: "Política de privacidad | BMARE",
  description: "Información sobre el tratamiento de datos personales en BMARE.",
};

export default function Page() {
  return (
    <LegalDocumentPage
      locale="es"
      currentHref="/politica-de-privacidad"
      alternateHref="/en/privacy-policy"
      document={legalDocuments.privacy.es}
    />
  );
}
