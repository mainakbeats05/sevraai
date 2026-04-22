import { motion } from "framer-motion";
import { ArrowRight, Handshake, Mail } from "lucide-react";

export const Cta = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[2rem] glass-panel-strong holo-border p-10 md:p-16"
        >
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="chip mb-5"><span>Get in touch</span></div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Ready to deploy <span className="text-gradient">intelligent infrastructure?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Partner with SEVRA or request a live demo of HELIOS, IMCS and the SEVRA AI core.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@sevra.ai"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-primary px-7 py-5 text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="font-display font-semibold">Request a Demo</div>
                    <div className="text-xs opacity-80">See HELIOS live in 20 minutes</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:partners@sevra.ai"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-7 py-5 hover:bg-primary/10 transition-colors backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <Handshake className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-display font-semibold">Partner with SEVRA</div>
                    <div className="text-xs text-muted-foreground">Hospitals · Health systems · OEMs</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
