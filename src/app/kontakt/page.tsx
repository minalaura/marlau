import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Sprechen wir über Ihre Fragestellung. Vertrauliches Erstgespräch mit MARLAU Advisory anfragen.",
};

export default function KontaktPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest2 text-sage mb-4">Kontakt</p>
        <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
          Sprechen wir über Ihre Fragestellung.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">
          Sie möchten eine strategische Entscheidung vorbereiten, Strukturen
          weiterentwickeln oder eine komplexe unternehmerische Situation unabhängig
          einordnen lassen? In einem vertraulichen Erstgespräch klären wir, worum es
          geht und ob MARLAU die passende Unterstützung bieten kann.
        </p>

        <p className="mt-4 text-sm text-navy/50">
          Alternativ direkt per E-Mail:{" "}
          <a href={`mailto:${site.email}`} className="underline hover:text-navy">
            {site.email}
          </a>
        </p>

        <div className="mt-12">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
