export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readMins: number;
  excerpt: string;
  sections: { h: string; p: string[] }[];
};

export const categories: Category[] = [
  {
    slug: "botox-education",
    name: "Botox Education",
    blurb:
      "Toxin anatomy, indications and treatment planning explained for practitioners and patients.",
  },
  {
    slug: "dermal-filler-education",
    name: "Dermal Filler Education",
    blurb: "Product science, facial structure and evidence-led approaches to hyaluronic acid.",
  },
  {
    slug: "phlebotomy-education",
    name: "Phlebotomy Education",
    blurb: "Venepuncture technique, sample integrity and the practical craft of taking blood.",
  },
  {
    slug: "aesthetic-career-advice",
    name: "Aesthetic Career Advice",
    blurb: "Building a credible, compliant and commercially sound career in medical aesthetics.",
  },
  {
    slug: "prp-education",
    name: "PRP Education",
    blurb: "Platelet-rich plasma science, protocols and realistic outcomes for skin and hair.",
  },
  {
    slug: "iv-cannulation-education",
    name: "IV Cannulation Education",
    blurb: "Peripheral cannulation technique, device selection and complication management.",
  },
  {
    slug: "vitamin-injection-education",
    name: "Vitamin Injection Education",
    blurb: "IM and IV vitamin therapy, screening, governance and safe clinic delivery.",
  },
  {
    slug: "skin-booster-education",
    name: "Skin Booster Education",
    blurb: "Injectable hydrators, polynucleotides and bio-remodelling explained clinically.",
  },
];

const s = (h: string, ...p: string[]) => ({ h, p });

