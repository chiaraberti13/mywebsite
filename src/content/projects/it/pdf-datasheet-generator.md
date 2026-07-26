---
title: "Generatore schede tecniche PDF"
summary: "Applicazione che genera automaticamente le schede tecniche di prodotto in PDF, in 6 lingue, partendo da un Excel — riscrittura moderna e sicura di un vecchio script PHP vulnerabile (per Century Italia)."
lang: "it"
date: 2026-05-01
featured: true
tags: ["Node.js", "Puppeteer", "Sicurezza", "Century Italia"]
links:
  github: "https://github.com/chiaraberti13/pdf-datasheet-generator"
---

Un'app che parte dal catalogo prodotti in Excel e produce, per ogni prodotto, una
**scheda tecnica PDF professionale** pronta per stampa e web, **in 6 lingue**
(IT, EN, DE, FR, ES, CS). Nasce per **sostituire un vecchio script PHP, ormai
vulnerabile e deprecato**: l'ho riscritto da zero con stack moderno, architettura
pulita e sicurezza come requisito di progetto.

### Cosa fa
Si deposita l'Excel aggiornato, si avvia (anche in automatico ogni mattina) e
l'app legge i dati, scarica le immagini, costruisce ogni scheda (intestazione con
logo, dati tecnici in sezioni, foto/disegni/QR, footer), **genera i PDF in tutte
le lingue** ottimizzati, li salva per lingua e li **carica in automatico sul
server** del sito aziendale. Nessun intervento manuale, risultato sempre uniforme.

### Come è fatta
**Node.js** (ES Modules) con un'idea architetturale precisa: invece di disegnare
il PDF riga per riga, l'app costruisce una pagina **HTML + CSS** per ogni scheda e
la "stampa" con **Puppeteer** (Chromium headless) in PDF A4 — così cambiare la
grafica significa cambiare uno stile, non il codice. Lettura Excel con **xlsx**,
immagini con **Sharp**, trasferimento via **FTP**, compressione finale con
**Ghostscript**. Architettura **modulare**: dati/validazione, struttura del
documento, tema grafico e rendering nettamente separati; multilingua reale con
fallback; regole condizionali di layout; paginazione automatica su più pagine.

### Sicurezza
Credenziali FTP **cifrate (AES-256-CBC)**, mai in chiaro; **hardening del
rendering** con blocco di tutte le richieste di rete non autorizzate; validazione
di tema e dati in ingresso; modalità `--dry-run` e test di regressione su baseline.

### Il mio ruolo
Progetto seguito end-to-end: analisi del legacy PHP, riscrittura completa su stack
moderno, architettura modulare, pipeline di rendering e paginazione, sistema
multilingua, integrazione dati/rete (Excel → PDF → FTP → web), sicurezza e
qualità. **Dismesso un componente legacy vulnerabile** e sostituito con una
soluzione moderna, sicura e **in produzione**.
