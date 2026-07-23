import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { mainNav, site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-ivory/80">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-serif text-ivory">MARLAU</p>
            <p className="text-[0.65rem] uppercase tracking-widest2 text-ivory/50 mt-1">
              Advisory
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              Unabhängige Beratung an der Schnittstelle von Strategie, Organisation,
              Governance und Recht.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-ivory/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ivory transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-ivory/40 mb-4">
              Kontakt
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-ivory transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-ivory transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-ivory transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/check" className="hover:text-ivory transition-colors">
                  Klarheits-Check
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/40">
          <p>&copy; {new Date().getFullYear()} MARLAU. Alle Rechte vorbehalten.</p>
          <p>Independent Advisory.</p>
        </div>
      </Container>
    </footer>
  );
}
