import { marqueeWords } from "@/data/site";
import { cn } from "@/lib/utils";

export function Marquee({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const items = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <div
      className={cn(
        "overflow-hidden border-y py-8",
        tone === "dark" ? "border-ink/10 bg-bone" : "border-ivory/12 bg-forest-950",
        className,
      )}
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10">
            <span
              className={cn(
                "font-display text-[clamp(1.6rem,3.4vw,3rem)] font-light tracking-[-0.01em]",
                tone === "dark" ? "text-forest-900/85" : "text-ivory/85",
              )}
            >
              {word}
            </span>
            <span className="text-brass-500">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
