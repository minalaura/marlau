import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Gründerin",
  description:
    "Marina Laura Schneider ist Unternehmensjuristin und strategische Beraterin. Sie begleitet Unternehmen und Führungskräfte an der Schnittstelle von Strategie, Governance, Organisation und Recht.",
};

const competencies = [
  "Unternehmensstrategie",
  "Executive Advisory",
  "Organisationsentwicklung",
  "Corporate Governance",
  "Legal Strategy",
  "Arbeitsrecht und People Governance",
  "Compliance",
  "Transformation",
  "Social Impact Strategy",
  "Aufbau und Professionalisierung interner Funktionen",
];

export default function GruenderinPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div className="md:sticky md:top-28">
            {/* Platzhalter für professionelles Porträt der Gründerin */}
            <div className="aspect-[4/5] w-full bg-stone/25 border border-navy/10 flex items-center justify-center">
              <span className="font-serif text-6xl text-navy/20">ML</span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
              Founder &amp; Managing Advisor
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
              Marina Laura Schneider
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/75">
              <p>
                Marina Laura Schneider ist Unternehmensjuristin und strategische
                Beraterin. Sie begleitet Unternehmen und Führungskräfte an der
                Schnittstelle von Strategie, Governance, Organisation und Recht.
              </p>
              <p>
                Ihre Erfahrung umfasst die Beratung von Geschäftsführungen, den Aufbau
                und die Leitung rechtlicher und organisatorischer Funktionen sowie die
                Begleitung anspruchsvoller Veränderungs-, Wachstums- und
                Governance-Fragestellungen.
              </p>
              <p>
                Ihr Beratungsansatz verbindet analytische Klarheit mit unternehmerischer
                Umsetzbarkeit. Im Mittelpunkt steht die Frage, welche Entscheidung für
                das Unternehmen nicht nur fachlich richtig, sondern auch organisatorisch
                tragfähig ist.
              </p>
              <p>
                Zusätzlich engagiert sie sich als Mentorin im europäischen
                Social-Impact-Umfeld und begleitet Gründerinnen und Gründer bei der
                Entwicklung skalierbarer, wirkungsorientierter Geschäftsmodelle.
              </p>
            </div>

            <h2 className="mt-12 text-xs uppercase tracking-widest2 text-navy/40">
              Kompetenzbereiche
            </h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {competencies.map((c) => (
                <li
                  key={c}
                  className="text-sm text-navy/75 border-t border-navy/10 pt-3"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Button href="/kontakt">Gespräch vereinbaren</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
