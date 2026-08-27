export const site = {
  name: "Aesthetic IQ",
  tagline: "Empowering Healthcare Professionals Through Excellence in Clinical Training.",
  email: "info@aestheticiq.co.uk",
  phone: "",
  /** International format, digits only — used to build the wa.me link. */
  whatsapp: "447426729703",
  whatsappDisplay: "+44 7426 729703",
  whatsappMessage: "Hello Aesthetic IQ, I'd like to enquire about your training courses.",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  future: [
    "Online Academy",
    "Recruitment",
    "International Workshops",
    "Clinic Design & Consultancy",
    "Shop",
    "Books",
    "Events",
  ],
};

export type Accreditation = {
  abbr: string;
  name: string;
  detail: string;
};

/** Credentials displayed across the site as trust marks. */
export const accreditations: Accreditation[] = [
  {
    abbr: "CPD",
    name: "CPD Accredited",
    detail: "Certified continuing professional development hours",
  },
  {
    abbr: "NHS",
    name: "NHS Clinician Led",
    detail: "Taught by a practising NHS healthcare professional",
  },
  {
    abbr: "HCPC",
    name: "Registered Professionals",
    detail: "Delivered to UK regulatory standards",
  },
  {
    abbr: "JCCP",
    name: "Standards Aligned",
    detail: "Syllabus mapped to national aesthetic practice standards",
  },
  {
    abbr: "INS",
    name: "Insurance Ready",
    detail: "Certificates accepted by leading UK indemnity providers",
  },
];

export type ComingSoonItem = {
  title: string;
  detail: string;
};

export const comingSoon: ComingSoonItem[] = [
  {
    title: "Online Academy",
    detail: "Self-paced theory modules and refreshers between practical days.",
  },
  {
    title: "Recruitment",
    detail: "Connecting our graduates with clinics actively hiring across the UK.",
  },
  {
    title: "International Workshops",
    detail: "Intensive small-group training hosted outside the UK.",
  },
  {
    title: "Clinic Design & Consultancy",
    detail: "Compliant treatment room design, workflow and governance setup.",
  },
  { title: "Shop", detail: "Curated training kits, consumables and practice equipment." },
  {
    title: "Books",
    detail: "Practical clinical handbooks written for new injectors and phlebotomists.",
  },
  { title: "Events", detail: "Masterclasses, panel evenings and hands-on refresher days." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Seeded with our first cohort feedback; expands as graduates submit reviews. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I arrived having never held a needle and left able to draw blood confidently. The supervision was genuinely one to one.",
    name: "Amira K.",
    role: "Healthcare Assistant · Phlebotomy Training",
  },
  {
    quote:
      "The anatomy teaching was the best I have had anywhere. You leave understanding why you are injecting where you are injecting.",
    name: "Daniel R.",
    role: "Registered Nurse · Foundation Dermal Fillers",
  },
  {
    quote:
      "Small group, real models, and support afterwards when I set up my own clinic. That aftercare is what sets it apart.",
    name: "Sofia M.",
    role: "Pharmacist Prescriber · Botulinum Toxin",
  },
];
