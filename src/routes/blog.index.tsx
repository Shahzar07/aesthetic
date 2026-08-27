import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, posts, formatDate, getCategory, postsByCategory } from "@/lib/blog";
import { CtaBand, PageHeader, Section } from "@/components/site/ui";
import { CtaCluster, MailingList } from "@/components/site/blocks";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub | Botox, Filler, PRP & Phlebotomy Education — Aesthetic IQ" },
      {
        name: "description",
        content:
          "Clinical education on botox, dermal fillers, PRP, phlebotomy, IV cannulation, vitamin injections, skin boosters and aesthetic career advice for UK healthcare professionals.",
      },
      { property: "og:title", content: "The Aesthetic IQ Knowledge Hub" },
      {
        property: "og:description",
        content:
          "Evidence-led articles across eight clinical categories, written by a practising NHS healthcare professional.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHeader
        eyebrow="Knowledge hub"
        title="Clinical education, written by clinicians."
        intro="Practical, anatomy-led articles across every discipline we teach — browse by category or read the latest below."
      />

      <Section className="py-20">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/blog/category/$category"
              params={{ category: c.slug }}
              className="group bg-background p-8 transition-colors hover:bg-stone"
            >
              <h2 className="text-2xl leading-snug text-ink transition-colors group-hover:text-gold">
                {c.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              <p className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                {postsByCategory(c.slug).length} articles
              </p>
            </Link>
          ))}
        </div>

        {featured && (
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group mt-20 block border-t border-ink pt-8"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">
              Featured · {getCategory(featured.category)?.name}
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-tight text-ink transition-colors group-hover:text-gold md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {formatDate(featured.date)} · {featured.readMins} min read
            </p>
          </Link>
        )}

        <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group border-t border-border pt-6"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                {getCategory(p.category)?.name}
              </p>
              <h3 className="mt-4 text-2xl leading-snug text-ink transition-colors group-hover:text-gold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {formatDate(p.date)} · {p.readMins} min read
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaCluster />
      <MailingList />
      <CtaBand />
    </>
  );
}
