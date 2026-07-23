import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center max-w-xl">
        <p className="text-xs uppercase tracking-widest2 text-sage mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-navy">
          Diese Seite existiert nicht.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-navy/70">
          Der aufgerufene Bereich wurde nicht gefunden oder ist nicht mehr verfügbar.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/">Zur Startseite</Button>
        </div>
      </Container>
    </section>
  );
}
