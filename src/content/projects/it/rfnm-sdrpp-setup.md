---
title: "RFNM SDR++ Setup — Installazione automatizzata"
summary: "Installazione automatizzata di SDR++ con supporto hardware nativo RFNM e SoapySDR: dipendenze, driver, compilazione e configurazione pulita in un solo script."
lang: "it"
date: 2026-09-01
category: "sdr-radio"
featured: false
status: "maintained"
tags: ["Shell", "RFNM", "SoapySDR", "SDR++", "Linux"]
links:
  github: "https://github.com/chiaraberti13/RFNM-SDRPP-SETUP"
---

Mettere in piedi SDR++ con supporto hardware RFNM significa compilare a mano
driver, moduli SoapySDR e l'applicazione stessa, nell'ordine giusto e con le
opzioni giuste. Lo script `setup_rfnm_sdrpp.sh` fa tutto il percorso in un
passaggio solo.

## Cosa fa lo script

1. **Installa le dipendenze di sistema** — librerie e strumenti necessari a
   SDR++ e al supporto RFNM: CMake, libusb, FFTW, Volk, SoapySDR.
2. **Compila e installa il driver RFNM** — scarica `librfnm` ufficiale, lo
   compila e lo installa a livello di sistema.
3. **Compila e installa il modulo Soapy RFNM** — scarica `soapy-rfnm` e installa
   il driver SoapySDR per i dispositivi RFNM.
4. **Compila SDR++ con supporto RFNM** — dal fork che include la correzione al
   modulo sorgente RFNM, con `OPT_BUILD_RFNM_SOURCE=ON` e
   `OPT_BUILD_SOAPY_SOURCE=ON`.
5. **Azzera la configurazione di SDR++** — rimuove configurazioni preesistenti
   che al primo avvio bloccano il programma; una cartella pulita viene ricreata
   automaticamente.

È incluso anche `reset_rfnm_sdrpp.sh` per tornare a uno stato pulito senza
rifare tutta l'installazione.
