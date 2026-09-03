import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function BrandStory() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden order-2 md:order-1">
            <Image
              src="/marina-editorial-wide.png"
              alt="MARLAU — ruhig, klar, verlässlich"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-widest2 text-sage mb-4">MARLAU</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-navy">
              Ein Ort für Klarheit und neue Perspektiven
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy/70">
              MARLAU steht für Orientierung in anspruchsvollen Situationen. Die Marke ist
              von der Idee eines sicheren Hafens inspiriert: einem Ort, an dem
              Entscheidungen vorbereitet, Perspektiven neu geordnet und nächste Schritte
              mit Klarheit begonnen werden.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
