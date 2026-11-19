export type Course = {
  slug: string;
  title: string;
  short: string;
  duration: string;
  level: string;
  certification: string;
  overview: string[];
  attend: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  /** Optional extended programme details (dates, pricing, venue, careers). */
  programme?: CourseProgramme;
};

export type CourseDate = {
  /** ISO date, e.g. "2026-11-26" — used to hide dates once they have passed. */
  iso: string;
  label: string;
  note?: string;
};

export type CourseProgramme = {
  tagline: string;
  offer?: {
    label: string;
    regular: string;
    price: string;
    saving: string;
    /** ISO date after which the offer is hidden. */ expires: string;
  };
  dates: CourseDate[];
  venue: { name: string; lines: string[]; note?: string };
  format: { title: string; heading: string; intro?: string; points: string[] }[];
  careers: string[];
  progression: string[];
  progressionNote: string;
  support: { title: string; detail: string }[];
  entry: string[];
  why: string[];
  contact: { email: string; phone: string };
  disclaimer: string;
};

export const courses: Course[] = [
  {
    slug: "phlebotomy-training",
    title: "Phlebotomy Training",
    short:
      "A beginner-friendly 3-day blended programme — flexible online theory plus a hands-on practical day. No previous experience required.",
    duration: "3-day blended programme (2 days online theory + 1 practical day)",
    level: "Foundation · Beginners welcome",
    certification:
      "Certificate on successful completion of theory and practical competency assessments",
    overview: [
      "Are you ready to take your first step into healthcare? Whether you're completely new to healthcare or looking to expand your clinical knowledge and skills, our beginner-friendly Phlebotomy Training Programme is designed to help you build confidence and develop practical blood collection skills.",
      "Days 1 and 2 are completed online at your own pace, with structured learning materials and interactive quizzes. Day 3 is a face-to-face, instructor-led practical day with supervised venepuncture practice and a practical skills assessment.",
      "Training is informed by NHS clinical experience and delivered in small groups, so every learner receives individual support and guidance.",
    ],
    attend: [
      "Complete beginners — no previous experience required",
      "Anyone looking to take their first step into healthcare",
      "Healthcare assistants and support workers expanding their clinical skills",
      "Aesthetic and wellness practitioners moving into blood collection",
      "Career changers exploring entry-level healthcare roles",
    ],
    outcomes: [
      "Anatomy and physiology of the circulatory system",
      "Understanding veins and blood circulation",
      "Identifying suitable venepuncture sites",
      "Introduction to phlebotomy equipment",
      "Blood collection tubes and additives",
      "Correct order of draw",
      "Infection prevention and control",
      "Hand hygiene and personal protective equipment",
      "Patient identification and informed consent",
      "Preparing patients for blood collection",
      "Safe venepuncture principles and techniques",
      "Correct specimen collection and labelling",
      "Sample handling and transportation",
      "Preventing contamination and sample errors",
      "Sharps safety and clinical waste disposal",
      "Recognising and managing common complications",
      "Fainting and other patient reactions",
      "Patient aftercare and communication",
      "Professional responsibilities and documentation",
      "Practical competency assessment",
    ],
    faqs: [
      {
        q: "Do I need any previous experience?",
        a: "No. Complete beginners are welcome — no previous phlebotomy qualification or healthcare employment is required. You must be aged 18 or over and committed to completing the theory and practical assessments.",
      },
      {
        q: "How is the course delivered?",
        a: "It is a 3-day blended programme. Days 1 and 2 are flexible online theory you complete from home at your own pace. Day 3 is a face-to-face practical training day in Maidstone, Kent.",
      },
      {
        q: "When are the practical training days?",
        a: "Practical training days are Thursday 26 November 2026 and Saturday 30 January 2027, at Maidstone Community Support Centre (venue subject to final confirmation).",
      },
      {
        q: "How much does the course cost?",
        a: "The regular course fee is £199. For November 2026 we are running a limited launch offer of just £150 — a saving of £49.",
      },
      {
        q: "How much hands-on time will I get?",
        a: "The practical day is dedicated to instructor demonstration, supervised practice and your practical skills assessment, in small groups with individual support.",
      },
      {
        q: "Will this guarantee me a job?",
        a: "Course completion does not guarantee employment or independent clinical authorisation. Employers may require further supervised practice and competency assessment — but our student career support will help you prepare your CV, applications and interviews.",
      },
    ],
    programme: {
      tagline: "Learn with confidence. Develop your skills. Explore your future.",
      offer: {
        label: "November special launch offer",
        regular: "£199",
        price: "£150",
        saving: "Save £49",
        expires: "2026-11-30",
      },
      dates: [
        {
          iso: "2026-11-26",
          label: "Thursday 26 November 2026",
          note: "November offer — £150",
        },
        {
          iso: "2027-01-30",
          label: "Saturday 30 January 2027",
          note: "New date",
        },
      ],
      venue: {
        name: "Maidstone Community Support Centre",
        lines: ["39–48 Marsham Street", "Maidstone", "Kent", "ME14 1HH"],
        note: "Venue subject to final confirmation.",
      },
      format: [
        {
          title: "Days 1 & 2",
          heading: "Flexible online theory",
          intro: "Study from the comfort of your home at your own pace.",
          points: [
            "Structured learning materials",
            "Interactive quizzes and knowledge assessments",
            "Flexible study around your availability",
            "Preparation for your practical training",
          ],
        },
        {
          title: "Day 3",
          heading: "Hands-on practical training",
          intro: "Face-to-face in Maidstone, Kent.",
          points: [
            "Face-to-face instructor-led training",
            "Demonstration of venepuncture techniques",
            "Supervised practical skills development",
            "Correct handling of phlebotomy equipment",
            "Patient communication and safety",
            "Practical skills assessment",
            "Small-group learning with individual support",
          ],
        },
      ],
      careers: [
        "GP surgeries and primary care",
        "NHS and private hospitals",
        "Pathology and specimen collection departments",
        "Blood collection clinics",
        "Private medical and healthcare clinics",
        "Community healthcare services",
        "Occupational health services",
        "Diagnostic and medical screening centres",
        "Aesthetic and wellness clinics",
        "Healthcare assistant and clinical support roles",
        "Medical laboratories and specimen reception",
        "Hospital theatre support roles",
      ],
      progression: [
        "Advanced phlebotomy",
        "Cannulation and vascular access training",
        "IV therapy and infusion services",
        "Aesthetic medicine and cosmetic treatments",
        "Dermal fillers",
        "Botox and other injectable treatments",
        "PRP treatments for hair and facial rejuvenation",
        "Hospital theatre and perioperative support",
        "Pathology and laboratory careers",
        "Veterinary healthcare and animal blood collection",
        "Further clinical qualifications and professional development",
        "Healthcare education and training opportunities",
      ],
      progressionNote:
        "These are potential progression pathways. Additional qualifications, supervised experience, professional registration or prescribing arrangements may be required depending on the role or treatment.",
      support: [
        {
          title: "Student Support Group",
          detail: "Connect with fellow learners and receive ongoing guidance.",
        },
        {
          title: "CV Preparation Support",
          detail: "Learn how to create or improve your CV for healthcare applications.",
        },
        {
          title: "Interview Preparation",
          detail:
            "Explore common healthcare interview questions and how to prepare effective answers.",
        },
        {
          title: "Job Application Guidance",
          detail: "Receive support with understanding vacancies and preparing applications.",
        },
        {
          title: "Career Pathway Guidance",
          detail: "Explore entry-level healthcare opportunities and further training options.",
        },
        {
          title: "Professional Development Support",
          detail: "Build your confidence as you plan your next steps.",
        },
      ],
      entry: [
        "Must be aged 18 or over",
        "Complete beginners welcome",
        "No previous phlebotomy qualification needed",
        "No prior healthcare employment required",
        "Commitment to completing theory and practical assessments",
      ],
      why: [
        "Beginner-friendly teaching",
        "Flexible online theory",
        "Hands-on practical learning",
        "Small-group attention and guidance",
        "Training informed by NHS clinical experience",
        "Structured learning and assessments",
        "Additional student career support",
        "Affordable introductory course fee",
      ],
      contact: {
        email: "info@aestheticsiq.com",
        phone: "07426 729703",
      },
      disclaimer:
        "Course completion does not guarantee employment or independent clinical authorisation. Employers may require further supervised practice and competency assessment.",
    },
  },
  {
    slug: "iv-cannulation-training",
    title: "IV Cannulation Training",
    short: "Peripheral cannulation technique, device selection and complication management.",
    duration: "1 day",
    level: "Intermediate",
    certification: "CPD accredited certificate with practical competency assessment",
    overview: [
      "IV Cannulation Training equips healthcare professionals to place peripheral intravenous cannulae safely, comfortably and first-time-right.",
      "We cover vessel assessment, device gauge selection, securement, flushing regimes and the recognition of phlebitis, infiltration and extravasation.",
      "The course is ideal preparation for IV vitamin therapy, hydration clinics, urgent care and ward-based practice.",
    ],
    attend: [
      "Registered healthcare professionals with a clinical background",
      "Phlebotomists progressing into IV practice",
      "Aesthetic practitioners offering IV infusion therapy",
      "Paramedics, nurses and doctors requiring refresher competency",
    ],
    outcomes: [
      "Assess veins and select the correct cannula gauge for the intended therapy",
      "Perform aseptic peripheral cannulation with confident single-pass technique",
      "Secure, dress, flush and document a cannula to national standards",
      "Recognise and manage phlebitis, infiltration, extravasation and vasovagal events",
      "Understand IV fluid and vitamin infusion governance",
    ],
    faqs: [
      {
        q: "Can I take this without phlebotomy experience?",
        a: "We recommend prior venepuncture competency; combined phlebotomy and cannulation bookings are available at a reduced rate.",
      },
      {
        q: "Do you cover IV vitamin infusions?",
        a: "Yes, the governance and practicalities are covered, with a dedicated Vitamin Injection course for the full protocol.",
      },
      {
        q: "Is there an assessment?",
        a: "Yes — a supervised practical competency assessment on the day.",
      },
    ],
  },
  {
    slug: "botulinum-toxin-training",
    title: "Botulinum Toxin (Botox) Training",
    short: "Upper-face toxin fundamentals with live model treatment and full protocol library.",
    duration: "1 day theory + supervised live models",
    level: "Foundation",
    certification: "CPD accredited certificate, insurable on completion",
    overview: [
      "This Botulinum Toxin course takes you from facial anatomy through to confident, natural-looking upper-face treatment on live models under close supervision.",
      "You will learn to consult, assess muscle dynamics, dose accurately and manage expectations — the skills that separate a safe injector from a technician following dots.",
      "All delegates leave with consent forms, aftercare documentation and reconstitution and dilution protocols to use immediately in practice.",
    ],
    attend: [
      "Doctors, dentists, nurses, midwives, pharmacists and prescribers",
      "Allied healthcare professionals eligible under UK regulation",
      "Practitioners returning to practice who want a supervised refresher",
    ],
    outcomes: [
      "Describe the mechanism of action, onset and duration of botulinum toxin",
      "Map the muscles of facial expression and the danger zones of the upper face",
      "Reconstitute, dilute and store product correctly",
      "Treat glabellar complex, frontalis and orbicularis oculi with appropriate dosing",
      "Consult, photograph, consent and review to medico-legal standards",
      "Recognise and manage ptosis, brow heaviness, bruising and non-response",
    ],
    faqs: [
      {
        q: "Do I need to be a prescriber?",
        a: "No, but toxin is a prescription-only medicine in the UK and must be prescribed by an appropriate prescriber. We explain compliant models of working.",
      },
      {
        q: "Will I inject a real model?",
        a: "Yes. Every delegate treats live models under one-to-one supervision.",
      },
      {
        q: "Is advanced toxin covered?",
        a: "Advanced areas such as masseter, hyperhidrosis and lip flip are covered on our advanced pathway.",
      },
    ],
  },
  {
    slug: "foundation-dermal-fillers",
    title: "Foundation Dermal Fillers",
    short: "Lips and nasolabial folds — product science, technique and safety-first injecting.",
    duration: "1 day",
    level: "Foundation",
    certification: "CPD accredited certificate, insurable on completion",
    overview: [
      "Foundation Dermal Fillers introduces hyaluronic acid rheology, facial ageing and the two core treatment areas every new injector must master: lips and nasolabial folds.",
      "Emphasis is placed on vascular anatomy, aspiration, slow low-pressure delivery and the immediate recognition and management of vascular occlusion.",
      "You will treat live models with hands-on guidance, then leave with the paperwork and protocols to begin practising safely.",
    ],
    attend: [
      "Medical and dental professionals",
      "Nurses, midwives, paramedics and pharmacists",
      "Practitioners already offering toxin who want to add filler",
    ],
    outcomes: [
      "Understand HA product rheology, G prime and appropriate product selection",
      "Identify the facial vasculature and high-risk zones",
      "Perform needle and cannula techniques for lip augmentation",
      "Correct nasolabial folds with layered, proportionate placement",
      "Run a hyaluronidase emergency protocol for suspected occlusion",
      "Deliver a consultation that manages expectation and documents consent",
    ],
    faqs: [
      {
        q: "Are models provided?",
        a: "Yes, models are arranged for you, or you may bring your own.",
      },
      {
        q: "What products do you train on?",
        a: "We train on established, CE-marked HA fillers and explain how to evaluate any product range.",
      },
      {
        q: "What comes next?",
        a: "Advanced Dermal Fillers builds on this course with full-face and structural work.",
      },
    ],
  },
  {
    slug: "advanced-dermal-fillers",
    title: "Advanced Dermal Fillers",
    short: "Full-face assessment, structural contouring and complication mastery.",
    duration: "1 day",
    level: "Advanced",
    certification: "CPD accredited advanced certificate",
    overview: [
      "Advanced Dermal Fillers is for injectors already treating lips and folds who want to assess and treat the face as a whole.",
      "We work through the MD Codes-style structural approach: cheeks, chin, jawline, tear troughs and facial balancing, with cannula-led technique in higher-risk planes.",
      "Significant time is given to complication avoidance, delayed nodules, and confident hyaluronidase decision making.",
    ],
    attend: [
      "Practitioners with a foundation filler qualification and current practice",
      "Injectors seeking a supervised refresher on advanced anatomy",
    ],
    outcomes: [
      "Perform a full-face aesthetic assessment and treatment plan",
      "Contour the midface, chin and jawline in the correct anatomical planes",
      "Approach tear troughs with appropriate case selection and cannula technique",
      "Manage delayed-onset nodules, migration and asymmetry",
      "Confidently execute hyaluronidase dissolving protocols",
    ],
    faqs: [
      {
        q: "Is a foundation certificate required?",
        a: "Yes, along with evidence of current injecting practice.",
      },
      {
        q: "Do you cover tear troughs?",
        a: "Yes, with strict emphasis on case selection and cannula-only technique.",
      },
      {
        q: "How many delegates per trainer?",
        a: "Advanced days are capped tightly to protect supervision quality.",
      },
    ],
  },
  {
    slug: "vitamin-injection-training",
    title: "Vitamin Injection Training",
    short: "Intramuscular and IV vitamin protocols, screening and safe clinic delivery.",
    duration: "Half day to 1 day",
    level: "Foundation",
    certification: "CPD accredited certificate",
    overview: [
      "Vitamin Injection Training covers the pharmacology, screening and administration of intramuscular vitamin therapies including B12, and the governance of IV infusion clinics.",
      "You will learn IM injection sites and technique, contraindication screening, consent, and how to build a compliant, insurable vitamin service.",
    ],
    attend: [
      "Registered healthcare professionals",
      "Phlebotomists and cannulation-trained practitioners",
      "Clinic owners adding wellness services",
    ],
    outcomes: [
      "Describe the indications, evidence and limitations of vitamin therapies",
      "Screen patients and identify contraindications and red flags",
      "Perform safe IM injection at deltoid and ventrogluteal sites",
      "Understand IV infusion setup, monitoring and emergency response",
      "Document, store and dispose of product compliantly",
    ],
    faqs: [
      {
        q: "Do I need a prescriber?",
        a: "Yes, for prescription-only vitamins. We explain compliant prescribing pathways.",
      },
      {
        q: "Is IV included?",
        a: "IV governance is included; practical cannulation is covered on the IV Cannulation course.",
      },
    ],
  },
  {
    slug: "prp-training",
    title: "PRP (Platelet-Rich Plasma) Training",
    short: "Blood draw to injection — regenerative facial and hair restoration protocols.",
    duration: "1 day",
    level: "Intermediate",
    certification: "CPD accredited certificate",
    overview: [
      "PRP Training takes you through the full regenerative pathway: venepuncture, centrifugation, plasma separation and injection for skin rejuvenation and hair restoration.",
      "The science of platelet concentration and growth factors is explained without hype, so you can counsel patients honestly about realistic outcomes.",
      "Practical work covers mesotherapy technique, microneedling delivery and scalp protocols.",
    ],
    attend: [
      "Healthcare professionals with venepuncture competency",
      "Aesthetic practitioners adding regenerative treatments",
    ],
    outcomes: [
      "Explain platelet biology and the evidence base for PRP",
      "Draw, spin and separate plasma using a compliant closed system",
      "Deliver facial PRP by mesotherapy and microneedling",
      "Perform scalp PRP for androgenetic hair thinning",
      "Screen for contraindications and manage post-treatment expectations",
    ],
    faqs: [
      {
        q: "Do I need phlebotomy skills first?",
        a: "Yes — you must be able to draw blood. Book our Phlebotomy course as a bundle if needed.",
      },
      {
        q: "Is a kit included?",
        a: "Kits are used on the day and we advise on compliant suppliers for your own clinic.",
      },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
