---
title: "PRIS MEA — LED Configurator"
summary: "A web configurator to design custom modular LED lighting systems online, generate a detailed PDF quote in seconds and route the lead to the local distributor."
lang: "en"
date: 2026-04-05
featured: true
tags: ["PHP", "Full-stack", "Security"]
links:
  github: "https://github.com/chiaraberti13/pris-mea"
---

PRIS MEA lets installers, architects, distributors and end customers configure a
modular LED system, get a detailed **PDF quote** and receive it by email, with the
contact automatically routed to the right distributor. Available in Italian and
English.

### What it does
- Choice of **shape** (linear, rectangle, L, C), sizes, finish, light diffusion,
  installation type and options (spotlights, back-emission, dimming).
- **Automatic calculation** of the bill of materials, power (W) and luminous flux
  (lumen), with a generated **to-scale floor plan**.
- Professional **PDF quote** by email + lead capture and routing to the
  region/country distributor.

### How it's built
**PHP 8** without a framework, organized into modules (namespaces, PSR-4
autoload): per-shape calculators behind a factory, product catalog, PDF
generation with **mPDF**, email via **PHPMailer**, floor plans drawn at runtime
with **GD**, lead capture on **Google Sheets**. The calculation engine solves a
small **combinatorial optimization** problem (standard-module combination with
minimal waste).

### Security
Secrets in a non-versioned `.env` file, **CSRF** protection on forms, systematic
output **escaping** (anti-XSS), `httponly/secure/samesite` session cookies,
server-side input validation and an isolated **test mode** separate from
production.

### My role
Modular backend architecture, calculation engine, document generation pipeline
(floor plan + PDF), multilingual system, application-security measures and
methodical, log-based debugging.
