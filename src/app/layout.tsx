import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MARLAU Advisory | Strategic Sparring for Growth & Innovation",
    template: "%s | MARLAU Advisory",
  },
  description:
    "MARLAU begleitet Unternehmer, Start-ups und mittelständische Unternehmen als unabhängiger Sparringspartner bei Wachstum, Innovation und strategischen Entscheidungen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "MARLAU Advisory",
    title: "MARLAU Advisory | Clarity for growth, innovation and complex decisions.",
    description:
      "Unabhängiger Sparringspartner für Unternehmer, Start-ups und mittelständische Unternehmen bei Wachstum, Innovation und strategischen Entscheidungen.",
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
      "Unabhängiger strategischer Sparringspartner für Unternehmer, Start-ups und mittelständische Unternehmen bei Wachstum, Innovation und komplexen Entscheidungen.",
    url: site.url,
    slogan: site.claim,
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

        {/*
          Statisches, verstecktes Duplikat des Kontaktformulars (ContactForm.tsx).
          Netlify erkennt Formulare beim Deploy nur in vorgerenderten HTML-Seiten;
          das echte Formular wird clientseitig gerendert (useSearchParams) und
          erscheint deshalb nicht im statischen Output. Dieses Layout wird dagegen
          für jede Seite serverseitig vorgerendert, daher landet es zuverlässig im
          Deploy-HTML und registriert das Formularschema bei Netlify.
        */}
        <form
          name="kontakt"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="kontakt" />
          <input name="bot-field" />
          <input name="vorname" />
          <input name="nachname" />
          <input name="unternehmen" />
          <input name="position" />
          <input name="email" />
          <input name="telefon" />
          <textarea name="anliegen" />
          <input name="kontaktweg" />
          <input type="checkbox" name="datenschutz" />
          <input name="klarheits-check-ergebnis" />
        </form>
      </body>
    </html>
  );
}
