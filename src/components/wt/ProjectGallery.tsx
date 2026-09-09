import { projects } from "@/data/projects";
import { ClipReveal, Reveal, Tag } from "./primitives";

export function ProjectGallery({
  limit,
  items = projects,
}: {
  limit?: number;
  items?: typeof projects;
}) {
  const list = limit ? items.slice(0, limit) : items;
  const [lead, ...rest] = list;

  return (
    <div className="mx-auto max-w-[1600px]">
      {lead && <ProjectFigure project={lead} size="lead" />}

      <div className="mt-24 grid gap-x-10 gap-y-24 md:grid-cols-12">
        {rest.map((p, i) => (
          <div
            key={p.id}
            className={
              i % 3 === 0
                ? "md:col-span-7"
                : i % 3 === 1
                  ? "md:col-span-5 md:mt-28"
                  : "md:col-span-6 md:col-start-4"
            }
          >
            <ProjectFigure project={p} size="normal" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectFigure({
  project,
  size,
}: {
  project: (typeof projects)[number];
  size: "lead" | "normal";
}) {
  return (
    <figure className="group" data-cursor="explore">
      <ClipReveal>
        <div className={size === "lead" ? "grain aspect-[16/9]" : "grain aspect-[4/5]"}>
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>
      </ClipReveal>

      <figcaption className="mt-6 border-t border-ink/10 pt-5">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h3
              className={
                size === "lead"
                  ? "font-display text-[clamp(2rem,5vw,3.75rem)] leading-tight font-light tracking-[-0.02em] text-forest-900"
                  : "font-display text-3xl leading-tight font-light tracking-[-0.01em] text-forest-900"
              }
            >
              {project.title}
            </h3>
            <p className="spec text-[10px] text-ash">
              {project.location} — {project.year}
            </p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">{project.note}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.materials.map((m) => (
              <Tag key={m}>{m}</Tag>
            ))}
          </div>
        </Reveal>
      </figcaption>
    </figure>
  );
}
