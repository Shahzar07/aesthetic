import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { courses } from "@/lib/courses";
import { categories } from "@/lib/blog";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Training" },
  { to: "/blog", label: "Knowledge Hub" },
  { to: "/students", label: "Students" },
  { to: "/models-wanted", label: "Models" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center border border-gold/60 font-display text-sm tracking-[0.08em] text-gold">
            IQ
          </span>
          <span className="font-display text-xl tracking-tight text-ink">
            Aesthetic<span className="gilt">&nbsp;IQ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-gold bg-gold px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
          >
            Book your training
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 font-display text-2xl text-ink"
            >
              {n.label}
            </Link>
          ))}
          <p className="eyebrow mt-6">Courses</p>
          <div className="mt-3 grid gap-2">
            {courses.map((c) => (
              <Link
                key={c.slug}
                to="/courses/$slug"
                params={{ slug: c.slug }}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {c.title}
              </Link>
            ))}
          </div>
          <p className="eyebrow mt-6">Journal</p>
          <div className="mt-3 grid gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/blog/category/$category"
                params={{ category: c.slug }}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
