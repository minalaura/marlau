import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-navy">
          Impressum
        </h1>

        <p className="mt-6 text-sm text-navy/60 italic">
          Alle nachfolgenden Angaben sind Platzhalter und müssen vor Veröffentlichung
          durch die tatsächlichen, rechtlich geprüften Angaben ersetzt werden.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-navy/80">
          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV
            </h2>
            <p>[Vollständiger Unternehmensname]</p>
            <p>[Rechtsform]</p>
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ und Ort]</p>
            <p>[Land]</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Vertreten durch
            </h2>
            <p>[Vertretungsberechtigte Person]</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Kontakt
            </h2>
            <p>Telefon: [Telefonnummer]</p>
            <p>E-Mail: [Kontaktadresse]</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Registereintrag
            </h2>
            <p>Eintragung im Handelsregister: [Registergericht]</p>
            <p>Registernummer: [Registernummer]</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              [USt-IdNr.]
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Berufsrechtliche Hinweise
            </h2>
            <p>
              [Berufsrechtliche Hinweise ergänzen, sofern einschlägig. MARLAU tritt
              nicht als Rechtsanwaltskanzlei auf; sofern einzelne Tätigkeiten einer
              berufsrechtlichen Erlaubnis bedürfen, sind die entsprechenden Angaben
              hier zu ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>[Name, Anschrift wie oben]</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-navy/40 mb-2">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit: [Link ergänzen]. Zur Teilnahme an
              einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              sind wir nicht verpflichtet und nicht bereit, sofern nicht anders
              angegeben.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
