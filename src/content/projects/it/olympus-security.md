---
title: "Olympus Security — Piattaforma di sicurezza offensiva e difensiva"
summary: "Un'unica CLI con controllo dello scope per assessment, rilevamento, raccolta delle evidenze e reporting di sicurezza, con tredici moduli che condividono lo stesso contratto dati."
lang: "it"
date: 2026-09-01
category: "cybersecurity"
featured: false
status: "active"
tags: ["Sicurezza offensiva", "Python", "OSINT", "Detection", "SARIF", "CLI"]
links:
  github: "https://github.com/chiaraberti13/OLYMPUS-SECURITY"
---

Olympus è una piattaforma di sicurezza **offensiva e difensiva** guidata da un
singolo eseguibile. Invece di un cassetto di script scollegati, ogni capacità è
un sotto-comando della stessa CLI e parla lo **stesso contratto dati**: gli
oggetti `Asset`, `Finding`, `Event`, `Evidence`, `Alert` e `Incident` prodotti da
un modulo sono consumabili da qualsiasi altro senza conversioni.

## I moduli

| Modulo | Cosa fa |
| --- | --- |
| **Argus** | OSINT e ricognizione passiva: DNS, WHOIS/RDAP, header web, IP, telefono, email, MAC, account, CDN fronting, grafi di indagine |
| **Athena** | Orchestrazione e ciclo di vita degli assessment: piani validati, esecuzione dei job con limiti, storage SQLite durevole, audit trail, reportistica |
| **Helios** | Scansione della superficie entro lo scope ed esportazione dei finding |
| **Artemis** | Probing di applicazioni web entro lo scope: fingerprint, contenuti, XSS |
| **Proteus** | Modellazione di campagne di social engineering, autorizzate e simulate |
| **Hermes** | Scansione di segreti e dati sensibili con output SARIF |
| **Apollo** | Motore di regole di detection (red e blue) su eventi normalizzati |
| **Minerva** | Triage degli incidenti e catena di custodia |
| **Vulcan** | Aggregazione, deduplica, ranking e resa dei report |
| **Metis** | Routing deterministico delle capacità, piani di ingaggio, casi CTI, correlazione IOC |
| **AEGIS** | Orchestrazione degli scanner vincolata allo scope, job SQLite durevoli, cancellazione, stati di esecuzione espliciti |
| **Unified TUI** | Interfaccia da tastiera su tutti i comandi, con output in streaming |

## Uso autorizzato per costruzione

Ogni comando che tocca la rete richiede un **file di scope** che elenca i domini
per cui si è autorizzati: non è una nota nella documentazione, è un vincolo del
programma. Ogni esecuzione lascia un audit trail, e la progettazione tiene conto
di SSRF e abusi.

Scritto in **Python 3.11+**, con licenza MIT sul codice nativo e le licenze di
terze parti preservate per i componenti vendorizzati.
