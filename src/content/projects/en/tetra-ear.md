---
title: "TetraEar — TETRA Decoder for SDR"
summary: "A TETRA (Terrestrial Trunked Radio) decoder and analyzer for RTL-SDR with real-time voice decoding, encryption support and an intuitive GUI on Ubuntu."
lang: "en"
date: 2026-07-24
featured: true
status: "lab"
tags: ["Python", "SDR", "Security"]
links:
  github: "https://github.com/chiaraberti13/TetraEarUbuntu"
---

TetraEar is a **TETRA** (Terrestrial Trunked Radio — the professional digital
radio standard used by emergency services, transport and utilities) decoder and
analyzer built for **RTL-SDR** dongles on Ubuntu. It turns a low-cost
software-defined radio receiver into a station for listening to and analyzing
TETRA traffic.

### What it does
- **Real-time voice decoding** of TETRA traffic received via RTL-SDR.
- **Analysis** of channels and digital traffic, with **encryption** handling.
- An intuitive **GUI** that makes a domain usually confined to command-line tools
  approachable.

### How it's built
A **Python** application that orchestrates the SDR chain — tuning the RTL-SDR
receiver, demodulating and decoding the TETRA protocol — behind a graphical
interface. Designed and tested on **Ubuntu**.

### My role
Application design, integration of the RTL-SDR → TETRA decoding pipeline,
encryption handling and the graphical interface. A project at the crossroads of
**radio frequency, networking and security**.
