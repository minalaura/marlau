export const site = {
  name: "MARLAU",
  descriptor: "Advisory",
  claim: "Clarity for growth, innovation and complex decisions.",
  url: "https://www.marlau-advisory.com",
  email: "kontakt@marlau-advisory.com",
  locale: "de-DE",
};

export const mainNav = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Arbeitsweise", href: "/arbeitsweise" },
  { label: "Über MARLAU", href: "/ueber-marlau" },
  { label: "Gründerin", href: "/gruenderin" },
  { label: "DSB", href: "/leistungen/datenschutzbeauftragter" },
  { label: "Events", href: "/gruenderin/vortraege" },
  { label: "Insights", href: "/insights" },
  { label: "Kontakt", href: "/kontakt" },
];

export type Service = {
  slug: string;
  title: string;
  shortSummary: string;
  intro: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "strategic-sparring",
    title: "Strategic Sparring",
    shortSummary:
      "Vertraulicher Sparringspartner für Unternehmer und Geschäftsführungen bei schwierigen Entscheidungen, neuen Ideen und strategischen Optionen.",
    intro:
      "Nicht jede Entscheidung braucht ein Beratungsprojekt. Manchmal braucht es einfach einen starken Sparringspartner. MARLAU bietet Unternehmern und Geschäftsführungen einen unabhängigen, vertraulichen Blick von außen – ohne vorgefertigte Methoden, dafür mit Fokus auf die konkrete Situation.",
    bullets: [
      "Schwierige Entscheidungen",
      "Neue Ideen",
      "Strategische Optionen",
      "Wachstum",
      "Priorisierung",
      "Geschäftsmodelle",
      "Positionierung",
      "Herausforderungen im Tagesgeschäft",
    ],
  },
  {
    slug: "growth-business-development",
    title: "Growth & Business Development",
    shortSummary:
      "Wie wird aus einer guten Idee tatsächlich Geschäft? Unterstützung bei neuen Geschäftsfeldern, Wachstumsideen und Marktchancen.",
    intro:
      "Growth & Business Development ist keine klassische Strategieplanung. Im Mittelpunkt steht die Frage, wie aus einer guten Idee tatsächlich Geschäft wird – mit Blick auf Markt, Angebot und konkrete nächste Schritte.",
    bullets: [
      "Neue Geschäftsfelder",
      "Wachstumsideen",
      "Marktchancen",
      "Partnerschaften",
      "Positionierung",
      "Angebote",
      "Geschäftsmodelle",
      "Skalierung",
      "Neue Kunden- oder Marktsegmente",
    ],
  },
  {
    slug: "innovation-new-business",
    title: "Innovation & New Business",
    shortSummary:
      "Innovation im Mittelstand: Ideen strukturieren, Marktchancen erkennen und Umsetzung vorbereiten.",
    intro:
      "MARLAU ist keine technische Innovationsberatung. Die Stärke liegt darin, Ideen zu strukturieren, Marktchancen realistisch einzuschätzen, den Business Case zu hinterfragen, Stakeholder zu überzeugen und die Umsetzung vorzubereiten.",
    bullets: [
      "Neue Geschäftsmodelle",
      "Neue Services",
      "Digitalisierung",
      "KI-gestützte Geschäftsmodelle",
      "Neue Märkte",
      "Neue Kooperationen",
      "Weiterentwicklung bestehender Angebote",
      "Bewertung und Strukturierung neuer Ideen",
    ],
  },
  {
    slug: "legal-compliance-sparring",
    title: "Legal & Compliance Sparring",
    shortSummary:
      "Rechtliche Erfahrung als Teil unternehmerischer Entscheidungen – nicht als klassische Rechtsberatung.",
    intro:
      "Rechtliche Erfahrung hilft dabei, unternehmerische Entscheidungen realistisch und verantwortungsvoll zu treffen. MARLAU bringt die rechtliche Perspektive als Teil der Entscheidung ein – nicht als eigenständige Rechtsberatung. Soweit eine eigenständige Rechtsberatung erforderlich ist, erfolgt diese nur im rechtlich zulässigen Rahmen oder in Zusammenarbeit mit entsprechend zugelassenen Partnern.",
    bullets: [
      "Vertragsfragen",
      "Datenschutz",
      "Compliance",
      "Arbeitsrechtliche Fragestellungen",
      "Rechtliche Risiken bei neuen Geschäftsmodellen",
    ],
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Zuhören",
    text: "Die Situation, Ziele und Herausforderungen verstehen.",
  },
  {
    number: "02",
    title: "Hinterfragen",
    text: "Annahmen prüfen, neue Perspektiven einbringen und blinde Flecken sichtbar machen.",
  },
  {
    number: "03",
    title: "Entwickeln",
    text: "Optionen und konkrete Lösungen gemeinsam erarbeiten.",
  },
  {
    number: "04",
    title: "Entscheiden",
    text: "Prioritäten schaffen und Entscheidungen vorbereiten.",
  },
  {
    number: "05",
    title: "Umsetzen",
    text: "Aus Ideen konkrete nächste Schritte machen.",
  },
];

export type Event = {
  date: string;
  title: string;
  organizer: string;
  format: string;
  description: string;
  link: string;
};

