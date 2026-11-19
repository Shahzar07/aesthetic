import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { courses, getCourse, type Course, type CourseProgramme } from "@/lib/courses";
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
          {course.programme && <ProgrammeHeroDetails programme={course.programme} />}
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
                {course.programme && <ProgrammeGlance programme={course.programme} />}
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

      {course.programme && <ProgrammeSections programme={course.programme} />}

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

const todayIso = () => new Date().toISOString().slice(0, 10);

function upcoming(programme: CourseProgramme) {
  const today = todayIso();
  return {
    dates: programme.dates.filter((d) => d.iso >= today),
    offer: programme.offer && programme.offer.expires >= today ? programme.offer : undefined,
  };
}

function ProgrammeHeroDetails({ programme }: { programme: CourseProgramme }) {
  const { dates, offer } = upcoming(programme);
  return (
    <div className="mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
      {offer && (
        <div className="border border-gold bg-background p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{offer.label}</p>
          <p className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="font-display text-5xl text-ink">{offer.price}</span>
            <span className="text-lg text-muted-foreground line-through">{offer.regular}</span>
            <span className="text-sm uppercase tracking-[0.16em] text-ink">{offer.saving}</span>
          </p>
        </div>
      )}
      <div className="border border-border bg-background p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Practical training dates
        </p>
        <ul className="mt-3 space-y-2">
          {dates.map((d) => (
            <li key={d.iso} className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-xl text-ink">{d.label}</span>
              {d.note && (
                <span className="text-xs uppercase tracking-[0.14em] text-gold">{d.note}</span>
              )}
            </li>
          ))}
          {dates.length === 0 && (
            <li className="text-base text-ink">New dates coming soon — register your interest.</li>
          )}
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          {programme.venue.name}, {programme.venue.lines.slice(1, 3).join(", ")}
        </p>
      </div>
    </div>
  );
}

function ProgrammeGlance({ programme }: { programme: CourseProgramme }) {
  const { dates, offer } = upcoming(programme);
  return (
    <>
      <div>
        <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Course fee</dt>
        <dd className="mt-1 font-display text-xl text-ink">
          {offer ? (
            <>
              {offer.price}{" "}
              <span className="text-base text-muted-foreground line-through">{offer.regular}</span>
            </>
          ) : (
            (programme.offer?.regular ?? "Enquire")
          )}
        </dd>
      </div>
      <div>
        <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Practical dates
        </dt>
        {dates.map((d) => (
          <dd key={d.iso} className="mt-1 text-base font-normal text-ink">
            {d.label}
          </dd>
        ))}
        {dates.length === 0 && (
          <dd className="mt-1 text-base font-normal text-ink">New dates coming soon</dd>
        )}
      </div>
      <div>
        <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Venue</dt>
        <dd className="mt-1 text-base font-normal leading-relaxed text-ink">
          {programme.venue.name}
          {programme.venue.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
          {programme.venue.note && (
            <span className="mt-1 block text-sm text-muted-foreground">{programme.venue.note}</span>
          )}
        </dd>
      </div>
    </>
  );
}

function TickList({ items, cols = 2 }: { items: string[]; cols?: 2 | 3 }) {
  return (
    <ul
      className={`mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {items.map((i) => (
        <li key={i} className="flex gap-4 border-b border-border pb-4 text-base text-ink">
          <span className="text-gold">—</span>
          <span className="font-normal">{i}</span>
        </li>
      ))}
    </ul>
  );
}

function ProgrammeSections({ programme }: { programme: CourseProgramme }) {
  const { dates, offer } = upcoming(programme);
  return (
    <>
      <div className="border-t border-border bg-stone py-24">
        <Section>
          <p className="eyebrow">Your training programme</p>
          <h2 className="mt-6 text-4xl text-ink md:text-5xl">3-day blended learning programme</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {programme.format.map((f) => (
              <div key={f.title} className="border-t border-ink pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{f.title}</p>
                <h3 className="mt-3 text-3xl text-ink">{f.heading}</h3>
                {f.intro && (
                  <p className="mt-3 text-base font-normal text-muted-foreground">{f.intro}</p>
                )}
                {f.title === "Day 3" && dates.length > 0 && (
                  <p className="mt-2 text-base text-ink">
                    {dates.map((d) => d.label).join(" or ")}
                  </p>
                )}
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-4 text-base font-normal text-ink">
                      <span className="text-gold">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-24">
        <p className="eyebrow">Where could your training take you?</p>
        <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
          Phlebotomy skills can support your journey towards opportunities in:
        </p>
        <TickList items={programme.careers} cols={3} />

        <div className="mt-20">
          <p className="eyebrow">Your career doesn&apos;t stop at phlebotomy</p>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
            Your phlebotomy journey could be the beginning of something much bigger. Explore future
            progression pathways including:
          </p>
          <TickList items={programme.progression} cols={3} />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {programme.progressionNote}
          </p>
        </div>
      </Section>

      <div className="border-t border-border bg-stone py-24">
        <Section>
          <p className="eyebrow">More than just a training course</p>
          <h2 className="mt-6 text-4xl text-ink md:text-5xl">
            Aesthetic IQ student career support
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
            We want to support you beyond the classroom. As part of your learning experience
            you&apos;ll receive access to:
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {programme.support.map((s) => (
              <div key={s.title} className="border-t border-ink/15 pt-5">
                <h3 className="text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-base font-normal leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Entry requirements</p>
            <p className="mt-6 font-display text-2xl text-ink">No previous experience required</p>
            <TickList items={programme.entry} cols={2} />
          </div>
          <div>
            <p className="eyebrow">Why choose Aesthetic IQ?</p>
            <TickList items={programme.why} cols={2} />
          </div>
        </div>
      </Section>

      <div className="border-t border-border bg-ink py-24 text-background">
        <Section>
          <p className="eyebrow text-gold">Register your interest today</p>
          <h2 className="mt-6 max-w-3xl text-4xl text-background md:text-5xl">
            Your journey into healthcare starts here
          </h2>
          <div className="mt-8 space-y-2 text-lg font-normal">
            {offer && (
              <p>
                {offer.label}: <strong>{offer.price}</strong> instead of {offer.regular}
              </p>
            )}
            {dates.map((d) => (
              <p key={d.iso}>{d.label} · Maidstone, Kent</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-2 text-lg">
            <a
              href={`mailto:${programme.contact.email}`}
              className="link-underline w-fit text-background"
            >
              {programme.contact.email}
            </a>
            <a
              href={`tel:${programme.contact.phone.replace(/\s/g, "")}`}
              className="link-underline w-fit text-background"
            >
              {programme.contact.phone}
            </a>
          </div>
          <div className="mt-10">
            <GoldButton to="/contact" variant="gold">
              Register your interest
            </GoldButton>
          </div>
          <p className="mt-10 max-w-3xl text-sm italic text-background/70">{programme.tagline}</p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-background/60">
            {programme.disclaimer}
          </p>
        </Section>
      </div>
    </>
  );
}
