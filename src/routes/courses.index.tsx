import { createFileRoute, Link } from "@tanstack/react-router";
import { courses } from "@/lib/courses";
import { CtaBand, PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, CtaCluster, MailingList, WhyChoose } from "@/components/site/blocks";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Training Courses | Phlebotomy, Botox & Filler Courses UK" },
      {
        name: "description",
        content:
          "CPD accredited training courses: phlebotomy, IV cannulation, botulinum toxin, foundation and advanced dermal fillers, vitamin injections and PRP.",
      },
      { property: "og:title", content: "Aesthetic IQ Training Courses" },
      {
        property: "og:description",
        content:
          "Seven accredited clinical training pathways for UK healthcare professionals, taught in small groups with live practical work.",
      },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesIndex,
});

function CoursesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Training"
        title="Accredited clinical courses."
        intro="Each pathway is delivered in small cohorts with extended supervised practical time, CPD accredited certification and continued support once you return to practice."
      />

      <AccreditationStrip />

      <Section className="py-24">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Link
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col justify-between bg-background p-9 transition-colors hover:bg-stone"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.level}
                  </span>
                </div>
                <h2 className="mt-8 text-3xl leading-snug text-ink transition-colors group-hover:text-gold">
                  {c.title}
                </h2>
                <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
                  {c.short}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {c.duration}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-ink">View →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaCluster />
      <WhyChoose />
      <MailingList />
      <CtaBand />
    </>
  );
}
