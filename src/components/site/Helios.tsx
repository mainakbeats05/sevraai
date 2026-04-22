import { motion } from "framer-motion";
import { MonitorSmartphone, Activity, Bell, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const useEcg = (length = 80) => {
  const [data, setData] = useState<number[]>(() => Array(length).fill(50));
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setData((prev) => {
        const next = prev.slice(1);
        const phase = i % 25;
        let v = 50;
        if (phase === 5) v = 20;
        else if (phase === 6) v = 90;
        else if (phase === 7) v = 10;
        else if (phase === 8) v = 55;
        else v = 48 + Math.random() * 6;
        next.push(v);
        i++;
        return next;
      });
    }, 80);
    return () => clearInterval(id);
  }, [length]);
  return data;
};

const Ecg = () => {
  const data = useEcg(80);
  const w = 600, h = 120;
  const path = data
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i / (data.length - 1)) * w},${h - (v / 100) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      <defs>
        <linearGradient id="ecg" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(188 100% 55%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(188 100% 70%)" />
          <stop offset="100%" stopColor="hsl(188 100% 55%)" />
        </linearGradient>
      </defs>
      <path d={path} stroke="url(#ecg)" strokeWidth="2" fill="none" />
    </svg>
  );
};

export const Helios = () => {
  return (
    <section id="helios" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="chip mb-6">
            <MonitorSmartphone className="h-3 w-3" />
            <span>HELIOS · Visualization</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Every vital. <span className="text-gradient">Every patient.</span> One pane of glass.
          </h2>
        </motion.div>

        {/* Floating dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1400 }}
          className="relative mx-auto max-w-5xl glass-panel-strong holo-border rounded-3xl p-6 md:p-8 shadow-elegant"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">helios · ICU East · 24 beds</span>
            </div>
            <div className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Live
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Main vitals card */}
            <div className="md:col-span-2 glass-panel rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="font-display font-semibold">Bed 14 · ECG II</span>
                </div>
                <span className="font-mono text-2xl font-bold text-gradient">82 <span className="text-xs text-muted-foreground">bpm</span></span>
              </div>
              <div className="h-32"><Ecg /></div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {[
                  { l: "SpO₂", v: "98%", c: "text-primary" },
                  { l: "RR", v: "16", c: "text-foreground" },
                  { l: "Temp", v: "37.1°", c: "text-foreground" },
                  { l: "BP", v: "118/76", c: "text-foreground" },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg bg-background/40 border border-primary/10 p-2.5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
                    <div className={`font-display text-lg font-semibold ${m.c}`}>{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side panels */}
            <div className="flex flex-col gap-4">
              <div className="glass-panel rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="h-4 w-4 text-secondary" />
                  <span className="font-display font-semibold text-sm">Alerts</span>
                </div>
                {[
                  { sev: "high", t: "Bed 09 · SpO₂ trend ↓", c: "bg-destructive/15 border-destructive/40 text-destructive" },
                  { sev: "med", t: "Bed 21 · Sepsis risk 0.74", c: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
                  { sev: "low", t: "Bed 03 · Movement detected", c: "bg-primary/10 border-primary/30 text-primary" },
                ].map((a, i) => (
                  <div key={i} className={`mt-2 rounded-lg border px-3 py-2 text-xs ${a.c}`}>
                    {a.t}
                  </div>
                ))}
              </div>
              <div className="glass-panel rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="font-display font-semibold text-sm">Throughput</span>
                </div>
                <div className="font-mono text-3xl font-bold text-gradient">1,284</div>
                <div className="text-xs text-muted-foreground">vitals streams · 12ms avg</div>
                <div className="mt-3 h-1.5 rounded-full bg-background/60 overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Helios;
