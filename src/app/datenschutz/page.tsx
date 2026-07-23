import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-navy">
          Datenschutzerklärung
        </h1>

        <p className="mt-6 text-sm text-navy/60 italic">
          Diese Datenschutzerklärung ist ein strukturierter Platzhalter. Sie muss vor
          Veröffentlichung durch eine rechtlich geprüfte, auf die tatsächliche
          Datenverarbeitung abgestimmte Fassung ersetzt werden.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-navy/80">
          <div>
            <h2 className="text-base font-serif text-navy mb-2">
              1. Verantwortlicher
            </h2>
            <p>[Vollständiger Unternehmensname]</p>
            <p>[Anschrift]</p>
            <p>E-Mail: [Kontaktadresse]</p>
          </div>

          <div>
            <h2 className="text-base font-serif text-navy mb-2">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch dieser Website werden durch den Hosting-Anbieter
              technisch bedingt Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des
              Zugriffs, aufgerufene Seite) verarbeitet. [Details zum Hosting-Anbieter
              und zur Rechtsgrundlage ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="text-base font-serif text-navy mb-2">
              3. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b bzw. lit. f DSGVO. [Genaue technische Umsetzung des Formulars und
              Speicherdauer ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="text-base font-serif text-navy mb-2">
              4. Cookies und Tracking
            </h2>
            <p>
              Diese Website verwendet keine Cookies zu Analyse- oder Marketingzwecken
              und bindet keine externen Tracking-Dienste ohne Ihre vorherige
              Einwilligung ein. [Anpassen, sofern sich dies ändert, inkl. Einbindung
              eines Consent-Management-Tools.]
            </p>
          </div>

          <div>
            <h2 className="text-base font-serif text-navy mb-2">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
              der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
              Verarbeitung Ihrer personenbezogenen Daten im Rahmen der gesetzlichen
              Vorgaben. Sie haben zudem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren.
            </p>
          </div>

          <div>
            <h2 className="text-base font-serif text-navy mb-2">
              6. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung wird bei Bedarf angepasst, um aktuellen
              rechtlichen Anforderungen zu entsprechen. Stand: [Datum ergänzen].
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
