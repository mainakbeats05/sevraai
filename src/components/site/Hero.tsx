import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden noise">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg" />

      {/* 3D scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="chip">
            <Sparkles className="h-3 w-3" />
            <span>Intelligent Healthcare Infrastructure</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-center text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          Rebuilding Healthcare with{" "}
          <span className="text-gradient">Intelligent Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-8 mx-auto max-w-2xl text-center text-lg md:text-xl text-muted-foreground text-pretty"
        >
          AI. OS. Hardware. Unified. SEVRA is the infrastructure layer powering
          the next decade of medicine — from the bedside to the cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#ai"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.04]"
          >
            Explore the System
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors backdrop-blur"
          >
            Request a Demo
          </a>
        </motion.div>

        {/* Status ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="absolute bottom-8 left-0 right-0"
        >
          <div className="container mx-auto px-6">
            <div className="glass-panel rounded-full px-5 py-2.5 mx-auto max-w-3xl flex items-center gap-4 overflow-hidden">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <div className="flex-1 overflow-hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <div className="inline-flex animate-ticker gap-10">
                  {[
                    "SEVRA AI · Inference 12ms",
                    "IMCS Node A1 · 99.997% uptime",
                    "HELIOS · 1,284 vitals streams live",
                    "OS · 4.2M events orchestrated/min",
                    "Encryption · AES-256 + ZK boundary",
                  ]
                    .concat([
                      "SEVRA AI · Inference 12ms",
                      "IMCS Node A1 · 99.997% uptime",
                      "HELIOS · 1,284 vitals streams live",
                      "OS · 4.2M events orchestrated/min",
                      "Encryption · AES-256 + ZK boundary",
                    ])
                    .map((t, i) => (
                      <span key={i} className="inline-flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary/60" />
                        {t}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
