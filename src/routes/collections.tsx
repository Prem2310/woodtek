import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/wt/PageHeader";
import { CollectionGrid } from "@/components/wt/CollectionGrid";
import { Marquee } from "@/components/wt/Marquee";
import { Section } from "@/components/wt/primitives";
import { SpecSheet } from "@/components/wt/SpecSheet";
import { collections } from "@/data/collections";
import { cn } from "@/lib/utils";

const title = "Collections — WOODTEK Architectural Materials";
const description =
  "Eight Woodtek collections: solid wood doors, natural stone veneer, charcoal louvers, laminate panels, layered wall art, pre-laminated board, WPC doors and handmade swings.";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CollectionsPage,
});

const filters = ["All", "Doors", "Surfaces", "Panels", "Objects"];

const groupOf: Record<string, string> = {
  "solid-wood-doors": "Doors",
  "wpc-pvc-doors": "Doors",
  "natural-stone-veneer": "Surfaces",
  "laminate-mdf-press": "Surfaces",
  "charcoal-louvers": "Panels",
  "layered-wall-art": "Panels",
  "pre-laminated-particle-board": "Surfaces",
  "solid-wood-swings": "Objects",
};

function CollectionsPage() {
  const [filter, setFilter] = useState("All");
  const list =
    filter === "All" ? collections : collections.filter((c) => groupOf[c.id] === filter);

  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Materials selected for spaces with character."
        intro="Eight collections, each made to order and detailed against the drawing. Select any collection to see its full specification."
        meta="08 Collections / Made to order"
      />

      <Section className="bg-ivory">
        <div className="mx-auto mb-16 flex max-w-[1600px] flex-wrap gap-x-8 gap-y-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor="link"
              className={cn(
                "eyebrow text-[10px] transition-opacity duration-300",
                filter === f ? "text-forest-900" : "text-ash hover:text-slate",
              )}
            >
              {f}
              {filter === f && <span className="ml-2 inline-block h-px w-6 bg-brass-500" />}
            </button>
          ))}
        </div>
        <CollectionGrid items={list} />
      </Section>

      <Marquee />
      <SpecSheet />
    </>
  );
}
