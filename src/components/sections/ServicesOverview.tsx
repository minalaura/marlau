import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="bg-stone/15 py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="Beratungsfelder" title="Unsere Beratungsfelder" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12">
          <Button href="/leistungen" variant="secondary">
            Alle Leistungen ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
