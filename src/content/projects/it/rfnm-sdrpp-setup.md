---
title: "RFNM + SDR++ — Script di setup"
summary: "Script di installazione che configura SDR++ con il supporto all'hardware RFNM, per avere una postazione software-defined radio pronta all'uso in pochi comandi."
lang: "it"
date: 2025-10-11
featured: false
tags: ["Shell", "SDR", "Automazione"]
links:
  github: "https://github.com/chiaraberti13/rfnm-sdrpp-setup"
---

Uno script di installazione che mette in piedi **SDR++** insieme al **supporto
per l'hardware RFNM**. Automatizza i passaggi necessari per usare la piattaforma
software-defined radio RFNM con SDR++, eliminando la configurazione manuale e
gli errori di setup.

### Cosa fa
- **Installa e configura SDR++** (ricevitore SDR multipiattaforma) con il modulo
  di supporto per **RFNM**.
- Riduce l'onboarding dell'hardware a **pochi comandi**, ripetibili e documentati.

### Come è fatta
Uno **script Shell** che gestisce dipendenze, build e integrazione del supporto
RFNM in SDR++. L'obiettivo è rendere l'installazione **deterministica** e
riproducibile su una macchina pulita.

### Il mio ruolo
Scrittura e test dello script, verifica della catena hardware/software e stesura
della documentazione d'uso. Un piccolo strumento di **automazione** nato da un
bisogno concreto in ambito radiofrequenza.
