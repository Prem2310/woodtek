import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/wt/Header";
import { Footer } from "@/components/wt/Footer";
import { Cursor } from "@/components/wt/Cursor";
import { ScrollProgress } from "@/components/wt/ScrollProgress";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-forest-950 px-6 text-ivory">
      <div className="max-w-md text-center">
        <p className="spec text-[10px] text-brass-400">404</p>
        <h1 className="mt-6 font-display text-5xl font-light tracking-[-0.02em]">
          This page isn't here.
        </h1>
        <p className="mt-4 text-sm text-ivory/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="eyebrow mt-10 inline-block border border-ivory/30 px-8 py-4 text-[10px] transition-colors hover:border-brass-400 hover:text-brass-300"
        >
          Back to Woodtek
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl font-light tracking-[-0.02em] text-forest-900">
          This page didn't load
        </h1>
        <p className="mt-4 text-sm text-slate">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="eyebrow bg-forest-800 px-8 py-4 text-[10px] text-ivory"
          >
            Try again
          </button>
          <a
            href="/"
            className="eyebrow border border-ink/20 px-8 py-4 text-[10px] text-forest-900"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "WOODTEK — Architectural Wood & Interior Surfaces" },
      {
        name: "description",
        content:
          "Woodtek crafts architectural wood, stone veneer and interior surfaces for luxury residential, hospitality and commercial projects.",
      },
      { name: "author", content: "Woodtek" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0C1710" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=IBM+Plex+Mono:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Cursor />
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
