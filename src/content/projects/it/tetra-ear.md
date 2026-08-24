---
title: "TetraEar — Installer e toolkit TETRA per SDR"
summary: "Installer e toolkit per configurare TetraEar e la catena RTL-SDR su Linux e Windows, con analisi dei canali, decodifica del traffico in chiaro e riconoscimento della cifratura."
lang: "it"
date: 2026-07-24
featured: true
status: "lab"
tags: ["Python", "SDR", "Sicurezza"]
links:
  github: "https://github.com/chiaraberti13/TetraEarUbuntu"
---

Questo progetto fornisce installer e strumenti di integrazione per **TetraEar**,
decoder TETRA open source sviluppato a monte, e per la relativa catena
**RTL-SDR**. L'obiettivo è rendere riproducibile la configurazione su Linux e
Windows, documentando dipendenze, codec, compatibilità hardware e limiti della
decodifica.

### Cosa fa
- Installazione automatizzata di dipendenze, ambiente Python, codec ETSI e
  configurazione RTL-SDR.
- Decodifica vocale del traffico **in chiaro** e riconoscimento dei canali cifrati.
- Integrazione opzionale con TELIVE-2 esclusivamente per chiavi già possedute:
  nessun recupero o cracking delle chiavi.
- Diagnostica, log e strumenti passivi per i metadati di rete.

### Come è fatta
Installer e utility in **Python e shell** che configurano il progetto upstream,
applicano correzioni di compatibilità e preparano una catena riproducibile su
Ubuntu, Debian e Windows tramite WSL2. L'uso è limitato ad attività autorizzate,
didattiche e di ricerca.

### Il mio ruolo
Sviluppo degli installer, integrazione della pipeline RTL-SDR, patch di
compatibilità, diagnostica, documentazione bilingue e collegamento degli strumenti
complementari. Il decoder TetraEar resta correttamente attribuito al progetto
upstream.
