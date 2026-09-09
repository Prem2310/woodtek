import { useEffect, useState } from "react";

type Mode = "default" | "link" | "view" | "explore";

const labels: Record<Mode, string> = {
  default: "",
  link: "",
  view: "View",
  explore: "Explore",
};

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]") as
        | HTMLElement
        | undefined;
      const next = (target?.dataset["cursor"] as Mode | undefined) ?? "default";
      setMode(next);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  const big = mode === "view" || mode === "explore";
  const size = big ? 92 : mode === "link" ? 34 : 12;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className="eyebrow flex items-center justify-center rounded-full border border-ivory/70 text-[9px] text-ivory transition-all duration-300 ease-out"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor: big ? "rgba(27,51,32,0.75)" : "rgba(251,248,243,0.85)",
          backdropFilter: big ? "blur(2px)" : undefined,
        }}
      >
        {labels[mode]}
      </div>
    </div>
  );
}
