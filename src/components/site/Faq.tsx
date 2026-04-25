import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Cpu, Shield, Rocket, HelpCircle, ArrowRight } from "lucide-react";

type Category = "All" | "Product" | "Technology" | "Security" | "Deployment";

interface QA {
  q: string;
  a: string;
  cat: Exclude<Category, "All">;
}

const FAQS: QA[] = [
  {
    cat: "Product",
    q: "What is SEVRA AI?",
    a: "SEVRA AI is a unified intelligence layer for healthcare — combining AI, an operating system, real-time visualization (HELIOS), and proprietary medical hardware (IMCS) into a single coordinated infrastructure. It's not a point tool; it's the connective fabric hospitals run on.",
  },
  {
    cat: "Product",
    q: "Who is SEVRA built for?",
    a: "Health systems, multi-site hospital networks, specialty clinics, and research institutes that need a single, governed source of truth across imaging, EHR, devices, and clinical workflows.",
  },
  {
    cat: "Technology",
    q: "How does IMCS work?",
    a: "IMCS (Integrated Medical Compute Stack) is purpose-built rack hardware that runs SEVRA OS on-prem. It performs real-time inference at the bedside, ingests device telemetry, and synchronizes with the central SEVRA cloud through encrypted, latency-optimized channels.",
  },
  {
    cat: "Technology",
    q: "Does SEVRA replace our EHR?",
    a: "No. SEVRA augments existing EHRs (Epic, Cerner, Meditech, OpenMRS) through HL7/FHIR connectors. We sit above your record system as an intelligence and orchestration layer — never replacing your system of record.",
  },
  {
    cat: "Technology",
    q: "Which AI models power SEVRA?",
    a: "SEVRA AI runs an ensemble of in-house clinical foundation models, fine-tuned vision models for radiology and pathology, and time-series models for monitoring. Models are versioned, evaluated, and rolled out through a clinical governance pipeline.",
  },
  {
    cat: "Security",
    q: "Is patient data safe with SEVRA?",
    a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Patient data never leaves your jurisdiction without explicit consent, and on-prem deployments can run fully air-gapped. We are HIPAA, SOC 2 Type II, ISO 27001, and GDPR aligned.",
  },
  {
    cat: "Security",
    q: "How is access controlled?",
    a: "Role-based access control with break-glass workflows, full audit trails, hardware-bound credentials for clinicians, and per-record consent enforcement. Every action — human or model — is logged and attributable.",
  },
  {
    cat: "Security",
    q: "Where is data stored?",
    a: "Customer-controlled. SEVRA supports on-prem (IMCS), private cloud, and regional sovereign deployments. You choose the residency; we provide the infrastructure.",
  },
  {
    cat: "Deployment",
    q: "How do hospitals integrate SEVRA?",
    a: "A typical deployment runs in three phases: (1) connector layer to EHR + PACS + devices, (2) IMCS install and OS provisioning, (3) workflow activation per department. Most hospitals reach a live pilot in 6–10 weeks.",
  },
  {
    cat: "Deployment",
    q: "Do you support phased rollouts?",
    a: "Yes — most customers start with one department (e.g. radiology or ICU) and expand. SEVRA OS is multi-tenant per service line, so each unit can adopt at its own pace without forking the platform.",
  },
  {
    cat: "Deployment",
    q: "What kind of support do you offer?",
    a: "24/7 clinical-grade SLAs, a dedicated solutions architect during onboarding, on-site IMCS service, and a customer success team aligned to your KPIs.",
  },
];

const CATEGORIES: { label: Category; icon: typeof HelpCircle }[] = [
  { label: "All", icon: HelpCircle },
  { label: "Product", icon: Rocket },
  { label: "Technology", icon: Cpu },
  { label: "Security", icon: Shield },
  { label: "Deployment", icon: ArrowRight },
];

export const Faq = () => {
  const [active, setActive] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const inCat = active === "All" || f.cat === active;
      const inQuery =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[140px]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-mono-tech uppercase tracking-[0.3em] text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Answers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance"
          >
            Everything you need to know about{" "}
            <span className="text-gradient">SEVRA</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-muted-foreground"
          >
            Built for clinicians, engineers, and decision-makers. Pick a category or
            search.
          </motion.p>
        </div>

        {/* Search + Categories */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="w-full rounded-2xl glass-panel-strong px-11 py-3.5 text-sm placeholder:text-muted-foreground/70 outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map(({ label, icon: Icon }) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_24px_hsl(var(--primary)/0.35)]"
                      : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion list */}
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-2xl p-8 text-center text-sm text-muted-foreground"
              >
                No questions matched “{query}”. Try a different term.
              </motion.div>
            )}

            {filtered.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <motion.div
                  key={item.q}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className={`group relative rounded-2xl glass-panel transition-all ${
                    isOpen
                      ? "border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.18)]"
                      : "hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-primary/80">
                        {item.cat}
                      </span>
                      <span className="font-display text-base md:text-lg font-medium">
                        {item.q}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid h-8 w-8 place-items-center rounded-full border ${
                        isOpen
                          ? "border-primary/60 bg-primary/15 text-primary"
                          : "border-border/60 text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />
                          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-3xl glass-panel-strong holo-border p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-primary/80">
                  Still have questions?
                </div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold">
                  Talk to a SEVRA solutions engineer.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll walk you through architecture, deployment, and pilot timelines.
                </p>
              </div>
              <a
                href="#cta"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
