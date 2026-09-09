import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/wt/PageHeader";
import { CraftTimeline } from "@/components/wt/CraftTimeline";
import { Marquee } from "@/components/wt/Marquee";
import {
  ButtonLink,
  ClipReveal,
  Eyebrow,
  Reveal,
  Section,
} from "@/components/wt/primitives";
import about from "@/assets/about.jpg";
import wood from "@/assets/mat-wood.jpg";

const title = "About — WOODTEK Studio";
const description =
  "Crafted in solid wood, designed for life. Woodtek is a studio for architectural materials, precision fabrication and custom interior craftsmanship.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    t: "Material",
    b: "We buy timber and stone by the batch and keep it until it is ready, because the material sets the ceiling on the work.",
  },
  {
    t: "Craft",
    b: "Machines give us accuracy. Hands give us the edges, the shadow lines and the joints that people actually touch.",
  },
  {
    t: "Precision",
    b: "Every element is drawn, sampled and approved before fabrication, then measured again on site.",
  },
  {
    t: "Architecture",
    b: "We work from the architect's intent — proportion, rhythm and light — rather than from a product catalogue.",
  },
  {
    t: "Customisation",
    b: "Species, finish, module, pattern and hardware are variables, not fixed options.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Woodtek"
        title={
          <>
            Crafted in solid wood.
            <br />
            Designed for life.
          </>
        }
        intro="Woodtek creates premium architectural products and interior surfaces for luxury residential, hospitality and commercial projects."
        meta="Studio / Workshop / Site"
      />

      <Section className="bg-ivory">
        <div className="mx-auto max-w-[1600px]">
          <ClipReveal>
            <div className="grain aspect-[16/9]">
              <img
                src={about}
                alt="Woodtek workshop with stacked timber and hand tools"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </ClipReveal>
        </div>
      </Section>

      <Section className="bg-ivory pt-0">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)]">
          <div>
            <Reveal>
              <Eyebrow>The Studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.04] font-light tracking-[-0.02em] text-forest-900">
                Five things we refuse to compromise.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="outline">
                  Work with us
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <ol className="border-t border-ink/15">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <li className="grid gap-4 border-b border-ink/10 py-8 md:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
                  <h3 className="font-display text-2xl font-light text-forest-900">{p.t}</h3>
                  <p className="max-w-lg text-sm leading-relaxed text-slate">{p.b}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Marquee />
      <CraftTimeline />

      <Section className="bg-bone">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-2">
          <ClipReveal>
            <div className="grain aspect-[4/3]">
              <img
                src={wood}
                alt="Macro detail of oiled teak grain"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </ClipReveal>
          <div>
            <Reveal>
              <p className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] font-light tracking-[-0.02em] text-forest-900">
                “We are not selling wood. We are making the surfaces a building will be
                remembered by.”
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="spec mt-8 text-[10px] text-ash">Woodtek Studio</p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
