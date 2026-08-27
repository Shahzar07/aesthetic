import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const inputClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";
const labelClass = "text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .regex(/^[0-9+()\s-]*$/, "Phone number contains invalid characters."),
  organisation: z.string().trim().max(120).optional(),
  topic: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Please tell us a little more.").max(1500),
});

export type EnquiryFormProps = {
  /** Used in the confirmation toast and as the enquiry subject. */
  subject: string;
  /** Label for the optional organisation field. */
  organisationLabel?: string;
  /** Optional select of enquiry topics. */
  topicLabel?: string;
  topicOptions?: string[];
  messagePlaceholder?: string;
  submitLabel?: string;
};

/**
 * Shared, validated enquiry form used by the consultancy and recruitment pages.
 * Client-side validation with zod; submissions are acknowledged in-page.
 */
export function EnquiryForm({
  subject,
  organisationLabel = "Organisation",
  topicLabel,
  topicOptions,
  messagePlaceholder = "Tell us what you need and your ideal timescale.",
  submitLabel = "Send enquiry",
}: EnquiryFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse({
      name: String(data["name"] ?? ""),
      email: String(data["email"] ?? ""),
      phone: String(data["phone"] ?? ""),
      organisation: String(data["organisation"] ?? ""),
      topic: String(data["topic"] ?? ""),
      message: String(data["message"] ?? ""),

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
    toast.success(`Thank you — your ${subject.toLowerCase()} enquiry has been received.`, {
      description: "We aim to respond within one working day.",
    });
    form.reset();
  };

  const err = (k: string) =>
    errors[k] ? <p className="mt-2 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
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
            placeholder="jane@clinic.co.uk"
          />
          {err("email")}
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
            maxLength={30}
            className={inputClass}
            placeholder="07000 000000"
          />
          {err("phone")}
        </div>
        <div>
          <label className={labelClass} htmlFor="organisation">
            {organisationLabel}
          </label>
          <input
            id="organisation"
            name="organisation"
            maxLength={120}
            className={inputClass}
            placeholder="Clinic or company name"
          />
          {err("organisation")}
        </div>
      </div>

      {topicOptions && topicOptions.length > 0 && (
        <div>
          <label className={labelClass} htmlFor="topic">
            {topicLabel ?? "Area of interest"}
          </label>
          <select id="topic" name="topic" className={inputClass} defaultValue="">
            <option value="">Please select</option>
            {topicOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {err("topic")}
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
          maxLength={1500}
          className={inputClass}
          placeholder={messagePlaceholder}
        />
        {err("message")}
      </div>

      <button
        type="submit"
        className="border border-ink bg-ink px-10 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-background transition-colors hover:border-gold hover:bg-gold hover:text-ink"
      >
        {submitLabel}
      </button>
    </form>
  );
}
