import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { getAllInsights, getInsightBySlug, getInsightSlugs } from "@/lib/insights";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const insight = getAllInsights().find((i) => i.slug === params.slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 mb-4 text-xl md:text-2xl font-serif text-navy" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="mb-5 text-base leading-relaxed text-navy/75" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-5 ml-5 list-disc space-y-2 text-base leading-relaxed text-navy/75" {...props} />
  ),
};

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const slugs = getInsightSlugs();
  if (!slugs.includes(params.slug)) notFound();

  const { frontmatter, content } = getInsightBySlug(params.slug);

  return (
    <article className="pt-20 pb-24 md:pt-28 md:pb-32">
      <Container className="max-w-2xl">
        <Link
          href="/insights"
          className="text-xs uppercase tracking-widest2 text-sage hover:text-sea"
        >
          &larr; Insights
        </Link>

        <p className="mt-8 text-xs uppercase tracking-widest2 text-sage">
          {frontmatter.category}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-serif font-medium leading-tight text-navy">
          {frontmatter.title}
        </h1>
        <p className="mt-4 text-sm text-navy/45">{formatDate(frontmatter.date)}</p>

        <div className="mt-10">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </Container>
    </article>
  );
}
