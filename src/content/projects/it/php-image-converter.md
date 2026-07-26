---
title: "PHP Image Converter"
summary: "Web app in un unico file PHP per convertire, ridimensionare e ritagliare immagini nel browser — inclusi HEIC/TIFF — con elaborazione locale e privacy per design."
lang: "it"
date: 2026-02-15
featured: false
tags: ["PHP 8", "Image processing", "Privacy"]
links:
  github: "https://github.com/chiaraberti13/php-image-converter"
---

Un'applicazione web che converte immagini da un formato all'altro (JPG, PNG,
WEBP, BMP, TIFF, GIF, e l'HEIC degli iPhone), con ridimensionamento, ritaglio e
controllo qualità — **senza installare nulla e senza inviare le foto a servizi
esterni**. Tutta l'app vive in **un solo file PHP** (server, interfaccia e logica).

### Cosa fa
- Upload multiplo drag-and-drop, scelta del formato per file o per tutti.
- Ridimensiona (mantenendo le proporzioni), ritaglia dal centro (1:1, 16:9…),
  regola la qualità e il nome file.
- Barra di avanzamento per ogni file, download singolo o **ZIP** unico.

### Come è fatta
Classe **`ImageConverter`** con una pipeline ordinata (carica → ritaglia →
ridimensiona → salva). Formato riconosciuto dal **MIME reale**, non
dall'estensione; **fallback a ImageMagick** per HEIC/TIFF quando GD non basta;
gestione attenta di trasparenza (alpha) e memoria. Codice **PHP 8.2+** (testato
fino a 8.4) con tipizzazione statica, `match`, gestione errori con `\Throwable`.
Frontend in **JavaScript vanilla** (fetch, `async/await`), zero dipendenze.

### Sicurezza
Ogni utente lavora in una cartella temporanea isolata per `session_id`, upload
validati e limitati (max 100 MB), **pulizia automatica** dei file dopo un'ora.

### Il mio ruolo
Ideazione e sviluppo end-to-end: architettura self-contained, pipeline di
rendering, supporto multi-formato, gestione sicura dei file, UI, ammodernamento a
PHP 8 e documentazione bilingue. *Licenza MIT.*
