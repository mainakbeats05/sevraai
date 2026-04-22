import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Server } from "lucide-react";
import imcsRack from "@/assets/imcs-rack.png";

const specs = [
  { icon: Cpu, label: "Compute", value: "192 TOPS · NPU + GPU" },
  { icon: Server, label: "Storage", value: "8TB NVMe · encrypted" },
  { icon: Shield, label: "Security", value: "TPM 2.0 · Secure boot" },
  { icon: Zap, label: "Latency", value: "< 12ms edge inference" },
];

export const Imcs = () => {
  return (
    <section id="imcs" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Rack hardware */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-md mx-auto w-full"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.35),transparent_60%)] blur-3xl -z-10" />
            <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-2xl -z-10" />

            {/* Floating rack */}
            <div className="relative animate-float">
              <img
                src={imcsRack}
                alt="IMCS — full 42U rack diagram with cooling, network switch, server machines, storage, UPS and PDUs"
                className="relative w-full h-auto block drop-shadow-[0_30px_80px_hsl(var(--primary)/0.4)] [mix-blend-mode:screen]"
                loading="lazy"
              />
              {/* Holo scanline */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-[scan_5s_linear_infinite]" />
              </div>
            </div>

            {/* Floor reflection */}
            <div className="mx-auto mt-2 h-12 w-3/4 rounded-[50%] bg-primary/30 blur-2xl opacity-60" />

            {/* Pulse status pill */}
            <div className="absolute top-4 left-4 chip backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              42U · Online
            </div>
            <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              IMCS · Rack 01
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="chip mb-6">
              <Server className="h-3 w-3" />
              <span>IMCS · Intelligent Medical Core Server</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
              The <span className="text-gradient">brain</span> behind the infrastructure
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Proprietary medical-grade hardware engineered for 24/7 critical care
              environments. Inference at the edge, sovereignty by design.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-panel rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="rounded-lg bg-primary/10 p-2 text-primary border border-primary/20">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    <div className="font-display font-semibold text-sm">{s.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 italic text-sm text-muted-foreground border-l-2 border-primary/40 pl-4">
              "Built for the hospital. Hardened for the patient."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Imcs;
