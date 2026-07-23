import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const columns = [
  {
    title: "Klarheit",
    text: "Komplexe Situationen werden strukturiert, priorisiert und auf die entscheidenden Fragen reduziert.",
  },
  {
    title: "Richtung",
    text: "Aus unterschiedlichen Interessen, Risiken und Möglichkeiten entsteht eine belastbare Entscheidungsgrundlage.",
  },
  {
    title: "Umsetzung",
    text: "Strategische Empfehlungen werden in konkrete Governance-, Organisations- und Umsetzungsstrukturen übersetzt.",
  },
];

export function PositioningSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Strategie endet nicht mit einer Empfehlung."
          text="Gute Entscheidungen müssen strategisch sinnvoll, rechtlich belastbar und organisatorisch umsetzbar sein. MARLAU verbindet diese Perspektiven und begleitet Unternehmen von der Einordnung komplexer Fragestellungen bis zur konkreten Umsetzung."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {columns.map((col, i) => (
            <div key={col.title} className="border-t border-navy/15 pt-6">
              <span className="text-xs text-sage tracking-widest2">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-serif text-navy">{col.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{col.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
