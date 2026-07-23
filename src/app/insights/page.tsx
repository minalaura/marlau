import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspektiven zu Strategie, Governance, Organisation, Leadership, Legal Strategy und Social Impact von MARLAU Advisory.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <p className="text-xs uppercase tracking-widest2 text-sage mb-4">Insights</p>
        <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-navy max-w-2xl">
          Perspektiven auf Strategie, Governance und Organisation.
        </h1>

        <div className="mt-16 divide-y divide-navy/10 border-t border-navy/10">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group grid gap-2 py-8 md:grid-cols-[140px_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="text-xs uppercase tracking-widest2 text-sage">
                {insight.category}
              </span>
              <div>
                <h2 className="text-lg md:text-xl font-serif text-navy group-hover:text-sea transition-colors">
                  {insight.title}
                </h2>
                <p className="mt-1.5 text-sm text-navy/60 max-w-xl">{insight.excerpt}</p>
              </div>
              <span className="text-xs text-navy/40 whitespace-nowrap">
                {formatDate(insight.date)}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
