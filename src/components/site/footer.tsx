import { Link } from "@tanstack/react-router";
import { courses } from "@/lib/courses";
import { categories } from "@/lib/blog";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-ink text-background/80">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-background">Aesthetic</span>
              <span className="font-display text-3xl text-gold">IQ</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/60">
              {site.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[0.7rem] uppercase tracking-[0.2em] text-background/60 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Training</p>
            <ul className="mt-5 space-y-2.5">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: c.slug }}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Knowledge Hub</p>
            <ul className="mt-5 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/blog/category/$category"
                    params={{ category: c.slug }}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Enquiries</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block font-display text-2xl text-background transition-colors hover:text-gold"
            >
              {site.email}
            </a>
            <ul className="mt-6 space-y-2.5">
              {[
                { to: "/models-wanted", label: "Models wanted" },
                { to: "/students", label: "Student testimonials & gallery" },
                { to: "/about", label: "About the founder" },
                { to: "/contact", label: "Enquire now" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    to={l.to as any}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/courses"
              className="mt-7 inline-block border border-gold px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Book your training
            </Link>
            <p className="eyebrow mt-8">Coming Soon</p>
            <p className="mt-4 text-sm leading-relaxed text-background/50">
              {site.future.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/10 pt-8 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aesthetic IQ. All rights reserved.</p>
          <p>Clinical training for healthcare professionals · United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
