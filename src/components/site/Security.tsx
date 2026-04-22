import { motion } from "framer-motion";
import { Lock, ShieldCheck, KeyRound } from "lucide-react";

const items = [
  { icon: Lock, title: "AES-256 + ZK boundary", desc: "End-to-end encryption from sensor through inference." },
  { icon: ShieldCheck, title: "HIPAA · GDPR · ISO 27001", desc: "Compliance baked into the substrate, not bolted on." },
  { icon: KeyRound, title: "Hardware-rooted identity", desc: "Every IMCS node attests itself via TPM 2.0 secure boot." },
];

export const Security = () => {
  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="chip mb-6"><Lock className="h-3 w-3" /><span>Security & Reliability</span></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Built like <span className="text-gradient">critical infrastructure</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel-strong holo-border rounded-2xl p-7 group hover:translate-y-[-4px] transition-transform"
            >
              <div className="rounded-xl bg-gradient-primary/15 border border-primary/30 p-3 w-fit text-primary group-hover:animate-pulse-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
