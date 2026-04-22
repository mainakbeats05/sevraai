import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export const Vision = () => {
  return (
    <section id="vision" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/15 blur-[150px]" />

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl glass-panel-strong holo-border"
        >
          <Globe2 className="h-7 w-7 text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-4xl md:text-7xl font-bold tracking-tight text-balance max-w-5xl mx-auto leading-[1.05]"
        >
          Building the global{" "}
          <span className="text-gradient">infrastructure layer</span>{" "}
          for healthcare.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          SEVRA is not software. It's the infrastructure layer powering the
          future of healthcare.
        </motion.p>
      </div>
    </section>
  );
};

export default Vision;
