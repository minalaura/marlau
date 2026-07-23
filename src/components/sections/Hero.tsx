import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <div className="max-w-3xl fade-in-up">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-6">
            MARLAU &mdash; Advisory
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-[1.08] text-navy">
            Clarity for complex decisions.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-navy/70">
            MARLAU berät Unternehmer, Geschäftsführungen und Führungskräfte bei
            strategischen, organisatorischen und regulatorischen Fragestellungen. Wir
            verbinden unternehmerisches Denken mit fundierter Governance-, Organisations-
            und Rechtsexpertise.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt">Gespräch vereinbaren</Button>
            <Button href="/leistungen" variant="secondary">
              Leistungen entdecken
            </Button>
          </div>

          <p className="mt-8 text-sm text-navy/50 italic font-serif">
            Independent advice for leaders and organisations.
          </p>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 hidden h-full w-1/2 md:block"
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, transparent 55%, rgba(126,140,128,0.08) 100%)",
        }}
      />
    </section>
  );
}
