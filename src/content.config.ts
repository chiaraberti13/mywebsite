/**
 * Content Collections (Astro 5 — Content Layer API).
 * I contenuti "lunghi" (progetti, articoli, lettera, privacy) sono file
 * Markdown validati da schemi Zod: aggiungere/modificare un file .md
 * aggiorna automaticamente il sito.  Il campo `lang` separa IT/EN.
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const langField = z.enum(["it", "en"]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang: langField,
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    /** Stato dichiarato del progetto, mostrato nelle card e nel dettaglio */
    status: z.enum(["production", "complete", "beta", "lab"]).optional(),
    /** Immagine di copertina opzionale (percorso in /public, es. "/projects/foo.jpg") */
    cover: z.string().optional(),
    /** Link alle piattaforme: mostrati come badge sulla card */
    links: z
      .object({
        github: z.string().url().optional(),
        live: z.string().url().optional(),
        behance: z.string().url().optional(),
        x: z.string().url().optional(),
        instagram: z.string().url().optional(),
      })
      .default({}),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: langField,
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** Pagine long-form uniche per lingua: cover-letter, privacy */
const longform = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/longform" }),
  schema: z.object({
    title: z.string(),
    lang: langField,
    /** identificatore stabile della pagina: "cover-letter" | "privacy" */
    page: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { projects, journal, longform };
