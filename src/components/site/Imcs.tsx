import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Server, Layers } from "lucide-react";
import imcsRack from "@/assets/imcs-rack-new.png";
import heliosInternals from "@/assets/helios-internals.png";

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
            className="relative max-w-md mx-auto w-full min-h-[560px] flex items-center justify-center"
            style={{ perspective: 2200 }}
          >
            {/* Cinematic glow stack */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.4),transparent_65%)] blur-3xl" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.22),transparent_70%)] blur-2xl" />
            </div>

            {/* Subtle orbit ring */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
              <div className="h-[520px] w-[520px] rounded-full border border-primary/10 animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Light streak */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-[380px] bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm -z-10" />

            {/* Floating 3D rack — pure cutout, no frame */}
            <motion.div
              animate={{ y: [0, -16, 0], rotateY: [-7, 7, -7], rotateX: [2, -2, 2] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full"
            >
              <img
                src={imcsRack}
                alt="IMCS — full 42U rack diagram with cooling, network switch, server machines, storage, UPS and PDUs"
                className="relative z-10 w-full h-auto block select-none"
                loading="lazy"
                draggable={false}
                style={{
                  filter:
                    "drop-shadow(0 30px 60px hsl(var(--primary) / 0.55)) drop-shadow(0 0 80px hsl(var(--primary) / 0.35)) drop-shadow(0 60px 90px rgba(0,0,0,0.6))",
                }}
              />
              {/* Holo scanline overlay */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-[scan_5s_linear_infinite]" />
              </div>
            </motion.div>

            {/* Floor reflection */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 h-8 w-[55%] rounded-[50%] bg-black/60 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-6 w-[45%] rounded-[50%] bg-primary/40 blur-3xl" />

            {/* Floating status chips */}
            <div className="absolute top-2 left-2 chip backdrop-blur-md z-20 shadow-[0_10px_30px_hsl(var(--primary)/0.35)]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              42U · Online
            </div>
            <div className="absolute top-3 right-2 font-mono text-[10px] text-muted-foreground tracking-widest uppercase z-20">
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

        {/* Inside the infrastructure — internal hardware blueprint */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="chip mb-5">
                <Layers className="h-3 w-3" />
                <span>Inside the Infrastructure</span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Every component, <span className="text-gradient">engineered in-house.</span>
              </h3>
              <p className="mt-4 text-muted-foreground">
                From the embedded compute core to the cooling system — purpose-built for
                continuous, mission-critical operation in clinical environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Compute", "Memory", "I/O", "Cooling", "Security"].map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_70%)] blur-3xl -z-10" />

            <div className="relative glass-panel-strong holo-border rounded-3xl overflow-hidden shadow-elegant">
              {/* Top blueprint chrome */}
              <div className="flex items-center justify-between bg-background/60 backdrop-blur px-5 py-3 border-b border-primary/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">DOC · HW-BLP-002</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:inline">HELIOS UNIT · INTERNAL LAYOUT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Rev 02 · 2026</span>
                </div>
              </div>

              <div className="relative bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_70%)]">
                <img
                  src={heliosInternals}
                  alt="HELIOS Unit — internal hardware layout blueprint with compute core, memory, storage, connectivity, internal modules, cooling and power supply"
                  className="block w-full h-auto"
                  loading="lazy"
                />
                {/* Corner crosshairs */}
                {[
                  "top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3",
                ].map((pos) => (
                  <div key={pos} className={`pointer-events-none absolute ${pos} h-4 w-4`}>
                    <div className="absolute inset-0 border-l border-t border-primary/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Imcs;
