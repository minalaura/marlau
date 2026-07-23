import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export type InsightSummary = InsightFrontmatter & { slug: string };

export function getInsightSlugs(): string[] {
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllInsights(): InsightSummary[] {
  return getInsightSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return { ...(data as InsightFrontmatter), slug };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsightBySlug(slug: string): {
  frontmatter: InsightFrontmatter;
  content: string;
} {
  const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as InsightFrontmatter, content };
}
