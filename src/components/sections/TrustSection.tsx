import { Container } from "@/components/ui/Container";

const fields = [
  "Executive Advisory",
  "Strategy",
  "Governance",
  "Organisation",
  "Growth",
  "Transformation",
];

export function TrustSection() {
  return (
    <section className="border-y border-navy/10 bg-stone/20 py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-sage mb-2">
              Beratung auf Entscheidungsebene
            </p>
            <p className="text-lg leading-relaxed text-navy/80">
              MARLAU unterstützt dort, wo strategische Entscheidungen, organisatorische
              Veränderungen und rechtliche Rahmenbedingungen zusammenkommen.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {fields.map((field) => (
              <li
                key={field}
                className="text-sm tracking-wide text-navy/60 whitespace-nowrap"
              >
                {field}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
