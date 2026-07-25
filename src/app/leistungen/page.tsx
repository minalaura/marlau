import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Executive Advisory, Strategy & Growth, Organisation & Transformation, Governance & Legal Strategy, People & Leadership sowie Social Impact & Non-Profit Strategy.",
};

export default function LeistungenPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">Leistungen</p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Beratung dort, wo Entscheidungen komplex werden.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Unternehmerische Fragestellungen lassen sich selten ausschließlich
            strategisch, rechtlich oder organisatorisch lösen. MARLAU verbindet diese
            Perspektiven und entwickelt Lösungen, die der tatsächlichen Situation eines
            Unternehmens gerecht werden.
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

                {service.slug === "governance-legal-strategy" ? (
                  <>
                    <p className="mt-4 text-xs leading-relaxed text-navy/50 italic">
                      MARLAU ist keine Rechtsanwaltskanzlei. Soweit eine eigenständige
                      Rechtsberatung erforderlich ist, erfolgt diese nur im rechtlich
                      zulässigen Rahmen oder in Zusammenarbeit mit entsprechend
                      zugelassenen Partnern.
                    </p>
                    <p className="mt-4 text-sm">
                      <a
                        href="/leistungen/datenschutzbeauftragter"
                        className="underline text-navy hover:text-sea"
                      >
                        Mehr zu externer Datenschutzbeauftragter
                      </a>
                    </p>
                  </>
                ) : null}

                {service.slug === "social-impact-non-profit-strategy" ? (
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
