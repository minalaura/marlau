import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FounderTeaser() {
  return (
    <section className="bg-navy py-24 md:py-32 text-ivory">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          {/* Platzhalter für Porträt der Gründerin — echtes Bild ergänzen */}
          <div className="aspect-[4/5] w-full max-w-sm bg-ivory/5 border border-ivory/10 flex items-center justify-center">
            <span className="font-serif text-6xl text-ivory/20">ML</span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
              Beratung mit unternehmerischer Perspektive
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
              Marina Laura Schneider
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">
              MARLAU wurde von Marina Laura Schneider gegründet. Als Unternehmensjuristin
              und strategische Beraterin verbindet sie rechtliche Präzision mit
              unternehmerischem Denken und Organisationsverständnis.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ivory/70">
              Sie berät Unternehmen, Führungskräfte und Organisationen an den
              Schnittstellen, an denen klassische Fachgrenzen häufig nicht weiterhelfen.
            </p>
            <div className="mt-8">
              <Button href="/gruenderin" variant="onDark">
                Mehr über die Gründerin
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
