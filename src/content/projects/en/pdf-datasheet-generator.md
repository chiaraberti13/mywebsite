---
title: "PDF Datasheet Generator"
summary: "An app that automatically generates product datasheets as PDFs, in 6 languages, from an Excel file — a modern, secure rewrite of an old, vulnerable PHP script."
lang: "en"
date: 2026-05-01
featured: true
tags: ["Node.js", "Puppeteer", "Security"]
links:
  github: "https://github.com/chiaraberti13/pdf-datasheet-generator"
---

An app that takes the product catalog in Excel and produces, for each product, a
**professional PDF datasheet** ready for print and web, **in 6 languages** (IT,
EN, DE, FR, ES, CS). It was built to **replace an old, vulnerable and deprecated
PHP script**: I rewrote it from scratch with a modern stack, a clean architecture
and security as a project requirement.

### What it does
You drop in the updated Excel, run it (also automatically every morning) and the
app reads the data, downloads images, builds each sheet (header with logo,
technical data in sections, photos/drawings/QR, footer), **generates the PDFs in
all languages**, optimizes them, saves them per language and **uploads them
automatically to the company website server**. No manual steps, always uniform
output.

### How it's built
**Node.js** (ES Modules) with a deliberate architectural idea: instead of drawing
the PDF line by line, the app builds an **HTML + CSS** page for each sheet and
"prints" it with **Puppeteer** (headless Chromium) to A4 PDF — so changing the
look means changing a style, not the code. Excel reading with **xlsx**, images
with **Sharp**, transfer via **FTP**, final compression with **Ghostscript**.
**Modular architecture**: data/validation, document structure, visual theme and
rendering cleanly separated; real multilingual support with fallback; conditional
layout rules; automatic multi-page pagination.

### Security
FTP credentials **encrypted (AES-256-CBC)**, never in plaintext; **rendering
hardening** blocking all unauthorized network requests; theme and input
validation; `--dry-run` mode and baseline regression tests.

### My role
End-to-end ownership: legacy PHP analysis, full rewrite on a modern stack, modular
architecture, rendering and pagination pipeline, multilingual system, data/network
integration (Excel → PDF → FTP → web), security and quality. **Retired a
vulnerable legacy component** and replaced it with a modern, secure solution
running **in production**.
