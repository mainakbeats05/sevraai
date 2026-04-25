import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getInsight, INSIGHTS } from "@/data/insights";
import { toast } from "@/hooks/use-toast";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getInsight(slug) : undefined;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — SEVRA Insights`;
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute("content", post.excerpt);
    if (!meta.parentNode) document.head.appendChild(meta);

    const linkCanonical =
      document.querySelector('link[rel="canonical"]') ||
      Object.assign(document.createElement("link"), { rel: "canonical" });
    linkCanonical.setAttribute(
      "href",
      window.location.origin + `/insights/${post.slug}`
    );
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);

    // JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
      publisher: { "@type": "Organization", name: "SEVRA Technologies" },
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, [post]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!post) return <Navigate to="/insights" replace />;

  const related = INSIGHTS.filter(
    (i) => i.slug !== post.slug && i.category === post.category
  ).slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied", description: "Article URL is in your clipboard." });
    } catch {
      toast({ title: "Could not copy", description: "Copy manually from the address bar." });
    }
  };

  return (
    <main className="relative bg-background text-foreground">
      {/* Reading progress bar */}
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Nav />

      <article className="relative pt-36 pb-24">
        {/* Ambient backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/10 blur-[140px]" />
        </div>

        <div className="container mx-auto px-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All insights
          </Link>

          <header className="mx-auto mt-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-primary">
                {post.category}
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {post.readMinutes} min read
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance"
            >
              {post.title}
            </motion.h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground border-b border-border/60 pb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readMinutes} min
              </span>
              <span>{post.author}</span>
            </div>
          </header>

          <div className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Floating share */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 flex lg:flex-col gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on Twitter"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  onClick={copyLink}
                  aria-label="Copy link"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
                >
                  <LinkIcon className="h-4 w-4" />
                </button>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-11 order-1 lg:order-2 max-w-3xl">
              <div className="prose-article space-y-6">
                {post.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={i}
                        className="font-display text-2xl md:text-3xl font-semibold tracking-tight pt-4"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "p") {
                    return (
                      <p
                        key={i}
                        className="text-base md:text-lg leading-relaxed text-foreground/85"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="relative rounded-2xl glass-panel-strong p-6 md:p-8 text-lg md:text-xl font-display italic leading-snug text-foreground"
                      >
                        <span className="absolute -left-1 top-4 h-[calc(100%-2rem)] w-1 rounded-full bg-gradient-primary" />
                        “{block.text}”
                      </blockquote>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="space-y-2.5">
                        {block.items.map((it, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-base md:text-lg text-foreground/85"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Article CTA */}
              <div className="mt-14 rounded-3xl glass-panel-strong holo-border p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-primary/80">
                      See SEVRA in action
                    </div>
                    <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold">
                      Book a walkthrough with our team.
                    </h3>
                  </div>
                  <Link
                    to="/#cta"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform"
                  >
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="container mx-auto px-6 pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-6">
              More from {post.category}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/insights/${r.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-panel p-6 transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)]"
                  >
                    <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-primary self-start">
                      {r.category}
                    </span>
                    <h4 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {r.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {r.excerpt}
                    </p>
                    <div className="mt-auto pt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{r.readMinutes} min</span>
                      <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default InsightArticle;
