import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import partnerLogo from "@/assets/mycare-sevra-logo.png";

type NavLink = { label: string; href: string; type: "anchor" | "route" };

const links: NavLink[] = [
  { label: "AI", href: "#ai", type: "anchor" },
  { label: "OS", href: "#os", type: "anchor" },
  { label: "HELIOS", href: "#helios", type: "anchor" },
  { label: "IMCS", href: "#imcs", type: "anchor" },
  { label: "Insights", href: "/insights", type: "route" },
  { label: "FAQ", href: "#faq", type: "anchor" },
  { label: "Policies", href: "/policies", type: "route" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resolve anchor href: from sub-routes, anchors point at "/#id"
  const resolveHref = (l: NavLink) =>
    l.type === "anchor" && !isHome ? `/${l.href}` : l.href;

  const renderLink = (l: NavLink, onClick?: () => void) => {
    const href = resolveHref(l);
    const className =
      "relative px-4 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors group";
    if (l.type === "route") {
      return (
        <Link to={href} onClick={onClick} className={className}>
          {l.label}
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-primary transition-all duration-300" />
        </Link>
      );
    }
    return (
      <a href={href} onClick={onClick} className={className}>
        {l.label}
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-primary transition-all duration-300" />
      </a>
    );
  };

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
          <Link to="/" className="group flex items-center" aria-label="mycare × SEVRA AI">
            <img
              src={partnerLogo}
              alt="mycare × SEVRA AI"
              className="h-9 md:h-10 w-auto block object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_18px_hsl(var(--primary)/0.55)] drop-shadow-[0_0_10px_hsl(var(--primary)/0.25)]"
              draggable={false}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <span key={l.href + l.label}>{renderLink(l)}</span>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={isHome ? "#cta" : "/#cta"}
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
                  <span key={l.href + l.label}>
                    {renderLink(l, () => setOpen(false))}
                  </span>
                ))}
                <a
                  href={isHome ? "#cta" : "/#cta"}
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
