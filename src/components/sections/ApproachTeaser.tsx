import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { approachSteps } from "@/lib/constants";

export function ApproachTeaser() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Arbeitsweise"
          title="Independent thinking. Practical execution."
          text="MARLAU arbeitet unabhängig, persönlich und mit einem klaren Blick auf das Wesentliche. Jedes Mandat beginnt mit einem fundierten Verständnis der unternehmerischen Situation. Darauf aufbauend entstehen Lösungen, die zur Organisation, ihrer Führung und ihrem tatsächlichen Handlungsspielraum passen."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step) => (
            <div key={step.number}>
              <span className="text-sm text-sage tracking-widest2">{step.number}</span>
              <h3 className="mt-2 text-lg font-serif text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/arbeitsweise" variant="secondary">
            Arbeitsweise im Detail
          </Button>
        </div>
      </Container>
    </section>
  );
}
