import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/ui";
import {
  AccreditationStrip,
  CtaCluster,
  MailingList,
  StudentGallery,
  Testimonials,
} from "@/components/site/blocks";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student Testimonials & Gallery | Aesthetic IQ" },
      {
        name: "description",
        content:
          "Read testimonials from Aesthetic IQ delegates and browse our student gallery of supervised training days in phlebotomy, injectables and PRP.",
      },
      { property: "og:title", content: "Student Testimonials & Gallery | Aesthetic IQ" },
      {
        property: "og:description",
        content:
          "Feedback and training-day photography from healthcare professionals who trained with Aesthetic IQ.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: StudentsPage,
});

function StudentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our students"
        title="The people we train, and the standard they leave with."
        intro="Testimonials and training-day photography from our cohorts. This page grows with every course we deliver — all content is published with delegate and model consent."
      />
      <AccreditationStrip />
      <Testimonials />
      <StudentGallery />
      <CtaCluster />
      <MailingList />
    </>
  );
}
