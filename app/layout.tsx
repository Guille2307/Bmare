import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bmareshipmanagement.com"),
  title: "BMARE | Ship Management",
  description:
    "Gestión integral de flotas para buques mercantes, pesqueros y operaciones offshore.",
  openGraph: {
    type: "website",
    siteName: "BMARE Ship Management",
    images: [{ url: "/assets/reference-home.jpg", width: 1536, height: 864, alt: "BMARE Ship Management" }],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
