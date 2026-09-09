import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { collections } from "@/data/collections";
import logoReverse from "@/assets/woodtek-logo-full-reverse.png";

export function Footer() {
  return (
    <footer className="bg-forest-950 px-6 pt-24 pb-10 text-ivory md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 border-b border-ivory/12 pb-20 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img
              src={logoReverse}
              alt="WOODTEK"
              width={220}
              height={80}
              loading="lazy"
              className="h-14 w-auto"
            />
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-ivory/55">
              {site.positioning}. Architectural products and interior surfaces for residential,
              hospitality and commercial projects.
            </p>
          </div>

          <div>
            <p className="eyebrow text-[10px] text-ivory/40">Navigate</p>
            <ul className="mt-6 space-y-3">
              {site.nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="link-underline text-sm text-ivory/75 hover:text-ivory"
                    data-cursor="link"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[10px] text-ivory/40">Collections</p>
            <ul className="mt-6 space-y-3">
              {collections.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    to="/collections"
                    hash={c.id}
                    className="link-underline text-sm text-ivory/75 hover:text-ivory"
                    data-cursor="link"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[10px] text-ivory/40">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li>{site.contact.email}</li>
              <li>{site.contact.phone}</li>
              {site.contact.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-4">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="spec text-[10px] text-ivory/50 hover:text-brass-300"
                    data-cursor="link"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="py-16 text-center font-display text-[clamp(1.6rem,5vw,4rem)] leading-none font-light tracking-[-0.02em] text-ivory/90">
          Crafted in Solid Wood <span className="text-brass-400">•</span> Designed for Life
        </p>

        <div className="flex flex-col gap-3 border-t border-ivory/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="spec text-[10px] text-ivory/35">
            © {new Date().getFullYear()} Woodtek. All rights reserved.
          </p>
          <p className="spec text-[10px] text-ivory/35">
            Architectural Materials / Craft / Design
          </p>
        </div>
      </div>
    </footer>
  );
}
