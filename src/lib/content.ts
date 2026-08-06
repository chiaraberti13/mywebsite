/** Utility per leggere le Content Collections filtrate per lingua. */
import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/config/site";

/** Ricava lo slug pulito da un id tipo "it/security-lab" -> "security-lab". */
export function slugOf(id: string): string {
  const parts = id.split("/");
  return parts[parts.length - 1];
}

/* ─────────────────────────────────────────────────────────────
 *  CATEGORIE PROGETTI (filtri rapidi)
 *  Unica fonte di verità: 4 macro-categorie + mappa progetto→categorie.
 *  Per aggiungere/ricategorizzare un progetto basta modificare qui,
 *  usando lo slug (nome del file .md senza estensione).
 * ───────────────────────────────────────────────────────────── */
export const PROJECT_CATEGORIES = [
  { key: "cybersecurity", it: "Cybersecurity", en: "Cybersecurity" },
  { key: "automazione", it: "Automazione", en: "Automation" },
  { key: "pentesting", it: "Pentesting", en: "Pentesting" },
  { key: "algoritmi", it: "Algoritmi", en: "Algorithms" },
] as const;

export type ProjectCategoryKey = (typeof PROJECT_CATEGORIES)[number]["key"];

const CATEGORY_BY_SLUG: Record<string, ProjectCategoryKey[]> = {
  "osi-cyber-explorer": ["cybersecurity"],
  "vulnerability-assessment-platform": ["pentesting", "cybersecurity"],
  "tetra-ear": ["pentesting", "cybersecurity"],
  "comptia-security-plus": ["cybersecurity"],
  "pdf-datasheet-generator": ["automazione"],
  "pris-mea": ["automazione"],
  "rfnm-sdrpp-setup": ["automazione"],
  "barcode-eps-generator": ["algoritmi"],
  "php-image-converter": ["algoritmi"],
};

/** Categorie di un progetto dal suo slug (vuoto se non mappato). */
export function categoriesOf(slug: string): ProjectCategoryKey[] {
  return CATEGORY_BY_SLUG[slug] ?? [];
}

/** Etichetta localizzata di una categoria. */
export function categoryLabel(key: string, lang: Locale): string {
  const c = PROJECT_CATEGORIES.find((x) => x.key === key);
  return c ? c[lang] : key;
}

export async function getProjects(lang: Locale): Promise<CollectionEntry<"projects">[]> {
  const items = await getCollection("projects", (e) => e.data.lang === lang);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeaturedProjects(lang: Locale): Promise<CollectionEntry<"projects">[]> {
  return (await getProjects(lang)).filter((p) => p.data.featured);
}

export async function getJournal(lang: Locale): Promise<CollectionEntry<"journal">[]> {
  const items = await getCollection(
    "journal",
    (e) => e.data.lang === lang && e.data.draft !== true,
  );
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLongform(
  lang: Locale,
  page: string,
): Promise<CollectionEntry<"longform"> | undefined> {
  const items = await getCollection(
    "longform",
    (e) => e.data.lang === lang && e.data.page === page,
  );
  return items[0];
}
