import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: Bots füllen verborgene Felder aus, echte Nutzer nicht.
  if (typeof body["bot-field"] === "string" && body["bot-field"].length > 0) {
    return NextResponse.json({ ok: true });
  }

  const vorname = String(body.vorname ?? "").trim();
  const nachname = String(body.nachname ?? "").trim();
  const unternehmen = String(body.unternehmen ?? "").trim();
  const position = String(body.position ?? "").trim();
  const email = String(body.email ?? "").trim();
  const telefon = String(body.telefon ?? "").trim();
  const anliegen = String(body.anliegen ?? "").trim();
  const kontaktweg = String(body.kontaktweg ?? "").trim();
  const ergebnis = String(body["klarheits-check-ergebnis"] ?? "").trim();

  if (!vorname || !nachname || !unternehmen || !email || !anliegen) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 }
    );
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_RECIPIENT ?? smtpUser;

  if (!smtpUser || !smtpPass || !recipient) {
    console.error("Kontaktformular: SMTP-Umgebungsvariablen fehlen.");
    return NextResponse.json(
      { error: "Der Versand ist derzeit nicht konfiguriert." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.ionos.de",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const textLines = [
    `Name: ${vorname} ${nachname}`,
    `Unternehmen: ${unternehmen}`,
    `Position: ${position || "–"}`,
    `E-Mail: ${email}`,
    `Telefon: ${telefon || "–"}`,
    `Gewünschte Kontaktaufnahme: ${kontaktweg || "–"}`,
    ergebnis ? `Klarheits-Check Ergebnis: ${ergebnis}` : null,
    "",
    "Anliegen:",
    anliegen,
  ].filter((line): line is string => line !== null);

  try {
    await transporter.sendMail({
      from: `"MARLAU Website" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Erstgespräch-Anfrage: ${vorname} ${nachname}`,
      text: textLines.join("\n"),
      html: `<pre style="font-family: inherit; white-space: pre-wrap;">${escapeHtml(
        textLines.join("\n")
      )}</pre>`,
    });
  } catch (err) {
    console.error("Kontaktformular: Versand fehlgeschlagen.", err);
    return NextResponse.json(
      { error: "Der Versand ist fehlgeschlagen." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
