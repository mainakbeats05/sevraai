import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import sevraAiLogo from "@/assets/sevra-ai-logo.jpeg";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-background pt-20 pb-10">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Top: Brand + columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-primary/20 blur-2xl" />
                <img
                  src={sevraAiLogo}
                  alt="SEVRA AI logo"
                  className="relative h-20 w-20 rounded-2xl object-cover ring-1 ring-primary/30 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)]"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="font-display text-2xl font-bold tracking-tight">
                  SEVRA <span className="text-primary">AI</span>
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Healthcare Infrastructure
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Systems Online
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              SEVRA is not software. It's the infrastructure layer powering the
              future of healthcare — unifying AI, operating systems, real-time
              visualization, and proprietary medical hardware into a single
              intelligent fabric.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Platform
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#ai" className="hover:text-foreground transition-colors">SEVRA AI</a></li>
              <li><a href="#os" className="hover:text-foreground transition-colors">SEVRA OS</a></li>
              <li><a href="#helios" className="hover:text-foreground transition-colors">HELIOS Interface</a></li>
              <li><a href="#imcs" className="hover:text-foreground transition-colors">IMCS Hardware</a></li>
              <li><a href="#mycare" className="hover:text-foreground transition-colors">MyCare</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Company
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="/#vision" className="hover:text-foreground transition-colors">Vision</a></li>
              <li><Link to="/insights" className="hover:text-foreground transition-colors">Insights</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><a href="/#use-cases" className="hover:text-foreground transition-colors">Use Cases</a></li>
              <li><a href="/#cta" className="hover:text-foreground transition-colors">Partner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-primary/70" />
                <a href="mailto:getmycare108@gmail.com" className="hover:text-foreground transition-colors">
                  getmycare108@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-primary/70" />
                <span>+91 9101613924</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary/70" />
                <span>Millennium Tower, 6th floor, Maruti Chowk Baner Pune, 411069 </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur">
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/80">
                To be Compliance
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["HIPAA", "SOC 2", "ISO 27001", "GDPR"].map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {year} SEVRA Technologies · All rights reserved
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link to="/policies#privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/policies#terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/policies#security" className="hover:text-foreground transition-colors">Security</Link>
            <Link to="/policies#cookies" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70">
            v2.6.0 · Build 2026.04
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
