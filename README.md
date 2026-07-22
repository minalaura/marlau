# MARLAU Advisory — Website

Website für MARLAU, eine unabhängige Boutique-Beratung an der Schnittstelle von
Strategie, Governance, Organisation und Recht. Gebaut mit Next.js (App Router),
TypeScript und Tailwind CSS.

## Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** — Designsystem in `tailwind.config.ts` (Farben, Typografie)
- **next-mdx-remote** + **gray-matter** — Insights-Beiträge als MDX-Dateien in
  `content/insights/`, kein externes CMS nötig
- **next/font** — Cormorant Garamond (Serif, Überschriften) und Inter (Sans, Fließtext),
  selbst gehostet über den Next.js Font-Optimizer (kein Laden von Google Fonts zur
  Laufzeit)

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die Seite läuft danach unter `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Linting

```bash
npm run lint
```

## Projektstruktur

```
src/
  app/                  Seiten (App Router)
    page.tsx            Startseite
    leistungen/          Leistungsübersicht
    arbeitsweise/         Arbeitsweise
    ueber-marlau/         Über MARLAU
    gruenderin/           Gründerinnen-Seite
    insights/             Insights-Übersicht + [slug] Detailseite
    kontakt/              Kontaktseite mit Formular
    check/                 Klarheits-Check (Lead-Quiz)
    impressum/, datenschutz/  Rechtliche Seiten (Platzhalter, s.u.)
    sitemap.ts, robots.ts  SEO-Grundlagen
  components/
    layout/               Header, Footer
    sections/             Wiederverwendbare Startseiten-Abschnitte
    ui/                   Button, Container, SectionHeading
    quiz/                 Klarheits-Check-Logik
  lib/
    constants.ts          Navigation, Leistungen, Arbeitsweise-Daten
    fonts.ts               Font-Konfiguration
    insights.ts             MDX-Reader für Insights
    quiz-data.ts             Fragen, Punktelogik, Ergebnis-Tiers
content/
  insights/               Insights-Beiträge als .mdx-Dateien
```

## Insights pflegen

Neue Beiträge werden als `.mdx`-Datei in `content/insights/` abgelegt, z. B.:

```mdx
---
title: "Titel des Beitrags"
excerpt: "Kurze Zusammenfassung für die Übersichtsseite."
category: "Strategy"
date: "2026-08-01"
---

Inhalt des Beitrags in Markdown/MDX.
```

Die Übersichtsseite (`/insights`) und die Detailseiten (`/insights/[slug]`) werden
automatisch aus diesen Dateien generiert — kein zusätzliches Deployment oder CMS
nötig. Für eine redaktionelle Oberfläche ohne Git-Kenntnisse kann später ein
Headless-CMS (z. B. Sanity, Storyblok) an dieselbe Datenstruktur angebunden werden.

## Vor dem Live-Schalten unbedingt ersetzen

Die folgenden Inhalte sind bewusst als Platzhalter markiert und müssen vor einer
echten Veröffentlichung ersetzt bzw. rechtlich geprüft werden:

- **Domain und E-Mail-Adresse**: `src/lib/constants.ts` (`site.url`, `site.email`)
- **Impressum**: `src/app/impressum/page.tsx` — vollständiger Unternehmensname,
  Rechtsform, Anschrift, Vertretungsberechtigte Person, Handelsregister,
  USt-IdNr., berufsrechtliche Hinweise
- **Datenschutzerklärung**: `src/app/datenschutz/page.tsx` — muss durch eine
  rechtlich geprüfte, auf die tatsächliche Datenverarbeitung abgestimmte Fassung
  ersetzt werden
- **Porträt der Gründerin**: Platzhalter in `src/app/gruenderin/page.tsx` und
  `src/components/sections/FounderTeaser.tsx` (aktuell reine CSS-Flächen mit
  Initialen) durch ein professionelles Foto ersetzen
- **Kontaktformular-Versand**: `src/components/ContactForm.tsx` öffnet aktuell
  einen vorausgefüllten `mailto:`-Link als einfachste, backend-freie Lösung. Für
  eine zuverlässigere Zustellung empfiehlt sich die Anbindung an einen
  Formular-Dienst oder eine eigene serverlose Funktion (z. B. Resend, Formspree)

## Rechtlicher Hinweis: Governance & Legal Strategy

Die Leistungsbeschreibung zu „Governance & Legal Strategy“ enthält bewusst einen
Hinweis, dass MARLAU keine Rechtsanwaltskanzlei ist. Vor Live-Schaltung sollte
gesellschafts- und berufsrechtlich final geprüft werden, welche Formulierungen
(„Beratung“, „Mandat“ etc.) zulässig sind.

## Der Klarheits-Check

`/check` ist ein kurzer, humorvoll-pointierter Selbsttest (8 Fragen) als
Lead-Generator: Er führt zu einem zugespitzten Ergebnis mit Handlungsempfehlung
und einem CTA zur Kontaktseite (das Ergebnis wird als Kontext in die
Anliegen-Nachricht übernommen). Fragen und Ergebnis-Texte liegen in
`src/lib/quiz-data.ts` und können dort angepasst werden.

## Deployment

Das Projekt ist ein Standard-Next.js-Projekt und kann z. B. auf Vercel oder
Netlify deployt werden:

- **Vercel**: Repository importieren, Build-Command `npm run build` wird
  automatisch erkannt
- **Netlify**: `@netlify/plugin-nextjs` verwenden, Build-Command `npm run build`,
  Publish-Directory `.next`

Vor dem Deployment: Domain in `src/lib/constants.ts` (`site.url`) auf die
tatsächliche Domain setzen, damit Metadaten, Sitemap und Open-Graph-Tags korrekt
sind.
