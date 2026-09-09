import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "./primitives";

export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: string;
}) {
  return (
    <header className="border-b border-ink/10 px-6 pt-40 pb-16 md:px-10 md:pt-52 md:pb-24 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.96] font-light tracking-[-0.03em] text-forest-900">
            {title}
          </h1>
        </Reveal>
        {(intro || meta) && (
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-ink/10 pt-8">
              {intro && <p className="max-w-lg text-[17px] leading-relaxed text-slate">{intro}</p>}
              {meta && <p className="spec text-[10px] text-ash">{meta}</p>}
            </div>
          </Reveal>
        )}
      </div>
    </header>
  );
}
