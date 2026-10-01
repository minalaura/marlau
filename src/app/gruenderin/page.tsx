import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Gründerin",
  description:
    "Marina Schneider ist Unternehmensjuristin, Beraterin und Unternehmerin. Ihre Stärke liegt darin, komplexe Situationen schnell zu erfassen und gemeinsam mit Entscheidern pragmatische Lösungen zu entwickeln.",
};

const competencies = [
  "Unternehmerisches Denken",
  "Strategic Sparring",
  "Growth & Business Development",
  "Innovation & New Business",
  "Entscheidungsfindung",
  "Verhandlung",
  "Stakeholder-Management",
  "Legal & Compliance",
  "Arbeitsrecht",
  "Datenschutz",
  "Social Impact Strategy",
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
              Founder &amp; Strategic Sparring Partner
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
              Marina Schneider
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/75">
              <p>
                Marina Schneider ist Unternehmensjuristin, Beraterin und
                Unternehmerin. Ihre Stärke liegt darin, komplexe Situationen
                schnell zu erfassen, neue Perspektiven einzubringen und gemeinsam
                mit Entscheidern pragmatische Lösungen zu entwickeln.
              </p>
              <p>
                Sie arbeitet besonders gerne mit Unternehmern, Start-ups und
                mittelständischen Unternehmen, die wachsen, Neues ausprobieren
                oder schwierige Entscheidungen treffen müssen.
              </p>
              <p>
                Ihr Hintergrund in Legal, Compliance und Unternehmensberatung
                ermöglicht ihr, wirtschaftliche Chancen ebenso im Blick zu
                behalten wie Risiken und praktische Umsetzbarkeit.
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

            <h2 className="mt-12 text-xs uppercase tracking-widest2 text-navy/40">
              Presse
            </h2>
            <div className="mt-5 border-t border-navy/10 pt-4">
              <a
                href="https://personaldienstleister.de/krisenmanagement-in-schwierigen-wirtschaftlichen-zeiten-marina-schneider-gibt-entscheidende-tipps-im-online-seminar-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <p className="text-sm font-medium text-navy group-hover:text-sea transition-colors">
                  GVP: Krisenmanagement in schwierigen wirtschaftlichen Zeiten –
                  Marina Schneider gibt entscheidende Tipps im Online-Seminar
                </p>
                <p className="mt-1 text-xs text-navy/50">
                  Interview, Gesamtverband der Personaldienstleister e.V. →
                </p>
              </a>
            </div>

            <h2 className="mt-10 text-xs uppercase tracking-widest2 text-navy/40">
              Vorträge &amp; Seminare
            </h2>
            <div className="mt-5 border-t border-navy/10 pt-4">
              <Link
                href="/gruenderin/vortraege"
                className="text-sm text-navy underline hover:text-sea transition-colors"
              >
                Übersicht ansehen
              </Link>
            </div>

            <div className="mt-12">
              <Button href="/kontakt">Gespräch vereinbaren</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
