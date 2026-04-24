import { motion } from "framer-motion";
import { Smartphone, Activity, Bell, ShieldCheck, Wifi, HeartPulse } from "lucide-react";
import mobileApp from "@/assets/sevra-mobile-app.png";

const features = [
  { icon: HeartPulse, title: "Live Vitals Streaming", desc: "ECG, SpO₂, BP and HR pushed in real time from every monitored bed." },
  { icon: Bell, title: "Critical Alerts", desc: "AI-prioritized notifications surface deteriorating patients before code events." },
  { icon: ShieldCheck, title: "HIPAA-Grade Security", desc: "End-to-end encrypted channels, biometric unlock, zero local PHI storage." },
  { icon: Wifi, title: "Edge-Synced", desc: "Works on hospital LAN, 5G or satellite — built for ambulances and field units." },
];

export const SevraMobile = () => {
  return (
    <section id="mobile" className="relative py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px] -z-10" />
      <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] -z-10" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* 3D Floating Phone — LEFT (cinematic, no frame) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center order-2 lg:order-1 min-h-[680px]"
            style={{ perspective: 2400 }}
          >
            {/* Cinematic ambient glow stack */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.4),transparent_65%)] blur-3xl" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.25),transparent_70%)] blur-2xl" />
              <div className="absolute left-1/2 top-[30%] -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-primary/30 blur-[120px]" />
            </div>

            {/* Subtle orbit rings — softer, further back */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
              <div className="h-[560px] w-[560px] rounded-full border border-primary/10 animate-[spin_50s_linear_infinite]" />
              <div className="absolute h-[440px] w-[440px] rounded-full border border-primary/5 animate-[spin_70s_linear_infinite_reverse]" />
            </div>

            {/* Light streak behind phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-[420px] bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm -z-10" />

            {/* The 3D phone — pure cutout, no frame */}
            <motion.div
              animate={{
                y: [0, -22, 0],
                rotateY: [-10, 6, -10],
                rotateX: [3, -3, 3],
                rotateZ: [-2, 1, -2],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <img
                src={mobileApp}
                alt="SEVRA Mobile App — real-time ICU monitoring on smartphone"
                className="relative z-10 max-h-[660px] w-auto select-none"
                loading="lazy"
                draggable={false}
                style={{
                  filter:
                    "drop-shadow(0 30px 50px hsl(var(--primary) / 0.55)) drop-shadow(0 0 80px hsl(var(--primary) / 0.35)) drop-shadow(0 60px 80px rgba(0,0,0,0.6))",
                }}
              />

              {/* Floating data chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-[18%] glass-panel-strong holo-border rounded-xl px-3 py-2 z-20 shadow-[0_10px_40px_hsl(var(--primary)/0.4)]"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <Activity className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-primary">112 BPM</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-[42%] glass-panel-strong holo-border rounded-xl px-3 py-2 z-20 shadow-[0_10px_40px_hsl(var(--destructive)/0.35)]"
                style={{ transform: "translateZ(100px)" }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
                  <span className="font-mono uppercase tracking-wider text-destructive">Critical</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 bottom-[22%] glass-panel-strong holo-border rounded-xl px-3 py-2 z-20 shadow-[0_10px_40px_hsl(var(--primary)/0.35)]"
                style={{ transform: "translateZ(90px)" }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-muted-foreground">E2E Encrypted</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Soft floor shadow + reflection glow */}
            <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 h-8 w-[55%] rounded-[50%] bg-black/60 blur-2xl" />
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 h-6 w-[45%] rounded-[50%] bg-primary/40 blur-3xl" />
          </motion.div>

          {/* Content — RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="chip mb-6">
              <Smartphone className="h-3 w-3" />
              <span>SEVRA Mobile · Remote Monitoring</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
              The hospital, <span className="text-gradient">in your pocket</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              SEVRA Mobile streams every ICU bed, ward and ambulance directly to clinicians —
              wherever they are. Built for on-call physicians, rapid-response teams and
              command centers operating across distributed care networks.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group relative rounded-xl border border-primary/15 bg-card/40 backdrop-blur p-5 hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 border border-primary/20 p-2 text-primary">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.desc}</div>
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-xl border border-primary/15 bg-card/30 backdrop-blur p-5">
              {[
                { v: "<200ms", l: "Vital sync latency" },
                { v: "iOS · Android", l: "Native platforms" },
                { v: "99.99%", l: "Uptime SLA" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display text-xl md:text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SevraMobile;
