import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ButtonLink } from "./primitives";
import hero from "@/assets/hero.jpg";

const lines = ["Materials that", "shape space."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-forest-950">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 0.84, 0.44, 1] }}
      >
        <img
          src={hero}
          alt="Architectural entrance hall in solid teak and natural stone"
          width={1920}
          height={1200}
          className="h-[112%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/25 to-forest-950/45" />
      </motion.div>

      <div className="grain absolute inset-0" aria-hidden="true" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20 lg:px-16"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="eyebrow flex items-center gap-3 text-[10px] text-ivory/65"
          >
            <span className="inline-block h-px w-8 bg-brass-400" />
            Architectural Materials / Custom Craftsmanship
          </motion.p>

          <h1 className="mt-8 font-display text-[clamp(3rem,11vw,9.5rem)] leading-[0.94] font-light tracking-[-0.03em] text-ivory">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.85 + i * 0.14,
                    duration: 1.1,
                    ease: [0.16, 0.84, 0.44, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="mt-10 flex flex-col gap-8 border-t border-ivory/15 pt-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-[17px] leading-relaxed text-ivory/70">
              Natural wood, stone and architectural surfaces crafted for distinctive interiors.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/collections" variant="solid">
                Explore Collection
              </ButtonLink>
              <ButtonLink to="/contact" variant="light">
                Start a Project
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
