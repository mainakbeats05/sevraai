import { useState, useEffect } from "react";
import { Nav } from "@/components/site/Nav";

const LAUNCH_DATE = new Date("2026-09-14T00:00:00+05:30");

const pad = (n: number) => String(n).padStart(2, "0");

const getTimeLeft = () => {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const Unit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="glass-panel holo-border rounded-2xl px-8 py-6 min-w-[100px] text-center">
      <div className="font-display text-5xl md:text-7xl font-bold text-gradient tabular-nums">
        {pad(value)}
      </div>
    </div>
    <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
      {label}
    </div>
  </div>
);

export default function LiveDemo() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[100px]" />

      <Nav />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>Live Demo · Coming Soon</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Launching <span className="text-gradient">14 September</span>
            <br />2026
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground text-pretty">
            SEVRA OS Live Demo goes live on 14th September 2026 IST.
            The future of intelligent healthcare infrastructure — witnessed in real time.
          </p>
        </div>

        <div className="flex items-start gap-4 md:gap-8">
          <Unit value={time.days} label="Days" />
          <div className="font-display text-4xl md:text-6xl font-bold text-primary/50 mt-6">:</div>
          <Unit value={time.hours} label="Hours" />
          <div className="font-display text-4xl md:text-6xl font-bold text-primary/50 mt-6">:</div>
          <Unit value={time.minutes} label="Minutes" />
          <div className="font-display text-4xl md:text-6xl font-bold text-primary/50 mt-6">:</div>
          <Unit value={time.seconds} label="Seconds" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          
            href="/#cta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.04] transition-transform"
          >
            Request Early Access
          </a>
          
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors"
          >
            Back to Home
          </a>
        </div>

        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/50">
          IST · Indian Standard Time · UTC+5:30
        </div>
      </div>
    </main>
  );
}
