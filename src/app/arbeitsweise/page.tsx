import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { principles, mandateFormats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arbeitsweise",
  description:
    "MARLAU arbeitet nicht mit starren Beratungsprodukten. Ausgangspunkt ist immer die konkrete unternehmerische Situation.",
};

export default function ArbeitsweisePage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">Arbeitsweise</p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Klarheit vor Methode.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            MARLAU arbeitet nicht mit starren Beratungsprodukten. Ausgangspunkt ist immer
            die konkrete unternehmerische Situation.
          </p>
        </Container>
      </section>

      <section className="bg-stone/15 py-20 md:py-24">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-navy/15 pt-6">
                <h3 className="text-lg font-serif text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy">
            Mögliche Mandatsformate
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {mandateFormats.map((format) => (
              <li
                key={format}
                className="text-sm text-navy/75 border-t border-navy/10 pt-3"
              >
                {format}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-sm text-navy/50 italic">
            Konkrete Konditionen werden individuell je Mandat abgestimmt.
          </p>
        </Container>
      </section>

      <section className="bg-navy py-20 md:py-24 text-ivory">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-medium">
              Lassen Sie uns über Ihre Fragestellung sprechen.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/kontakt" variant="onDark">
                Erstgespräch anfragen
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
