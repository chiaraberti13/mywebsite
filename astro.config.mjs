// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Sito statico, bilingue (IT default, EN secondario).
// Nessun adapter: build 100% statica -> minima superficie d'attacco.
// Il modulo contatti gira come Vercel Serverless Function in /api (fuori da Astro).
export default defineConfig({
  site: "https://www.chiaraberti.cloud",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Prefetch dei link al passaggio del mouse: la navigazione tra pagine
  // diventa pressoché istantanea. Resta compatibile con la CSP (`connect-src 'self'`).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "it",
        locales: { it: "it-IT", en: "en-US" },
      },
    }),
  ],
  // Content-Security-Policy nativa: Astro calcola gli hash di TUTTI gli
  // script/style inline che genera e li inserisce in un <meta> CSP.
  // Così non serve mantenere hash a mano quando modifichi i contenuti.
  experimental: {
    csp: {
      algorithm: "SHA-256",
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "manifest-src 'self'",
      ],
    },
  },
  build: {
    // asset con hash -> cache-busting sicuro
    assets: "_assets",
  },
});
