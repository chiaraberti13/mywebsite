/** Utility per leggere le Content Collections filtrate per lingua. */
import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/config/site";

/** Ricava lo slug pulito da un id tipo "it/security-lab" -> "security-lab". */
export function slugOf(id: string): string {
  const parts = id.split("/");
  return parts[parts.length - 1];
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
