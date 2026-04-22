export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L3 7l9 5 9-5-9-5z" />
                <path d="M3 12l9 5 9-5" opacity="0.7" />
              </svg>
            </div>
            <div>
              <div className="font-display font-bold">SEVRA AI</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Healthcare Infrastructure</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#ai" className="hover:text-foreground transition-colors">AI</a>
            <a href="#os" className="hover:text-foreground transition-colors">OS</a>
            <a href="#helios" className="hover:text-foreground transition-colors">HELIOS</a>
            <a href="#imcs" className="hover:text-foreground transition-colors">IMCS</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} SEVRA · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
