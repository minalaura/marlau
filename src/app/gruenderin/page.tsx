import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Gründerin",
  description:
    "Marina Schneider ist Unternehmensjuristin und strategische Beraterin. Sie begleitet Unternehmen und Führungskräfte an der Schnittstelle von Strategie, Governance, Organisation und Recht.",
};

const competencies = [
  "Unternehmensstrategie",
  "Executive Advisory",
  "Organisationsentwicklung",
  "Corporate Governance",
  "Legal Strategy",
  "Arbeitsrecht und People Governance",
  "Compliance",
  "Datenschutz",
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
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-navy/10">
              <Image
                src="/2026_06_Profilbild.png"
                alt="Marina Schneider"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
              Founder &amp; Managing Advisor
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
              Marina Schneider
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/75">
              <p>
                Marina Schneider ist Unternehmensjuristin und strategische
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
                Sie wurde mit dem Social Impact Award ausgezeichnet und engagiert
                sich seither als Mentorin für Gründer bei der Entwicklung
                skalierbarer, wirkungsorientierter Geschäftsmodelle.
              </p>
              <p>
                Als Dozentin des Gesamtverbands der Personaldienstleister e.V. (GVP)
                referiert sie in Online-Seminaren zu arbeitsrechtlichen Themen,
                darunter Krisenmanagement und betriebsbedingte Kündigungen.
              </p>
              <p>
                Sie ist zertifizierte betriebliche Datenschutzbeauftragte (IHK
                Mittleres Ruhrgebiet).
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-navy/10 pt-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/GVP-Logo.png"
                  alt="Gesamtverband der Personaldienstleister e.V. (GVP)"
                  width={48}
                  height={64}
                  className="h-14 w-auto"
                />
                <p className="text-xs leading-relaxed text-navy/50">
                  Dozentin für Krisenmanagement
                  <br />
                  Gesamtverband der Personaldienstleister e.V.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/312765-middle.png"
                  alt="Social Impact Award"
                  width={140}
                  height={56}
                  className="h-9 w-auto"
                />
                <p className="text-xs leading-relaxed text-navy/50">
                  <a href="/leistungen/purpose" className="underline hover:text-navy">
                    Preisträgerin &amp; Mentorin
                  </a>
                  <br />
                  Social Impact Award
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/IHK-Mittleres-Ruhrgebiet.png"
                  alt="IHK Mittleres Ruhrgebiet"
                  width={160}
                  height={56}
                  className="h-8 w-auto"
                />
                <p className="text-xs leading-relaxed text-navy/50">
                  <a
                    href="/leistungen/datenschutzbeauftragter"
                    className="underline hover:text-navy"
                  >
                    Zertifizierte Datenschutzbeauftragte
                  </a>
                  <br />
                  IHK Mittleres Ruhrgebiet
                </p>
              </div>
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
