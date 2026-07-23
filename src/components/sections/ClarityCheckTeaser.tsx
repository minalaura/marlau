import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ClarityCheckTeaser() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="border border-navy/15 bg-stone/15 px-8 py-14 md:px-16 md:py-16 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
              Kleiner Realitätscheck
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight text-navy">
              Wie klar ist Ihre Strategie – wirklich?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70">
              Acht Fragen, drei Minuten, ehrliche Antworten. Kein Assessment mit
              Punktetabelle für die Schublade, sondern ein erster, zugespitzter Blick
              auf Strategie, Organisation und Entscheidungsfähigkeit Ihres Unternehmens.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button href="/check">Jetzt Klarheits-Check machen</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
