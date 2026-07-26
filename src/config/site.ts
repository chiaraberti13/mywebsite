/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURAZIONE GLOBALE DEL SITO
 * ─────────────────────────────────────────────────────────────
 *  Questo è il file principale da modificare per personalizzare
 *  dati anagrafici, contatti, social e le sezioni visibili.
 *  Non serve toccare i componenti: cambia solo qui.
 * ─────────────────────────────────────────────────────────────
 */

export type Locale = "it" | "en";

export interface SocialLink {
  /** Nome della piattaforma (usato come etichetta e per l'icona) */
  platform:
    | "github"
    | "linkedin"
    | "instagram"
    | "x"
    | "behance"
    | "telegram"
    | "email";
  /** URL completo (per email usare mailto:) */
  url: string;
  /** Handle mostrato all'utente, es. "@chiaraberti13" */
  handle: string;
}

export const site = {
  /** Dominio di produzione (usato per SEO / canonical) */
  url: "https://www.chiaraberti.cloud",

  /** Nome completo */
  name: "Chiara Berti",

  /** Iniziali per logo/favicon testuale */
  initials: "CB",

  /** Lingua di default */
  defaultLocale: "it" as Locale,
  locales: ["it", "en"] as Locale[],

  /** Contatti diretti — AGGIORNARE se cambiano */
  email: "chiaraberti13@icloud.com",
  phone: "+39 340 79 96 597",
  location: "Italia",

  /**
   * Social & piattaforme per la presentazione dei progetti.
   * Rimuovi o aggiungi voci liberamente: l'interfaccia si adatta.
   * NB: gli handle qui sotto provengono dal vecchio sito — VERIFICARE.
   */
  socials: [
    { platform: "github", url: "https://github.com/chiaraberti13", handle: "@chiaraberti13" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/chiaraberti13", handle: "@chiaraberti13" },
    { platform: "x", url: "https://x.com/SocratesSatoshi", handle: "@SocratesSatoshi" },
    { platform: "instagram", url: "https://instagram.com/chiaraberti_13", handle: "@chiaraberti_13" },
    { platform: "behance", url: "https://www.behance.net/chiaraberti", handle: "Behance" },
    { platform: "telegram", url: "https://t.me/chiaraberti13", handle: "@chiaraberti13" },
    { platform: "email", url: "mailto:chiaraberti13@icloud.com", handle: "chiaraberti13@icloud.com" },
  ] satisfies SocialLink[],

  /**
   * Sezioni attivabili/disattivabili senza toccare il codice.
   */
  features: {
    journal: true, // blog / articoli
    coverLetter: true, // lettera di presentazione
    cvDownload: true, // pulsante "Scarica CV (PDF)"
  },

  /** Percorso del CV scaricabile (mettere il file in /public) */
  cvFile: "/cv-chiara-berti.pdf",
} as const;

export type Site = typeof site;
