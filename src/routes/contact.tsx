import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/wt/EnquiryForm";
import { Eyebrow, Reveal } from "@/components/wt/primitives";
import { site } from "@/data/site";

const title = "Contact — WOODTEK Project Enquiry";
const description =
  "Start a Woodtek project. Tell us about your space, materials and timeline and the studio will respond with drawings, samples and a quotation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-forest-950 px-6 pt-40 pb-32 text-ivory md:px-10 md:pt-52 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <Eyebrow tone="light">Project Enquiry</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.98] font-light tracking-[-0.03em]">
            Let's build something worth remembering.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 border-t border-ivory/15 pt-16 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal delay={0.12}>
            <EnquiryForm />
          </Reveal>

          <Reveal delay={0.2}>
            <aside className="space-y-10">
              <div>
                <p className="spec text-[10px] text-ivory/40">Studio</p>
                <ul className="mt-4 space-y-1 text-sm text-ivory/75">
                  {site.contact.address.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="spec text-[10px] text-ivory/40">Enquiries</p>
                <p className="mt-4 text-sm text-ivory/75">{site.contact.email}</p>
                <p className="text-sm text-ivory/75">{site.contact.phone}</p>
              </div>
              <div>
                <p className="spec text-[10px] text-ivory/40">Hours</p>
                <p className="mt-4 text-sm text-ivory/75">{site.contact.hours}</p>
              </div>
              <p className="spec text-[10px] leading-relaxed text-ivory/35 normal-case">
                Contact details shown are placeholders until the studio's real details are
                supplied.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