export const posts: Post[] = [
  {
    slug: "what-is-botox",
    title: "What Is Botox? A Clinician's Explanation",
    category: "botox-education",
    date: "2026-06-18",
    readMins: 6,
    excerpt:
      "Botulinum toxin is one of the most studied molecules in medicine — here is what it actually does at the neuromuscular junction, and what that means clinically.",
    sections: [
      s(
        "The mechanism, simply",
        "Botulinum toxin type A cleaves SNAP-25, a protein required for acetylcholine vesicles to fuse with the presynaptic membrane. Without acetylcholine release, the muscle fibre cannot contract.",
        "The effect is temporary because the nerve terminal sprouts new endings and the original junction recovers, typically over three to four months.",
      ),
      s(
        "What it treats",
        "Cosmetically, toxin softens dynamic lines caused by repeated muscle movement: glabellar frown lines, forehead lines and crow's feet are the licensed core.",
        "Medically it is used for hyperhidrosis, bruxism, migraine, blepharospasm and spasticity — a reminder that this is a pharmaceutical intervention, not a beauty product.",
      ),
      s(
        "Why training matters",
        "Dose, dilution, depth and muscle selection determine whether a result looks refreshed or frozen. Anatomy is the difference between a predictable outcome and a heavy brow.",
        "In the UK, botulinum toxin is a prescription-only medicine and must be prescribed following a face-to-face consultation by an appropriate prescriber.",
      ),
    ],
  },
  {
    slug: "botox-for-gummy-smile",
    title: "Botox for a Gummy Smile",
    category: "botox-education",
    date: "2026-06-10",
    readMins: 5,
    excerpt:
      "Small doses into the levator complex can rebalance an excessive gingival display — precision here is everything.",
    sections: [
      s(
        "The anatomy",
        "Excessive gingival show on smiling is often driven by a hyperactive levator labii superioris alaeque nasi (LLSAN), sometimes with zygomaticus contribution.",
        "Assessment must distinguish muscular causes from skeletal vertical maxillary excess or short upper lip, which toxin will not correct.",
      ),
      s(
        "Technique",
        "Typically 1–2 units per side are placed at the Yonsei point, where LLSAN, levator labii superioris and zygomaticus minor converge.",
        "Under-dosing and reviewing at two weeks is far safer than over-dosing an area where asymmetry is immediately visible in every photograph.",
      ),
      s(
        "Managing expectation",
        "Results last around three months and gum show reduces by a few millimetres rather than disappearing entirely.",
        "Patients with severe skeletal causes should be counselled honestly and referred for orthodontic or surgical opinion.",
      ),
    ],
  },
  {
    slug: "botox-brow-lift",
    title: "The Botox Brow Lift Explained",
    category: "botox-education",
    date: "2026-06-02",
    readMins: 5,
    excerpt:
      "A chemical brow lift is achieved by selectively weakening depressors while preserving the frontalis lift.",
    sections: [
      s(
        "Elevators and depressors",
        "The frontalis is the only brow elevator. The corrugators, procerus and lateral orbicularis oculi pull the brow down.",
        "Weakening the depressors while sparing the lower frontalis allows the brow to rise by a few millimetres.",
      ),
      s(
        "Placement",
        "Lateral orbicularis injections give tail-of-brow lift; medial depressor treatment opens the glabellar complex.",
        "Treating the frontalis too low or too laterally is the classic cause of brow ptosis and a heavy, hooded look.",
      ),
      s(
        "Case selection",
        "Patients with pre-existing dermatochalasis or compensatory frontalis recruitment need careful counselling; some are better served surgically.",
        "Photograph at rest and in animation every time — it protects both you and the patient.",
      ),
    ],
  },
  {
    slug: "forehead-lines",
    title: "Treating Forehead Lines Without Losing Expression",
    category: "botox-education",
    date: "2026-05-24",
    readMins: 5,
    excerpt:
      "The frontalis is unforgiving. Conservative, anatomy-led dosing keeps movement natural.",
    sections: [
      s(
        "Why less is more",
        "The frontalis both creates horizontal lines and holds the brow up. Over-treating it drops the brow and worsens hooding.",
        "Dosing should reflect muscle bulk, line depth and brow position, not a fixed template.",
      ),
      s(
        "Always assess the glabella",
        "Treating frontalis alone while leaving strong depressors active reliably produces brow heaviness. The complexes are treated together.",
        "In patients with low-set brows, treat higher and lighter, or decline forehead treatment altogether.",
      ),
      s(
        "Review",
        "A two-week review allows small top-ups and builds the trust that generates referrals.",
        "Document units, sites and product batch every time.",
      ),
    ],
  },
  {
    slug: "crows-feet",
    title: "Crow's Feet: Dynamic Versus Static Lines",
    category: "botox-education",
    date: "2026-05-16",
    readMins: 4,
    excerpt:
      "Toxin softens the movement that creates lateral canthal lines, but etched static lines need a combined approach.",
    sections: [
      s(
        "Assessment",
        "Ask the patient to smile fully. Lines present only on animation respond well to toxin; lines visible at rest are dermal and need skin quality work.",
      ),
      s(
        "Technique",
        "Injections sit superficially, at least 1cm lateral to the orbital rim, avoiding the zygomaticus major to prevent lip drop.",
        "Fan patterns are adjusted for lower, central or upper fibre dominance.",
      ),
      s(
        "Combination",
        "Skin boosters, microneedling, retinoids and SPF do more for etched lines than additional units ever will.",
      ),
    ],
  },
  {
    slug: "bunny-lines",
    title: "Bunny Lines and Compensatory Movement",
    category: "botox-education",
    date: "2026-05-08",
    readMins: 4,
    excerpt:
      "Nasalis lines often appear or worsen after glabellar treatment — anticipate them at consultation.",
    sections: [
      s(
        "Why they appear",
        "When the corrugators are weakened, some patients recruit nasalis more strongly, producing diagonal creases across the nasal dorsum.",
      ),
      s(
        "Treatment",
        "One to two units per side into the nasalis, kept high and medial, away from levator labii superioris alaeque nasi to avoid lip asymmetry.",
      ),
      s(
        "Consent",
        "Mention the possibility of bunny lines at the first consultation so a review top-up feels planned rather than corrective.",
      ),
    ],
  },
  {
    slug: "lip-flip",
    title: "The Lip Flip: What It Can and Cannot Do",
    category: "botox-education",
    date: "2026-04-28",
    readMins: 4,
    excerpt:
      "A few units into orbicularis oris can evert the upper lip — but it is not a substitute for filler.",
    sections: [
      s(
        "Effect",
        "Two to four superficial units along the upper vermillion border relax the sphincter, allowing the lip to roll outward and appear fuller.",
      ),
      s(
        "Limits",
        "Volume is unchanged. Patients wanting genuine augmentation need filler; those wanting a subtle change to a gummy or inverted lip are ideal candidates.",
      ),
      s(
        "Risks",
        "Over-treatment affects speech, drinking through a straw and whistling. Duration is short — often six to eight weeks.",
      ),
    ],
  },
  {
    slug: "jaw-slimming",
    title: "Masseter Toxin for Jaw Slimming",
    category: "botox-education",
    date: "2026-04-19",
    readMins: 5,
    excerpt:
      "Reducing masseter bulk softens a square lower face and often relieves clenching at the same time.",
    sections: [
      s(
        "Selection",
        "Palpate on clench. True muscular hypertrophy responds; skeletal width and submandibular fullness do not.",
      ),
      s(
        "Technique",
        "Injections are placed deep, within the safe triangle bounded by the tragus, angle of the mandible and the mouth corner line, avoiding the risorius.",
      ),
      s(
        "Timeline",
        "Visible slimming takes six to twelve weeks and is progressive with repeat treatment. Warn patients about transient chewing fatigue.",
      ),
    ],
  },
  {
    slug: "teeth-grinding-masseter-botox",
    title: "Teeth Grinding: Masseter Botox for Bruxism",
    category: "botox-education",
    date: "2026-04-11",
    readMins: 5,
    excerpt:
      "A functional indication with strong patient satisfaction — and one that requires dental collaboration.",
    sections: [
      s(
        "The clinical picture",
        "Morning jaw ache, temporal headaches, tooth wear and a partner reporting night-time grinding all point to bruxism.",
      ),
      s(
        "How toxin helps",
        "Reducing masseter contraction force lowers the load on teeth and the temporomandibular joint, easing pain within two to four weeks.",
      ),
      s(
        "Shared care",
        "Toxin does not replace a splint or address the underlying stress and occlusal factors. Work alongside the patient's dentist.",
      ),
    ],
  },
  {
    slug: "hyperhidrosis",
    title: "Hyperhidrosis: Treating Excessive Sweating",
    category: "botox-education",
    date: "2026-04-03",
    readMins: 5,
    excerpt:
      "Axillary toxin is a life-changing treatment for patients who have exhausted antiperspirants.",
    sections: [
      s(
        "Assessment",
        "Rule out secondary causes — thyroid disease, medication, infection and menopause — before treating primary focal hyperhidrosis.",
      ),
      s(
        "Mapping",
        "Starch-iodine testing defines the active area. Intradermal injections are placed in a grid roughly 1.5cm apart.",
      ),
      s(
        "Outcome",
        "Dryness begins within a week and typically lasts six to nine months, longer than facial toxin because eccrine glands recover slowly.",
      ),
    ],
  },

  {
    slug: "lip-fillers",
    title: "Lip Fillers: Structure Before Volume",
    category: "dermal-filler-education",
    date: "2026-06-15",
    readMins: 6,
    excerpt:
      "The best lip work respects the existing anatomy — ratio, vermillion border and philtral column define the result.",
    sections: [
      s(
        "Assess first",
        "Evaluate upper-to-lower ratio, incisor show, philtral length, oral commissure position and existing asymmetry before drawing up product.",
      ),
      s(
        "Product and plane",
        "A softer, lower G prime HA sits well in the body of the lip; slightly firmer product supports the vermillion border and philtral columns.",
        "Aspirate, inject slowly under low pressure, and stay in the correct plane — the superior and inferior labial arteries run submucosally.",
      ),
      s(
        "Complication readiness",
        "Every injector treating lips must hold hyaluronidase and know the occlusion protocol by heart before touching a needle.",
      ),
    ],
  },
  {
    slug: "cheek-fillers",
    title: "Cheek Fillers and Midface Support",
    category: "dermal-filler-education",
    date: "2026-06-07",
    readMins: 5,
    excerpt:
      "Midface volume loss drives much of what patients read as tired — restoring it lifts the whole face.",
    sections: [
      s(
        "The ageing midface",
        "Deep fat compartments deflate and descend, flattening the ogee curve and deepening the nasolabial fold.",
      ),
      s(
        "Placement",
        "Supraperiosteal boluses on the zygomatic arch and anteromedial cheek provide structural lift; superficial layering refines contour.",
      ),
      s(
        "Avoiding overfill",
        "Overprojecting the anterior cheek creates the flat, wide look patients fear. Treat in stages across appointments.",
      ),
    ],
  },
  {
    slug: "chin-fillers",
    title: "Chin Fillers: The Most Underused Treatment",
    category: "dermal-filler-education",
    date: "2026-05-30",
    readMins: 5,
    excerpt:
      "Chin projection transforms profile balance and often reduces the perceived size of the nose.",
    sections: [
      s(
        "Profile assessment",
        "Use the Riedel plane or a simple vertical line from the lower lip to judge retrusion before treating.",
      ),
      s(
        "Technique",
        "Deep supraperiosteal placement at the pogonion, with careful attention to the mental foramen and inferior labial artery.",
      ),
      s(
        "Mentalis and jawline",
        "Pairing chin projection with mentalis toxin and jawline definition produces the strongest, most natural profile change.",
      ),
    ],
  },
  {
    slug: "jawline-contouring",
    title: "Jawline Contouring With Dermal Filler",
    category: "dermal-filler-education",
    date: "2026-05-21",
    readMins: 5,
    excerpt: "A defined jaw is built from the angle forward, not by filling the whole border.",
    sections: [
      s(
        "Vector thinking",
        "Product at the gonial angle creates lift and definition; body placement along the border sharpens the line to the chin.",
      ),
      s(
        "Product choice",
        "High G prime fillers hold shape against the pull of soft tissue and repeated mandibular movement.",
      ),
      s(
        "Safety",
        "The facial artery crosses the mandibular border anterior to the masseter — palpate, aspirate and prefer cannula in this zone.",
      ),
    ],
  },
  {
    slug: "nasolabial-folds",
    title: "Nasolabial Folds: Treat the Cause, Not the Line",
    category: "dermal-filler-education",
    date: "2026-05-13",
    readMins: 5,
    excerpt: "Directly filling a deep fold rarely looks good — support the midface first.",
    sections: [
      s(
        "Why folds form",
        "The fold is the boundary between descending midface fat and the fixed upper lip. Volume loss above it deepens the shadow.",
      ),
      s(
        "Sequenced treatment",
        "Restore cheek support first, then place small amounts medially to refine any residual crease.",
      ),
      s(
        "Danger",
        "The angular artery runs in this territory. Slow, low-volume, aspirated injection or cannula technique is mandatory.",
      ),
    ],
  },
  {
    slug: "marionette-lines",
    title: "Marionette Lines and the Downturned Mouth",
    category: "dermal-filler-education",
    date: "2026-05-05",
    readMins: 4,
    excerpt:
      "A combination of filler support and depressor anguli oris relaxation reads far more natural than filler alone.",
    sections: [
      s(
        "Anatomy",
        "Marionette lines run from the oral commissure toward the jaw, deepened by prejowl volume loss and DAO activity.",
      ),
      s(
        "Approach",
        "Support the prejowl sulcus and chin, then refine the line itself; add 2–3 units of toxin per DAO to lift the corner.",
      ),
      s(
        "Realism",
        "Deeply etched lines improve but rarely vanish. Skin quality treatments complete the result.",
      ),
    ],
  },
  {
    slug: "tear-troughs",
    title: "Tear Troughs: The Highest-Risk Filler Area",
    category: "dermal-filler-education",
    date: "2026-04-25",
    readMins: 6,
    excerpt:
      "Case selection matters more than technique here — and many patients should be declined.",
    sections: [
      s(
        "Who is suitable",
        "Patients with true volume deficit, good skin quality, no malar oedema and minimal fat herniation.",
      ),
      s(
        "Who is not",
        "Fluid retention, thyroid eye disease, significant festoons or pseudoherniation will worsen with product.",
      ),
      s(
        "Technique",
        "Cannula only, deep supraperiosteal, tiny volumes, conservative and staged. This is not a foundation-level treatment.",
      ),
    ],
  },
  {
    slug: "russian-lips",
    title: "Russian Lips: Technique or Trend?",
    category: "dermal-filler-education",
    date: "2026-04-16",
    readMins: 5,
    excerpt: "The vertical fanning technique creates height rather than projection — with caveats.",
    sections: [
      s(
        "What it is",
        "Multiple small vertical retrograde threads from the wet-dry border to the vermillion, lifting the lip upward rather than forward.",
      ),
      s(
        "Trade-offs",
        "More entry points means more trauma, swelling and bruising, and greater cumulative product if repeated frequently.",
      ),
      s(
        "Honest counselling",
        "Not every anatomy suits the flat, tall aesthetic. Long philtrums and thin lower lips often look better with classic technique.",
      ),
    ],
  },
  {
    slug: "facial-balancing",
    title: "Facial Balancing: Assessing the Whole Face",
    category: "dermal-filler-education",
    date: "2026-04-08",
    readMins: 6,
    excerpt: "Treating one feature in isolation is how faces start to look distorted.",
    sections: [
      s(
        "The consultation",
        "Assess in thirds and in profile. Identify the single change that would improve harmony most, and start there.",
      ),
      s(
        "Sequencing",
        "Structure before surface: chin and cheeks before lips; skin quality alongside everything.",
      ),
      s(
        "Saying no",
        "Recognising body dysmorphic disorder and filler fatigue, and declining treatment, is a clinical skill worth practising.",
      ),
    ],
  },

  {
    slug: "difficult-veins",
    title: "Difficult Veins: A Systematic Approach",
    category: "phlebotomy-education",
    date: "2026-06-12",
    readMins: 6,
    excerpt:
      "When the antecubital fossa offers nothing, technique and patience beat force every time.",
    sections: [
      s(
        "Prepare the patient",
        "Warmth, hydration, a dependent arm position and a relaxed patient change vein quality more than any device.",
      ),
      s(
        "Search methodically",
        "Palpate rather than look. A vein that bounces is patent; a cord-like vessel is thrombosed and should be avoided.",
      ),
      s(
        "Adapt",
        "Consider a butterfly with a smaller gauge, the dorsal hand veins, or a different arm — and know when to hand over to a colleague after two attempts.",
      ),
    ],
  },
  {
    slug: "butterfly-needle-vs-vacutainer",
    title: "Butterfly Needle vs Vacutainer: Choosing Well",
    category: "phlebotomy-education",
    date: "2026-06-04",
    readMins: 5,
    excerpt:
      "Both are correct tools. The skill is matching the device to the vein and the sample requirement.",
    sections: [
      s(
        "Straight needle",
        "Fast, cheap and ideal for a good antecubital vein with multiple tubes. Less forgiving on small or mobile veins.",
      ),
      s(
        "Butterfly",
        "Shallow insertion angle, better control and visible flashback — the device of choice for hand veins, paediatrics and fragile skin.",
      ),
      s(
        "Trade-offs",
        "Butterfly tubing holds dead space, so a discard tube may be needed for coagulation samples. Higher cost and more sharps risk.",
      ),
    ],
  },
  {
    slug: "common-blood-tests-explained",
    title: "Common Blood Tests Explained",
    category: "phlebotomy-education",
    date: "2026-05-27",
    readMins: 6,
    excerpt:
      "Understanding what you are collecting makes you a better phlebotomist and a more reassuring one.",
    sections: [
      s(
        "The core panel",
        "FBC, U&E, LFT, TFT, HbA1c and lipids account for the majority of routine requests in primary care.",
      ),
      s(
        "Why the tube matters",
        "Additives are not interchangeable: EDTA chelates calcium for haematology, citrate preserves clotting factors, and clot activators serve biochemistry.",
      ),
      s(
        "Talking to patients",
        "Explaining the purpose of each tube reduces anxiety and improves cooperation — the most underrated clinical skill in phlebotomy.",
      ),
    ],
  },
  {
    slug: "patient-preparation",
    title: "Patient Preparation Before Venepuncture",
    category: "phlebotomy-education",
    date: "2026-05-19",
    readMins: 4,
    excerpt: "Most failed draws are decided before the needle is opened.",
    sections: [
      s(
        "Check the request",
        "Confirm identity with three identifiers, verify fasting requirements and check medication timing for drug levels.",
      ),
      s(
        "Position and comfort",
        "A supported arm, a seated or reclined patient and a warm room prevent both vasoconstriction and injury from fainting.",
      ),
      s(
        "Consent",
        "Explain, gain verbal consent and offer the patient the chance to say if they have a preferred arm or a history of syncope.",
      ),
    ],
  },
  {
    slug: "order-of-draw",
    title: "The Order of Draw and Why It Exists",
    category: "phlebotomy-education",
    date: "2026-05-11",
    readMins: 5,
    excerpt:
      "Cross-contamination of additives produces results that look real and are entirely wrong.",
    sections: [
      s(
        "The sequence",
        "Blood cultures, then citrate, then serum, then heparin, then EDTA, then fluoride oxalate — protecting the most sensitive assays first.",
      ),
      s(
        "What goes wrong",
        "EDTA carryover falsely raises potassium and lowers calcium; heparin carryover distorts coagulation studies.",
      ),
      s(
        "Habit over memory",
        "Lay tubes out in order before you start. A physical routine beats recall under pressure.",
      ),
    ],
  },
  {
    slug: "common-phlebotomy-mistakes",
    title: "Seven Common Phlebotomy Mistakes",
    category: "phlebotomy-education",
    date: "2026-05-03",
    readMins: 5,
    excerpt:
      "The errors that most often lead to haemolysed samples, rejected tubes and unhappy patients.",
    sections: [
      s(
        "Technique errors",
        "Tourniquet left on beyond a minute, probing for a vein, excessive syringe suction and inadequate tube mixing all cause haemolysis.",
      ),
      s(
        "Process errors",
        "Labelling away from the patient, under-filling citrate tubes and skipping the discard tube are audit failures waiting to happen.",
      ),
      s(
        "Fixing them",
        "Reflective practice after a rejected sample, not repetition of habit, is what turns competence into expertise.",
      ),
    ],
  },
  {
    slug: "managing-needle-anxiety",
    title: "Managing Needle Anxiety and Fainting",
    category: "phlebotomy-education",
    date: "2026-04-22",
    readMins: 5,
    excerpt: "Trypanophobia is common and manageable — your manner is the intervention.",
    sections: [
      s(
        "Screen for it",
        "Ask directly about previous fainting. Anyone with a history should be reclined before the procedure begins.",
      ),
      s(
        "Techniques that work",
        "Applied tension, distraction, slow breathing and honest, unhurried explanation reduce vasovagal events substantially.",
      ),
      s(
        "If they faint",
        "Stop, remove the needle, lay flat, elevate legs, protect the airway and document. Never let a patient walk out immediately after syncope.",
      ),
    ],
  },

  {
    slug: "becoming-an-aesthetic-practitioner",
    title: "Becoming an Aesthetic Practitioner in the UK",
    category: "aesthetic-career-advice",
    date: "2026-06-20",
    readMins: 6,
    excerpt:
      "The route into medical aesthetics is clearer than it looks — here is the sequence that works.",
    sections: [
      s(
        "Start with eligibility",
        "Toxin and filler training in reputable settings is offered to medical, dental, nursing, midwifery, paramedic and pharmacy professionals.",
      ),
      s(
        "Build the base",
        "Phlebotomy and cannulation are excellent entry skills: they build needle confidence, patient rapport and a service you can start earning from quickly.",
      ),
      s(
        "Then specialise",
        "Foundation toxin and filler, supervised practice, then advanced work. Rushing to advanced treatments before mastering the basics is the most common career mistake.",
      ),
    ],
  },
  {
    slug: "choosing-the-right-training",
    title: "How to Choose the Right Aesthetic Training Course",
    category: "aesthetic-career-advice",
    date: "2026-06-09",
    readMins: 6,
    excerpt:
      "Accreditation, delegate ratios and post-course support matter more than the price on the page.",
    sections: [
      s(
        "Questions to ask",
        "How many delegates per trainer? Do I treat live models? Who is the trainer, and do they still practise clinically?",
      ),
      s(
        "Red flags",
        "Guaranteed same-day certification, unlimited class sizes, no model treatment, and any provider that will not talk about complications.",
      ),
      s(
        "After the course",
        "Ongoing mentorship, a route to insurance and access to the trainer afterwards are what turn a certificate into a career.",
      ),
    ],
  },
  {
    slug: "building-confidence",
    title: "Building Confidence as a New Injector",
    category: "aesthetic-career-advice",
    date: "2026-05-29",
    readMins: 5,
    excerpt: "Confidence is competence plus repetition — it is not something you are born with.",
    sections: [
      s(
        "Repetition with feedback",
        "Volume alone entrenches bad habits. Deliberate practice with supervision is what accelerates skill.",
      ),
      s(
        "Photograph everything",
        "A standardised before-and-after library shows you your own progress and protects you medico-legally.",
      ),
      s(
        "Find a mentor",
        "A practitioner who will take your call about a worrying nodule at 9pm is worth more than any additional certificate.",
      ),
    ],
  },
  {
    slug: "starting-your-own-clinic",
    title: "Starting Your Own Aesthetic Clinic",
    category: "aesthetic-career-advice",
    date: "2026-05-17",
    readMins: 7,
    excerpt:
      "Clinical skill is roughly half the job. The other half is premises, compliance and numbers.",
    sections: [
      s(
        "Premises and registration",
        "Understand local authority requirements, waste contracts, and whether your services trigger CQC registration.",
      ),
      s(
        "Systems",
        "Consent, records, medicines management, sharps, cold chain and complaint handling must be documented before your first patient.",
      ),
      s(
        "Commercials",
        "Know your cost per treatment, your break-even and your rebooking rate. A busy diary at the wrong price is still a failing business.",
      ),
    ],
  },
  {
    slug: "infection-control",
    title: "Infection Control in Aesthetic Practice",
    category: "aesthetic-career-advice",
    date: "2026-05-01",
    readMins: 5,
    excerpt:
      "Aseptic non-touch technique is the standard, whether you work in a hospital or a high-street clinic.",
    sections: [
      s(
        "The basics done properly",
        "Hand hygiene, single-use sterile equipment, appropriate skin antisepsis with adequate dry time, and a clean treatment field.",
      ),
      s(
        "Product handling",
        "Cold chain, batch recording, single-patient use of syringes and correct disposal of partially used product.",
      ),
      s(
        "Environment",
        "Wipeable surfaces, a designated clean and dirty zone, and documented cleaning schedules stand up to inspection.",
      ),
    ],
  },
  {
    slug: "consent-and-patient-safety",
    title: "Consent and Patient Safety in Aesthetics",
    category: "aesthetic-career-advice",
    date: "2026-04-14",
    readMins: 6,
    excerpt:
      "Valid consent is a conversation and a cooling-off period, not a signature collected at the door.",
    sections: [
      s(
        "What valid consent requires",
        "Capacity, sufficient information about risks and alternatives, and voluntariness free from promotional pressure.",
      ),
      s(
        "Documentation",
        "Record the discussion, the risks named, the photographs taken, product batch numbers and the patient's questions.",
      ),
      s(
        "Safety culture",
        "Have a written complications protocol, hyaluronidase on site, emergency contacts and a clear escalation pathway — and rehearse them.",
      ),
    ],
  },
  {
    slug: "how-prp-works",
    title: "How PRP Actually Works: Platelets, Growth Factors and Realistic Outcomes",
    category: "prp-education",
    date: "2026-07-02",
    readMins: 6,
    excerpt:
      "Concentrated platelets release growth factors that recruit repair — here is what that means for skin and hair, without the marketing.",
    sections: [
      s(
        "The biology",
        "Spinning autologous blood concentrates platelets several-fold above baseline. On degranulation they release PDGF, TGF-beta, VEGF and EGF, which recruit fibroblasts and stimulate collagen and angiogenesis.",
      ),
      s(
        "Where the evidence is strongest",
        "Androgenetic alopecia and skin quality show the most consistent published benefit; volume replacement is not what PRP does.",
      ),
      s(
        "Counselling patients honestly",
        "Expect three sessions four weeks apart, gradual change over three months, and maintenance. Patients who are promised a facelift will be disappointed.",
      ),
    ],
  },
  {
    slug: "prp-for-hair-loss",
    title: "PRP for Hair Loss: Case Selection and Protocols",
    category: "prp-education",
    date: "2026-06-25",
    readMins: 5,
    excerpt:
      "PRP works best in early miniaturisation, not in scarred, burnt-out scalp. Selecting the right patient is most of the outcome.",
    sections: [
      s(
        "Assessment",
        "Take a history for thyroid disease, iron deficiency, postpartum change and medication. Photograph with consistent parting and lighting, and grade with Norwood or Ludwig.",
      ),
      s(
        "Injection protocol",
        "Scalp is infiltrated at 0.05-0.1ml per point on a one-centimetre grid at dermal depth, with a fine needle and firm pressure for comfort.",
      ),
      s(
        "Combining therapy",
        "PRP complements minoxidil, finasteride where appropriate and microneedling. Explain that stopping systemic therapy will undo the gain.",
      ),
    ],
  },
  {
    slug: "choosing-the-right-cannula-gauge",
    title: "Choosing the Right Cannula Gauge",
    category: "iv-cannulation-education",
    date: "2026-06-20",
    readMins: 4,
    excerpt:
      "Bigger is not better. Gauge should follow the therapy, the vein and the expected dwell time.",
    sections: [
      s(
        "Match the device to the therapy",
        "20G suits most routine infusions and vitamin therapy; 22G is kinder to small or fragile veins; 18G and above is reserved for rapid volume or blood products.",
      ),
      s(
        "Vein assessment first",
        "Palpate before you look. A bouncy, straight, well-supported vein below the antecubital fossa beats a visible but mobile hand vein.",
      ),
      s(
        "Dwell and care",
        "Document insertion, secure with a sterile transparent dressing, flush to confirm patency and review daily using a visual infusion phlebitis score.",
      ),
    ],
  },
  {
    slug: "managing-cannulation-complications",
    title: "Recognising and Managing Cannulation Complications",
    category: "iv-cannulation-education",
    date: "2026-06-10",
    readMins: 5,
    excerpt:
      "Phlebitis, infiltration and extravasation each present differently and each demand a different response.",
    sections: [
      s(
        "Phlebitis",
        "Pain, erythema along the vein and a palpable cord. Remove the device, elevate, apply warmth and document. Escalate if there is systemic upset.",
      ),
      s(
        "Infiltration and extravasation",
        "Swelling, coolness and a slowed infusion. Stop immediately, aspirate where possible, elevate the limb and follow the vesicant protocol for the drug involved.",
      ),
      s(
        "Vasovagal events",
        "Lay the patient flat, elevate the legs, protect the airway and observe until fully recovered before discharge.",
      ),
    ],
  },
  {
    slug: "b12-injection-guide",
    title: "Vitamin B12 Injections: Indications, Screening and Technique",
    category: "vitamin-injection-education",
    date: "2026-06-05",
    readMins: 5,
    excerpt:
      "B12 therapy is legitimate medicine, which means legitimate screening, prescribing and documentation.",
    sections: [
      s(
        "Who genuinely benefits",
        "Pernicious anaemia, malabsorption, post-bariatric surgery, metformin use and strict plant-based diets. Fatigue alone is not a diagnosis.",
      ),
      s(
        "Screening before treatment",
        "Baseline B12 and folate, a history of neurological symptoms, and awareness that treating without investigation can mask underlying pathology.",
      ),
      s(
        "Technique",
        "Deltoid or ventrogluteal intramuscular injection, 23-25G, at ninety degrees with appropriate skin antisepsis and dry time, then documented batch and site.",
      ),
    ],
  },
  {
    slug: "iv-vitamin-drip-governance",
    title: "IV Vitamin Drips: Governance for a Compliant Clinic",
    category: "vitamin-injection-education",
    date: "2026-05-28",
    readMins: 6,
    excerpt:
      "Running infusions safely means prescribing pathways, emergency preparedness and honest claims.",
    sections: [
      s(
        "Prescribing",
        "Most infusion ingredients are prescription-only medicines requiring a face-to-face assessment by an appropriate prescriber before supply.",
      ),
      s(
        "Emergency readiness",
        "Anaphylaxis kit in date, trained staff, resuscitation training current, and a written protocol displayed in the treatment room.",
      ),
      s(
        "Marketing and claims",
        "Do not claim to cure, detoxify or treat disease. Advertising standards apply and unevidenced claims put registration at risk.",
      ),
    ],
  },
  {
    slug: "what-are-skin-boosters",
    title: "What Are Skin Boosters? Hydration Versus Volume",
    category: "skin-booster-education",
    date: "2026-05-22",
    readMins: 5,
    excerpt:
      "Skin boosters treat skin quality, not facial shape — and that distinction changes how you consult.",
    sections: [
      s(
        "The product class",
        "Low cross-linked hyaluronic acid injected intradermally to hydrate, improve elasticity and stimulate fibroblast activity, rather than to add structure.",
      ),
      s(
        "Technique",
        "Microdroplet, linear threading or bolus depot patterns at consistent dermal depth, with volumes kept small and even to avoid papules.",
      ),
      s(
        "Expectation setting",
        "Two or three sessions four weeks apart, gradual improvement in glow and fine lines, and maintenance every six to nine months.",
      ),
    ],
  },
  {
    slug: "polynucleotides-explained",
    title: "Polynucleotides and Bio-remodelling Explained",
    category: "skin-booster-education",
    date: "2026-05-12",
    readMins: 5,
    excerpt:
      "Regenerative injectables sit between skincare and filler. Understanding the mechanism keeps your claims defensible.",
    sections: [
      s(
        "Mechanism",
        "Purified polynucleotide chains act as a scaffold and signalling substrate, supporting fibroblast activity, hydration and tissue repair.",
      ),
      s(
        "Case selection",
        "Best suited to thin, crepey or dehydrated skin, periorbital texture and early laxity — not to patients seeking projection or lift.",
      ),
      s(
        "Safety",
        "Standard aseptic technique, careful depth control and awareness of injection-site reactions. Screen for autoimmune conditions and active infection.",
      ),
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const postsByCategory = (slug: string) => posts.filter((p) => p.category === slug);
export const latestPosts = (n: number) =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
