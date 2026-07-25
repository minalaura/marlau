import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Purpose-Beratung",
  description:
    "MARLAU begleitet Gründer dabei, aus Person, Fähigkeiten und Antrieb ein skalierbares, tragfähiges Geschäftsmodell zu entwickeln.",
};

const schritte = [
  {
    number: "01",
    title: "Mensch",
    text: "Ausgangspunkt ist die Person – ihre Geschichte, ihre Werte und ihr Antrieb.",
  },
  {
    number: "02",
    title: "Fähigkeiten",
    text: "Wir ordnen ein, welche Fähigkeiten und Erfahrungen tatsächlich tragen.",
  },
  {
    number: "03",
    title: "Geschäftsmodell",
    text: "Daraus entsteht ein skalierbares, wirtschaftlich tragfähiges Modell mit echtem Purpose.",
  },
];

export default function PurposePage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
            Social Impact &amp; Purpose
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy">
            Purpose, der trägt.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Ich sehe zuerst den Menschen und seine Fähigkeiten – nicht nur die
            Geschäftsidee. Gemeinsam analysieren wir, wie daraus ein
            skalierbares, tragfähiges Geschäftsmodell wird.
          </p>
        </Container>
      </section>

      <section className="bg-stone/15 py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {schritte.map((s) => (
              <div key={s.number}>
                <span className="text-xs text-sage tracking-widest2">
                  {s.number}
                </span>
                <h2 className="mt-3 text-xl font-serif font-medium text-navy">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-6">
            <Image
              src="/312765-middle.png"
              alt="Social Impact Award"
              width={140}
              height={56}
              className="h-9 w-auto"
            />
            <p className="text-sm leading-relaxed text-navy/70">
              Marina Schneider wurde mit dem Social Impact Award ausgezeichnet
              und begleitet seither Gründer bei der Entwicklung
              wirkungsorientierter Geschäftsmodelle.{" "}
              <a href="/gruenderin" className="underline hover:text-navy">
                Mehr über die Gründerin
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 md:py-24 text-ivory">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-medium">
              Finden Sie Ihren Purpose.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              Ein erstes Gespräch zeigt, wie aus Ihrer Idee ein tragfähiges
              Geschäftsmodell wird.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href="/kontakt?anliegen=Ich%20m%C3%B6chte%20gemeinsam%20mit%20MARLAU%20meinen%20Purpose%20und%20ein%20tragf%C3%A4higes%2C%20skalierbares%20Gesch%C3%A4ftsmodell%20entwickeln."
                variant="onDark"
              >
                Meinen Purpose finden
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
