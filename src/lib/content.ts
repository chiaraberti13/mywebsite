/** Utility per leggere le Content Collections filtrate per lingua. */
import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/config/site";

/** Ricava lo slug pulito da un id tipo "it/security-lab" -> "security-lab". */
export function slugOf(id: string): string {
  const parts = id.split("/");
  return parts[parts.length - 1];
}

/* Macro-categorie professionali usate nei filtri della pagina progetti.
 * La categoria effettiva vive nel frontmatter di ciascun progetto, così
 * contenuto, card e filtri condividono la stessa fonte di verità.
 */
export const PROJECT_CATEGORIES = [
  { key: "cybersecurity", it: "Cybersecurity", en: "Cybersecurity" },
  {
    key: "interactive-labs",
    it: "Laboratori interattivi",
    en: "Interactive labs",
  },
  { key: "sdr-radio", it: "SDR e radio", en: "SDR & radio" },
  {
    key: "automation-utilities",
    it: "Automazione e utility",
    en: "Automation & utilities",
  },
  {
    key: "professional-work",
    it: "Progetti professionali",
    en: "Professional work",
  },
] as const;

export type ProjectCategoryKey = (typeof PROJECT_CATEGORIES)[number]["key"];

/** Etichetta localizzata di una categoria. */
export function categoryLabel(key: string, lang: Locale): string {
  const category = PROJECT_CATEGORIES.find((item) => item.key === key);
  return category ? category[lang] : key;
}

export async function getProjects(lang: Locale): Promise<CollectionEntry<"projects">[]> {
  const items = await getCollection("projects", (entry) => entry.data.lang === lang);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeaturedProjects(lang: Locale): Promise<CollectionEntry<"projects">[]> {
  return (await getProjects(lang)).filter((project) => project.data.featured);
}

export async function getJournal(lang: Locale): Promise<CollectionEntry<"journal">[]> {
  const items = await getCollection(
    "journal",
    (entry) => entry.data.lang === lang && entry.data.draft !== true,
  );
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLongform(
  lang: Locale,
  page: string,
): Promise<CollectionEntry<"longform"> | undefined> {
  const items = await getCollection(
    "longform",
    (entry) => entry.data.lang === lang && entry.data.page === page,
  );
  return items[0];
}
