import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { Post } from "@/lib/blog";
import { getPost, getCategory, postsByCategory, formatDate } from "@/lib/blog";
import { GoldButton, Section } from "@/components/site/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: Post } => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Aesthetic IQ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    const title = `${p.title} | Aesthetic IQ`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: "Aesthetic IQ" },
          }),
        },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const category = getCategory(post.category);
  const related = postsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <div className="border-b border-border bg-stone">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
            {category && (
              <Link
                to="/blog/category/$category"
                params={{ category: category.slug }}
                className="link-underline text-[0.65rem] uppercase tracking-[0.22em] text-gold"
              >
                {category.name}
              </Link>
            )}
            <h1 className="mt-8 text-4xl leading-[1.1] text-ink md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-7 text-lg font-normal leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {formatDate(post.date)} · {post.readMins} min read
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-20">
          {post.sections.map((sec) => (
            <section key={sec.h} className="mb-14">
              <h2 className="rule-gold text-3xl leading-snug text-ink">{sec.h}</h2>
              <div className="mt-7 space-y-5 text-lg font-normal leading-relaxed text-muted-foreground">
                {sec.p.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="border-t border-ink pt-10">
            <p className="eyebrow">Train with us</p>
            <p className="mt-5 font-display text-3xl leading-snug text-ink">
              Turn this knowledge into supervised, certified practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GoldButton to="/courses">Browse courses</GoldButton>
              <GoldButton to="/contact" variant="outline">
                Enquire
              </GoldButton>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <div className="border-t border-border bg-stone py-20">
          <Section>
            <p className="eyebrow">More in {category?.name}</p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group border-t border-ink pt-5"
                >
                  <h3 className="text-2xl leading-snug text-ink transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </Section>
        </div>
      )}
    </>
  );
}
