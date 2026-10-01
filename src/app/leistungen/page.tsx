import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Strategic Sparring, Growth & Business Development, Innovation & New Business sowie Legal & Compliance Sparring für Unternehmer, Start-ups und den Mittelstand.",
};

export default function LeistungenPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">Leistungen</p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Nicht jede Entscheidung braucht ein Beratungsprojekt.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Manchmal braucht es einfach einen starken Sparringspartner. MARLAU
            begleitet Unternehmer, Start-ups und mittelständische Unternehmen bei
            Wachstum, Innovation und schwierigen Entscheidungen – unabhängig und
            ohne starre Beratungsframeworks.
          </p>
        </Container>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={i % 2 === 0 ? "bg-stone/15 py-20 md:py-24 scroll-mt-24" : "py-20 md:py-24 scroll-mt-24"}
        >
          <Container>
            <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
              <div>
                <span className="text-xs text-sage tracking-widest2">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-serif font-medium text-navy">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  {service.intro}
                </p>

                {service.slug === "legal-compliance-sparring" ? (
                  <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                    <a
                      href="/leistungen/datenschutzbeauftragter"
                      className="underline text-navy hover:text-sea"
                    >
                      Mehr zu externer Datenschutzbeauftragter
                    </a>
                    <a
                      href="/leistungen/audit"
                      className="underline text-navy hover:text-sea"
                    >
                      Audit-Pakete ansehen
                    </a>
                  </p>
                ) : null}

                {service.slug === "growth-business-development" ? (
                  <p className="mt-4 text-sm">
                    <a
                      href="/leistungen/purpose"
                      className="underline text-navy hover:text-sea"
                    >
                      Mehr zur Purpose-Beratung
                    </a>
                  </p>
                ) : null}
              </div>

              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-navy/75 leading-relaxed border-t border-navy/10 pt-3"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}

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
