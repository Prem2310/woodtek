import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/wt/PageHeader";
import { MaterialLab } from "@/components/wt/MaterialLab";
import { Customiser } from "@/components/wt/Customiser";
import { SpecSheet } from "@/components/wt/SpecSheet";
import { Section, Reveal, Eyebrow } from "@/components/wt/primitives";
import { materials } from "@/data/materials";

const title = "Materials — WOODTEK Material Library";
const description =
  "Explore Woodtek's material library: solid timber, natural stone veneer, fluted louvers, pressed panels and finishes, with full specifications.";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Material Library"
        title="Touch the material."
        intro="Wood, stone, louver, panel and finish. Hover or tap any swatch to bring its surface and specification forward."
        meta={`${materials.length} swatches / 5 categories`}
      />

      <MaterialLab />

      <Section className="bg-ivory">
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-3">
          {[
            {
              t: "Sampling",
              b: "Physical samples are cut from the same batch that will be supplied, so what you approve is what arrives.",
            },
            {
              t: "Tolerance",
              b: "Sheet goods are supplied to nominal size with cut-to-size available; solid timber is dimensioned on site.",
            },
            {
              t: "Care",
              b: "Oiled surfaces are refreshed annually; laminates and WPC need nothing beyond a damp cloth.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="border-t border-ink/15 pt-6">
                <Eyebrow rule={false}>{c.t}</Eyebrow>
                <p className="mt-4 text-sm leading-relaxed text-slate">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Customiser />
      <SpecSheet />
    </>
  );
}
