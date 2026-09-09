import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import select from "@/assets/craft-select.jpg";
import craft from "@/assets/craft-craft.jpg";
import finish from "@/assets/craft-finish.jpg";
import install from "@/assets/craft-install.jpg";
import { Eyebrow } from "./primitives";
import { cn } from "@/lib/utils";

const steps = [
  {
    index: "01",
    title: "Select",
    image: select,
    body: "Boards are chosen by hand for grain, colour and movement before anything is cut.",
  },
  {
    index: "02",
    title: "Craft",
    image: craft,
    body: "Machined for accuracy, then worked by hand where the eye will read the detail.",
  },
  {
    index: "03",
    title: "Finish",
    image: finish,
    body: "Oils and lacquers built in thin coats until the surface holds the light correctly.",
  },
  {
    index: "04",
    title: "Install",
    image: install,
    body: "Set on site by our own team, aligned to the architecture rather than the wall.",
  },
];

export function CraftTimeline() {
  const [active, setActive] = useState(0);
  const current = steps[active] ?? steps[0]!;

  return (
    <section className="bg-forest-900 px-6 py-24 text-ivory md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Eyebrow tone="light">Craftsmanship</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.03] font-light tracking-[-0.02em]">
          Made by hand.
          <br />
          Defined by detail.
        </h2>

        <div className="mt-20 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
          <ol className="border-t border-ivory/15">
            {steps.map((s, i) => (
              <li key={s.index}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="link"
                  className={cn(
                    "group grid w-full grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 border-b border-ivory/15 py-8 text-left transition-opacity duration-500 md:grid-cols-[auto_220px_minmax(0,1fr)]",
                    active === i ? "opacity-100" : "opacity-45 hover:opacity-75",
                  )}
                >
                  <span className="spec text-[10px] text-brass-400">{s.index}</span>
                  <span className="font-display text-3xl font-light tracking-[-0.01em] md:text-4xl">
                    {s.title}
                  </span>
                  <span className="col-span-2 max-w-sm text-sm leading-relaxed text-ivory/60 md:col-span-1">
                    {s.body}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="grain relative aspect-[4/3] overflow-hidden bg-forest-950">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.index}
                src={current.image}
                alt={current.title}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
