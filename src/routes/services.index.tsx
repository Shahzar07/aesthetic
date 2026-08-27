import { createFileRoute, Link } from "@tanstack/react-router";
import { GoldButton, PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, MailingList } from "@/components/site/blocks";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Clinic Consultancy & Recruitment | Aesthetic IQ" },
      {
        name: "description",
        content:
          "Beyond training: clinic setup and design consultancy for new aesthetics clinics, plus recruitment and international opportunities for qualified practitioners.",
      },
      { property: "og:title", content: "Services | Aesthetic IQ" },
      {
        property: "og:description",
        content:
          "Clinic setup and design consultancy, and recruitment for UK and international aesthetics opportunities.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const services = [
  {
    to: "/services/clinic-setup",
    eyebrow: "Consultancy",
    title: "Clinic Setup & Design Consultancy",
    body: "Support for practitioners and businesses creating or developing an aesthetics clinic — concept and layout, treatment-room design, equipment and furniture selection, branding and patient experience.",
    points: [
      "Clinic concept & floor plan",
      "Treatment-room design",
      "Equipment & furniture selection",
      "Branding & patient journey",
    ],
  },
  {
    to: "/services/recruitment",
    eyebrow: "Careers",
    title: "Recruitment & International Opportunities",
    body: "Qualified aesthetics and healthcare practitioners can register their interest and share their details for future UK and international roles as we connect professionals with clinics and organisations.",
    points: [
      "Register your interest",
      "Share your CV & experience",
      "UK & international roles",
      "Clinic partner network",
    ],
  },
];

function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Aesthetic IQ Services"
        title="Support that continues beyond the training day."
        intro="Alongside our CPD-accredited clinical courses, Aesthetic IQ is building services that help practitioners grow — from designing your own clinic to finding your next role at home or abroad."
      />

      <Section className="py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.to}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              to={s.to as any}
              className="gold-frame group flex flex-col justify-between p-10 transition-colors hover:border-gold"
            >
              <div>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-5 text-3xl leading-tight text-ink md:text-4xl">{s.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-8 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-4 shrink-0 bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-10 inline-block text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                Explore →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <GoldButton to="/contact">Enquire now</GoldButton>
          <GoldButton to="/courses" variant="outline">
            View training courses
          </GoldButton>
        </div>
      </Section>

      <AccreditationStrip />

      <Section className="py-24">
        <MailingList />
      </Section>
    </>
  );
}
