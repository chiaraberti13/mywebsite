---
title: "RFNM + SDR++ — Setup script"
summary: "An installation script that sets up SDR++ with RFNM hardware support, so a software-defined radio station is ready to use in just a few commands."
lang: "en"
date: 2025-10-11
featured: false
tags: ["Shell", "SDR", "Automation"]
links:
  github: "https://github.com/chiaraberti13/rfnm-sdrpp-setup"
---

An installation script that sets up **SDR++** together with **RFNM hardware
support**. It automates the steps needed to use the RFNM software-defined radio
platform with SDR++, removing manual configuration and setup mistakes.

### What it does
- **Installs and configures SDR++** (the cross-platform SDR receiver) with the
  **RFNM** support module.
- Reduces hardware onboarding to **a few commands**, repeatable and documented.

### How it's built
A **Shell script** that handles dependencies, build and integration of RFNM
support into SDR++. The goal is a **deterministic**, reproducible install on a
clean machine.

### My role
Writing and testing the script, verifying the hardware/software chain and writing
the usage documentation. A small **automation** tool born from a concrete need in
the radio-frequency domain.
