import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";
import { accreditations, comingSoon, testimonials, site } from "@/lib/site";
import { GoldButton, Section } from "@/components/site/ui";

/** Trust strip of CPD / accreditation marks. */
export function AccreditationStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={dark ? "border-y border-background/10 bg-ink" : "border-y border-border bg-stone"}
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <p className="eyebrow">Accredited &amp; insured</p>
        <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {accreditations.map((a) => (
            <li key={a.abbr} className="flex items-start gap-4">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-[0.65rem] tracking-[0.12em] ${
                  dark ? "border-gold/50 text-gold" : "border-gold/45 text-gold"
                }`}
              >
                {a.abbr}
              </span>
              <span>
                <span
                  className={`block font-display text-base ${dark ? "text-background" : "text-ink"}`}
                >
                  {a.name}
                </span>
                <span
                  className={`mt-1 block text-xs leading-relaxed ${
                    dark ? "text-background/55" : "text-muted-foreground"
                  }`}
                >
                  {a.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const reasons = [
  {
    n: "01",
    t: "NHS clinical experience",
    d: "Every course is delivered by a practising NHS healthcare professional whose teaching is shaped by daily clinical reality, not a training-centre script.",
  },
  {
    n: "02",
    t: "CPD accredited training",
    d: "Certificates carry recognised CPD hours, are accepted by UK employers and indemnity providers, and document assessed competency.",
  },
  {
    n: "03",
    t: "Hands-on practical learning",
    d: "Cohorts are capped so the majority of every day is supervised practice — repetition with correction until technique is consistent.",
  },
  {
    n: "04",
    t: "Ongoing support",
    d: "Post-course mentorship, insurance and product guidance, and a direct line to your trainer once you are back in practice.",
  },
];

export function WhyChoose() {
  return (
    <div className="bg-ink py-28 text-background">
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Why choose Aesthetic IQ</p>
            <h2 className="mt-6 text-4xl leading-tight text-background md:text-5xl">
              Training you can defend in clinic, in audit, and in front of a patient.
            </h2>
            <div className="gold-hairline mt-9 w-40" />
            <p className="mt-8 max-w-md leading-relaxed text-background/60">
              Four commitments sit behind every Aesthetic IQ course. They are the reason our
              delegates leave able to practise, not simply certified.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoldButton to="/contact" variant="gold">
                Book your training
              </GoldButton>
            </div>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.n} className="border-t border-gold/30 pt-6">
                <span className="font-display text-lg text-gold">{r.n}</span>
                <h3 className="mt-3 text-2xl text-background">{r.t}</h3>
                <p className="mt-3 leading-relaxed text-background/60">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section className="py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Student testimonials</p>
          <h2 className="mt-6 text-4xl leading-tight text-ink md:text-5xl">In their words.</h2>
        </div>
        <GoldButton to="/contact" variant="outline">
          Share your experience
        </GoldButton>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="gold-frame p-8">
            <span className="font-display text-4xl text-gold">“</span>
            <blockquote className="mt-3 font-display text-xl leading-snug text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-7 border-t border-gold/25 pt-5 text-sm text-muted-foreground">
              <span className="block text-ink">{t.name}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.16em]">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

const galleryTiles = [
  "Venepuncture practice",
  "Live model clinic",
  "Toxin mapping",
  "Filler anatomy",
  "PRP centrifuge lab",
  "Certificate presentation",
  "Cohort of the month",
  "Clinic setup workshop",
];

export function StudentGallery({ limit }: { limit?: number }) {
  const tiles = typeof limit === "number" ? galleryTiles.slice(0, limit) : galleryTiles;
  return (
    <div className="bg-stone py-28">
      <Section>
        <p className="eyebrow">Student gallery</p>
        <h2 className="mt-6 max-w-2xl text-4xl leading-tight text-ink md:text-5xl">
          Moments from the training room.
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Our gallery is filling up as each cohort completes. Photographs are published only with
          written consent from delegates and models.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t}
              className="flex aspect-[4/5] flex-col justify-end border border-gold/25 bg-background p-5"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="mt-4 font-display text-lg text-ink">{t}</span>
              <span className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Photography coming soon
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function ComingSoonSection() {
  return (
    <Section className="py-28" id="coming-soon">
      <p className="eyebrow">Coming soon</p>
      <h2 className="mt-6 max-w-2xl text-4xl leading-tight text-ink md:text-5xl">
        The next chapters of Aesthetic IQ.
      </h2>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {comingSoon.map((c) => (
          <div key={c.title} className="bg-background p-8">
            <span className="text-[0.6rem] uppercase tracking-[0.24em] text-gold">
              In development
            </span>
            <h3 className="mt-4 text-2xl text-ink">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
          </div>
        ))}
        <div className="flex flex-col justify-center bg-ink p-8 text-background">
          <h3 className="text-2xl text-background">Be first to know</h3>
          <p className="mt-3 text-sm leading-relaxed text-background/60">
            Join the mailing list for launch dates, course releases and events.
          </p>
          <a
            href="#mailing-list"
            className="mt-6 w-fit border border-gold px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Join the list
          </a>
        </div>
      </div>
    </Section>
  );
}

/** Mailing list capture. Stores nothing server-side yet; confirms to the visitor. */
export function MailingList() {
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you — you're on the list.", {
      description: `We'll email ${value} with course dates and launches.`,
    });
    setEmail("");
  };

  return (
    <div id="mailing-list" className="border-y border-border bg-stone">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="eyebrow">Mailing list</p>
          <h2 className="mt-6 text-4xl leading-tight text-ink md:text-5xl">
            Course dates, straight to your inbox.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Early access to new cohorts, model days and the launch of our online academy. No spam,
            unsubscribe any time.
          </p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4 sm:flex-row">
          <label className="sr-only" htmlFor="mailing-list-email">
            Email address
          </label>
          <input
            id="mailing-list-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@clinic.co.uk"
            className="w-full border border-border bg-background px-5 py-4 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold"
          />
          <button
            type="submit"
            className="shrink-0 border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
          >
            Join the list
          </button>
        </form>
      </div>
    </div>
  );
}

/** Repeated three-way call to action. */
export function CtaCluster() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="font-display text-2xl text-ink md:text-3xl">
          Ready to train with us? <span className="gilt">Choose your next step.</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <GoldButton to="/courses" variant="gold">
            Book your training
          </GoldButton>
          <GoldButton to="/contact" variant="dark">
            Enquire now
          </GoldButton>
          <Link
            to="/models-wanted"
            className="inline-flex items-center border border-ink/25 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Become a model
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ContactStrip() {
  return (
    <p className="text-sm text-muted-foreground">
      Prefer email?{" "}
      <a href={`mailto:${site.email}`} className="link-underline text-ink">
        {site.email}
      </a>
    </p>
  );
}
