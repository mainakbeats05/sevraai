import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import partnerLogo from "@/assets/myare-sevra-logo.jpeg";

const links = [
  { label: "AI", href: "#ai" },
  { label: "OS", href: "#os" },
  { label: "HELIOS", href: "#helios" },
  { label: "IMCS", href: "#imcs" },
  { label: "Showcase", href: "#showcase" },
  { label: "Vision", href: "#vision" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-panel-strong" : "bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center" aria-label="myare × SEVRA AI">
            <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-background/40 backdrop-blur transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.35)]">
              <img
                src={partnerLogo}
                alt="myare × SEVRA AI"
                className="h-10 md:h-11 w-auto block object-contain"
                draggable={false}
              />
              {/* Soft glow sweep */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,hsl(var(--primary)/0.18)_50%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-primary transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#cta"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform"
            >
              Request Demo
            </a>
          </div>

          <button
            className="md:hidden rounded-lg p-2 text-foreground/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 glass-panel-strong rounded-2xl p-4"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-primary/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Nav;
