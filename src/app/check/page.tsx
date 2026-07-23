import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ClarityCheck } from "@/components/quiz/ClarityCheck";

export const metadata: Metadata = {
  title: "Der Klarheits-Check",
  description:
    "Acht Fragen, drei Minuten, ehrliche Antworten: Wie klar ist Ihre Strategie und Organisation wirklich? Ein erster Impuls von MARLAU Advisory.",
};

export default function CheckPage() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
          Klarheits-Check
        </p>
        <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
          Wie klar ist Ihre Strategie wirklich?
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">
          Acht Fragen. Drei Minuten. Ehrliche Antworten sind ausdrücklich erlaubt – auch
          wenn sie etwas wehtun. Am Ende steht keine Note, sondern ein erster, zugespitzter
          Blick auf Ihre unternehmerische Situation.
        </p>

        <div className="mt-12">
          <ClarityCheck />
        </div>
      </Container>
    </section>
  );
}
