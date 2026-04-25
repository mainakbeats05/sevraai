import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, Cookie, ArrowLeft, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

interface PolicySection {
  id: string;
  label: string;
  icon: typeof Shield;
  updated: string;
  body: { heading: string; text: string }[];
}

const POLICIES: PolicySection[] = [
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: Shield,
    updated: "2026-03-14",
    body: [
      {
        heading: "Our commitment",
        text: "SEVRA Technologies operates as a healthcare infrastructure provider. We treat patient and clinician data with the highest level of care, applying privacy-by-design principles across every layer — from IMCS hardware to the SEVRA cloud.",
      },
      {
        heading: "What we collect",
        text: "We process only what is required to operate the platform: clinical telemetry routed by the customer, system performance metrics, and authenticated user actions for audit purposes. We do not sell, rent, or monetize patient data — ever.",
      },
      {
        heading: "Data residency",
        text: "Customers choose their deployment topology: on-prem (IMCS), private cloud, or regional sovereign cloud. Personal data is stored within the customer-selected jurisdiction and never replicated outside it without explicit, contractual consent.",
      },
      {
        heading: "Your rights",
        text: "Patients and authorized representatives may request access, correction, export, or deletion of their data through the operating health system. SEVRA processes these requests as a data processor on behalf of the controlling institution.",
      },
    ],
  },
  {
    id: "terms",
    label: "Terms of Service",
    icon: FileText,
    updated: "2026-02-02",
    body: [
      {
        heading: "Acceptance of terms",
        text: "By deploying SEVRA AI, SEVRA OS, HELIOS, or IMCS, you agree to the Master Services Agreement signed with SEVRA Technologies. These terms govern access, usage limits, and service-level expectations.",
      },
      {
        heading: "Permitted use",
        text: "The platform is licensed for clinical, operational, and research use within the customer's healthcare delivery network. Reverse engineering, model extraction, and unauthorized redistribution of proprietary models or firmware is strictly prohibited.",
      },
      {
        heading: "Service availability",
        text: "SEVRA targets 99.99% uptime for managed services with credits issued under the SLA when targets are missed. On-prem IMCS deployments operate independently of cloud availability for mission-critical workflows.",
      },
      {
        heading: "Liability",
        text: "SEVRA is a clinical decision support and infrastructure layer. Final medical decisions remain the responsibility of licensed clinicians. Liability is limited as defined in the executed MSA.",
      },
    ],
  },
  {
    id: "security",
    label: "Data Security & Compliance",
    icon: Lock,
    updated: "2026-04-08",
    body: [
      {
        heading: "Encryption",
        text: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 with hardware-backed key storage. IMCS uses sealed key enclaves; cloud deployments use customer-managed keys via KMS.",
      },
      {
        heading: "Access control",
        text: "Role-based access with mandatory MFA, hardware-bound credentials for clinicians, break-glass workflows with full audit trails, and per-record consent enforcement at the data plane.",
      },
      {
        heading: "Compliance",
        text: "SEVRA is aligned with HIPAA, SOC 2 Type II, ISO 27001, GDPR, and applicable regional health-data frameworks. Our compliance reports are available under NDA.",
      },
      {
        heading: "Incident response",
        text: "A 24/7 security operations team monitors the platform. Confirmed incidents trigger our IR runbook with customer notification within contractual windows and full post-incident reports.",
      },
    ],
  },
  {
    id: "cookies",
    label: "Cookie Policy",
    icon: Cookie,
    updated: "2026-01-20",
    body: [
      {
        heading: "How we use cookies",
        text: "The SEVRA marketing website uses a minimal set of first-party cookies for session continuity, language preference, and aggregate traffic analytics. Clinical applications operate on authenticated sessions and do not rely on tracking cookies.",
      },
      {
        heading: "Categories",
        text: "Strictly necessary (always on), preferences (saves your settings), and analytics (anonymized usage). We do not use advertising, behavioral, or cross-site tracking cookies.",
      },
      {
        heading: "Your choices",
        text: "You can manage non-essential cookies through your browser settings or our consent banner. Disabling analytics will not impact platform functionality.",
      },
    ],
  },
];

const Policies = () => {
  const [active, setActive] = useState<string>(POLICIES[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    POLICIES.forEach((p) => {
      const el = refs.current[p.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // SEO
  useEffect(() => {
    document.title = "Policies — SEVRA AI · Privacy, Terms, Security, Cookies";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "SEVRA AI policies: privacy, terms of service, data security & compliance, and cookie policy for our healthcare infrastructure platform."
    );
    if (!meta.parentNode) document.head.appendChild(meta);

    const linkCanonical =
      document.querySelector('link[rel="canonical"]') ||
      Object.assign(document.createElement("link"), { rel: "canonical" });
    linkCanonical.setAttribute("href", window.location.origin + "/policies");
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-mono-tech uppercase tracking-[0.3em] text-primary"
          >
            <ScrollText className="h-3 w-3" />
            Policies & Compliance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance max-w-3xl"
          >
            Trust, by <span className="text-gradient">design</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground"
          >
            How SEVRA handles patient data, security, and compliance across every
            layer of the platform.
          </motion.p>
        </div>
      </section>

      {/* Body: sidebar + content */}
      <section className="relative pb-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-4">
                  Index
                </div>
                <nav className="flex flex-col gap-1">
                  {POLICIES.map(({ id, label, icon: Icon }) => {
                    const isActive = active === id;
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={`group relative flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-all ${
                          isActive
                            ? "border-primary/50 bg-primary/10 text-foreground shadow-[0_0_24px_hsl(var(--primary)/0.18)]"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/60"
                        }`}
                      >
                        <span
                          className={`grid h-7 w-7 place-items-center rounded-md border ${
                            isActive
                              ? "border-primary/60 bg-primary/15 text-primary"
                              : "border-border/60 text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {label}
                        {isActive && (
                          <motion.span
                            layoutId="policy-active"
                            className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-gradient-primary"
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-8 rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur">
                  <div className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-primary/80">
                    Compliance
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["HIPAA", "SOC 2", "ISO 27001", "GDPR"].map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9 space-y-10">
              {POLICIES.map((p, i) => (
                <motion.article
                  key={p.id}
                  id={p.id}
                  ref={(el) => (refs.current[p.id] = el)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="scroll-mt-28 rounded-3xl glass-panel-strong p-8 md:p-10 transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                        <p.icon className="h-4 w-4" />
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                        {p.label}
                      </h2>
                    </div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Updated {p.updated}
                    </span>
                  </div>

                  <div className="mt-6 space-y-6">
                    {p.body.map((b) => (
                      <div key={b.heading}>
                        <h3 className="font-display text-base md:text-lg font-semibold text-foreground">
                          {b.heading}
                        </h3>
                        <p className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground">
                          {b.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}

              <div className="text-xs text-muted-foreground text-center pt-4">
                Questions about these policies? Contact{" "}
                <a
                  href="mailto:legal@sevra.ai"
                  className="text-primary hover:underline"
                >
                  legal@sevra.ai
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Policies;
