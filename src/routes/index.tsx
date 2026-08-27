import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import founderImg from "@/assets/founder.jpg";
import { courses } from "@/lib/courses";
import { latestPosts, formatDate, getCategory } from "@/lib/blog";
import { site } from "@/lib/site";
import { CtaBand, GoldButton, Section } from "@/components/site/ui";
import {
  AccreditationStrip,
  ComingSoonSection,
  CtaCluster,
  MailingList,
  StudentGallery,
  Testimonials,
  WhyChoose,
} from "@/components/site/blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aesthetic IQ | Phlebotomy, Botox & Dermal Filler Training UK" },
      {
        name: "description",
        content:
          "CPD accredited phlebotomy, cannulation, botox, dermal filler, vitamin injection and PRP training for UK healthcare professionals. Small groups, live models, clinical excellence.",
      },
      { property: "og:title", content: "Aesthetic IQ | Medical Aesthetic Training UK" },
      {
        property: "og:description",
        content:
          "Premium clinical training in phlebotomy, botox, dermal fillers and PRP, led by a practising NHS healthcare professional.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const posts = latestPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-stone">
        <div className="grid-clinical pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-28">
          <div className="fade-up">
            <p className="eyebrow">Phlebotomy &amp; Clinical Skills Academy · UK</p>
            <h1 className="mt-7 text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.2rem]">
              Master the vein.
              <span className="block text-gold">Master the clinic.</span>
            </h1>
            <p className="mt-9 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {site.tagline} Aesthetic IQ trains healthcare professionals in venepuncture, IV
              cannulation and blood-based treatments — first-time draws, safe sharps practice and
              patient-side confidence.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <GoldButton to="/courses" variant="gold">
                Explore training
              </GoldButton>
              <GoldButton to="/contact" variant="outline">
                Enquire now
              </GoldButton>
            </div>
            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["7", "Accredited courses"],
                ["1:4", "Trainer ratio"],
                ["CPD", "Certified"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-ink">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-28 w-28 border-l-2 border-t-2 border-gold lg:block" />
            <img
              src={heroImg}
              alt="Phlebotomy training: gloved clinician performing venepuncture beside racked blood collection tubes"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-sm bg-ink px-7 py-5 lg:block">
              <p className="font-display text-lg tracking-tight text-background">
                Venepuncture &amp; cannulation
              </p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold-soft">
                Live practice · small cohorts
              </p>
            </div>
          </div>
        </div>
      </section>

      <AccreditationStrip />

      {/* Intro */}
      <Section className="py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Introduction</p>
            <h2 className="rule-gold mt-6 text-4xl leading-tight text-ink md:text-5xl">
              A different standard of clinical skills training.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-normal leading-relaxed text-muted-foreground">
            <p>
              Aesthetic IQ was founded on a simple observation: too much clinical training teaches
              procedures without teaching judgement. We build practitioners who understand the
              anatomy beneath the needle, the governance around the treatment, and the conversation
              that must happen before either.
            </p>
            <p>
              Our courses combine rigorous theory with extended supervised practical time, delivered
              in small groups so no one leaves having simply watched. From your first venepuncture
              to advanced full-face assessment, the progression is deliberate.
            </p>
            <Link
              to="/about"
              className="link-underline inline-block text-sm uppercase tracking-[0.2em] text-ink"
            >
              Read our story
            </Link>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <div className="bg-stone py-28">
        <Section>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src={founderImg}
                alt="Founder of Aesthetic IQ, an NHS healthcare professional and phlebotomy educator"
                width={1200}
                height={1504}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow">The founder</p>
              <h2 className="mt-6 text-4xl leading-tight text-ink md:text-5xl">
                Taught by someone still doing the work.
              </h2>
              <div className="mt-8 space-y-5 text-lg font-normal leading-relaxed text-muted-foreground">
                <p>
                  Aesthetic IQ is led by an NHS healthcare professional and experienced phlebotomist
                  whose teaching is shaped by daily clinical reality rather than theory alone.
                </p>
                <p>
                  A passionate educator committed to high clinical standards, the founder's focus is
                  on helping healthcare professionals develop practical, transferable skills — and
                  the confidence to use them safely.
                </p>
              </div>
              <div className="mt-10">
                <GoldButton to="/about" variant="outline">
                  More about the founder
                </GoldButton>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Courses */}
      <Section className="py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Training courses</p>
            <h2 className="mt-6 text-4xl leading-tight text-ink md:text-5xl">
              Seven pathways, one standard.
            </h2>
          </div>
          <Link
            to="/courses"
            className="link-underline text-sm uppercase tracking-[0.2em] text-ink"
          >
            View all
          </Link>
        </div>

        <div className="mt-14 border-t border-border">
          {courses.map((c, i) => (
            <Link
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="group grid items-baseline gap-3 border-b border-border py-8 transition-colors hover:bg-stone sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:px-4"
            >
              <span className="font-display text-xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-2xl text-ink md:text-3xl">{c.title}</span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {c.short}
                </span>
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-gold">
                {c.duration}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <WhyChoose />

      <Testimonials />

      <StudentGallery limit={4} />

      <CtaCluster />

      {/* Blog */}
      <Section className="pb-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The journal</p>
            <h2 className="mt-6 text-4xl leading-tight text-ink md:text-5xl">Latest education</h2>
          </div>
          <Link to="/blog" className="link-underline text-sm uppercase tracking-[0.2em] text-ink">
            All articles
          </Link>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group border-t border-ink pt-6"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                {getCategory(p.category)?.name}
              </p>
              <h3 className="mt-4 text-2xl leading-snug text-ink transition-colors group-hover:text-gold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {formatDate(p.date)} · {p.readMins} min read
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <ComingSoonSection />

      <MailingList />

      <CtaBand />

      {/* Contact */}
      <Section className="py-28" id="contact">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-6 text-4xl leading-tight text-ink md:text-5xl">
              Speak to us about your next course.
            </h2>
            <p className="mt-7 max-w-md text-lg font-normal leading-relaxed text-muted-foreground">
              Whether you are taking your first steps into clinical practice or expanding an
              established clinic, we will help you choose the right pathway.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-9 inline-block font-display text-3xl text-ink"
            >
              {site.email}
            </a>
          </div>
          <div className="border border-border bg-stone p-10">
            <p className="font-display text-2xl text-ink">Enquiries</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Use our enquiry form to ask about dates, group bookings, bespoke in-house training or
              international courses.
            </p>
            <div className="mt-8">
              <GoldButton to="/contact">Open enquiry form</GoldButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
