<p align="center"><img src="assets/banner.svg" alt="chiaraberti.cloud" width="100%"></p>

<p align="center"><a href="README.md">🇬🇧 English</a> · <a href="README.it.md">🇮🇹 Italiano</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-F2C94C?style=flat-square" alt="Active">
  <img src="https://img.shields.io/badge/category-PORTFOLIO-22D3EE?style=flat-square" alt="Portfolio">
  <img src="https://img.shields.io/badge/stack-Astro-8B949E?style=flat-square" alt="Astro">
  <img src="https://img.shields.io/badge/deploy-Vercel-000000?style=flat-square" alt="Vercel">
</p>

> Portfolio personale bilingue dedicato a formazione cybersecurity, sicurezza delle reti, software-defined radio e automazione.

<p align="center"><a href="https://www.chiaraberti.cloud"><strong>Sito live</strong></a> · <a href="SECURITY.md">Sicurezza</a> · <a href="LICENSE">Licenza</a></p>

---

## Selezione attuale dei progetti

Il portfolio riporta al momento i sei repository in evidenza sul profilo GitHub. La selezione è temporanea e potrà essere rivista in seguito senza cambiare il modello delle categorie.

| Progetto | Categoria | Ambito |
| --- | --- | --- |
| [COMPTIA-SECURITY-SY0-701](https://github.com/chiaraberti13/COMPTIA-SECURITY-SY0-701) | Formazione cybersecurity | Piattaforma bilingue per Security+ SY0-701 |
| [OSI-CYBER-EXPLORER](https://github.com/chiaraberti13/OSI-CYBER-EXPLORER) | Sicurezza delle reti | Laboratorio interattivo su OSI, attacchi e difese |
| [TetraEarUbuntu](https://github.com/chiaraberti13/TetraEarUbuntu) | SDR e radio | Ambiente automatizzato TetraEar e RTL-SDR |
| [OsmoTetraUbuntu](https://github.com/chiaraberti13/OsmoTetraUbuntu) | SDR e radio | Ambiente guidato Ubuntu per ricezione e analisi TETRA |
| [SDR-PLUS](https://github.com/chiaraberti13/SDR-PLUS) | SDR e radio | Fork mantenuto di SDR++ con supporto RFNM mirato |
| [UTILITY-FORGE](https://github.com/chiaraberti13/UTILITY-FORGE) | Automazione e utility | Strumenti locali e privacy-first per documenti e file |

## 🚀 Comandi

```bash
npm install       # installa le dipendenze
npm run dev       # sviluppo locale su http://localhost:4321
npm run build     # type-check + build statica in dist/
npm run preview   # anteprima della build
npm run check     # solo controllo dei tipi/contenuti
```

Richiede **Node ≥ 20**.

## ✏️ Come personalizzare (senza toccare il codice)

Tutto ciò che serve modificare vive in pochi file:

| Cosa vuoi cambiare | File |
| --- | --- |
| Nome, email, telefono, **social**, sezioni attive | `src/config/site.ts` |
| **Colori** (accento ocra), font, spaziature, tema | `src/styles/global.css` (blocco *DESIGN TOKENS*) |
| Testi di Home, **Chi sono**, **Competenze**, **CV** | `src/data/content.ts` |
| **Progetti** (uno per file) | `src/content/projects/{it,en}/*.md` |
| **Articoli** del Journal | `src/content/journal/{it,en}/*.md` |
| **Lettera di presentazione** e **Privacy** | `src/content/longform/{it,en}/*.md` |
| Etichette di menu/pulsanti | `src/i18n/ui.ts` |

> Il colore si cambia da **una sola riga**: `--accent` in `src/styles/global.css`.

### Aggiungere un progetto
Crea un file in `src/content/projects/it/` (e la versione `en/`) copiando uno
esistente. Il campo `category` alimenta sia l'etichetta della scheda sia i filtri. I campi `links.github`, `links.behance`, `links.x`, `links.instagram`,
`links.live` generano automaticamente i badge con l'icona della piattaforma.

### CV scaricabile
Metti il file PDF in `public/` con il nome indicato in `site.cvFile`
(default `/cv-chiara-berti.pdf`).

## 🌍 Lingue
- Italiano (default): pagine sotto `/`
- Inglese: pagine sotto `/en/`

Il selettore lingua mantiene la stessa pagina. I contenuti sono duplicati per
lingua nei file dati/markdown (campo `lang`).

## 🔒 Sicurezza & Privacy
- **Sito statico**: nessun database, minima superficie d'attacco.
- **Content-Security-Policy** severa generata automaticamente da Astro: gli hash
  di tutti gli script/stili inline sono ricalcolati ad ogni build (nessuna
  manutenzione manuale). Vedi `astro.config.mjs` → `experimental.csp`.
- **Header di sicurezza** aggiuntivi (HSTS, X-Frame-Options, Referrer-Policy,
  Permissions-Policy…) in `vercel.json`.
- **Nessun cookie di tracciamento**, nessun font/analytics esterno: i font sono
  di sistema, quindi non viene esposto l'IP dei visitatori.
- **Modulo contatti** con validazione lato server e honeypot anti-spam
  (`api/contact.ts`). Nessun dato personale viene salvato.

### Nota sulle vulnerabilità di `npm audit`
Gli avvisi residui riguardano dipendenze usate **solo in fase di build o lato
server** (`sharp`, `js-yaml`, `undici`), non il codice servito ai visitatori di
un sito statico, e processano esclusivamente contenuti che controlli tu. Il
rischio reale è basso; gli aggiornamenti arrivano tramite **Dependabot**
(`.github/dependabot.yml`). Aggiornamenti "breaking" (es. major di Astro) vanno
valutati e testati a parte.

## ☁️ Deploy su Vercel
1. Collega il repository GitHub a [Vercel](https://vercel.com) — rileva Astro
   in automatico (build `astro build`, output `dist/`). La cartella `api/`
   diventa una Serverless Function.
2. In **Project → Settings → Environment Variables** aggiungi (vedi
   `.env.example`):
   - `RESEND_API_KEY` — chiave [Resend](https://resend.com) per il modulo contatti
   - `CONTACT_TO` — email destinataria
   - `CONTACT_FROM` — mittente verificato su Resend
3. Collega il dominio `www.chiaraberti.cloud` in **Settings → Domains**.

Senza `RESEND_API_KEY` il modulo mostra un messaggio che invita a scrivere
direttamente all'email: il sito resta pienamente funzionante.

## 🧩 Struttura
```
src/
├─ config/site.ts        # configurazione globale
├─ styles/global.css     # design token (colori, tipografia)
├─ data/content.ts       # contenuti strutturati (hero, cv, skills)
├─ content/              # markdown: projects, journal, longform
├─ i18n/ui.ts            # stringhe interfaccia IT/EN
├─ components/           # componenti UI riutilizzabili
├─ views/                # composizione delle pagine (per lingua)
└─ pages/                # route (IT in /, EN in /en)
api/contact.ts           # serverless function del modulo contatti
```

<!-- Production deployment trigger -->
