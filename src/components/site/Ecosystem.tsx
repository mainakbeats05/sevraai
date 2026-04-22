import { motion } from "framer-motion";
import { HeartPulse, Cpu, Layers3, Brain, MonitorSmartphone, Stethoscope } from "lucide-react";

const nodes = [
  { icon: HeartPulse, label: "Device", sub: "Bedside vitals" },
  { icon: Cpu, label: "IMCS", sub: "Edge compute" },
  { icon: Layers3, label: "SEVRA OS", sub: "Orchestration" },
  { icon: Brain, label: "SEVRA AI", sub: "Intelligence" },
  { icon: MonitorSmartphone, label: "HELIOS", sub: "Visualization" },
  { icon: Stethoscope, label: "Doctor", sub: "Decision" },
];

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="chip mb-6"><span>Ecosystem · End-to-end</span></div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
            One signal. <span className="text-gradient">Six layers.</span> Zero friction.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every heartbeat travels the same intelligent path — from sensor to physician — in milliseconds.
          </p>
        </motion.div>

        <div className="relative">
          {/* Flow line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2 relative">
            {nodes.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="glass-panel-strong holo-border rounded-2xl p-5 text-center transition-transform group-hover:translate-y-[-4px] group-hover:shadow-elegant">
                  <div className="mx-auto h-14 w-14 rounded-xl bg-gradient-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3 group-hover:animate-pulse-glow">
                    <n.icon className="h-6 w-6" />
                  </div>
                  <div className="font-display font-semibold">{n.label}</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">{n.sub}</div>
                </div>
                {/* Connector dot */}
                {i < nodes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1 h-2 w-2 rounded-full bg-primary z-10 -translate-y-1/2 shadow-[0_0_10px_hsl(var(--primary))]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
