import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Über MARLAU",
  description:
    "MARLAU wurde mit dem Anspruch gegründet, Unternehmen nicht in isolierten Fachdisziplinen zu beraten. Ein unabhängiges Beratungshaus für anspruchsvolle Entscheidungen.",
};

const futureAreas = [
  { name: "MARLAU Advisory", status: "aktiv" },
  { name: "MARLAU Academy", status: "in Entwicklung" },
  { name: "MARLAU Ventures", status: "in Entwicklung" },
  { name: "MARLAU Interim", status: "in Entwicklung" },
  { name: "MARLAU Network", status: "in Entwicklung" },
];

export default function UeberMarlauPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">Über MARLAU</p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Ein unabhängiges Beratungshaus für anspruchsvolle Entscheidungen.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/70">
            <p>
              MARLAU wurde mit dem Anspruch gegründet, Unternehmen nicht in isolierten
              Fachdisziplinen zu beraten. Unternehmerische Entscheidungen entstehen an
              Schnittstellen: zwischen Strategie und Umsetzung, Wachstum und Struktur,
              Verantwortung und Risiko.
            </p>
            <p>
              MARLAU verbindet diese Perspektiven in einer unabhängigen
              Boutique-Beratung.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-stone/15 py-20 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy">
            Perspektive
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            Die Marke soll langfristig zu einem Beratungshaus mit einem ausgewählten
            Netzwerk aus Experten für Strategie, Organisation, Governance, Recht,
            People, Technologie und Transformation wachsen.
          </p>

          <ul className="mt-10 divide-y divide-navy/10 border-t border-navy/10">
            {futureAreas.map((area) => (
              <li
                key={area.name}
                className="flex items-center justify-between py-4 text-sm"
              >
                <span className="text-navy/85">{area.name}</span>
                <span className="text-xs uppercase tracking-widest2 text-sage">
                  {area.status}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-navy/45 italic">
            Nicht aktive Bereiche stellen keine bestehenden Leistungen dar.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy">
              Lassen Sie uns über Ihre Fragestellung sprechen.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/kontakt">Erstgespräch anfragen</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
