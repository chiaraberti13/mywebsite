/**
 * ─────────────────────────────────────────────────────────────
 *  Serializzazione sicura dei dati strutturati (JSON-LD)
 * ─────────────────────────────────────────────────────────────
 *
 *  PROBLEMA.
 *  I blocchi <script type="application/ld+json"> vengono riempiti con
 *  `JSON.stringify(...)`. Quella funzione produce JSON valido, ma NON
 *  neutralizza i caratteri `<` e `>`: per il parser JSON sono caratteri
 *  qualunque dentro una stringa.
 *  Il parser HTML però non legge JSON: legge il flusso di testo e chiude il
 *  blocco alla prima sequenza `</script`. Basterebbe quindi che il titolo di
 *  un progetto o di un articolo contenesse quella sequenza perché tutto ciò
 *  che segue uscisse dal tag e venisse interpretato come HTML — è la via
 *  d'ingresso classica per un XSS che parte da un contenuto, non da un
 *  parametro di URL.
 *
 *  Oggi i valori arrivano tutti da file del repository, quindi il rischio è
 *  teorico. Ma è una difesa che costa cinque righe e continua a valere anche
 *  se un domani i dati arrivassero da un CMS o da un'API.
 *
 *  SOLUZIONE.
 *  I caratteri a rischio vengono riscritti come escape Unicode (`<`).
 *  Per il parser JSON — e quindi per Google — il valore risultante è
 *  identico al carattere originale; per il parser HTML non è più il
 *  carattere che chiude il tag. Sono inclusi anche U+2028 e U+2029, che in
 *  JavaScript valgono come fine riga e romperebbero lo script.
 *
 *  Riferimento: https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
