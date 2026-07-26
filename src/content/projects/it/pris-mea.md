---
title: "PRIS MEA — Configuratore LED"
summary: "Configuratore web per progettare online sistemi di illuminazione LED su misura, generare un preventivo PDF in pochi secondi e instradare il lead al distributore di zona."
lang: "it"
date: 2026-04-05
featured: true
tags: ["PHP", "Full-stack", "Sicurezza"]
links:
  github: "https://github.com/chiaraberti13/pris-mea"
---

PRIS MEA permette a installatori, architetti, distributori e clienti finali di
configurare un impianto LED modulare, ottenere un **preventivo PDF** dettagliato
e riceverlo via email, con il contatto instradato automaticamente al distributore
competente. Disponibile in italiano e inglese.

### Cosa fa
- Scelta di **forma** (lineare, rettangolo, L, C), misure, finitura, diffusione,
  tipo di installazione e opzioni (faretti, biemissione, dimmer).
- **Calcolo automatico** della distinta componenti, di potenza (W) e flusso
  luminoso (lumen), con generazione di una **planimetria in scala**.
- **Preventivo PDF** professionale via email + salvataggio e instradamento del
  lead al distributore di regione/paese.

### Come è fatta
**PHP 8** senza framework, organizzato a moduli (namespace, autoload PSR-4):
calcolatori per forma dietro una factory, catalogo prodotti, generazione PDF con
**mPDF**, email via **PHPMailer**, planimetrie disegnate a runtime con **GD**,
raccolta lead su **Google Sheets**. Il motore di calcolo risolve un piccolo
problema di **ottimizzazione combinatoria** (combinazione di moduli standard con
scarto minimo).

### Sicurezza
Segreti in file `.env` non versionato, protezione **CSRF** sui form, **escaping**
sistematico dell'output (anti-XSS), cookie di sessione `httponly/secure/samesite`,
validazione input lato server e una **modalità test** isolata dalla produzione.

### Il mio ruolo
Progettazione dell'architettura modulare del backend, motore di calcolo,
pipeline di generazione documenti (planimetria + PDF), sistema multilingua,
misure di sicurezza applicativa e debugging metodico basato sull'analisi dei log.
