import { useEffect } from "react";
import { Faq } from "@/components/site/Faq";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQ — SEVRA AI · Healthcare Infrastructure Answers";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Answers about SEVRA AI: product, technology, security, and deployment for hospitals and health systems."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <div className="container mx-auto px-6 pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>
      </div>
      <Faq />
      <Footer />
    </main>
  );
};

export default FaqPage;
