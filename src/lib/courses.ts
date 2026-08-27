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
};

export const courses: Course[] = [
  {
    slug: "phlebotomy-training",
    title: "Phlebotomy Training",
    short: "Master safe, confident venepuncture with extensive supervised practical time.",
    duration: "1 day (9:30am – 4:30pm)",
    level: "Foundation",
    certification: "CPD accredited certificate of attendance and competency sign-off",
    overview: [
      "Our Phlebotomy Training course builds the technical precision and patient-facing confidence required to take blood safely in clinical, community and private practice settings.",
      "Delivered by a practising NHS healthcare professional, the day balances the underpinning theory — anatomy, tube science, governance — with extended supervised practical work on training arms and, where appropriate, peer practice.",
      "Class sizes are deliberately small so every delegate receives individual correction and repetition until technique is consistent rather than lucky.",
    ],
    attend: [
      "Registered nurses, midwives and paramedics",
      "Healthcare assistants and support workers",
      "Doctors, dentists and pharmacists refreshing core skills",
      "Beauty and aesthetic practitioners moving into medical services",
      "Career changers with no prior clinical experience (foundation route)",
    ],
    outcomes: [
      "Explain the anatomy of the antecubital fossa and identify suitable venepuncture sites",
      "Apply infection prevention, aseptic non-touch technique and sharps safety",
      "Select appropriate equipment including vacutainer, butterfly and syringe systems",
      "Perform venepuncture using the correct order of draw and labelling protocol",
      "Manage difficult veins, failed attempts, fainting and needle anxiety",
      "Document, consent and escalate in line with professional standards",
    ],
    faqs: [
      {
        q: "Do I need clinical experience?",
        a: "No. The foundation route is designed for complete beginners, while experienced clinicians can be streamed into advanced practice on the day.",
      },
      {
        q: "How much hands-on time will I get?",
        a: "The majority of the day is practical. We cap numbers to protect one-to-one supervision.",
      },
      {
        q: "Is the certificate recognised?",
        a: "You receive a CPD accredited certificate accepted by employers and insurers for UK practice.",
      },
      {
        q: "Do you help with insurance?",
        a: "Yes — we guide you through the insurers who cover newly trained phlebotomists.",
      },
    ],
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
