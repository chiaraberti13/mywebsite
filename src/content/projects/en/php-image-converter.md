---
title: "PHP Image Converter"
summary: "A single-file PHP web app to convert, resize and crop images in the browser — including HEIC/TIFF — with local processing and privacy by design."
lang: "en"
date: 2026-02-15
featured: false
tags: ["PHP 8", "Image processing", "Privacy"]
links:
  github: "https://github.com/chiaraberti13/php-image-converter"
---

A web app that converts images between formats (JPG, PNG, WEBP, BMP, TIFF, GIF
and iPhone HEIC), with resizing, cropping and quality control — **no install and
without sending photos to third-party services**. The whole app lives in a
**single PHP file** (server, UI and logic).

### What it does
- Multi-file drag-and-drop upload, format choice per file or for all.
- Resize (keeping proportions), center crop (1:1, 16:9…), adjust quality and file
  name.
- Progress bar per file, single download or one **ZIP**.

### How it's built
An **`ImageConverter`** class with an ordered pipeline (load → crop → resize →
save). Format detected from the **real MIME type**, not the extension;
**ImageMagick fallback** for HEIC/TIFF when GD isn't enough; careful handling of
transparency (alpha) and memory. **PHP 8.2+** code (tested up to 8.4) with static
typing, `match`, error handling via `\Throwable`. Frontend in **vanilla
JavaScript** (fetch, `async/await`), zero dependencies.

### Security
Each user works in an isolated temp folder per `session_id`, uploads validated
and size-limited (max 100 MB), **automatic cleanup** of files after one hour.

### My role
End-to-end design and development: self-contained architecture, rendering
pipeline, multi-format support, secure file handling, UI, PHP 8 modernization and
bilingual documentation. *MIT license.*
