---
title: "TetraEar — TETRA Installer and SDR Toolkit"
summary: "Installers and integration tools for TetraEar and the RTL-SDR chain on Linux and Windows, covering channel analysis, clear-traffic decoding and encryption detection."
lang: "en"
date: 2026-07-24
featured: true
status: "lab"
tags: ["Python", "SDR", "Security"]
links:
  github: "https://github.com/chiaraberti13/TetraEarUbuntu"
---

This project provides installers and integration tools for **TetraEar**, an
upstream open-source TETRA decoder, and its **RTL-SDR** chain. Its goal is to
make setup reproducible on Linux and Windows while documenting dependencies,
codecs, hardware compatibility and decoding limits.

### What it does
- Automated installation of dependencies, Python environment, ETSI codec and
  RTL-SDR configuration.
- Voice decoding for **clear traffic** and detection of encrypted channels.
- Optional TELIVE-2 integration only for keys already owned: no key recovery
  or cracking.
- Diagnostics, logs and passive network-metadata tools.

### How it's built
**Python and shell** installers and utilities configure the upstream project,
apply compatibility patches and prepare a reproducible chain on Ubuntu, Debian
and Windows through WSL2. Use is limited to authorized educational and research
activities.

### My role
Development of installers, RTL-SDR pipeline integration, compatibility patches,
diagnostics, bilingual documentation and complementary-tool wiring. The TetraEar
decoder remains correctly attributed to its upstream project.
