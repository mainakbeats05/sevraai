import { motion } from "framer-motion";

export const SceneFallback = ({ label = "Initializing" }: { label?: string }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        {/* Pulsing core */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-24 w-24 rounded-full bg-gradient-primary blur-2xl"
        />
        {/* Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-32 w-32 rounded-full border border-primary/40 border-t-primary" />
        </motion.div>
        {/* Label */}
        <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
          {label}
        </div>
      </div>
    </div>
  );
};

export default SceneFallback;
