import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { courses } from "@/lib/courses";
import { site } from "@/lib/site";
import { GoldButton, PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, MailingList } from "@/components/site/blocks";

export const Route = createFileRoute("/models-wanted")({
  head: () => ({
    meta: [
      { title: "Models Wanted | Discounted Treatments at Aesthetic IQ" },
      {
        name: "description",
        content:
          "Register your interest as a treatment model for Aesthetic IQ training courses in botox, dermal fillers, PRP, phlebotomy and IV therapy. Supervised treatments at reduced cost.",
      },
      { property: "og:title", content: "Models Wanted | Aesthetic IQ" },
      {
        property: "og:description",
        content:
          "Become a treatment model on our supervised training days and receive treatment at a reduced model rate.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/models-wanted" }],
  }),
  component: ModelsWanted,
});

const labelClass = "block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground";
const inputClass =
  "mt-3 w-full border border-border bg-background px-5 py-4 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

const expectations = [
  {
    t: "Fully supervised",
    d: "Every treatment is performed by a delegate under the direct, hands-on supervision of our lead trainer.",
  },
  {
    t: "Reduced model rate",
    d: "Model places are offered at a significantly reduced contribution towards product and consumables.",
  },
  {
    t: "Full consultation",
    d: "You receive a complete consultation, medical screening, consent process and written aftercare.",
  },
  {
    t: "You can decline",
    d: "If you are not suitable on the day, or you change your mind, no treatment goes ahead. Consent is ongoing.",
  },
];

function ModelsWanted() {
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const treatment = String(data.get("treatment") ?? "").trim();

    if (!name || !email || !treatment) {
      toast.error("Please complete your name, email and treatment of interest.");
      return;
    }

    setSubmitting(true);
    toast.success("Registration received", {
      description: "We'll contact you when a suitable model day is scheduled.",
    });
    form.reset();
    setSubmitting(false);
  };

  return (
    <>
      <PageHeader
        eyebrow="Models wanted"
        title="Be treated by tomorrow's practitioners, supervised by today's."
        intro="We are always looking for treatment models to support our training days across phlebotomy, IV therapy, botulinum toxin, dermal fillers, PRP and vitamin injections. Register your interest below and we will contact you when a suitable date is confirmed."
      />

      <AccreditationStrip />

      <Section className="py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Register your interest</p>
            <h2 className="mt-6 text-3xl leading-tight text-ink md:text-4xl">
              Tell us what you would like treated.
            </h2>
            <form onSubmit={submit} className="mt-10 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="jane@email.co.uk"
                  />
                </div>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className={inputClass}
                    placeholder="07000 000000"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="location">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    className={inputClass}
                    placeholder="City or postcode"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="treatment">
                  Treatment of interest
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="">Please select</option>
                  {courses.map((c) => (
                    <option key={c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="Any treatment">Happy with any treatment</option>
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="notes">
                  Medical history &amp; availability
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  className={inputClass}
                  placeholder="Any medical conditions, medications, previous treatments, and the days you are usually free."
                />
              </div>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--gold)]" />
                <span>
                  I am 18 or over and understand that treatments are performed by delegates under
                  supervision, and that suitability is confirmed at consultation.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="border border-gold bg-gold px-10 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background disabled:opacity-60"
              >
                Register as a model
              </button>
            </form>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="gold-frame p-8">
              <p className="eyebrow">What to expect</p>
              <dl className="mt-6 space-y-6">
                {expectations.map((x) => (
                  <div key={x.t}>
                    <dt className="font-display text-lg text-ink">{x.t}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border border-border p-8">
              <p className="eyebrow">Questions first?</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline mt-4 inline-block font-display text-2xl text-ink"
              >
                {site.email}
              </a>
              <div className="mt-7">
                <GoldButton to="/contact" variant="outline">
                  Enquire now
                </GoldButton>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <MailingList />
    </>
  );
}
