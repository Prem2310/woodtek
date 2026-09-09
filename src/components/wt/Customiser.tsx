import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./primitives";
import { cn } from "@/lib/utils";

const options: { label: string; values: string[] }[] = [
  { label: "Wood species", values: ["Teak", "Oak", "Walnut", "Mahogany", "Ash"] },
  { label: "Finish", values: ["Natural oil", "Matt lacquer", "Smoked", "Stained"] },
  { label: "Size", values: ["Standard", "Made to opening", "Oversized"] },
  { label: "Pattern", values: ["Plain", "Fluted", "Geometric", "Carved"] },
  { label: "Surface", values: ["Smooth", "Brushed", "Textured"] },
  { label: "Colour", values: ["Natural", "Charcoal", "Warm brown", "Ivory"] },
  { label: "Hardware", values: ["Brass", "Blackened steel", "Stainless"] },
  { label: "Design", values: ["Modern", "Heritage", "Contemporary"] },
];

export function Customiser() {
  const [selected, setSelected] = useState<Record<string, string>>(
    Object.fromEntries(options.map((o) => [o.label, o.values[0]!])) as Record<string, string>,
  );

  return (
    <section className="bg-bone px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <div>
          <Eyebrow>Customisation</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.04] font-light tracking-[-0.02em] text-forest-900">
            Your space.
            <br />
            Your material.
            <br />
            Your details.
          </h2>
          <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-slate">
            Almost nothing we make is a catalogue item. Set the variables below and we will
            develop drawings, samples and a quotation against them.
          </p>
          <Link
            to="/contact"
            data-cursor="link"
            className="eyebrow group mt-10 inline-flex items-center gap-3 bg-forest-800 px-8 py-4 text-ivory transition-colors hover:bg-teak-700"
          >
            Discuss a custom project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {options.map((opt) => (
            <div
              key={opt.label}
              className="grid gap-4 py-6 md:grid-cols-[minmax(0,160px)_minmax(0,1fr)] md:items-center"
            >
              <p className="spec text-[10px] text-ash">{opt.label}</p>
              <div className="flex flex-wrap gap-2">
                {opt.values.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelected((s) => ({ ...s, [opt.label]: v }))}
                    data-cursor="link"
                    className={cn(
                      "spec border px-4 py-2 text-[10px] transition-colors duration-300",
                      selected[opt.label] === v
                        ? "border-forest-800 bg-forest-800 text-ivory"
                        : "border-ink/15 text-slate hover:border-teak-700 hover:text-teak-700",
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
