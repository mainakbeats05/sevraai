import { motion } from "framer-motion";
import { Upload, Sparkles, Image as ImageIcon, X } from "lucide-react";
import { useRef, useState } from "react";

type Item = {
  id: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
};

const defaultItems: Item[] = [
  {
    id: "1",
    src: "",
    title: "Your Visual Here",
    description: "Upload an image and we'll style it as a holographic, floating 3D card with neon rim lighting.",
    tags: ["Holographic", "3D Card", "Auto-styled"],
  },
];

export const Showcase = () => {
  const [items, setItems] = useState<Item[]>(defaultItems);
  const inputRef = useRef<HTMLInputElement>(null);

  const onUpload = async (files: FileList | null) => {
    if (!files) return;
    const next: Item[] = [];
    for (const file of Array.from(files)) {
      const url = URL.createObjectURL(file);
      next.push({
        id: crypto.randomUUID(),
        src: url,
        title: file.name.replace(/\.[^.]+$/, ""),
        description: "Tap to edit title and description.",
        tags: ["Custom", "Holo"],
      });
    }
    setItems((prev) => [...next, ...prev.filter((p) => p.src)]);
  };

  const update = (id: string, patch: Partial<Item>) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  return (
    <section id="showcase" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="chip mb-6">
            <Sparkles className="h-3 w-3" />
            <span>Showcase · Bring your visuals</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Your media, <span className="text-gradient">holo-styled</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Upload product shots, team photos, or your logo. Each becomes a
            floating 3D card with cinematic lighting.
          </p>
        </motion.div>

        {/* Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <button
            onClick={() => inputRef.current?.click()}
            className="group relative glass-panel-strong holo-border rounded-2xl px-8 py-6 flex items-center gap-4 hover:translate-y-[-2px] transition-transform"
          >
            <div className="rounded-xl bg-gradient-primary p-3 shadow-elegant">
              <Upload className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <div className="font-display font-semibold">Upload images</div>
              <div className="text-xs text-muted-foreground">PNG, JPG, WEBP · multiple supported</div>
            </div>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onUpload(e.target.files)}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <div className="relative glass-panel-strong holo-border rounded-2xl overflow-hidden transition-all duration-500 group-hover:translate-y-[-6px] group-hover:[transform:rotateX(4deg)_rotateY(-4deg)] group-hover:shadow-elegant">
                {/* Image area */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.25),transparent_60%)]" />
                  {it.src ? (
                    <img
                      src={it.src}
                      alt={it.title}
                      className="absolute inset-0 h-full w-full object-contain p-6 drop-shadow-[0_10px_30px_hsl(var(--primary)/0.4)] transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                      <ImageIcon className="h-12 w-12 opacity-50" />
                      <div className="mt-2 text-xs font-mono uppercase tracking-widest">Awaiting upload</div>
                    </div>
                  )}
                  {/* Rim light */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20 pointer-events-none" />
                  {/* Scan */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <input
                    value={it.title}
                    onChange={(e) => update(it.id, { title: e.target.value })}
                    className="w-full bg-transparent font-display font-semibold text-lg outline-none focus:text-primary transition-colors"
                  />
                  <textarea
                    value={it.description}
                    onChange={(e) => update(it.id, { description: e.target.value })}
                    rows={2}
                    className="mt-2 w-full bg-transparent text-sm text-muted-foreground outline-none resize-none"
                  />
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {it.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-primary/30 text-primary bg-primary/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {it.src && (
                  <button
                    onClick={() => remove(it.id)}
                    className="absolute top-3 right-3 rounded-full bg-background/70 backdrop-blur p-1.5 text-muted-foreground hover:text-destructive border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
