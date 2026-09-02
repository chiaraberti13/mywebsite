<p align="center"><img src="assets/banner.svg" alt="chiaraberti.cloud" width="100%"></p>

<p align="center"><a href="README.md">🇬🇧 English</a> · <a href="README.it.md">🇮🇹 Italiano</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-F2C94C?style=flat-square" alt="Active">
  <img src="https://img.shields.io/badge/category-PORTFOLIO-22D3EE?style=flat-square" alt="Portfolio">
  <img src="https://img.shields.io/badge/stack-Astro-8B949E?style=flat-square" alt="Astro">
  <img src="https://img.shields.io/badge/deploy-Vercel-000000?style=flat-square" alt="Vercel">
</p>

> A bilingual personal portfolio focused on cybersecurity learning, network security, software-defined radio and automation.

<p align="center"><a href="https://www.chiaraberti.cloud"><strong>Live website</strong></a> · <a href="SECURITY.md">Security</a> · <a href="LICENSE">Licence</a></p>

---

## Current project selection

The portfolio currently mirrors the six repositories pinned on the GitHub profile. This is a temporary selection and can be revised later without changing the category model.

| Project | Category | Scope |
| --- | --- | --- |
| [COMPTIA-SECURITY-SY0-701](https://github.com/chiaraberti13/COMPTIA-SECURITY-SY0-701) | Cybersecurity learning | Bilingual Security+ SY0-701 study platform |
| [OSI-CYBER-EXPLORER](https://github.com/chiaraberti13/OSI-CYBER-EXPLORER) | Network security | Interactive OSI, network attacks and defenses lab |
| [TetraEarUbuntu](https://github.com/chiaraberti13/TetraEarUbuntu) | SDR & radio | Automated TetraEar and RTL-SDR environment |
| [OsmoTetraUbuntu](https://github.com/chiaraberti13/OsmoTetraUbuntu) | SDR & radio | Guided Ubuntu TETRA reception and analysis environment |
| [SDR-PLUS](https://github.com/chiaraberti13/SDR-PLUS) | SDR & radio | Maintained SDR++ fork with focused RFNM support |
| [UTILITY-FORGE](https://github.com/chiaraberti13/UTILITY-FORGE) | Automation & utilities | Local, privacy-first document and file tools |

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

Requires Node.js 20 or newer.

## Content and configuration

Identity, social links and enabled sections are configured in `src/config/site.ts`. Bilingual content and project entries live in the project content files, keeping personal information separate from presentation components. Each project declares one professional macro-category in its frontmatter; cards and filters read that same value.

## Languages

The website supports Italian and English. Navigation, metadata and project content should be updated in both languages in the same change.

## Security and privacy

The site is statically generated. Do not commit private contact data, credentials or environment files. Review dependency reports in context and follow [SECURITY.md](SECURITY.md) for private vulnerability reporting.

## Deployment

The production build is deployed on Vercel. Changes should pass the local type/content checks and production build before deployment.

## Project structure

- `src/config/`: profile and site configuration;
- `src/content/`: bilingual content;
- `src/components/`: reusable interface components;
- `public/`: static assets;
- `dist/`: generated build output.