export const events: Event[] = [
  {
    date: "2026-09-16",
    title:
      "Krisenmanagement in schwierigen Zeiten – betriebsbedingte Kündigungen praxisnah umsetzen",
    organizer: "Gesamtverband der Personaldienstleister e.V. (GVP)",
    format: "Online-Seminar",
    description:
      "Restrukturierung, betriebsbedingte Kündigungen und die Vermeidung von Kündigungsschutzklagen – praxisnah anhand realer Fallbeispiele.",
    link: "https://personaldienstleister.de/seminar/krisenmanagement-in-schwierigen-zeiten-betriebsbedingte-kuendigungen-praxisnah-umsetzen-160926/",
  },
  {
    date: "2027-01-15",
    title: "Netzwerktreffen München",
    organizer: "MARLAU Unternehmernetzwerk",
    format: "Vor Ort · 18:00 Uhr",
    description:
      "Austausch und Netzwerken unter Unternehmern. Die Location wird nach Anmeldung mitgeteilt.",
    link: "/kontakt?anliegen=Ich%20m%C3%B6chte%20mich%20f%C3%BCr%20das%20Netzwerktreffen%20M%C3%BCnchen%20am%2015.01.2027%20anmelden.",
  },
  {
    date: "2027-02-20",
    title: "Netzwerktreffen Palma de Mallorca",
    organizer: "MARLAU Unternehmernetzwerk",
    format: "Vor Ort · 11:00 Uhr",
    description:
      "Austausch und Netzwerken unter Unternehmern. Die Location wird nach Anmeldung mitgeteilt.",
    link: "/kontakt?anliegen=Ich%20m%C3%B6chte%20mich%20f%C3%BCr%20das%20Netzwerktreffen%20Palma%20de%20Mallorca%20am%2020.02.2027%20anmelden.",
  },
];

export const principles = [
  {
    title: "Unabhängig",
    text: "Empfehlungen orientieren sich am tatsächlichen Bedarf des Unternehmens, nicht am Verkauf zusätzlicher Projekte.",
  },
  {
    title: "Persönlich",
    text: "Mandate werden mit direktem Zugang zur verantwortlichen Beratungspersönlichkeit betreut.",
  },
  {
    title: "Interdisziplinär",
    text: "Strategische, organisatorische, rechtliche und menschliche Faktoren werden gemeinsam betrachtet.",
  },
  {
    title: "Umsetzungsorientiert",
    text: "Ergebnisse sollen nicht in Präsentationen enden, sondern in Entscheidungen, Verantwortlichkeiten und konkreten nächsten Schritten.",
  },
  {
    title: "Diskret",
    text: "Sensible unternehmerische Themen werden mit besonderer Vertraulichkeit behandelt.",
  },
  {
    title: "Passgenau",
    text: "Keine Standardlösungen. Vorgehen und Team richten sich nach der konkreten Fragestellung.",
  },
];

export const mandateFormats = [
  "Executive Sparring",
  "Strategieworkshop",
  "Projektberatung",
  "Advisory Retainer",
  "Interim-Unterstützung",
  "Fractional Legal & Compliance",
  "Growth Sprint",
  "Innovation Workshop",
  "Strategie- und Umsetzungsroadmap",
  "Begleitung einzelner Entscheidungsprozesse",
];

export const mittelstandQuestions = [
  "Wo liegen neue Wachstumschancen?",
  "Welche Idee lohnt sich wirklich?",
  "Wie kann ein neues Angebot entwickelt werden?",
  "Welche Partnerschaften könnten sinnvoll sein?",
  "Wie kann Innovation neben dem Tagesgeschäft funktionieren?",
  "Wie lässt sich eine Idee intern durchsetzen?",
];

export type AuditPackage = {
  slug: string;
  title: string;
  focus: string;
  description: string;
  bullets: string[];
};

export const auditPackages: AuditPackage[] = [
  {
    slug: "legal-compliance-audit",
    title: "Legal & Compliance Audit",
    focus: "Verträge, Datenschutz, arbeitsrechtliche Risiken",
    description:
      "Eine strukturierte Bestandsaufnahme der rechtlichen und regulatorischen Risiken eines Unternehmens – als Grundlage für priorisierte nächste Schritte.",
    bullets: [
      "Sichtung zentraler Verträge und Vertragsmuster",
      "Einordnung datenschutzrechtlicher Risiken",
      "Arbeitsrechtliche Risikofelder (Kündigungen, Verträge, Dokumentation)",
      "Priorisierter Maßnahmenplan",
    ],
  },
  {
    slug: "governance-audit",
    title: "Governance Audit",
    focus: "Entscheidungsstrukturen, Verantwortlichkeiten, Gremien",
    description:
      "Eine Einordnung, wie Entscheidungen im Unternehmen tatsächlich getroffen werden – und wo Verantwortlichkeiten unklar oder Gremien nicht handlungsfähig sind.",
    bullets: [
      "Analyse bestehender Entscheidungswege",
      "Prüfung von Gremien- und Beschlussstrukturen",
      "Klärung von Verantwortlichkeiten auf Führungsebene",
      "Priorisierter Maßnahmenplan",
    ],
  },
  {
    slug: "organisations-audit",
    title: "Organisations Audit",
    focus: "Rollen, Prozesse, Skalierbarkeit",
    description:
      "Eine Einordnung, ob die bestehende Organisation zur aktuellen und geplanten Größe des Unternehmens passt.",
    bullets: [
      "Prüfung von Rollen- und Verantwortungsschnitten",
      "Analyse zentraler Prozesse und Schnittstellen",
      "Einordnung der Skalierbarkeit bestehender Strukturen",
      "Priorisierter Maßnahmenplan",
    ],
  },
];
