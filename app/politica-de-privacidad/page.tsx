import { SimpleContentPage } from "@/components/site";

export const metadata = {
  title: "Política de privacidad | BMARE",
  description: "Información sobre el tratamiento de datos personales en BMARE.",
};

export default function Page() {
  return (
    <SimpleContentPage
      locale="es"
      currentHref="/politica-de-privacidad"
      alternateHref="/en/privacy-policy"
      title="Política de privacidad"
      intro="Información sobre el tratamiento de datos personales en BMARE."
      heading="Contenido legal en revisión"
      paragraphs={["El texto legal oficial de BMARE se incorporará en esta sección después de validar el responsable del tratamiento, las finalidades, las bases jurídicas y los derechos aplicables.", "Esta página queda preparada como punto de publicación para la versión legal definitiva. No debe considerarse todavía el texto legal final."]}
    />
  );
}
