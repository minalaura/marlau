"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { quizQuestions, maxQuizScore, getTierForScore } from "@/lib/quiz-data";

export function ClarityCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const isFinished = step >= quizQuestions.length;
  const score = useMemo(
    () => Object.values(answers).reduce((sum, p) => sum + p, 0),
    [answers]
  );
  const tier = useMemo(() => getTierForScore(score), [score]);

  function selectAnswer(questionId: string, points: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
    setStep((s) => s + 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  if (isFinished) {
    const contactHref = `/kontakt?ergebnis=${encodeURIComponent(tier.title)}`;

    return (
      <div className="border border-navy/15 bg-ivory p-8 md:p-12">
        <p className="text-xs uppercase tracking-widest2 text-sage mb-3">Ihr Ergebnis</p>
        <h3 className="text-2xl md:text-3xl font-serif text-navy">{tier.title}</h3>
        <p className="mt-2 text-sm text-navy/50">
          {score} von {maxQuizScore} Punkten
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/75">{tier.text}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/75">
          {tier.recommendation}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <Link
            href={contactHref}
            className="inline-flex items-center px-7 py-3.5 text-sm tracking-wide bg-navy text-ivory hover:bg-sea transition-colors duration-300 ease-quiet"
          >
            Ergebnis besprechen
          </Link>
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center px-7 py-3.5 text-sm tracking-wide border border-navy/30 text-navy hover:border-navy transition-colors duration-300 ease-quiet"
          >
            Check wiederholen
          </button>
        </div>

        <p className="mt-6 text-xs text-navy/40">
          Dieser Check ersetzt keine Beratung. Er ist ein erster, zugespitzter Impuls.
        </p>
      </div>
    );
  }

  const current = quizQuestions[step]!;
  const progress = Math.round((step / quizQuestions.length) * 100);

  return (
    <div className="border border-navy/15 bg-ivory p-8 md:p-12">
      <div className="mb-8">
        <div className="h-px w-full bg-navy/10">
          <div
            className="h-px bg-sage transition-all duration-300 ease-quiet"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs uppercase tracking-widest2 text-navy/40">
          Frage {step + 1} von {quizQuestions.length}
        </p>
      </div>

      <fieldset>
        <legend className="text-xl md:text-2xl font-serif text-navy leading-snug">
          {current.question}
        </legend>

        <div className="mt-7 flex flex-col gap-3">
          {current.options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => selectAnswer(current.id, option.points)}
              className="text-left px-5 py-4 border border-navy/15 text-sm text-navy/85 hover:border-sage hover:bg-stone/15 transition-colors duration-300 ease-quiet"
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
