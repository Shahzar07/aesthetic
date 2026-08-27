import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { Category, Post } from "@/lib/blog";
import { getCategory, postsByCategory, formatDate, categories } from "@/lib/blog";
import { CtaBand, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/blog/category/$category")({
  loader: ({ params }): { category: Category; items: Post[] } => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category, items: postsByCategory(category.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found — Aesthetic IQ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.category.name} | Aesthetic IQ Journal`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.blurb },
        { property: "og:url", content: `/blog/category/${params.category}` },
      ],
      links: [{ rel: "canonical", href: `/blog/category/${params.category}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData() as { category: Category; items: Post[] };

  return (
    <>
      <PageHeader eyebrow="Journal category" title={category.name} intro={category.blurb} />

      <Section className="py-20">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-6">
          <Link
            to="/blog"
            className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/blog/category/$category"
              params={{ category: c.slug }}
              className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground"
              activeProps={{ className: "text-gold" }}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group border-t border-ink pt-6"
            >
              <h2 className="text-2xl leading-snug text-ink transition-colors group-hover:text-gold">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {formatDate(p.date)} · {p.readMins} min read
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
