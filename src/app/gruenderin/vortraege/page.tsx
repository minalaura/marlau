import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { events } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vorträge & Seminare",
  description:
    "Vorträge, Seminare und Netzwerktreffen von Marina Schneider zu arbeitsrechtlichen, strategischen und unternehmerischen Themen.",
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
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-sage mb-4">
              Gründerin
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy max-w-2xl">
              Vorträge &amp; Seminare
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">
              Marina Schneider referiert regelmäßig zu arbeitsrechtlichen,
              strategischen und unternehmerischen Themen – für Verbände,
              Unternehmen und Netzwerke.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden justify-self-center md:justify-self-end">
            <Image
              src="/marina-portrait-close.png"
              alt="Marina Schneider"
              fill
              sizes="(min-width: 768px) 25vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 divide-y divide-navy/10 border-t border-navy/10">
          {events.map((event) => {
            const isInternal = event.link.startsWith("/");
            const content = (
              <>
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
              </>
            );

            const className =
              "group grid gap-2 py-8 md:grid-cols-[140px_1fr] md:items-baseline md:gap-8";

            return isInternal ? (
              <Link key={event.link} href={event.link} className={className}>
                {content}
              </Link>
            ) : (
              <a
                key={event.link}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
