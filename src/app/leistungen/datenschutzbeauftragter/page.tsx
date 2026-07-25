import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Externe Datenschutzbeauftragte",
  description:
    "MARLAU übernimmt die Funktion der externen Datenschutzbeauftragten oder berät Unternehmen bei der Einordnung ihres Datenschutz-Bedarfs. Zertifiziert durch die IHK Mittleres Ruhrgebiet.",
};

const aufgaben = [
  "Ansprechpartnerin für Aufsichtsbehörden und betroffene Personen",
  "Überwachung der Einhaltung von DSGVO und BDSG",
  "Beratung zu Verarbeitungstätigkeiten, Verträgen und technisch-organisatorischen Maßnahmen",
  "Schulung und Sensibilisierung von Mitarbeitenden",
  "Führung von Verarbeitungsverzeichnis, Löschkonzepten und Meldewegen",
];

export default function DatenschutzbeauftragterPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
            Governance &amp; Legal Strategy
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Externe Datenschutzbeauftragte
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Viele Unternehmen benötigen nach Art. 37 DSGVO eine benannte
            Datenschutzbeauftragte, ohne die Kapazität, diese Rolle intern
            aufzubauen. MARLAU übernimmt diese Funktion extern oder unterstützt
            zunächst bei der Einordnung, welches Modell zum Unternehmen passt.
          </p>
        </Container>
      </section>

      <section className="bg-stone/15 py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="text-xs text-sage tracking-widest2">Aufgaben</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-serif font-medium text-navy">
                Was eine externe Datenschutzbeauftragte übernimmt
              </h2>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {aufgaben.map((a) => (
                <li
                  key={a}
                  className="text-sm text-navy/75 leading-relaxed border-t border-navy/10 pt-3"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <span className="text-xs text-sage tracking-widest2">Vorgehen</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-serif font-medium text-navy">
            Zwei Wege, je nach Ausgangslage
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border border-navy/10 p-8 md:p-10">
              <span className="text-xs text-sage tracking-widest2">01</span>
              <h3 className="mt-3 text-xl font-serif font-medium text-navy">
                Datenschutz-Analyse
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy/70">
                Für Unternehmen, die zunächst einordnen möchten, ob und in
                welcher Form Handlungsbedarf besteht. Eine erste Bestandsaufnahme
                der Verarbeitungstätigkeiten, Risiken und bestehenden Strukturen
                bildet die Grundlage für eine fundierte Entscheidung.
              </p>
              <div className="mt-6">
                <Button
                  href="/kontakt?anliegen=Ich%20interessiere%20mich%20f%C3%BCr%20eine%20Datenschutz-Analyse%20und%20m%C3%B6chte%20zun%C3%A4chst%20einordnen%2C%20ob%20und%20in%20welcher%20Form%20Handlungsbedarf%20besteht."
                  variant="secondary"
                >
                  Analyse anfragen
                </Button>
              </div>
            </div>

            <div className="border border-navy/10 p-8 md:p-10">
              <span className="text-xs text-sage tracking-widest2">02</span>
              <h3 className="mt-3 text-xl font-serif font-medium text-navy">
                Bestellung als externe Datenschutzbeauftragte
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy/70">
                Für Unternehmen mit bereits identifiziertem Bedarf. MARLAU
                übernimmt die laufende Betreuung als benannte externe
                Datenschutzbeauftragte, einschließlich Dokumentation, Schulung
                und Ansprechpartnerfunktion gegenüber Behörden.
              </p>
              <div className="mt-6">
                <Button
                  href="/kontakt?anliegen=Ich%20m%C3%B6chte%20MARLAU%20als%20externe%20Datenschutzbeauftragte%20f%C3%BCr%20unser%20Unternehmen%20bestellen."
                >
                  Als Datenschutzbeauftragte anfragen
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-stone/15 py-20 md:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-6">
            <Image
              src="/IHK-Mittleres-Ruhrgebiet.png"
              alt="IHK Mittleres Ruhrgebiet"
              width={160}
              height={56}
              className="h-8 w-auto"
            />
            <p className="text-sm leading-relaxed text-navy/70">
              Marina Schneider ist zertifizierte betriebliche
              Datenschutzbeauftragte (IHK Mittleres Ruhrgebiet) und
              Unternehmensjuristin mit Erfahrung in Compliance, Arbeitsrecht und
              Governance.{" "}
              <a href="/gruenderin" className="underline hover:text-navy">
                Mehr über die Gründerin
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy">
            Lassen Sie uns über Ihre Situation sprechen.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/kontakt">Gespräch vereinbaren</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
