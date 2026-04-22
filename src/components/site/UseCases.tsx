import { motion } from "framer-motion";
import { HeartPulse, Building2, Wifi } from "lucide-react";

const cases = [
  {
    icon: HeartPulse,
    title: "ICU Monitoring",
    desc: "Continuous vitals fusion across 100+ beds with AI early-warning.",
    metric: "6h",
    metricLabel: "earlier deterioration alert",
  },
  {
    icon: Building2,
    title: "Smart Hospitals",
    desc: "From admissions to OR scheduling — orchestrated as one system.",
    metric: "32%",
    metricLabel: "operational efficiency",
  },
  {
    icon: Wifi,
    title: "Remote Care",
    desc: "Hospital-grade monitoring extends into the home with full continuity.",
    metric: "24/7",
    metricLabel: "clinical telemetry",
  },
];

export const UseCases = () => {
  return (
    <section id="usecases" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="chip mb-6"><span>Use Cases</span></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Already shaping <span className="text-gradient">care delivery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel-strong holo-border rounded-2xl overflow-hidden group hover:translate-y-[-4px] transition-transform"
            >
              <div className="p-7">
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 w-fit text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
              <div className="border-t border-primary/10 px-7 py-4 bg-background/30 flex items-baseline justify-between">
                <div className="font-display text-3xl font-bold text-gradient">{c.metric}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right max-w-[60%]">{c.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
