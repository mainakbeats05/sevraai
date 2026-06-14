import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BootScreen = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 30);
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary/60">
                Initializing
              </div>
              <div className="font-display text-4xl font-bold tracking-tight">
                SEVRA <span className="text-gradient">Core</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Booting SEVRA Core
              </div>
            </div>

            <div className="w-64 h-px bg-border overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                System Online · {progress}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
