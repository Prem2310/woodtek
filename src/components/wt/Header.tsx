import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import wordmark from "@/assets/woodtek-wordmark.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverse = overHero && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-ink/10 bg-ivory/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto grid h-[76px] max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:px-10 lg:px-16">
          <Link to="/" aria-label="WOODTEK home" className="min-w-0 shrink-0">
            <img
              src={wordmark}
              alt="WOODTEK"
              width={165}
              height={26}
              className={cn(
                "h-[18px] w-auto transition-all duration-500 md:h-[22px]",
                inverse ? "brightness-0 invert" : "",
              )}
            />
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-8 lg:flex">
              {site.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  data-cursor="link"
                  className={cn(
                    "eyebrow link-underline text-[10px] transition-colors duration-200",
                    inverse ? "text-ivory/80 hover:text-ivory" : "text-slate hover:text-forest-900",
                  )}
                  activeProps={{
                    className: inverse ? "!text-ivory" : "!text-forest-900",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/contact"
              data-cursor="link"
              className={cn(
                "eyebrow hidden border px-6 py-3 text-[10px] transition-colors duration-300 md:inline-block",
                inverse
                  ? "border-ivory/35 text-ivory hover:border-brass-400 hover:text-brass-300"
                  : "border-ink/20 text-forest-900 hover:border-teak-700 hover:text-teak-700",
              )}
            >
              Enquire
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center lg:hidden",
                inverse ? "text-ivory" : "text-forest-900",
              )}
            >
              <span className="relative block h-3 w-6">
                <span className="absolute inset-x-0 top-0 h-px bg-current" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] bg-forest-950 px-6 py-6 text-ivory"
          >
            <div className="flex items-center justify-between">
              <img
                src={wordmark}
                alt="WOODTEK"
                width={165}
                height={26}
                className="h-[18px] w-auto brightness-0 invert"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="eyebrow text-[10px] text-ivory/70"
              >
                Close
              </button>
            </div>

            <nav className="mt-20 flex flex-col gap-2">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.6 }}
                >
                  <Link
                    to={item.to}
                    className="block border-b border-ivory/10 py-5 font-display text-4xl font-light tracking-[-0.02em]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute inset-x-6 bottom-8">
              <p className="spec text-[10px] text-ivory/45">{site.contact.email}</p>
              <p className="spec mt-2 text-[10px] text-ivory/45">{site.tagline}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
