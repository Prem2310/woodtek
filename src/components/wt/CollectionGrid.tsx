import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { collections, type Collection } from "@/data/collections";
import { Tag } from "./primitives";
import { cn } from "@/lib/utils";

const spanFor = (scale: Collection["scale"]) =>
  scale === "wide"
    ? "md:col-span-7 aspect-[4/3]"
    : scale === "tall"
      ? "md:col-span-5 aspect-[3/4]"
      : "md:col-span-5 aspect-square";

export function CollectionGrid({ items = collections }: { items?: Collection[] }) {
  const [active, setActive] = useState<Collection | null>(null);

  return (
    <>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-12">
        {items.map((item, i) => (
          <article
            key={item.id}
            id={item.id}
            className={cn(
              "group scroll-mt-32",
              spanFor(item.scale),
              "h-auto aspect-auto",
              i % 2 === 1 ? "md:mt-24" : "",
              item.scale === "wide" ? "md:col-span-7" : "md:col-span-5",
            )}
          >
            <button
              onClick={() => setActive(item)}
              data-cursor="view"
              className="block w-full text-left"
              aria-label={`View ${item.title}`}
            >
              <div
                className={cn(
                  "grain relative overflow-hidden bg-bone",
                  item.scale === "wide"
                    ? "aspect-[4/3]"
                    : item.scale === "tall"
                      ? "aspect-[3/4]"
                      : "aspect-square",
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="spec absolute top-5 left-5 z-10 text-[10px] text-ivory/80 transition-transform duration-700 group-hover:translate-x-1">
                  {item.index}
                </span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6 border-t border-ink/10 pt-5">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl leading-tight font-light tracking-[-0.01em] text-forest-900 transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{item.short}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 pt-2 text-teak-700 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  →
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      <CollectionModal item={active} onClose={() => setActive(null)} />
    </>
  );
}

export function CollectionModal({
  item,
  onClose,
}: {
  item: Collection | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-ivory"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-ivory/90 px-6 py-5 backdrop-blur md:px-10">
            <span className="spec text-[10px] text-slate">
              {item.index} / {item.title}
            </span>
            <button
              onClick={onClose}
              className="eyebrow text-[10px] text-slate hover:text-teak-700"
              data-cursor="link"
            >
              Close
            </button>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            <div className="grain relative aspect-[4/5] md:sticky md:top-[69px] md:h-[calc(100vh-69px)] md:aspect-auto">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-6 py-14 md:px-14 md:py-20">
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.6rem)] leading-[1.05] font-light tracking-[-0.02em] text-forest-900">
                {item.title}
              </h2>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-graphite">
                {item.description}
              </p>

              <dl className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
                <Row label="Material" value={item.material} />
                <Row label="Format" value={item.format} />
                <Row label="Finishes" value={item.finishes.join(" / ")} />
                <Row label="Applications" value={item.applications.join(" / ")} />
                <Row label="Customisation" value={item.customisation} />
              </dl>

              <div className="mt-10 flex flex-wrap gap-2">
                {item.finishes.slice(0, 6).map((f) => (
                  <Tag key={f}>{f}</Tag>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={onClose}
                data-cursor="link"
                className="eyebrow group mt-14 inline-flex items-center gap-3 bg-forest-800 px-8 py-4 text-ivory transition-colors hover:bg-teak-700"
              >
                Enquire about this
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-6 py-5">
      <dt className="spec text-[10px] text-ash">{label}</dt>
      <dd className="spec text-[11px] leading-relaxed text-graphite normal-case">{value}</dd>
    </div>
  );
}
