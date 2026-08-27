import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { GoldButton, PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, MailingList } from "@/components/site/blocks";

export const Route = createFileRoute("/services/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment & International Opportunities | Aesthetic IQ" },
      {
        name: "description",
        content:
          "Qualified aesthetics and healthcare practitioners can register their interest and share their CV for future UK and international opportunities with Aesthetic IQ partner clinics.",
      },
      { property: "og:title", content: "Recruitment & International Opportunities | Aesthetic IQ" },
      {
        property: "og:description",
        content:
          "Register your details for future UK and international aesthetics and healthcare roles.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/recruitment" }],
  }),
  component: Recruitment,
});

const labelClass = "block text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground";
const inputClass =
  "mt-3 w-full border border-border bg-background px-5 py-4 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

const professions = [
  "Aesthetic practitioner",
  "Nurse (RGN / RMN)",
  "Doctor",
  "Dentist / Dental therapist",
  "Paramedic",
  "Phlebotomist",
  "Healthcare assistant",
  "Clinic manager",
  "Other healthcare professional",
];

const regions = [
  "United Kingdom",
  "Europe",
  "Middle East",
  "Asia",
  "North America",
  "Open to any location",
];

const benefits = [
  {
    t: "One register, ongoing access",
    d: "Your details stay on our practitioner register so we can contact you as suitable roles open up.",
  },
  {
    t: "UK & international roles",
    d: "We are building relationships with clinics and organisations in the UK and overseas.",
  },
  {
    t: "Clinician-led matching",
    d: "Roles are reviewed by a practising clinician, so we understand scope, competence and fit.",
  },
  {
    t: "Confidential",
    d: "Your details are never shared with a clinic without your explicit permission first.",
  },
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number.")
    .max(30)
    .regex(/^[0-9+()\s-]*$/, "Phone number contains invalid characters."),
  profession: z.string().trim().min(1, "Please select your profession."),
  registration: z.string().trim().max(60).optional(),
  experience: z.string().trim().min(1, "Please select your experience level."),
  region: z.string().trim().min(1, "Please select a preferred location."),
  about: z.string().trim().min(10, "Please tell us a little about your experience.").max(1500),
});

function Recruitment() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cvName, setCvName] = useState<string | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse({
      name: String(data["name"] ?? ""),
      email: String(data["email"] ?? ""),
      phone: String(data["phone"] ?? ""),
      profession: String(data["profession"] ?? ""),
      registration: String(data["registration"] ?? ""),
      experience: String(data["experience"] ?? ""),
      region: String(data["region"] ?? ""),
      about: String(data["about"] ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    toast.success("You are on the Aesthetic IQ practitioner register.", {
      description: "We will be in touch as suitable UK or international opportunities arise.",
    });
    form.reset();
    setCvName(null);
  };

  const err = (k: string) =>
    errors[k] ? <p className="mt-2 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Recruitment & International Opportunities"
        intro="Qualified aesthetics and healthcare practitioners can register their interest and details for future opportunities in the UK and internationally, as Aesthetic IQ connects trained professionals with clinics and organisations."
      />

      <Section className="py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Why register</p>
            <h2 className="mt-5 text-4xl leading-tight text-ink md:text-5xl">
              A register built for trained, credible practitioners.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              This service is growing alongside our training academy. Registering now means you are
              already on file when clinics and international partners come to us looking for
              qualified people.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoldButton to="/courses" variant="outline">
                View training courses
              </GoldButton>
              <GoldButton to="/contact" variant="outline">
                Contact the team
              </GoldButton>
            </div>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.t} className="bg-background p-8">
                <h3 className="text-xl text-ink">{b.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-24" id="register">
        <div className="gold-frame p-10 lg:p-14">
          <p className="eyebrow">Practitioner register</p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-ink">
            Register your interest.
          </h2>

          <form onSubmit={submit} noValidate className="mt-12 max-w-3xl space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" maxLength={100} className={inputClass} placeholder="Jane Doe" />
                {err("name")}
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className={inputClass}
                  placeholder="jane@example.com"
                />
                {err("email")}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="phone">
                  Contact number
                </label>
                <input id="phone" name="phone" maxLength={30} className={inputClass} placeholder="07000 000000" />
                {err("phone")}
              </div>
              <div>
                <label className={labelClass} htmlFor="registration">
                  Registration number (optional)
                </label>
                <input
                  id="registration"
                  name="registration"
                  maxLength={60}
                  className={inputClass}
                  placeholder="NMC / GMC / GDC / HCPC"
                />
                {err("registration")}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <label className={labelClass} htmlFor="profession">
                  Profession
                </label>
                <select id="profession" name="profession" className={inputClass} defaultValue="">
                  <option value="">Please select</option>
                  {professions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {err("profession")}
              </div>
              <div>
                <label className={labelClass} htmlFor="experience">
                  Experience
                </label>
                <select id="experience" name="experience" className={inputClass} defaultValue="">
                  <option value="">Please select</option>
                  {["Newly qualified", "1–3 years", "3–5 years", "5+ years"].map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {err("experience")}
              </div>
              <div>
                <label className={labelClass} htmlFor="region">
                  Preferred location
                </label>
                <select id="region" name="region" className={inputClass} defaultValue="">
                  <option value="">Please select</option>
                  {regions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {err("region")}
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="cv">
                Upload your CV (PDF or Word)
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setCvName(e.target.files?.[0]?.name ?? null)}
                className="mt-3 w-full border border-dashed border-border bg-background px-5 py-4 text-sm text-muted-foreground file:mr-5 file:border file:border-ink file:bg-ink file:px-5 file:py-2 file:text-[0.65rem] file:uppercase file:tracking-[0.2em] file:text-background"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                {cvName
                  ? `Selected: ${cvName}`
                  : "If you prefer, you can email your CV to us after registering."}
              </p>
            </div>

            <div>
              <label className={labelClass} htmlFor="about">
                About your experience
              </label>
              <textarea
                id="about"
                name="about"
                rows={6}
                maxLength={1500}
                className={inputClass}
                placeholder="Qualifications, treatments you perform, current role and the kind of opportunity you are looking for."
              />
              {err("about")}
            </div>

            <button
              type="submit"
              className="border border-ink bg-ink px-10 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-background transition-colors hover:border-gold hover:bg-gold hover:text-ink"
            >
              Join the register
            </button>
          </form>
        </div>
      </Section>

      <AccreditationStrip />

      <Section className="py-24">
        <MailingList />
      </Section>
    </>
  );
}
