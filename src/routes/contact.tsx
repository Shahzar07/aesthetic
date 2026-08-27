import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { courses } from "@/lib/courses";
import { site } from "@/lib/site";
import { PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, MailingList } from "@/components/site/blocks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Course Enquiries | Aesthetic IQ" },
      {
        name: "description",
        content:
          "Enquire about phlebotomy, cannulation, botox, dermal filler, vitamin injection and PRP training dates, group bookings and in-house courses with Aesthetic IQ.",
      },
      { property: "og:title", content: "Contact Aesthetic IQ" },
      {
        property: "og:description",
        content: "Course enquiries, group bookings and business partnerships with Aesthetic IQ.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const inputClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";
const labelClass = "text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground";

function Contact() {
  const [type, setType] = useState<"course" | "business">("course");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you — your enquiry has been received.", {
      description: "We aim to respond within one working day.",
    });
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your training."
        intro="Course dates, group bookings, in-house training for clinics and NHS teams, or partnership enquiries — we read and answer everything ourselves."
      />

      <Section className="py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex gap-px bg-border">
              {(
                [
                  ["course", "Course enquiry"],
                  ["business", "Business enquiry"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setType(key)}
                  className={`flex-1 px-6 py-4 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                    type === key
                      ? "bg-ink text-background"
                      : "bg-background text-muted-foreground hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

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
                    placeholder="jane@clinic.co.uk"
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
                  <label className={labelClass} htmlFor="profession">
                    {type === "course" ? "Profession / registration" : "Organisation"}
                  </label>
                  <input
                    id="profession"
                    name="profession"
                    className={inputClass}
                    placeholder={
                      type === "course" ? "Registered nurse, NMC" : "Clinic or company name"
                    }
                  />
                </div>
              </div>

              {type === "course" && (
                <div>
                  <label className={labelClass} htmlFor="course">
                    Course of interest
                  </label>
                  <select id="course" name="course" className={inputClass} defaultValue="">
                    <option value="">Please select</option>
                    {courses.map((c) => (
                      <option key={c.slug} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet — please advise</option>
                  </select>
                </div>
              )}

              <div>
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={inputClass}
                  placeholder={
                    type === "course"
                      ? "Tell us about your experience and the dates that suit you."
                      : "Tell us about your organisation and what you need."
                  }
                />
              </div>

              <button
                type="submit"
                className="border border-ink bg-ink px-10 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-background transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                Send enquiry
              </button>
            </form>
          </div>

          <aside className="space-y-10">
            <div className="border border-border bg-stone p-8">
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline mt-4 inline-block font-display text-2xl text-ink"
              >
                {site.email}
              </a>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Responses within one working day, Monday to Friday.
              </p>
            </div>

            <div className="border border-border p-8">
              <p className="eyebrow">Follow</p>
              <div className="mt-5 grid gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline w-fit text-base text-ink"
                  >
                    {s.label}
                  </a>
                ))}
                <span className="text-base text-muted-foreground">YouTube — coming soon</span>
              </div>
            </div>

            <div className="border border-border bg-ink p-8 text-background">
              <p className="eyebrow">On the horizon</p>
              <p className="mt-5 text-sm leading-relaxed text-background/60">
                {site.future.join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <AccreditationStrip />
      <MailingList />
    </>
  );
}
