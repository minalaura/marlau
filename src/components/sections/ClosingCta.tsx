import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ClosingCta() {
  return (
    <section className="bg-sea py-24 md:py-28 text-ivory">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
            Lassen Sie uns über Ihre Fragestellung sprechen.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/75">
            Ein erstes Gespräch dient dazu, Ihre Situation einzuordnen und zu prüfen, ob
            und in welcher Form MARLAU Sie sinnvoll unterstützen kann.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/kontakt" variant="onDark" className="hover:bg-ivory">
              Erstgespräch anfragen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
