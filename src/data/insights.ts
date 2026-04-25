export type InsightCategory = "AI" | "OS" | "Hardware" | "Healthcare";

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  readMinutes: number;
  date: string;
  author: string;
  featured?: boolean;
  // Article body as ordered blocks for clean rendering
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "quote"; text: string }
    | { type: "list"; items: string[] }
  >;
}

export const INSIGHTS: Insight[] = [
  {
    slug: "infrastructure-layer-for-healthcare",
    title: "Why Healthcare Needs an Infrastructure Layer — Not Another App",
    excerpt:
      "Hospitals don't have a software problem. They have a coordination problem. Here's why the next decade belongs to platforms, not point tools.",
    category: "Healthcare",
    readMinutes: 7,
    date: "2026-04-12",
    author: "SEVRA Engineering",
    featured: true,
    body: [
      {
        type: "p",
        text: "Walk into any modern hospital and you'll find dozens of clinical systems — EHRs, PACS, LIS, RIS, monitoring, scheduling — that barely speak to each other. Each was built to solve a single workflow. None were built to coordinate the whole.",
      },
      {
        type: "p",
        text: "This is not a UX problem. It's an architecture problem. The healthcare industry skipped the infrastructure layer that every other digital industry — finance, logistics, telecom — took for granted decades ago.",
      },
      { type: "h2", text: "The cost of fragmentation" },
      {
        type: "p",
        text: "When systems don't share a substrate, every integration is bespoke. Every alert lives in its own silo. Every model retrains on a different shape of data. Clinicians end up as the integration layer — copying values between screens, reconciling discrepancies, and absorbing the cost of the gap.",
      },
      { type: "h2", text: "What an infrastructure layer actually does" },
      {
        type: "p",
        text: "An infrastructure layer is not another application. It's the connective tissue: a unified data fabric, a shared identity model, a real-time event bus, and a governed compute plane that every higher-level workflow can build on.",
      },
      {
        type: "list",
        items: [
          "Unified patient context across modalities",
          "A single audit trail for every action — human or model",
          "Hardware-software co-design for low-latency clinical compute",
          "Composable workflows instead of monolithic apps",
        ],
      },
      {
        type: "quote",
        text: "Once the infrastructure exists, every clinical app gets faster, safer, and smarter. That's the leverage we're building.",
      },
    ],
  },
  {
    slug: "imcs-on-prem-clinical-compute",
    title: "Inside IMCS: Why Clinical Compute Belongs at the Bedside",
    excerpt:
      "Latency isn't a metric in critical care — it's a clinical outcome. A look at the design choices behind IMCS, our on-prem inference rack.",
    category: "Hardware",
    readMinutes: 9,
    date: "2026-03-28",
    author: "Hardware Team",
    body: [
      {
        type: "p",
        text: "When a ventilator alarm fires, you have seconds, not minutes. Cloud round-trips don't fit inside a clinical event. That's why SEVRA built IMCS — a purpose-built compute stack that lives inside the hospital.",
      },
      { type: "h2", text: "The latency budget" },
      {
        type: "p",
        text: "We treat latency as a first-class clinical constraint. IMCS targets sub-50ms inference for telemetry models and sub-200ms for vision pipelines, regardless of WAN conditions. The hospital keeps running even if the cloud doesn't.",
      },
      { type: "h2", text: "Designed for healthcare environments" },
      {
        type: "list",
        items: [
          "Silent thermal envelope (suitable for clinical floors)",
          "Hardware-bound key enclaves for sealed encryption",
          "Hot-swappable inference modules — no downtime updates",
          "Dual-feed power and redundant networking",
        ],
      },
      {
        type: "p",
        text: "IMCS isn't a generic GPU box in a server closet. It's medical-grade infrastructure, engineered to disappear into the wall and never miss a beat.",
      },
    ],
  },
  {
    slug: "sevra-os-clinical-operating-system",
    title: "SEVRA OS: An Operating System Designed for Clinicians",
    excerpt:
      "Most clinical software is built for IT. SEVRA OS is built for the people actually delivering care. Here's the design philosophy.",
    category: "OS",
    readMinutes: 6,
    date: "2026-03-10",
    author: "Product",
    body: [
      {
        type: "p",
        text: "An operating system isn't a UI. It's a set of contracts: how processes talk, how identity flows, how data is governed, how time is measured. SEVRA OS makes those contracts clinical-first.",
      },
      { type: "h2", text: "First-class concepts" },
      {
        type: "list",
        items: [
          "Patient context as a process primitive",
          "Consent and audit as kernel-level guarantees",
          "Time-aware data — every value carries provenance and timestamp",
          "Composable workflows that span departments without forking state",
        ],
      },
      {
        type: "p",
        text: "When the OS knows the difference between a clinician, a model, and an integration, every layer above it gets simpler — and safer.",
      },
    ],
  },
  {
    slug: "clinical-foundation-models",
    title: "Clinical Foundation Models, Without the Hand-Waving",
    excerpt:
      "What it actually takes to deploy foundation models in a clinical environment — governance, evaluation, rollout, and the unglamorous middle.",
    category: "AI",
    readMinutes: 10,
    date: "2026-02-22",
    author: "AI Research",
    body: [
      {
        type: "p",
        text: "The model is the easy part. Everything around it — evaluation harnesses, drift detection, override workflows, clinician feedback loops — is where clinical AI actually lives or dies.",
      },
      { type: "h2", text: "Our deployment pipeline" },
      {
        type: "list",
        items: [
          "Pre-deployment: cohort-stratified evaluation across age, sex, and site",
          "Shadow mode: model runs alongside clinicians without affecting decisions",
          "Limited rollout: per-department activation with override telemetry",
          "Continuous evaluation: drift monitoring against rolling clinical baselines",
        ],
      },
      {
        type: "quote",
        text: "A model that performs well in eval but degrades in production is a regulatory event waiting to happen. We treat post-deployment monitoring as a first-class engineering surface.",
      },
    ],
  },
  {
    slug: "helios-realtime-visualization",
    title: "HELIOS: Real-Time Visualization for Multi-Patient Awareness",
    excerpt:
      "How HELIOS turns hundreds of telemetry streams into a single, glance-readable picture of an entire ward.",
    category: "Healthcare",
    readMinutes: 5,
    date: "2026-02-04",
    author: "Design",
    body: [
      {
        type: "p",
        text: "Critical care is fundamentally a multi-patient problem. HELIOS was built around that reality — a single surface where intensivists can see the whole ward, drill into any bedside, and surface anomalies before they escalate.",
      },
      { type: "h2", text: "Designed for the glance" },
      {
        type: "p",
        text: "Every visual element is tuned for peripheral perception. Color carries severity, motion carries trend, and density adapts to the clinician's attention budget.",
      },
    ],
  },
  {
    slug: "interoperability-without-lock-in",
    title: "Interoperability Without the Lock-in",
    excerpt:
      "SEVRA augments existing EHRs instead of replacing them. Here's how we approach connectors, FHIR, and graceful coexistence.",
    category: "OS",
    readMinutes: 6,
    date: "2026-01-18",
    author: "Platform",
    body: [
      {
        type: "p",
        text: "Replacing an EHR is a multi-year, eight-figure project. Most hospitals don't need a new system of record — they need their existing one to do more. SEVRA sits above the EHR, not in place of it.",
      },
      { type: "h2", text: "Our connector strategy" },
      {
        type: "list",
        items: [
          "FHIR R4 and HL7 v2 as default interchange",
          "Vendor-specific adapters for Epic, Cerner, Meditech, OpenMRS",
          "Bidirectional sync with conflict resolution",
          "Read-only mode for governance-sensitive deployments",
        ],
      },
    ],
  },
];

export const getInsight = (slug: string) =>
  INSIGHTS.find((i) => i.slug === slug);
