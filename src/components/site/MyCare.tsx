import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import mycareLogo from "@/assets/mycare-logo.jpeg";

const MYCARE_URL =
  "https://id-preview--5a33dceb-6ea5-487f-9d50-3b484445abca.lovable.app/#roadmap";

export const MyCare = () => {
  return (
    <section
      id="mycare"
      className="relative overflow-hidden border-t border-border/40 bg-background py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary/80"
          >
            Companion Platform
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Explore <span className="text-primary">MyCare</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            A healthcare revolution — built on the SEVRA infrastructure layer.
            Step into the patient-facing experience powering the next era of care.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-2xl"
        >
          <a
            href={MYCARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore MyCare — open MyCare platform"
            className="group relative block overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_30px_120px_-20px_hsl(var(--primary)/0.45)] sm:p-12"
          >
            {/* Holographic sweep */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            {/* Corner crosshairs */}
            <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/60" />
            <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-primary/60" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-primary/60" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-primary/60" />

            <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative">
                <div className="absolute -inset-6 rounded-2xl bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src={mycareLogo}
                  alt="MyCare — A Healthcare Revolution"
                  className="relative h-28 w-auto rounded-xl object-contain shadow-xl ring-1 ring-border/40 transition-transform duration-500 group-hover:scale-105 sm:h-32"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col items-center gap-3 sm:items-end">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Live Platform
                </span>
                <div className="inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                  Visit MyCare
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Opens in a new tab
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MyCare;
