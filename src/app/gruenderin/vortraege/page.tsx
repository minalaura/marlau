import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { events } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vorträge & Seminare",
  description:
    "Vorträge und Seminare von Marina Schneider zu arbeitsrechtlichen und strategischen Themen.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function VortraegePage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
          Gründerin
        </p>
        <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy max-w-2xl">
          Vorträge &amp; Seminare
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">
          Marina Schneider referiert regelmäßig zu arbeitsrechtlichen und
          strategischen Themen – für Verbände, Unternehmen und Organisationen.
        </p>

        <div className="mt-16 divide-y divide-navy/10 border-t border-navy/10">
          {events.map((event) => (
            <a
              key={event.link}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-8 md:grid-cols-[140px_1fr] md:items-baseline md:gap-8"
            >
              <span className="text-xs text-navy/40 whitespace-nowrap">
                {formatDate(event.date)}
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-sage">
                  {event.organizer} · {event.format}
                </p>
                <h2 className="mt-2 text-lg md:text-xl font-serif text-navy group-hover:text-sea transition-colors">
                  {event.title}
                </h2>
                <p className="mt-1.5 text-sm text-navy/60 max-w-xl">
                  {event.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
