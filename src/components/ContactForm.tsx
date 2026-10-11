"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full border border-navy/20 bg-ivory px-4 py-3 text-sm text-navy placeholder:text-navy/35 focus:border-sage focus:outline-none transition-colors";

const labelClasses = "text-xs uppercase tracking-widest2 text-navy/50";

export function ContactForm() {
  const searchParams = useSearchParams();
  const ergebnis = searchParams.get("ergebnis");
  const anliegenPrefill = searchParams.get("anliegen");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-navy/15 bg-stone/15 p-8 md:p-10">
        <h3 className="text-xl font-serif text-navy">Vielen Dank.</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns in der Regel
          innerhalb von zwei Werktagen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <p className="hidden">
        <label>
          Bitte nicht ausfüllen: <input name="bot-field" />
        </label>
      </p>

      {ergebnis ? (
        <>
          <input type="hidden" name="klarheits-check-ergebnis" value={ergebnis} />
          <p className="text-xs text-sage border border-sage/40 bg-sage/5 px-4 py-3">
            Klarheits-Check Ergebnis: <strong>{ergebnis}</strong> — wird automatisch an
            Ihre Nachricht angehängt.
          </p>
        </>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Vorname *</span>
          <input required name="vorname" className={inputClasses} type="text" />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Nachname *</span>
          <input required name="nachname" className={inputClasses} type="text" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Unternehmen *</span>
          <input required name="unternehmen" className={inputClasses} type="text" />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Position</span>
          <input name="position" className={inputClasses} type="text" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>E-Mail *</span>
          <input required name="email" className={inputClasses} type="email" />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Telefonnummer (optional)</span>
          <input name="telefon" className={inputClasses} type="tel" />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClasses}>Anliegen *</span>
        <textarea
          required
          name="anliegen"
          rows={5}
          className={inputClasses}
          defaultValue={anliegenPrefill ?? undefined}
        />
      </label>

      <fieldset className="flex flex-col gap-2">
        <legend className={labelClasses}>Gewünschte Kontaktaufnahme</legend>
        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2 text-sm text-navy/75">
            <input type="radio" name="kontaktweg" value="E-Mail" defaultChecked />
            E-Mail
          </label>
          <label className="flex items-center gap-2 text-sm text-navy/75">
            <input type="radio" name="kontaktweg" value="Telefon" />
            Telefon
          </label>
        </div>
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-navy/70">
        <input required type="checkbox" name="datenschutz" className="mt-1" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="underline hover:text-navy">
            Datenschutzerklärung
          </a>{" "}
          zur Kenntnis genommen. *
        </span>
      </label>

      {error ? (
        <p className="text-sm text-red-700 border border-red-300 bg-red-50 px-4 py-3">
          Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut
          oder schreiben Sie uns direkt an{" "}
          <a href="mailto:kontakt@marlau-advisory.com" className="underline">
            kontakt@marlau-advisory.com
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex w-fit items-center px-7 py-3.5 text-sm tracking-wide bg-navy text-ivory hover:bg-sea transition-colors duration-300 ease-quiet disabled:opacity-60"
      >
        {submitting ? "Wird gesendet…" : "Gespräch anfragen"}
      </button>
    </form>
  );
}
