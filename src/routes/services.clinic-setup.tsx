import { createFileRoute } from "@tanstack/react-router";
import { GoldButton, PageHeader, Section } from "@/components/site/ui";
import { AccreditationStrip, MailingList } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/enquiry-form";

export const Route = createFileRoute("/services/clinic-setup")({
  head: () => ({
    meta: [
      { title: "Clinic Setup & Design Consultancy | Aesthetic IQ" },
      {
        name: "description",
        content:
          "Aesthetic clinic setup and design consultancy: clinic concept and layout, treatment-room design, equipment and furniture selection, branding, patient experience and compliant clinical environments.",
      },
      { property: "og:title", content: "Clinic Setup & Design Consultancy | Aesthetic IQ" },
      {
        property: "og:description",
        content:
          "Plan, design and open a professional aesthetics clinic with clinician-led consultancy from Aesthetic IQ.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/clinic-setup" }],
  }),
  component: ClinicSetup,
});

const pillars = [
  {
    t: "Clinic concept & layout",
    d: "Define your service mix, patient flow and room requirements, then translate them into a workable floor plan that meets clinical and accessibility expectations.",
  },
  {
    t: "Treatment-room design",
    d: "Lighting, seating, couch positioning, storage, sharps and waste, hand hygiene and infection-control zoning designed around real clinical practice.",
  },
  {
    t: "Equipment & furniture",
    d: "Guidance on selecting couches, trolleys, sharps management, cold chain storage, devices and consumables — with practical budget tiers.",
  },
  {
    t: "Branding & interiors",
    d: "A calm, premium visual identity applied consistently to signage, interiors, print and digital so the space feels considered from the doorway in.",
  },
  {
    t: "Patient experience",
    d: "Consultation flow, consent and documentation, aftercare, follow-up and review pathways that make patients feel safe and looked after.",
  },
  {
    t: "Professional environment",
    d: "Building a clinical environment your indemnity provider, regulators and patients can all have confidence in.",
  },
];

const process = [
  { n: "01", t: "Discovery call", d: "A free 20-minute conversation about your vision, site, budget and timescale." },
  { n: "02", t: "Site & scope review", d: "We review plans, photographs or a walkthrough and agree the scope of support." },
  { n: "03", t: "Design & specification", d: "Layout, room design, equipment schedule and brand direction delivered as a working plan." },
  { n: "04", t: "Setup support", d: "Ongoing support through fit-out, launch and your first weeks of clinical operation." },
];

function ClinicSetup() {
  return (
    <>
      <PageHeader
        eyebrow="Consultancy"
        title="Clinic Setup & Design Consultancy"
        intro="For practitioners and businesses creating or developing their own aesthetics clinic — from first concept and floor plan through to a finished, professional clinical environment."
      />

      <Section className="py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="eyebrow">What we help with</p>
            <h2 className="mt-5 text-4xl leading-tight text-ink md:text-5xl">
              A clinic that works clinically, commercially and visually.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Opening an aesthetics clinic is as much a clinical project as a design one. Our
              consultancy is led by a practising NHS clinician, so decisions about layout, hygiene,
              storage and patient flow are made with real practice in mind — not just aesthetics.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoldButton to="/contact">Book a consultation</GoldButton>
              <GoldButton to="/services" variant="outline">
                All services
              </GoldButton>
            </div>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.t} className="bg-background p-8">
                <h3 className="text-xl text-ink">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="border-t border-border pt-16">
          <p className="eyebrow">How it works</p>
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {process.map((s) => (
              <div key={s.n}>
                <span className="font-display text-3xl text-gold">{s.n}</span>
                <h3 className="mt-4 text-lg text-ink">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-24" id="enquire">
        <div className="gold-frame p-10 lg:p-14">
          <p className="eyebrow">Consultation enquiry</p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-ink">
            Tell us about the clinic you want to build.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Share a few details and we will come back to you with the right level of support and an
            outline of next steps.
          </p>
          <div className="mt-10 max-w-3xl">
            <EnquiryForm
              subject="Clinic setup consultancy"
              organisationLabel="Clinic or business name"
              topicLabel="Stage of your project"
              topicOptions={[
                "Idea stage — exploring the concept",
                "Site secured — planning the layout",
                "Fit-out in progress",
                "Existing clinic — redesign or expansion",
                "Branding & patient experience only",
              ]}
              messagePlaceholder="Tell us about your site, services you plan to offer, budget range and target opening date."
              submitLabel="Request consultation"
            />
          </div>
        </div>
      </Section>

      <AccreditationStrip />

      <Section className="py-24">
        <MailingList />
      </Section>
    </>
  );
}
