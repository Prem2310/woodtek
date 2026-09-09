import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { materials, materialCategories, type Material } from "@/data/materials";
import { Eyebrow } from "./primitives";
import { cn } from "@/lib/utils";

export function MaterialLab() {
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState<Material>(materials[0]!);

  const list =
    category === "All" ? materials : materials.filter((m) => m.category === category);

  return (
    <div
      className="relative overflow-hidden transition-colors duration-[900ms]"
      style={{ backgroundColor: active.tone === "dark" ? "#0C1710" : "#F3EEE5" }}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: active.tone === "dark" ? 0.45 : 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div
        className={cn(
          "grain relative px-6 py-24 md:px-10 md:py-32 lg:px-16",
          active.tone === "dark" ? "text-ivory" : "text-forest-900",
        )}
      >
        <div className="mx-auto max-w-[1600px]">
          <Eyebrow tone={active.tone === "dark" ? "light" : "dark"}>Material Lab</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-light tracking-[-0.02em]">
            Touch the material.
          </h2>

          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3">
            {["All", ...materialCategories].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                data-cursor="link"
                className={cn(
                  "eyebrow text-[10px] transition-opacity duration-300",
                  category === c ? "opacity-100" : "opacity-45 hover:opacity-80",
                )}
              >
                {c}
                {category === c && <span className="ml-2 inline-block h-px w-6 bg-brass-400" />}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {list.map((m) => (
                <button
                  key={m.id}
                  onMouseEnter={() => setActive(m)}
                  onFocus={() => setActive(m)}
                  onClick={() => setActive(m)}
                  data-cursor="link"
                  aria-label={m.name}
                  className={cn(
                    "group relative aspect-square overflow-hidden border transition-all duration-500",
                    active.id === m.id
                      ? "border-brass-400"
                      : active.tone === "dark"
                        ? "border-ivory/15 hover:border-ivory/45"
                        : "border-ink/12 hover:border-ink/35",
                  )}
                  style={{ backgroundColor: m.swatch }}
                >
                  <img
                    src={m.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 0.84, 0.44, 1] }}
                className={cn(
                  "border-t pt-8",
                  active.tone === "dark" ? "border-ivory/18" : "border-ink/12",
                )}
              >
                <p className="spec text-[10px] opacity-60">{active.category}</p>
                <h3 className="mt-3 font-display text-4xl font-light tracking-[-0.01em]">
                  {active.name}
                </h3>
                <dl className="mt-8 space-y-4">
                  {active.spec.map((s) => (
                    <div key={s.label} className="grid grid-cols-[100px_minmax(0,1fr)] gap-4">
                      <dt className="spec text-[10px] opacity-50">{s.label}</dt>
                      <dd className="spec text-[11px] normal-case opacity-90">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
