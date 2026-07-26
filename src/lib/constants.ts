export const site = {
  name: "MARLAU",
  descriptor: "Advisory",
  claim: "Clarity for complex decisions.",
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
    slug: "executive-advisory",
    title: "Executive Advisory",
    shortSummary:
      "Vertrauliches Sparring für Unternehmer, Geschäftsführungen und Führungskräfte bei komplexen Entscheidungen, Veränderungssituationen und strategischen Weichenstellungen.",
    intro:
      "MARLAU bietet Geschäftsführungen und Unternehmern einen unabhängigen, vertraulichen Blick von außen. Im Mittelpunkt stehen nicht vorgefertigte Methoden, sondern die konkrete Entscheidungssituation und ihre strategischen, organisatorischen und rechtlichen Auswirkungen.",
    bullets: [
      "Vertrauliches Sparring für Geschäftsführungen",
      "Vorbereitung strategischer Entscheidungen",
      "Einordnung komplexer Interessenlagen",
      "Begleitung in Veränderungs- und Krisensituationen",
      "Vorbereitung von Beirats-, Aufsichtsrats- oder Gesellschafterentscheidungen",
      "Strategische Zweitmeinung",
      "Unterstützung bei Konflikten auf Führungs- oder Gesellschafterebene",
      "Temporäre strategische Begleitung",
    ],
  },
  {
    slug: "strategy-growth",
    title: "Strategy & Growth",
    shortSummary:
      "Entwicklung und Schärfung von Strategien, Geschäftsmodellen, Wachstumsfeldern und organisatorischen Voraussetzungen für nachhaltige Entwicklung.",
    intro:
      "Strategie bedeutet, bewusste Entscheidungen über Prioritäten, Ressourcen und zukünftige Positionierung zu treffen. MARLAU unterstützt bei der Entwicklung klarer strategischer Leitlinien und bei deren Übersetzung in konkrete Verantwortlichkeiten und Maßnahmen.",
    bullets: [
      "Unternehmens- und Bereichsstrategien",
      "Wachstumsstrategien",
      "Geschäftsmodellentwicklung",
      "Positionierung",
      "Markt- und Wettbewerbsbetrachtung",
      "Priorisierung strategischer Initiativen",
      "Aufbau neuer Geschäftsfelder",
      "Skalierungsstrukturen",
      "Strategie-Roadmaps",
    ],
  },
  {
    slug: "organisation-transformation",
    title: "Organisation & Transformation",
    shortSummary:
      "Gestaltung von Strukturen, Verantwortlichkeiten, Entscheidungswegen und Veränderungsprozessen.",
    intro:
      "Organisationen wachsen häufig schneller als ihre Strukturen. MARLAU hilft, Verantwortlichkeiten, Entscheidungswege und Zusammenarbeit so zu gestalten, dass Strategie tatsächlich umgesetzt werden kann.",
    bullets: [
      "Organisationsdesign",
      "Rollen- und Verantwortlichkeitsmodelle",
      "Entscheidungsstrukturen",
      "Reorganisation",
      "Change-Architektur",
      "Prozess- und Governance-Strukturen",
      "Schnittstellenklärung",
      "Aufbau neuer Funktionen oder Bereiche",
      "Begleitung von Wachstum und Professionalisierung",
    ],
  },
  {
    slug: "governance-legal-strategy",
    title: "Governance & Legal Strategy",
    shortSummary:
      "Verbindung von Unternehmensstrategie, Governance, Compliance und rechtlichen Rahmenbedingungen.",
    intro:
      "MARLAU berücksichtigt rechtliche und regulatorische Rahmenbedingungen als Bestandteil strategischer und organisatorischer Beratung. Soweit eine eigenständige Rechtsberatung erforderlich ist, erfolgt diese nur im rechtlich zulässigen Rahmen oder in Zusammenarbeit mit entsprechend zugelassenen Partnern.",
    bullets: [
      "Corporate Governance",
      "Compliance-Strukturen",
      "Strategisches Legal Management",
      "Vertrags- und Risikostrategien",
      "Governance bei Wachstum und Internationalisierung",
      "Schnittstelle zwischen Geschäftsführung, Legal, HR und Operations",
      "Rechtliche Einordnung strategischer Optionen",
      "Aufbau interner Legal- oder Compliance-Funktionen",
      "Begleitung sensibler Unternehmensentscheidungen",
    ],
  },
  {
    slug: "people-leadership",
    title: "People & Leadership",
    shortSummary:
      "Beratung zu Führungsstrukturen, Rollen, Verantwortlichkeiten, People Strategy und strategischen HR-Fragestellungen.",
    intro:
      "People-Themen sind häufig zugleich Strategie-, Governance- und Organisationsfragen. MARLAU unterstützt Unternehmen dabei, Führungs- und Personalstrukturen an ihrer strategischen Entwicklung auszurichten.",
    bullets: [
      "People Strategy",
      "Führungsmodelle",
      "HR-Governance",
      "Strategische Personalfragen",
      "Rollen und Verantwortlichkeiten",
      "Führung in Veränderungssituationen",
      "Aufbau von HR-Strukturen",
      "Arbeitsrechtlich geprägte Organisationsfragen",
      "Zusammenarbeit zwischen Geschäftsführung, HR und Legal",
    ],
  },
  {
    slug: "social-impact-non-profit-strategy",
    title: "Social Impact & Non-Profit Strategy",
    shortSummary:
      "Strategische Beratung für soziale Unternehmen, gemeinnützige Organisationen und wirkungsorientierte Geschäftsmodelle.",
    intro:
      "MARLAU begleitet soziale Unternehmen und gemeinnützige Organisationen bei der Verbindung von Wirkung, wirtschaftlicher Tragfähigkeit und professioneller Governance.",
    bullets: [
      "Geschäftsmodellentwicklung",
      "Skalierungsstrategien",
      "Governance",
      "Wirkungslogik",
      "Organisationsentwicklung",
      "Finanzierung und Partnerschaften",
      "Professionalisierung gemeinnütziger Strukturen",
      "Sparring für Social Entrepreneurs",
    ],
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Verstehen",
    text: "Kontext, Ziele, Interessen und Risiken erfassen.",
  },
  {
    number: "02",
    title: "Strukturieren",
    text: "Komplexität reduzieren und Entscheidungsfelder klar abgrenzen.",
  },
  {
    number: "03",
    title: "Entscheiden",
    text: "Optionen bewerten und tragfähige Empfehlungen entwickeln.",
  },
  {
    number: "04",
    title: "Umsetzen",
    text: "Verantwortlichkeiten, Prozesse und nächste Schritte konkretisieren.",
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
  "Organisationsanalyse",
  "Governance Review",
  "Strategie- und Umsetzungsroadmap",
  "Begleitung einzelner Entscheidungsprozesse",
];
