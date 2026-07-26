/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENUTI STRUTTURATI (Hero, Chi sono, Competenze, CV)
 * ─────────────────────────────────────────────────────────────
 *  ⚠️  TESTO SEGNAPOSTO da personalizzare con i dati REALI e aggiornati.
 *  Ogni sezione è duplicata per lingua ("it" / "en").
 *  Modifica qui: le pagine si aggiornano da sole.
 * ─────────────────────────────────────────────────────────────
 */
import type { Locale } from "@/config/site";

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
}
export interface EducationItem {
  title: string;
  org: string;
  period: string;
  description?: string;
}
export interface CertItem {
  title: string;
  org: string;
  year: string;
  url?: string;
}
export interface SkillGroup {
  name: string;
  items: string[];
}
export interface PageContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    roles: string[];
  };
  about: {
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  skills: SkillGroup[];
  cv: {
    experience: ExperienceItem[];
    education: EducationItem[];
    certifications: CertItem[];
  };
}

export const content: Record<Locale, PageContent> = {
  it: {
    hero: {
      eyebrow: "Cybersecurity & Ethical Hacking",
      headline: "Proteggo sistemi e dati, con l'occhio di chi progetta e programma.",
      subheadline:
        "In transizione verso la sicurezza informatica, porto con me un solido bagaglio in programmazione e visual design: capisco il codice, il prodotto e le persone che lo usano.",
      roles: [
        "Ethical Hacker",
        "Security Enthusiast",
        "Designer che programma",
        "Automation specialist",
      ],
    },
    about: {
      paragraphs: [
        "Sono Chiara Berti. Vengo dal mondo del visual design e dello sviluppo, dove ho imparato a costruire workflow automatizzati e interfacce curate, e oggi sto indirizzando queste competenze verso la cybersecurity e l'ethical hacking.",
        "Credo che una buona sicurezza nasca dalla comprensione dell'intero sistema: il codice, l'infrastruttura e il fattore umano. Il mio approccio unisce mentalità analitica, attenzione ai dettagli e una forte etica del lavoro.",
        "⚠️ Testo segnaposto — sostituiscilo con la tua bio aggiornata.",
      ],
      highlights: [
        { label: "Focus", value: "Cybersecurity" },
        { label: "Background", value: "Design + Dev" },
        { label: "Base", value: "Italia" },
      ],
    },
    skills: [
      {
        name: "Sicurezza",
        items: [
          "Ethical hacking / Penetration testing",
          "OWASP Top 10",
          "Network security",
          "Linux hardening",
          "Analisi delle vulnerabilità",
          "OSINT",
        ],
      },
      {
        name: "Programmazione",
        items: ["Python", "JavaScript / TypeScript", "Bash scripting", "HTML & CSS", "Git", "Automazione di workflow"],
      },
      {
        name: "Design & Tool",
        items: ["UI/UX design", "Packaging design", "Adobe Suite", "Figma", "Prototipazione", "Fotografia"],
      },
    ],
    cv: {
      experience: [
        {
          role: "Nome ruolo",
          org: "Azienda / Progetto",
          period: "2023 — oggi",
          location: "Remoto",
          description:
            "⚠️ Segnaposto: descrivi responsabilità e risultati. Es. ideazione di workflow automatizzati che hanno ridotto i tempi delle attività seriali.",
          tags: ["Automazione", "Sicurezza"],
        },
        {
          role: "Visual Designer & Packaging Specialist",
          org: "Azienda precedente",
          period: "2019 — 2023",
          location: "Italia",
          description:
            "⚠️ Segnaposto: esperienza pregressa in design e sviluppo, utile come bagaglio tecnico e di prodotto.",
          tags: ["Design", "Sviluppo"],
        },
      ],
      education: [
        {
          title: "Percorso in Cybersecurity",
          org: "Ente / piattaforma di formazione",
          period: "2024 — oggi",
          description: "⚠️ Segnaposto: corso, bootcamp o percorso di studi.",
        },
        {
          title: "Formazione in Design / Informatica",
          org: "Istituto / Università",
          period: "20XX — 20XX",
        },
      ],
      certifications: [
        { title: "Es. CompTIA Security+ (in corso)", org: "CompTIA", year: "2025" },
        { title: "Es. Corso Ethical Hacking", org: "Piattaforma", year: "2024" },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: "Cybersecurity & Ethical Hacking",
      headline: "I protect systems and data, with the eye of someone who designs and codes.",
      subheadline:
        "Transitioning into information security, I bring a solid background in programming and visual design: I understand the code, the product and the people who use it.",
      roles: ["Ethical Hacker", "Security Enthusiast", "Designer who codes", "Automation specialist"],
    },
    about: {
      paragraphs: [
        "I'm Chiara Berti. I come from visual design and development, where I learned to build automated workflows and polished interfaces, and I'm now steering these skills toward cybersecurity and ethical hacking.",
        "I believe good security starts from understanding the whole system: the code, the infrastructure and the human factor. My approach blends an analytical mindset, attention to detail and a strong work ethic.",
        "⚠️ Placeholder text — replace it with your updated bio.",
      ],
      highlights: [
        { label: "Focus", value: "Cybersecurity" },
        { label: "Background", value: "Design + Dev" },
        { label: "Based in", value: "Italy" },
      ],
    },
    skills: [
      {
        name: "Security",
        items: [
          "Ethical hacking / Penetration testing",
          "OWASP Top 10",
          "Network security",
          "Linux hardening",
          "Vulnerability assessment",
          "OSINT",
        ],
      },
      {
        name: "Programming",
        items: ["Python", "JavaScript / TypeScript", "Bash scripting", "HTML & CSS", "Git", "Workflow automation"],
      },
      {
        name: "Design & Tools",
        items: ["UI/UX design", "Packaging design", "Adobe Suite", "Figma", "Prototyping", "Photography"],
      },
    ],
    cv: {
      experience: [
        {
          role: "Role title",
          org: "Company / Project",
          period: "2023 — present",
          location: "Remote",
          description:
            "⚠️ Placeholder: describe responsibilities and results. E.g. designed automated workflows that cut the time of repetitive tasks.",
          tags: ["Automation", "Security"],
        },
        {
          role: "Visual Designer & Packaging Specialist",
          org: "Previous company",
          period: "2019 — 2023",
          location: "Italy",
          description:
            "⚠️ Placeholder: prior experience in design and development, valuable as technical and product background.",
          tags: ["Design", "Development"],
        },
      ],
      education: [
        {
          title: "Cybersecurity track",
          org: "Training provider / platform",
          period: "2024 — present",
          description: "⚠️ Placeholder: course, bootcamp or study path.",
        },
        { title: "Design / Computer Science education", org: "Institute / University", period: "20XX — 20XX" },
      ],
      certifications: [
        { title: "e.g. CompTIA Security+ (in progress)", org: "CompTIA", year: "2025" },
        { title: "e.g. Ethical Hacking course", org: "Platform", year: "2024" },
      ],
    },
  },
};
