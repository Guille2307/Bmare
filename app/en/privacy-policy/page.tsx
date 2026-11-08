import { SimpleContentPage } from "@/components/site";

export const metadata = {
  title: "Privacy policy | BMARE",
  description: "Information about personal data processing at BMARE.",
};

export default function Page() {
  return (
    <SimpleContentPage
      locale="en"
      currentHref="/en/privacy-policy"
      alternateHref="/politica-de-privacidad"
      title="Privacy policy"
      intro="Information about personal data processing at BMARE."
      heading="Legal content under review"
      paragraphs={["BMARE's official legal text will be added here after validating the controller, purposes, legal bases and applicable data-subject rights.", "This page is prepared as the publication point for the final legal version and should not yet be treated as the final legal text."]}
    />
  );
}
