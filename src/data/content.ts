/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENUTI STRUTTURATI (Hero, Chi sono, Competenze, CV)
 * ─────────────────────────────────────────────────────────────
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
  bullets?: string[];
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

const certifications: CertItem[] = [
  { title: "CompTIA Security+ (SY0-701)", org: "CompTIA", year: "2026" },
  { title: "Pre Security (SEC0)", org: "TryHackMe", year: "2026" },
  {
    title: "Web Development Essentials",
    org: "LPI",
    year: "2025",
    url: "https://lpi.org/v/LPI000606561/z85ypb54rc",
  },
  {
    title: "Linux Essentials",
    org: "LPI",
    year: "2024",
    url: "https://lpi.org/v/LPI000606561/2jtytje6tw",
  },
];

export const content: Record<Locale, PageContent> = {
  it: {
    hero: {
      eyebrow: "Cybersecurity & Ethical Hacking",
      headline: "Non mi interessa usare la tecnologia. Mi interessa capirla davvero.",
      subheadline:
        "Dopo oltre dieci anni nel design, ogni attività ripetitiva è diventata un'occasione per scrivere codice. Da lì Python, Bash, Linux e l'automazione — fino ad arrivare, naturalmente, alla cybersecurity.",
      roles: [
        "Penetration Testing",
        "Red Teaming",
        "Automation",
        "Designer che programma",
      ],
    },
    about: {
      paragraphs: [
        "La curiosità è sempre stata parte di ciò che sono. Capire come funzionano le cose, testarle e chiedermi cosa succede quando qualcosa si rompe: è il mio modo di guardare il mondo.",
        "Per oltre dieci anni ho lavorato nel design, ma ogni attività ripetitiva diventava un'occasione per scrivere codice. Così Python, Bash, PHP, Linux, SQL e lo sviluppo web sono entrati nel mio lavoro. Ho iniziato ad automatizzare i processi per rendere tutto più semplice, e ho scoperto quanto mi venisse naturale analizzare un problema, collegare tecnologie diverse e progettare workflow che eliminano attività ripetitive, riducono gli errori e migliorano davvero il modo di lavorare.",
        "È stata questa ricerca costante a portarmi, in modo naturale, verso la cybersecurity. Nel 2024 ho deciso di trasformare questa passione in un percorso professionale; nel 2026 ho ottenuto la certificazione CompTIA Security+ (SY0-701) e continuo ad approfondire Linux, networking e sicurezza offensiva con studio, laboratori pratici e sperimentazione.",
        "Il mio obiettivo è crescere nel Penetration Testing e nel Red Teaming, perché credo che il modo migliore per difendere un sistema sia comprenderlo fino ai suoi limiti. Per me la cybersecurity non è solo una professione: è dove ritrovo tutto ciò che mi ha sempre spinto — la curiosità, il desiderio di migliorare le cose, il rispetto per l'etica e la convinzione che non si smetta mai di imparare.",
      ],
      highlights: [
        { label: "Focus", value: "Cybersecurity" },
        { label: "Certificazione", value: "CompTIA Security+" },
        { label: "Background", value: "10+ anni Design → Dev" },
      ],
    },
    skills: [
      {
        name: "Sicurezza",
        items: [
          "CompTIA Security+ (SY0-701)",
          "Linux",
          "Networking",
          "Sicurezza offensiva",
          "OWASP Top 10",
          "OSINT",
          "Penetration testing (in crescita)",
        ],
      },
      {
        name: "Programmazione & Automazione",
        items: [
          "Python",
          "Bash",
          "PHP",
          "SQL",
          "Sviluppo web (HTML/CSS/JS)",
          "ExtendScript · AppleScript",
          "Ghostscript · pikepdf · Pillow",
          "Git",
        ],
      },
      {
        name: "Design & Tool",
        items: [
          "Visual & Packaging design",
          "Adobe Illustrator",
          "Adobe Suite",
          "Prototipazione",
          "Fotografia",
        ],
      },
    ],
    cv: {
      experience: [
        {
          role: "Visual Designer & Creative Technologist",
          org: "Century Italia",
          period: "Mar 2013 – oggi",
          location: "Latina, Italia",
          description:
            "Entrata come designer visual/packaging, ho fatto evolvere il ruolo verso la creative technology: unendo competenze di design e sviluppo, ho costruito strumenti su misura e automazioni per la produzione grafica.",
          bullets: [
            "Pipeline in Python (Ghostscript, pikepdf, Pillow) per aggiornamento e ottimizzazione batch di file grafici: centinaia di file per ciclo, oltre l'80% di tempo risparmiato ed errori quasi azzerati.",
            "Automazione di Adobe Illustrator via scripting (ExtendScript): gestione livelli, conversione testo-in-tracciati ed export massivo in SVG e PNG ad alta risoluzione.",
            "Script PHP per interagire con i database, automatizzando gestione e aggiornamento dei dati.",
            "Automazioni di sistema (Bash, AppleScript) per velocizzare i workflow ricorrenti.",
            "Approccio da sviluppatrice: analisi del problema, progettazione della soluzione, test e messa in produzione.",
          ],
          tags: ["Python", "Automazione", "Design"],
        },
        {
          role: "Graphic Designer",
          org: "Freelance",
          period: "Apr 2009 – Mar 2013",
          description:
            "Realizzazione di grafica per stampa e siti web per diversi clienti, gestendo i progetti dall'inizio alla fine.",
          tags: ["Design", "Web"],
        },
      ],
      education: [
        {
          title: "Percorso in Cybersecurity",
          org: "Studio autonomo · laboratori pratici (TryHackMe)",
          period: "2024 – oggi",
          description:
            "Approfondimento continuo di Linux, networking e sicurezza offensiva tramite studio, hands-on lab e sperimentazione.",
        },
      ],
      certifications,
    },
  },

  en: {
    hero: {
      eyebrow: "Cybersecurity & Ethical Hacking",
      headline: "I'm not interested in using technology. I'm interested in truly understanding it.",
      subheadline:
        "After more than ten years in design, every repetitive task became a chance to write code. That led me to Python, Bash, Linux and automation — and, naturally, to cybersecurity.",
      roles: ["Penetration Testing", "Red Teaming", "Automation", "Designer who codes"],
    },
    about: {
      paragraphs: [
        "Curiosity has always been part of who I am. Understanding how things work, testing them, and asking myself what happens when something breaks — that's my way of looking at the world.",
        "For over ten years I worked in design, but every repetitive task became a chance to write code. That's how Python, Bash, PHP, Linux, SQL and web development came into my work. I started automating processes to make work simpler, and discovered how natural it felt to analyze a problem, connect different technologies, and design workflows that eliminate repetitive tasks, reduce errors and genuinely improve the way we work.",
        "It was this constant search that led me, naturally, toward cybersecurity. In 2024 I decided to turn that passion into a professional path. In 2026 I earned the CompTIA Security+ (SY0-701) certification, and I keep deepening my knowledge of Linux, networking and offensive security through constant study, hands-on labs and experimentation.",
        "My goal is to grow into Penetration Testing and Red Teaming, because I believe the best way to defend a system is to understand it all the way to its limits. To me, cybersecurity isn't just a profession: it's where I find everything that has always driven me — the curiosity to understand how things work, the desire to improve them, a respect for ethics, and the belief that you never stop learning.",
      ],
      highlights: [
        { label: "Focus", value: "Cybersecurity" },
        { label: "Certification", value: "CompTIA Security+" },
        { label: "Background", value: "10+ yrs Design → Dev" },
      ],
    },
    skills: [
      {
        name: "Security",
        items: [
          "CompTIA Security+ (SY0-701)",
          "Linux",
          "Networking",
          "Offensive security",
          "OWASP Top 10",
          "OSINT",
          "Penetration testing (growing)",
        ],
      },
      {
        name: "Programming & Automation",
        items: [
          "Python",
          "Bash",
          "PHP",
          "SQL",
          "Web development (HTML/CSS/JS)",
          "ExtendScript · AppleScript",
          "Ghostscript · pikepdf · Pillow",
          "Git",
        ],
      },
      {
        name: "Design & Tools",
        items: [
          "Visual & Packaging design",
          "Adobe Illustrator",
          "Adobe Suite",
          "Prototyping",
          "Photography",
        ],
      },
    ],
    cv: {
      experience: [
        {
          role: "Visual Designer & Creative Technologist",
          org: "Century Italia",
          period: "Mar 2013 – Present",
          location: "Latina, Italy",
          description:
            "I joined as a visual/packaging designer and grew the role toward creative technology: combining design skills with development, I built custom tools and automations for graphic production.",
          bullets: [
            "Developed a Python pipeline (Ghostscript, pikepdf, Pillow) for automatic batch updating and optimization of graphic files: hundreds of files per cycle, with over 80% time saved and errors reduced to near zero.",
            "Automated Adobe Illustrator through scripting (ExtendScript): layer management, text-to-outline conversion, and bulk export to high-resolution SVG and PNG.",
            "Wrote PHP scripts to interact with databases, automating data management and updates.",
            "Built system automations (Bash, AppleScript) to speed up recurring workflows.",
            "Paired design with a developer mindset: problem analysis, solution design, testing and production deployment.",
          ],
          tags: ["Python", "Automation", "Design"],
        },
        {
          role: "Graphic Designer",
          org: "Freelance",
          period: "Apr 2009 – Mar 2013",
          description:
            "Created print graphics and websites for a range of clients, managing projects end to end.",
          tags: ["Design", "Web"],
        },
      ],
      education: [
        {
          title: "Cybersecurity path",
          org: "Self-study · hands-on labs (TryHackMe)",
          period: "2024 – present",
          description:
            "Continuous deep-dive into Linux, networking and offensive security through study, hands-on labs and experimentation.",
        },
      ],
      certifications,
    },
  },
};
