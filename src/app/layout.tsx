import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MARLAU Advisory | Strategy, Governance & Organisational Development",
    template: "%s | MARLAU Advisory",
  },
  description:
    "MARLAU berät Unternehmer, Geschäftsführungen und Führungskräfte bei strategischen, organisatorischen und regulatorischen Fragestellungen. Independent Advisory für komplexe Entscheidungen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "MARLAU Advisory",
    title: "MARLAU Advisory | Clarity for complex decisions.",
    description:
      "Unabhängige Beratung an der Schnittstelle von Strategie, Organisation, Governance und Recht.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MARLAU",
    alternateName: "MARLAU Advisory",
    description:
      "Unabhängige Boutique-Beratung für Strategie, Governance und Organisationsentwicklung.",
    url: site.url,
    slogan: "Clarity for complex decisions.",
  };

  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
