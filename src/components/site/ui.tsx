import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-border bg-stone">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-6 max-w-3xl text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="fade-up mt-8 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

export function GoldButton({
  to,
  params,
  children,
  variant = "dark",
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: "dark" | "outline" | "gold";
}) {
  const styles = {
    dark: "border-ink bg-ink text-background hover:bg-gold hover:border-gold hover:text-ink",
    outline: "border-ink/25 text-ink hover:border-gold hover:text-gold",
    gold: "border-gold bg-gold text-ink hover:bg-ink hover:border-ink hover:text-background",
  }[variant];

  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className={`inline-flex items-center border px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <div className="mt-32 border-y border-border bg-stone">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="eyebrow">Next steps</p>
          <h2 className="mt-5 max-w-xl text-4xl leading-tight text-ink md:text-5xl">
            Train with a practising NHS clinician.
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <GoldButton to="/courses">View all courses</GoldButton>
          <GoldButton to="/contact" variant="outline">
            Make an enquiry
          </GoldButton>
        </div>
      </div>
    </div>
  );
}
