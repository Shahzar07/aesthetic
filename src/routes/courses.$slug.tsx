import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { courses, getCourse, type Course } from "@/lib/courses";
import { GoldButton, Section } from "@/components/site/ui";
import { AccreditationStrip, CtaCluster, MailingList } from "@/components/site/blocks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }): { course: Course } => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Course not found — Aesthetic IQ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const c = loaderData.course;
    const title = `${c.title} | Aesthetic IQ`;
    return {
      meta: [
        { title },
        { name: "description", content: c.short },
        { property: "og:title", content: title },
        { property: "og:description", content: c.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: c.title,
            description: c.short,
            provider: { "@type": "EducationalOrganization", name: "Aesthetic IQ" },
          }),
        },
      ],
    };
  },
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData() as { course: Course };
  const others = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-border bg-stone">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Link
            to="/courses"
            className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            ← All courses
          </Link>
          <p className="eyebrow mt-10">{course.level} · CPD Accredited</p>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            {course.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
            {course.short}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GoldButton to="/contact" variant="gold">
              Book your training
            </GoldButton>
            <GoldButton to="/contact" variant="dark">
              Enquire now
            </GoldButton>
            <GoldButton to="/models-wanted" variant="outline">
              Models wanted
            </GoldButton>
          </div>
        </div>
      </div>

      <AccreditationStrip />

      <Section className="py-24">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="eyebrow">Course overview</p>
            <div className="mt-7 space-y-6 text-lg font-normal leading-relaxed text-muted-foreground">
              {course.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-16">
              <p className="eyebrow">Who can attend</p>
              <ul className="mt-7 space-y-4">
                {course.attend.map((a) => (
                  <li key={a} className="flex gap-4 border-b border-border pb-4 text-base text-ink">
                    <span className="text-gold">—</span>
                    <span className="font-normal">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <p className="eyebrow">Learning outcomes</p>
              <ol className="mt-7 grid gap-6 sm:grid-cols-2">
                {course.outcomes.map((o, i) => (
                  <li key={o} className="border-t border-ink/15 pt-5">
                    <span className="font-display text-lg text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-base font-normal leading-relaxed text-muted-foreground">
                      {o}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-16">
              <p className="eyebrow">Frequently asked questions</p>
              <Accordion type="single" collapsible className="mt-6">
                {course.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q} className="border-border">
                    <AccordionTrigger className="text-left font-display text-xl font-normal text-ink hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-normal leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-stone p-8">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Duration
                  </dt>
                  <dd className="mt-1 font-display text-xl text-ink">{course.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Level
                  </dt>
                  <dd className="mt-1 font-display text-xl text-ink">{course.level}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Certification
                  </dt>
                  <dd className="mt-1 text-base font-normal leading-relaxed text-ink">
                    {course.certification}
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <GoldButton to="/contact" variant="gold">
                  Enquire
                </GoldButton>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <div className="border-t border-border bg-stone py-20">
        <Section>
          <p className="eyebrow">Continue your pathway</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to="/courses/$slug"
                params={{ slug: c.slug }}
                className="group border-t border-ink pt-5"
              >
                <h3 className="text-2xl text-ink transition-colors group-hover:text-gold">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <CtaCluster />
      <MailingList />
    </>
  );
}
