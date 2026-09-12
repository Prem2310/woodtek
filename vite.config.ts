// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Every route is static content (no loaders/server functions), so render
    // all pages to HTML at build time instead of on each request.
    // Disabled on Netlify: its Nitro preset writes the server to
    // .netlify/functions-internal/server/, a location the Lovable plugin's
    // prerender preview-shim doesn't recognize (it only finds .output/server
    // or dist/server), so prerendering there crashes the whole build.
    prerender: {
      enabled: !process.env.NETLIFY,
      crawlLinks: true,
    },
  },
});
