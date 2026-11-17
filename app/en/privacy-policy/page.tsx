import { LegalDocumentPage } from "@/components/site";
import { legalDocuments } from "@/lib/legal-content";

export const metadata = {
  title: "Privacy policy | BMARE",
  description: "Information about personal data processing at BMARE.",
};

export default function Page() {
  return (
    <LegalDocumentPage
      locale="en"
      currentHref="/en/privacy-policy"
      alternateHref="/politica-de-privacidad"
      document={legalDocuments.privacy.en}
    />
  );
}
