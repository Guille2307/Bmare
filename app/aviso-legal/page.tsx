import { SimpleContentPage } from "@/components/site";

export const metadata = {
  title: "Aviso legal | BMARE",
  description: "Información legal de BMARE Ship Management.",
};

export default function Page() {
  return (
    <SimpleContentPage
      locale="es"
      currentHref="/aviso-legal"
      alternateHref="/en/legal-advice"
      title="Aviso legal"
      intro="Información legal y condiciones de uso del sitio web de BMARE."
      heading="Contenido legal en revisión"
      paragraphs={["El aviso legal oficial de BMARE se incorporará en esta sección después de validar los datos societarios, la titularidad del sitio y las condiciones de uso aplicables.", "Esta página queda preparada como punto de publicación para la versión legal definitiva. No debe considerarse todavía el texto legal final."]}
    />
  );
}
