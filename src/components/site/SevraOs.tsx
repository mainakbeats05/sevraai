import { motion } from "framer-motion";
import { Layers3, GitBranch, Workflow, Database, ExternalLink, PlayCircle } from "lucide-react";
import osDashboard from "@/assets/sevra-os-dashboard.png";

const SEVRA_OS_DEMO_URL = "https://id-preview--391dd5e6-1f0b-4217-b2c9-56e35e831c46.lovable.app";

const items = [
  { icon: GitBranch, title: "Data Orchestration", desc: "Streams, batch and event pipelines unified under one schema." },
  { icon: Workflow, title: "Patient Lifecycle", desc: "Admission to discharge — every event modeled and queryable." },
  { icon: Database, title: "Real-time Pipelines", desc: "Sub-second latency from sensor to insight, at hospital scale." },
];

export const SevraOs = () => {
  return (
    <section id="os" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="chip mb-6">
              <Layers3 className="h-3 w-3" />
              <span>SEVRA OS · Orchestration Layer</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
              The <span className="text-gradient">operating system</span> for medical data
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              SEVRA OS turns fragmented hospital systems into a single, programmable
              substrate — so AI, devices and clinicians all speak the same language.
            </p>

            <div className="mt-10 space-y-4">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 rounded-lg bg-primary/10 border border-primary/20 p-2.5 text-primary">
                    <it.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-sm text-muted-foreground">{it.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Demo CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={SEVRA_OS_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.6)]"
              >
                <PlayCircle className="h-4 w-4" />
                <span>Launch Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute inset-0 -z-10 rounded-xl bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Interactive sandbox · no signup
              </div>
            </motion.div>
          </motion.div>

          {/* OS Command Center — live screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1400 }}
            className="relative w-full"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_65%)] blur-3xl -z-10" />

            <div className="group relative glass-panel-strong holo-border rounded-2xl overflow-hidden shadow-elegant transition-transform duration-700 hover:translate-y-[-4px]">
              {/* Browser-style chrome */}
              <div className="flex items-center justify-between bg-background/60 backdrop-blur px-4 py-2.5 border-b border-primary/10">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  sevra-os · command-center
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-primary">live</span>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative">
                <img
                  src={osDashboard}
                  alt="SEVRA OS Command Center — real-time hospital command and intelligence dashboard"
                  className="block w-full h-auto"
                  loading="lazy"
                />
                {/* Scan sweep on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--primary)/0.06)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              </div>
            </div>

            {/* Floor reflection */}
            <div className="mx-auto mt-3 h-10 w-4/5 rounded-[50%] bg-primary/20 blur-2xl opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SevraOs;
