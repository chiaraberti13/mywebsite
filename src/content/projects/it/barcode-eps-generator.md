---
title: "Generatore Barcode EPS"
summary: "App web che trasforma un Excel di codici prodotto in barcode EAN-13 vettoriali (EPS) pronti per Illustrator — massiva, offline e 100% privata."
lang: "it"
date: 2026-01-20
featured: false
tags: ["JavaScript", "Algoritmi", "Privacy"]
links:
  github: "https://github.com/chiaraberti13/barcode-eps-generator"
---

Un'applicazione web che genera **barcode EAN-13 in formato EPS vettoriale**
partendo da un Excel di codici prodotto: si carica il file, si preme un pulsante e
si ottengono tutti i barcode in un unico ZIP. Nasce per chi lavora nel packaging e
nel retail e deve produrre decine o migliaia di codici.

### Come funziona
Doppio click sul file HTML → carica Excel/CSV (colonne codice + barcode) →
"Genera" con barra di avanzamento e statistiche → download singolo o **ZIP**.
Ogni codice diventa un `.eps` vettoriale, ingrandibile senza perdita di qualità.

### Come è fatta
**Un solo file HTML** (HTML + CSS + JavaScript), zero installazione, funziona
**offline**. La codifica **EAN-13 è implementata da zero**: tabelle L/G/R, schemi
di parità basati sulla prima cifra, cifra di controllo con algoritmo Modulo 10
(standard GS1 / ISO/IEC 15420). Il **rendering EPS/PostScript** è generato a mano
(barre, barre di guardia, testo Helvetica, quiet zone, BoundingBox) ed è
compatibile con Illustrator, CorelDRAW, Inkscape e Affinity. Generazione massiva a
blocchi asincroni per non bloccare l'interfaccia.

### Privacy
Tutta l'elaborazione avviene **nel browser**: i dati commerciali non lasciano mai
il computer. Nessun server, nessun tracciamento, nessun account.

### Il mio ruolo
Ideazione e realizzazione individuale: architettura client-side, algoritmo
EAN-13, pipeline di rendering EPS, parsing Excel/CSV, UX responsive e
documentazione bilingue. *Licenza MIT.*
