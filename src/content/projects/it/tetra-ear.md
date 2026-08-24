---
title: "TetraEar — Decoder TETRA per SDR"
summary: "Decoder e analizzatore TETRA (Terrestrial Trunked Radio) per RTL-SDR con decodifica vocale in tempo reale, supporto alla cifratura e interfaccia grafica intuitiva su Ubuntu."
lang: "it"
date: 2026-07-24
featured: true
status: "lab"
tags: ["Python", "SDR", "Sicurezza"]
links:
  github: "https://github.com/chiaraberti13/TetraEarUbuntu"
---

TetraEar è un decoder e analizzatore **TETRA** (Terrestrial Trunked Radio, lo
standard radio digitale professionale usato da servizi di emergenza, trasporti e
utility) pensato per chiavette **RTL-SDR** su Ubuntu. Trasforma un ricevitore
software-defined radio a basso costo in una postazione di ascolto e analisi del
traffico TETRA.

### Cosa fa
- **Decodifica vocale in tempo reale** del traffico TETRA ricevuto via RTL-SDR.
- **Analisi** dei canali e del traffico digitale, con gestione della **cifratura**.
- **Interfaccia grafica** intuitiva che rende accessibile un dominio normalmente
  riservato a strumenti da riga di comando.

### Come è fatta
Applicazione in **Python** che orchestra la catena SDR — sintonizzazione del
ricevitore RTL-SDR, demodulazione e decodifica del protocollo TETRA — dietro una
GUI. Progettata e testata su **Ubuntu**.

### Il mio ruolo
Progettazione dell'applicazione, integrazione della pipeline RTL-SDR → decodifica
TETRA, gestione della componente di cifratura e realizzazione dell'interfaccia
grafica. Un progetto all'incrocio tra **radiofrequenza, reti e sicurezza**.
