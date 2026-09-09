import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed inset-x-0 top-0 z-[70] h-px bg-brass-500"
    />
  );
}
