import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { auditPackages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Audit",
  description:
    "MARLAU bietet drei strukturierte Audit-Pakete: Legal & Compliance, Governance und Organisation – als fundierte Grundlage für die nächsten Schritte.",
};

export default function AuditPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
            Governance &amp; Legal Strategy
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Audit.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Bevor eine Empfehlung sinnvoll ist, braucht es eine belastbare
            Einordnung der Ausgangslage. MARLAU bietet dafür drei strukturierte
            Audit-Pakete – mit klarem Fokus, klarem Ablauf und einem
            priorisierten Maßnahmenplan als Ergebnis.
          </p>
        </Container>
      </section>

      <section className="bg-stone/15 py-20 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {auditPackages.map((pkg) => (
              <div key={pkg.slug} className="flex flex-col border border-navy/10 bg-ivory p-8">
                <h2 className="text-xl font-serif font-medium text-navy">
                  {pkg.title}
                </h2>
                <p className="mt-2 text-xs uppercase tracking-widest2 text-sage">
                  {pkg.focus}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {pkg.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-navy/75 leading-relaxed border-t border-navy/10 pt-2.5"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={`/kontakt?anliegen=Ich%20interessiere%20mich%20f%C3%BCr%20das%20${encodeURIComponent(
                      pkg.title
                    )}.`}
                    variant="secondary"
                    className="w-full justify-center"
                  >
                    {pkg.title} anfragen
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-sm text-navy/50 italic">
            Konkrete Konditionen werden individuell je Mandat abgestimmt.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-navy">
            Nicht sicher, welches Audit passt?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy/70">
            Ein erstes Gespräch klärt, welcher Fokus für Ihre Situation
            sinnvoll ist.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/kontakt">Gespräch vereinbaren</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
