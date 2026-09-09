import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/wt/PageHeader";
import { ProjectGallery } from "@/components/wt/ProjectGallery";
import { FeatureProject } from "@/components/wt/FeatureProject";
import { Section } from "@/components/wt/primitives";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

const title = "Selected Spaces — WOODTEK Projects";
const description =
  "Residences, villas, restaurants, workplaces and retail interiors built around Woodtek timber, stone and surface work.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [category, setCategory] = useState("All");
  const filtered =
    category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <>
      <PageHeader
        eyebrow="Selected Spaces"
        title="Interiors built around their materials."
        intro="A selection of residential, hospitality, workplace and retail commissions. Project names and locations shown here are placeholders."
        meta={`${projects.length} projects / 2024 — 2025`}
      />

      <Section className="bg-ivory">
        <div className="mx-auto mb-16 flex max-w-[1600px] flex-wrap gap-x-8 gap-y-3">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              data-cursor="link"
              className={cn(
                "eyebrow text-[10px] transition-opacity duration-300",
                category === c ? "text-forest-900" : "text-ash hover:text-slate",
              )}
            >
              {c}
              {category === c && <span className="ml-2 inline-block h-px w-6 bg-brass-500" />}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <ProjectGallery key={category} items={filtered} />
        ) : (
          <p className="spec mx-auto max-w-[1600px] text-[11px] text-ash">
            No projects in this category yet.
          </p>
        )}
      </Section>

      <FeatureProject />
    </>
  );
}
