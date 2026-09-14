import type { APIRoute } from "astro";
import { site } from "@/config/site";

/**
 * ─────────────────────────────────────────────────────────────
 *  /.well-known/security.txt  —  RFC 9116
 * ─────────────────────────────────────────────────────────────
 *
 *  COS'È. Un file di testo in una posizione standard che dice a chi trova
 *  una vulnerabilità dove segnalarla. È lo stesso principio del citofono:
 *  senza, un ricercatore che scopre un problema deve indovinare a chi
 *  scrivere — e spesso finisce per non scriverlo affatto, o per pubblicarlo.
 *
 *  PERCHÉ COME ENDPOINT E NON COME FILE STATICO IN /public.
 *  Il campo `Expires` è OBBLIGATORIO nella RFC, e un security.txt scaduto
 *  vale meno di nessun security.txt: segnala un canale non più presidiato.
 *  Scritto a mano in /public, andrebbe ricordato e aggiornato a mano.
 *  Generandolo qui, la scadenza viene ricalcolata a ogni build: finché il
 *  sito viene ridistribuito, il file resta valido da solo.
 *
 *  Il canale di segnalazione è quello già dichiarato in SECURITY.md
 *  (GitHub Security Advisories): nessun canale nuovo, nessun contenuto
 *  inventato — solo la stessa informazione resa trovabile dalle macchine.
 *
 *  Verificabile su https://securitytxt.org/
 */

const POLICY_URL =
  "https://github.com/chiaraberti13/mywebsite/blob/main/SECURITY.md";
const ADVISORIES_URL =
  "https://github.com/chiaraberti13/mywebsite/security/advisories/new";

/** Data di build + 1 anno, normalizzata al secondo (formato ISO 8601). */
function expiresAt(): string {
  const d = new Date();
  d.setUTCFullYear(d.getUTCFullYear() + 1);
  d.setUTCMilliseconds(0);
  return d.toISOString().replace(".000", "");
}

export const GET: APIRoute = () => {
  const body = [
    "# Canale di segnalazione vulnerabilita' per " + site.url,
    "# Vulnerability disclosure channel for " + site.url,
    "",
    `Contact: ${ADVISORIES_URL}`,
    `Contact: mailto:${site.email}`,
    `Expires: ${expiresAt()}`,
    "Preferred-Languages: it, en",
    `Canonical: ${new URL("/.well-known/security.txt", site.url).href}`,
    `Policy: ${POLICY_URL}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
