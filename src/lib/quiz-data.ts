export type QuizOption = {
  label: string;
  points: 0 | 1 | 2 | 3;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question:
      "Wenn Sie heute für zwei Wochen offline wären – was passiert mit den wichtigsten Entscheidungen im Unternehmen?",
    options: [
      { label: "Sie stapeln sich und warten auf mich.", points: 0 },
      { label: "Ein enger Kreis trifft sie in meinem Sinne.", points: 2 },
      { label: "Es gibt klare Verantwortlichkeiten, die einfach weiterlaufen.", points: 3 },
      { label: "Ehrlich gesagt: keine Ahnung.", points: 1 },
    ],
  },
  {
    id: "q2",
    question:
      "Wie oft wird eine Grundsatzentscheidung im Nachhinein nochmal aufgerollt, weil sie nicht zu Ende gedacht war?",
    options: [
      { label: "Nie – wir denken sie einmal richtig durch.", points: 3 },
      { label: "Gelegentlich, wenn neue Informationen auftauchen.", points: 2 },
      { label: "Regelmäßig – Montag beschlossen, Mittwoch verworfen.", points: 0 },
      { label: "Wir nennen es „agil“.", points: 1 },
    ],
  },
  {
    id: "q3",
    question:
      "Können Sie in einem Satz erklären, warum Ihr Unternehmen in fünf Jahren noch relevant ist?",
    options: [
      { label: "Ja, sofort und ohne nachzudenken.", points: 3 },
      { label: "Ungefähr – der Kern steht, Details fehlen.", points: 2 },
      { label: "Es kommt darauf an, wen Sie fragen.", points: 1 },
      { label: "Fragen Sie lieber nach zehn Jahren, da ist es einfacher.", points: 0 },
    ],
  },
  {
    id: "q4",
    question: "Wie sieht Ihre Organisationsstruktur aktuell auf dem Papier aus?",
    options: [
      { label: "Es gibt ein Organigramm, und es stimmt sogar noch.", points: 3 },
      { label: "Es gibt eins, aber von vor zwei Reorganisationen.", points: 1 },
      { label: "Wir sind noch klein genug, dass jeder alles weiß.", points: 2 },
      { label: "Organigramm? Wir haben eine Chatgruppe.", points: 0 },
    ],
  },
  {
    id: "q5",
    question:
      "Wie werden rechtliche und regulatorische Fragen in strategische Entscheidungen einbezogen?",
    options: [
      { label: "Von Anfang an, systematisch.", points: 3 },
      { label: "Meistens erst, wenn jemand explizit danach fragt.", points: 1 },
      { label: "Wir haben gute Kontakte für den Notfall.", points: 2 },
      { label: "Wir kümmern uns darum, wenn es brennt.", points: 0 },
    ],
  },
  {
    id: "q6",
    question: "Wie viele Personen könnten das Unternehmen führen, wenn Sie sechs Monate ausfallen würden?",
    options: [
      { label: "Niemand – das wäre ein Problem.", points: 0 },
      { label: "Eine Person, unter spürbarem Stress.", points: 1 },
      { label: "Ein eingespieltes Team mit klaren Rollen.", points: 3 },
      { label: "Vermutlich genug, aber wir haben es nie getestet.", points: 2 },
    ],
  },
  {
    id: "q7",
    question:
      "Wann haben Sie zuletzt eine Entscheidung revidiert, weil ein Interessenkonflikt übersehen wurde?",
    options: [
      { label: "Noch nie – wir denken Interessen von Anfang an mit.", points: 3 },
      { label: "Schon vorgekommen, aber wir haben daraus gelernt.", points: 2 },
      { label: "Öfter, als mir lieb ist.", points: 1 },
      { label: "Was genau ist ein Interessenkonflikt?", points: 0 },
    ],
  },
  {
    id: "q8",
    question: "Wie fühlt sich Wachstum in Ihrem Unternehmen gerade an?",
    options: [
      { label: "Geordnet – wir wachsen in Strukturen hinein, die tragen.", points: 3 },
      { label: "Aufregend, aber wir flicken Struktur im laufenden Betrieb.", points: 1 },
      { label: "Wie kontrolliertes Chaos.", points: 0 },
      { label: "Wachstum? Wir konsolidieren gerade erstmal.", points: 2 },
    ],
  },
];

export const maxQuizScore = quizQuestions.length * 3;

export type QuizTier = {
  min: number;
  max: number;
  title: string;
  text: string;
  recommendation: string;
};

export const quizTiers: QuizTier[] = [
  {
    min: 0,
    max: 6,
    title: "Bauchgefühl-Modus",
    text: "Entscheidungen fallen schnell und mutig – aber meist im Kopf einer einzigen Person. Das funktioniert, solange nichts dazwischenkommt. Der Haken: Irgendwann kommt immer etwas dazwischen.",
    recommendation:
      "Ein guter Startpunkt wäre Executive Advisory: ein unabhängiger Blick von außen, bevor aus Bauchgefühl ein Risiko wird.",
  },
  {
    min: 7,
    max: 13,
    title: "Baustelle mit Potenzial",
    text: "Es gibt Ansätze von Struktur, aber vieles läuft über Zuruf statt über klare Verantwortlichkeiten. Das trägt eine Weile – bis das Unternehmen schneller wächst als seine Organisation.",
    recommendation:
      "Hier lohnt ein Blick auf Organisation & Transformation: Strukturen, die mit dem Unternehmen mitwachsen, statt hinterherzuhinken.",
  },
  {
    min: 14,
    max: 19,
    title: "Fast durchdacht",
    text: "Die wesentlichen Fragen sind beantwortet, die Richtung stimmt. Was fehlt, sind meist einzelne blinde Flecken – oft genau dort, wo Strategie, Governance und Recht aufeinandertreffen.",
    recommendation:
      "Eine strategische Zweitmeinung im Rahmen von Executive Advisory hilft, die letzten Lücken zu schließen, bevor sie teuer werden.",
  },
  {
    min: 20,
    max: 24,
    title: "Bemerkenswert klar",
    text: "Verantwortlichkeiten sind geklärt, Entscheidungen sind durchdacht, das Unternehmen würde auch ohne Sie einen guten Tag haben. Das ist selten – und eine gute Ausgangslage für den nächsten großen Schritt.",
    recommendation:
      "An dieser Stelle wird es interessant: Strategy & Growth, um aus einer klaren Basis das nächste Wachstumsfeld zu erschließen.",
  },
];

export function getTierForScore(score: number): QuizTier {
  const tier = quizTiers.find((t) => score >= t.min && score <= t.max);
  return tier ?? quizTiers[0]!;
}
