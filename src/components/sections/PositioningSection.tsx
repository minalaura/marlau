import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PositioningSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          title="Gute Ideen brauchen Klarheit."
          text="Unternehmerische Entscheidungen entstehen selten nach Lehrbuch. Wachstum, Innovation und Veränderung bringen Chancen, Unsicherheit und unterschiedliche Interessen zusammen."
        />
        <p className="mt-6 text-base leading-relaxed text-navy/70">
          MARLAU hilft dabei, Situationen zu strukturieren, neue Perspektiven zu
          entwickeln und aus Ideen konkrete nächste Schritte zu machen.
        </p>
        <p className="mt-6 text-base leading-relaxed text-navy/70">
          Keine Standardlösungen. Keine unnötige Theorie. Sondern unabhängiges
          Sparring, unternehmerisches Denken und pragmatische Umsetzung.
        </p>
      </Container>
    </section>
  );
}
