import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Sparkles, Calendar, Tag } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { INSIGHTS, type InsightCategory } from "@/data/insights";

type Filter = "All" | InsightCategory;
const FILTERS: Filter[] = ["All", "AI", "OS", "Hardware", "Healthcare"];

const Insights = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = INSIGHTS.find((i) => i.featured) ?? INSIGHTS[0];
  const rest = useMemo(() => {
    const others = INSIGHTS.filter((i) => i.slug !== featured.slug);
    return filter === "All" ? others : others.filter((i) => i.category === filter);
  }, [filter, featured.slug]);

  useEffect(() => {
    document.title = "SEVRA Insights — Engineering the Future of Healthcare";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Deep-tech essays on AI, operating systems, hardware, and healthcare infrastructure from the SEVRA engineering team."
    );
    if (!meta.parentNode) document.head.appendChild(meta);

    const linkCanonical =
      document.querySelector('link[rel="canonical"]') ||
      Object.assign(document.createElement("link"), { rel: "canonical" });
    linkCanonical.setAttribute("href", window.location.origin + "/insights");
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-secondary/15 blur-[140px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-mono-tech uppercase tracking-[0.3em] text-primary"
          >
            <Sparkles className="h-3 w-3" />
            SEVRA Insights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance max-w-3xl"
          >
            Engineering the future of{" "}
            <span className="text-gradient">healthcare</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground"
          >
            Deep-tech essays from the team building the infrastructure layer of
            modern medicine.
          </motion.p>
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-6 pb-12">
        <Link to={`/insights/${featured.slug}`} className="group block">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl glass-panel-strong holo-border p-8 md:p-12 transition-all hover:shadow-[0_0_50px_hsl(var(--primary)/0.25)]"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl transition-all group-hover:bg-primary/25" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-primary">
                    Featured
                  </span>
                  <span className="rounded-full border border-border/60 bg-card/40 px-2.5 py-0.5 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-muted-foreground">
                    {featured.category}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-[1.05] text-balance group-hover:text-gradient transition-all">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readMinutes} min read
                  </span>
                  <span>{featured.author}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex md:justify-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform group-hover:scale-[1.04]">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.article>
        </Link>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground mr-2">
            Filter
          </span>
          {FILTERS.map((f) => {
            const isActive = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_24px_hsl(var(--primary)/0.35)]"
                    : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                <Tag className="h-3 w-3" />
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 pt-8 pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Link
                to={`/insights/${post.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-panel p-6 transition-all hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/25" />

                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-primary">
                    {post.category}
                  </span>
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {post.readMinutes} min
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-lg md:text-xl font-semibold leading-snug text-balance group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="relative mt-3 text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="relative mt-auto pt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {rest.length === 0 && (
          <div className="text-center text-sm text-muted-foreground py-16">
            No articles in this category yet — check back soon.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default Insights;
