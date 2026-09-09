import { Eyebrow, Reveal } from "./primitives";

const rows = [
  { label: "Material", value: "Natural solid wood" },
  { label: "Finish", value: "Natural / Teak / Walnut" },
  { label: "Format", value: "1200 × 2400 mm" },
  { label: "Substrate", value: "6 mm MDF press / 16 mm particle board" },
  { label: "Layers", value: "10 × 2.7 mm — 25–30 mm overall" },
  { label: "Louver module", value: "152 × 2896 mm" },
  { label: "Application", value: "Architectural interiors" },
  { label: "Lead time", value: "4 – 8 weeks, project dependent" },
];

export function SpecSheet() {
  return (
    <section className="border-y border-ink/10 bg-ivory px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Eyebrow>Specification</Eyebrow>
          <p className="spec text-[10px] text-ash">Sheet 01 / Rev A</p>
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-0 border-t border-ink/15 md:grid-cols-2">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.04}>
              <div className="grid grid-cols-[minmax(0,140px)_minmax(0,1fr)] gap-6 border-b border-ink/10 py-6">
                <dt className="spec text-[10px] text-ash">{r.label}</dt>
                <dd className="spec text-[11px] text-graphite">{r.value}</dd>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flute-rule mt-12 h-10 opacity-60" aria-hidden="true" />
      </div>
    </section>
  );
}
