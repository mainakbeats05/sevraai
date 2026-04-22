import { motion } from "framer-motion";
import { Layers3, GitBranch, Workflow, Database } from "lucide-react";

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
          </motion.div>

          {/* OS visual — stacked layers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
              <div className="relative w-full h-full [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-25deg)] animate-float">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-2xl glass-panel-strong holo-border"
                    style={{
                      transform: `translateZ(${i * 38}px)`,
                      opacity: 0.55 + i * 0.1,
                    }}
                  >
                    <div className="absolute inset-3 rounded-xl bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.18),transparent_60%)]" />
                    <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-primary/80">
                      Layer 0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SevraOs;
