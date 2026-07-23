import Link from "next/link";
import type { Service } from "@/lib/constants";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/leistungen#${service.slug}`}
      className="group block border border-navy/10 bg-ivory p-8 transition-colors duration-300 ease-quiet hover:border-sage/60 hover:bg-stone/15"
    >
      <h3 className="text-lg font-serif text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/65">{service.shortSummary}</p>
      <span className="mt-6 inline-block text-xs uppercase tracking-widest2 text-sage group-hover:text-sea transition-colors">
        Mehr erfahren
      </span>
    </Link>
  );
}
