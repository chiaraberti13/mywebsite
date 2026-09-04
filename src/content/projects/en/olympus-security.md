---
title: "Olympus Security — Offensive and defensive security platform"
summary: "One scope-safe CLI for security assessment, detection, evidence collection and reporting, with thirteen modules sharing a single data contract."
lang: "en"
date: 2026-09-01
category: "cybersecurity"
featured: false
status: "active"
tags: ["Offensive security", "Python", "OSINT", "Detection", "SARIF", "CLI"]
links:
  github: "https://github.com/chiaraberti13/OLYMPUS-SECURITY"
---

Olympus is an **offensive-and-defensive** security platform driven through a
single binary. Instead of a drawer of unrelated scripts, every capability is a
sub-command of one CLI and speaks the **same data contract**: the `Asset`,
`Finding`, `Event`, `Evidence`, `Alert` and `Incident` objects produced by one
module can be consumed by any other without translation.

## The modules

| Module | What it does |
| --- | --- |
| **Argus** | OSINT and passive recon: DNS, WHOIS/RDAP, web headers, IP, phone, email, MAC, accounts, CDN fronting, investigation graphs |
| **Athena** | Assessment orchestration and lifecycle: validated plans, bounded job execution, durable SQLite storage, audit trail, reporting |
| **Helios** | Scoped surface scanning and finding export |
| **Artemis** | Web application probing within scope: fingerprint, content, XSS |
| **Proteus** | Social-engineering campaign modelling, authorized and simulated |
| **Hermes** | Secret and sensitive-data scanning with SARIF output |
| **Apollo** | Detection rules engine (red and blue) over normalized events |
| **Minerva** | Incident triage and chain-of-custody records |
| **Vulcan** | Aggregation, deduplication, ranking and report rendering |
| **Metis** | Deterministic capability routing, engagement plans, CTI cases, IOC correlation |
| **AEGIS** | Scope-gated scanner orchestration, durable SQLite jobs, cancellation, explicit execution states |
| **Unified TUI** | Keyboard-first interface over every command, with streamed output |

## Authorized use by construction

Every network-active command requires a **scope file** naming the domains you are
authorized to touch: not a note in the documentation, a constraint of the
program. Every run leaves an audit trail, and the design accounts for SSRF and
abuse.

Written in **Python 3.11+**, MIT-licensed for the native code with third-party
licences preserved for vendored components.
