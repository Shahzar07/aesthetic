import { createFileRoute } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpg";
import { CtaBand, PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, CtaCluster, MailingList, WhyChoose } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aesthetic IQ | NHS-Led Medical Aesthetic Training" },
      {
        name: "description",
        content:
          "Aesthetic IQ is led by an NHS healthcare professional and experienced phlebotomist dedicated to high clinical standards and practical skills training.",
      },
      { property: "og:title", content: "About Aesthetic IQ" },
      {
        property: "og:description",
        content:
          "Meet the NHS healthcare professional and educator behind Aesthetic IQ's clinical training courses.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    t: "NHS healthcare professional",
    d: "Currently practising within the NHS, bringing live clinical governance and patient-safety culture into every teaching day.",
  },
  {
    t: "Experienced phlebotomist",
    d: "Thousands of venepunctures across hospital and community settings, including the difficult cases textbooks skip.",
  },
  {
    t: "Passionate educator",
    d: "Teaching is a discipline of its own — structured, patient and adapted to how each delegate learns.",
  },
  {
    t: "High clinical standards",
    d: "Aseptic technique, documentation and consent are not add-ons to the syllabus; they are the syllabus.",
  },
  {
    t: "Practical skill development",
    d: "Delegates leave having done the procedure repeatedly under supervision, not having watched a demonstration.",
  },
  {
    t: "Long-term support",
    d: "Mentorship continues after certification, because the hardest cases arrive in week three, not on training day.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Founded on clinical credibility."
        intro="Aesthetic IQ exists to raise the standard of practical training available to healthcare professionals in the UK — combining NHS discipline with the refinement expected of premium aesthetic practice."
      />

      <Section className="py-24">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <img
              src={founderImg}
              alt="The founder of Aesthetic IQ, an NHS healthcare professional and clinical educator"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Founder · Aesthetic IQ
            </p>
          </div>
          <div>
            <p className="eyebrow">The founder</p>
            <h2 className="rule-gold mt-6 text-4xl leading-tight text-ink md:text-5xl">
              A clinician first, an educator by conviction.
            </h2>
            <div className="mt-9 space-y-6 text-lg font-normal leading-relaxed text-muted-foreground">
              <p>
                Aesthetic IQ was founded by an NHS healthcare professional and experienced
                phlebotomist who spent years watching capable colleagues held back by training that
                was too rushed, too crowded or too commercial to build genuine competence.
              </p>
              <p>
                Having taught venepuncture and cannulation to students, support workers and
                registered staff, the founder built Aesthetic IQ around the principle that a
                practitioner should not leave a course until the technique is reliable — not merely
                attempted.
              </p>
              <p>
                That philosophy now extends across the full curriculum, from foundation phlebotomy
                through to advanced dermal filler work, with an unwavering emphasis on anatomy,
                patient safety and honest consultation.
              </p>
              <p className="text-ink">
                A professional portrait and full biography will be added shortly.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-stone py-24">
        <Section>
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-6 max-w-2xl text-4xl leading-tight text-ink md:text-5xl">
            Six commitments behind every course.
          </h2>
          <div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="border-t border-ink/15 pt-6">
                <h3 className="text-2xl text-ink">{v.t}</h3>
                <p className="mt-3 text-base font-normal leading-relaxed text-muted-foreground">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <AccreditationStrip />
      <WhyChoose />
      <CtaCluster />
      <MailingList />
      <CtaBand />
    </>
  );
}
