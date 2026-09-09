import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import wordmark from "@/assets/woodtek-wordmark.png";

const KEY = "woodtek-entered";

export function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(KEY)) return;
    setVisible(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem(KEY, "1");
      setVisible(false);
      document.body.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-forest-950"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.img
            src={wordmark}
            alt="WOODTEK"
            width={165}
            height={26}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ y: -28, opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 0.84, 0.44, 1] }}
            className="h-6 w-auto brightness-0 invert md:h-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="eyebrow mt-6 text-[9px] text-ivory/45"
          >
            Architectural Materials / Craft / Design
          </motion.p>
          <div className="mt-10 h-px w-40 overflow-hidden bg-ivory/15 md:w-64">
            <motion.div
              className="h-full bg-brass-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.1, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
