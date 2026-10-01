import { Container } from "@/components/ui/Container";
import { mittelstandQuestions } from "@/lib/constants";

export function MittelstandSection() {
  return (
    <section className="bg-navy py-24 md:py-32 text-ivory">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest2 text-sage mb-3">
              Mittelstand
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
              Innovation im Mittelstand
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              Viele mittelständische Unternehmen haben gute Ideen, aber wenig Zeit
              und selten eigene Strategie- oder Innovationsteams. MARLAU
              unterstützt Geschäftsführer dabei, neue Geschäftsmöglichkeiten zu
              erkennen, Ideen kritisch zu prüfen und daraus konkrete Projekte zu
              entwickeln.
            </p>
          </div>

          <ul className="divide-y divide-ivory/10 border-t border-ivory/10">
            {mittelstandQuestions.map((question) => (
              <li
                key={question}
                className="py-4 text-base leading-relaxed text-ivory/85"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
