import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/wt/Hero";
import { Loader } from "@/components/wt/Loader";
import { Marquee } from "@/components/wt/Marquee";
import { MaterialLab } from "@/components/wt/MaterialLab";
import { CraftTimeline } from "@/components/wt/CraftTimeline";
import { FeatureProject } from "@/components/wt/FeatureProject";
import { CollectionGrid } from "@/components/wt/CollectionGrid";
import { ProjectGallery } from "@/components/wt/ProjectGallery";
import { SpecSheet } from "@/components/wt/SpecSheet";
import { Customiser } from "@/components/wt/Customiser";
import {
  ButtonLink,
  ClipReveal,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/wt/primitives";
import { collections } from "@/data/collections";
import wood from "@/assets/mat-wood.jpg";

const title = "WOODTEK — Architectural Wood & Interior Surfaces Studio";
const description =
  "Architectural wood, natural stone veneer, louvers and custom interior surfaces. Crafted in solid wood, designed for life.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Hero />

      {/* Approach */}
      <Section className="bg-ivory">
        <div className="mx-auto grid max-w-[1600px] items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <div>
            <Reveal>
              <Eyebrow>The Woodtek Approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 max-w-2xl font-display text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.02] font-light tracking-[-0.025em] text-forest-900">
                Where material becomes architecture.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-10 max-w-lg text-[17px] leading-relaxed text-graphite">
                Woodtek combines natural materials, precision fabrication and traditional
                craftsmanship to create architectural elements that bring warmth, texture and
                character to contemporary interiors.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex gap-10 border-t border-ink/10 pt-8">
                {[
                  ["08", "Collections"],
                  ["25+", "Finishes"],
                  ["01", "Studio"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-4xl font-light text-forest-900">{n}</p>
                    <p className="spec mt-2 text-[10px] text-ash">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <ClipReveal>
              <div className="grain aspect-[4/5]">
                <img
                  src={wood}
                  alt="Macro detail of natural teak grain"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </ClipReveal>
            <div
              className="absolute -left-6 top-0 hidden h-full w-px bg-ink/10 lg:block"
              aria-hidden="true"
            >
              {[0, 25, 50, 75, 100].map((t) => (
                <span
                  key={t}
                  className="absolute -left-2 h-px w-4 bg-ink/20"
                  style={{ top: `${t}%` }}
                />
              ))}
            </div>
            <p className="spec mt-5 text-[10px] text-ash">Fig. 01 — Teak, quarter sawn</p>
          </div>
        </div>
      </Section>

      <Marquee />

      {/* Collection */}
      <Section className="bg-ivory">
        <div className="mx-auto mb-20 flex max-w-[1600px] flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="The Collection"
            title="Materials selected for spaces with character."
          />
          <ButtonLink to="/collections" variant="outline">
            All collections
          </ButtonLink>
        </div>
        <CollectionGrid items={collections.slice(0, 4)} />
      </Section>

      <MaterialLab />

      {/* Selected spaces */}
      <Section className="bg-ivory">
        <div className="mx-auto mb-20 flex max-w-[1600px] flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Spaces"
            title="Interiors built around their materials."
          />
          <ButtonLink to="/projects" variant="outline">
            All projects
          </ButtonLink>
        </div>
        <ProjectGallery limit={3} />
      </Section>

      <FeatureProject />
      <CraftTimeline />
      <Customiser />
      <SpecSheet />

      {/* Enquiry teaser */}
      <section className="bg-forest-950 px-6 py-32 text-ivory md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <Eyebrow tone="light">Start a project</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.98] font-light tracking-[-0.03em]">
              Let's build something worth remembering.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-ivory/15 pt-8">
              <ButtonLink to="/contact" variant="light">
                Send an enquiry
              </ButtonLink>
              <Link
                to="/materials"
                data-cursor="link"
                className="eyebrow link-underline text-[10px] text-ivory/60"
              >
                Or browse the material library
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
