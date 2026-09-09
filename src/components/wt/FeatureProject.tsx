import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ButtonLink } from "./primitives";
import feature from "@/assets/feature-residence.jpg";

export function FeatureProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      data-cursor="explore"
      className="relative h-[110svh] min-h-[600px] w-full overflow-hidden bg-forest-950"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={feature}
          alt="Contemporary residence with timber entrance and stone wall at dusk"
          width={1920}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/45" />
      </motion.div>
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex h-full items-end px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="spec text-[10px] text-ivory/65">Residence / Ahmedabad</p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.98] font-light tracking-[-0.03em] text-ivory">
            Material becomes atmosphere.
          </h2>
          <div className="mt-10">
            <ButtonLink to="/projects" variant="light">
              View Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
