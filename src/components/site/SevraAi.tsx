import { motion } from "framer-motion";
import { Brain, Activity, AlertTriangle, Stethoscope } from "lucide-react";
import sevraBrain from "@/assets/sevra-ai-brain.png";

const features = [
  { icon: Activity, title: "Real-time Predictions", desc: "Forecasts patient deterioration up to 6 hours ahead with calibrated confidence." },
  { icon: AlertTriangle, title: "Anomaly Detection", desc: "Multivariate vitals analysis flags unusual physiology before it becomes critical." },
  { icon: Stethoscope, title: "Clinical Intelligence", desc: "Decision-grade insights aligned to clinical pathways and hospital protocols." },
];

export const SevraAi = () => {
  return (
    <section id="ai" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex chip mb-6">
            <Brain className="h-3 w-3" />
            <span>SEVRA AI · Core Intelligence</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
            From medical data to <span className="text-gradient">real-time intelligence</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            SEVRA AI is the cognitive engine of the platform — a deep learning core trained
            on the physiology of care, designed to think with the clinician.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Neural visualization with SEVRA AI brain core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 relative aspect-[4/3] glass-panel-strong rounded-3xl overflow-hidden scan-line"
          >
            <NeuralSvg />

            {/* Brain core — true 3D centerpiece */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ perspective: 1200 }}
            >
              {/* Volumetric halos */}
              <div className="absolute h-80 w-80 rounded-full bg-primary/40 blur-[100px] animate-pulse-glow" />
              <div className="absolute h-64 w-64 rounded-full bg-secondary/30 blur-[70px]" />
              <div className="absolute h-40 w-40 rounded-full bg-primary/50 blur-[40px] animate-pulse" />

              {/* Orbital ring behind brain */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute h-[70%] w-[70%] rounded-full border border-primary/20"
                style={{ transform: "rotateX(72deg)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute h-[80%] w-[80%] rounded-full border border-secondary/15"
                style={{ transform: "rotateX(72deg) rotateZ(30deg)" }}
              />

              {/* The 3D brain — transparent PNG with depth */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotateY: [-6, 6, -6],
                  rotateX: [2, -2, 2],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative h-[82%] w-auto"
              >
                <img
                  src={sevraBrain}
                  alt="SEVRA AI — neural core"
                  className="relative h-full w-auto object-contain drop-shadow-[0_30px_60px_hsl(var(--primary)/0.55)] [filter:drop-shadow(0_0_30px_hsl(var(--primary)/0.7))_drop-shadow(0_0_60px_hsl(188_100%_55%/0.4))]"
                  loading="lazy"
                />
                {/* Floor reflection */}
                <div
                  aria-hidden
                  className="absolute left-1/2 -bottom-6 h-10 w-[70%] -translate-x-1/2 rounded-[50%] bg-primary/40 blur-2xl opacity-60"
                />
              </motion.div>
            </div>

            <div className="absolute top-4 left-4 chip">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Inference live
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              Model · sevra-core v3.2
            </div>
          </motion.div>

          {/* Features */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel holo-border rounded-2xl p-6 group hover:translate-y-[-2px] transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary border border-primary/20">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const NeuralSvg = () => {
  // Layered network nodes
  const layers = [4, 6, 6, 4];
  const width = 800;
  const height = 600;
  const padX = 80;
  const padY = 80;

  const nodes: { x: number; y: number; layer: number }[] = [];
  layers.forEach((count, li) => {
    const x = padX + ((width - padX * 2) / (layers.length - 1)) * li;
    for (let i = 0; i < count; i++) {
      const y = padY + ((height - padY * 2) / (count - 1 || 1)) * i;
      nodes.push({ x, y, layer: li });
    }
  });

  const lines: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
  for (let li = 0; li < layers.length - 1; li++) {
    const a = nodes.filter((n) => n.layer === li);
    const b = nodes.filter((n) => n.layer === li + 1);
    a.forEach((na, i) => b.forEach((nb, j) => lines.push({ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y, key: `${li}-${i}-${j}` })));
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="ln" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(188 100% 55%)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="hsl(188 100% 65%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(270 90% 65%)" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="node">
          <stop offset="0%" stopColor="hsl(188 100% 80%)" />
          <stop offset="100%" stopColor="hsl(188 100% 50%)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lines.map((l) => (
        <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="url(#ln)" strokeWidth="0.6" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="14" fill="url(#node)" opacity="0.6" />
          <circle cx={n.x} cy={n.y} r="4" fill="hsl(188 100% 70%)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 5) * 0.4}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
};

export default SevraAi;
