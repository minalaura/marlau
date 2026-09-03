import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container>
        <div className="grid gap-12 pt-20 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pt-24 md:pb-24">
          <div className="fade-in-up">
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

          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/marina-editorial-lobby.png"
              alt="Marina Schneider, Founder MARLAU Advisory"
              fill
              priority
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
