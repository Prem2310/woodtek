import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

/* ---------- Eyebrow ---------- */
export function Eyebrow({
  children,
  className,
  rule = true,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  rule?: boolean;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        tone === "dark" ? "text-slate" : "text-ivory/70",
        className,
      )}
    >
      {rule && (
        <span className="inline-block h-px w-8 shrink-0 bg-brass-500" aria-hidden="true" />
      )}
      {children}
    </span>
  );
}

/* ---------- Rule ---------- */
export function Rule({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <hr
      className={cn(
        "h-px w-full border-0",
        tone === "dark" ? "bg-ink/10" : "bg-ivory/15",
        className,
      )}
    />
  );
}

/* ---------- Reveal ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Clip reveal for images ---------- */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={inView ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Buttons ---------- */
type BtnVariant = "solid" | "outline" | "ghost" | "light";

const btnBase =
  "eyebrow group inline-flex items-center justify-center gap-3 px-8 py-4 transition-colors duration-200 rounded-none";

const btnVariants: Record<BtnVariant, string> = {
  solid: "bg-forest-800 text-ivory hover:bg-teak-700",
  outline: "border border-ink/25 text-ink hover:border-teak-700 hover:text-teak-700",
  light: "border border-ivory/30 text-ivory hover:border-brass-400 hover:text-brass-300",
  ghost: "text-ink hover:text-teak-700 px-0 py-2",
};

export function ButtonLink({
  to,
  variant = "solid",
  className,
  children,
  ...rest
}: { to: string; variant?: BtnVariant; className?: string; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "className" | "children"
>) {
  return (
    <Link
      to={to}
      className={cn(btnBase, btnVariants[variant], className)}
      data-cursor="link"
      {...rest}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export function Button({
  variant = "solid",
  className,
  children,
  withArrow = true,
  ...rest
}: {
  variant?: BtnVariant;
  withArrow?: boolean;
} & ComponentProps<"button">) {
  return (
    <button
      className={cn(btnBase, btnVariants[variant], className)}
      data-cursor="link"
      {...rest}
    >
      {children}
      {withArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </button>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-6 font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.05] font-light tracking-[-0.02em]",
            tone === "dark" ? "text-forest-900" : "text-ivory",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 max-w-xl text-[17px] leading-relaxed",
              align === "center" && "mx-auto",
              tone === "dark" ? "text-slate" : "text-ivory/70",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Tag ---------- */
export function Tag({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "spec border px-3 py-1.5 text-[10px]",
        tone === "dark" ? "border-ink/15 text-slate" : "border-ivory/25 text-ivory/70",
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-24 md:px-10 md:py-32 lg:px-16", className)}>
      {children}
    </section>
  );
}
