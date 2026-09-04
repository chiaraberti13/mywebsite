---
title: "RFNM SDR++ Setup — Automated installation"
summary: "Automated installation of SDR++ with native RFNM and SoapySDR hardware support: dependencies, drivers, build and a clean configuration in a single script."
lang: "en"
date: 2026-09-01
category: "sdr-radio"
featured: false
status: "maintained"
tags: ["Shell", "RFNM", "SoapySDR", "SDR++", "Linux"]
links:
  github: "https://github.com/chiaraberti13/RFNM-SDRPP-SETUP"
---

Getting SDR++ running with RFNM hardware support means building drivers,
SoapySDR modules and the application itself by hand, in the right order and with
the right options. The `setup_rfnm_sdrpp.sh` script does the whole path in one
go.

## What the script does

1. **Installs system dependencies** — the libraries and tools SDR++ and RFNM
   support need: CMake, libusb, FFTW, Volk, SoapySDR.
2. **Builds and installs the RFNM driver** — fetches the official `librfnm`,
   builds it and installs it system-wide.
3. **Builds and installs the Soapy RFNM module** — fetches `soapy-rfnm` and
   installs the SoapySDR driver for RFNM devices.
4. **Builds SDR++ with RFNM support** — from the fork carrying the RFNM source
   module fix, with `OPT_BUILD_RFNM_SOURCE=ON` and `OPT_BUILD_SOAPY_SOURCE=ON`.
5. **Resets the SDR++ configuration** — removes any existing configuration that
   would freeze the software on first launch; a clean folder is recreated
   automatically.

A companion `reset_rfnm_sdrpp.sh` returns the setup to a clean state without
redoing the whole installation.
