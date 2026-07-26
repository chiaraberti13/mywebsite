/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENUTI STRUTTURATI
 * ─────────────────────────────────────────────────────────────
 *  Ogni sezione è duplicata per lingua ("it" / "en").
 *  Modifica qui: le pagine si aggiornano da sole.
 * ─────────────────────────────────────────────────────────────
 */
import type { Locale } from "@/config/site";

export interface ExperienceItem {
  role: string;
  org?: string;
  period: string;
  location?: string;
  paragraphs: string[];
  tags?: string[];
}
export interface EducationItem {
  title: string;
  org: string;
  period?: string;
  description?: string;
}
export interface CertItem {
  title: string;
  org: string;
  year: string;
  description?: string;
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
  values: {
    paragraphs: string[];
  };
  skills: SkillGroup[];
  curriculum: {
    intro: string[];
    education: { lead: string; items: EducationItem[] };
    certifications: {
      lead: string;
      items: CertItem[];
      beyond: { paragraphs: string[] };
    };
  };
  experience: ExperienceItem[];
}

const LPI_LINUX = "https://lpi.org/v/LPI000606561/2jtytje6tw";
const LPI_WEB = "https://lpi.org/v/LPI000606561/z85ypb54rc";

export const content: Record<Locale, PageContent> = {
  it: {
    hero: {
      eyebrow: "Cybersecurity & Ethical Hacking",
      headline: "Non mi interessa usare la tecnologia. Mi interessa capirla davvero.",
      subheadline:
        "Dal design all'automazione fino alla cybersecurity: capire come funziona la tecnologia, per usarla in modo consapevole e proteggerla.",
      roles: ["Penetration Testing", "Red Team", "Automation", "Designer che programma"],
    },
    about: {
      paragraphs: [
        "La curiosità mi accompagna da sempre. Capire come funzionano le cose, metterle alla prova e chiedermi cosa succede quando qualcosa si rompe è il mio modo di osservare il mondo.",
        "Per oltre dieci anni ho lavorato nel design, ma ogni attività ripetitiva diventava un'occasione per scrivere codice. Così sono arrivati Python, Bash, PHP, Linux, SQL e lo sviluppo web. Ho iniziato ad automatizzare processi per semplificare il lavoro, scoprendo quanto mi venisse naturale analizzare un problema, collegare tecnologie diverse e progettare workflow capaci di eliminare attività ripetitive, ridurre gli errori e migliorare concretamente il modo di lavorare.",
        "È stata questa ricerca continua a portarmi, naturalmente, verso la cybersecurity.",
        "Dal 2024 ho deciso di trasformare quella passione in un percorso professionale. Nel 2026 ho conseguito la certificazione CompTIA Security+ e continuo ad approfondire Linux, networking e offensive security attraverso studio costante, laboratori pratici e sperimentazione.",
        "Il mio obiettivo è crescere nel mondo del Penetration Testing e del Red Team, continuando a sviluppare competenze tecniche con un approccio pratico, curioso e orientato all'apprendimento continuo.",
      ],
      highlights: [
        { label: "Focus", value: "Cybersecurity" },
        { label: "Certificazione", value: "CompTIA Security+" },
        { label: "Background", value: "10+ anni Design → Dev" },
      ],
    },
    values: {
      paragraphs: [
        "Credo che comprendere una tecnologia sia il primo passo per poterla utilizzare in modo consapevole e proteggerla.",
        "L'etica è il principio che guida il mio modo di lavorare. La curiosità è ciò che mi spinge a studiare continuamente e a mettere in discussione ciò che già conosco. Lo studio continuo rappresenta il metodo con cui trasformo ogni esperienza in competenza.",
        "Non cerco scorciatoie. Preferisco costruire una preparazione solida, approfondendo i concetti e sperimentando direttamente ciò che studio, perché sono convinta che la conoscenza più duratura sia quella acquisita attraverso la pratica.",
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
          "JavaScript / Node.js",
          "SQL",
          "Sviluppo web (HTML/CSS)",
          "Automazione dei processi",
          "Git",
        ],
      },
      {
        name: "Design & Tool",
        items: [
          "Packaging & documentazione tecnica",
          "Adobe Illustrator (scripting)",
          "Adobe Suite",
          "Fotografia",
        ],
      },
    ],
    curriculum: {
      intro: [
        "Il mio percorso professionale nasce nel mondo del design e della comunicazione visiva, dove per oltre dieci anni ho sviluppato precisione, metodo e attenzione ai dettagli.",
        "Con il tempo, però, il mio interesse si è spostato sempre più verso gli aspetti tecnici dei processi. Ogni attività ripetitiva diventava un'opportunità per automatizzare, ogni problema un'occasione per analizzare il funzionamento di un sistema e migliorarlo.",
        "Questa evoluzione mi ha portata a sviluppare competenze nella programmazione, nell'automazione dei processi e nell'amministrazione di sistemi Linux, fino a scegliere di orientare il mio percorso professionale verso la cybersecurity.",
      ],
      education: {
        lead: "La mia formazione combina competenze tecniche e creative. Dopo gli studi in ambito economico-aziendale ho approfondito la programmazione e lo sviluppo web attraverso percorsi specialistici, costruendo basi solide che hanno accompagnato la mia evoluzione professionale verso l'automazione dei processi e, successivamente, la cybersecurity.",
        items: [
          {
            title: "PHP & Java for Programmers",
            org: "Pc Academy — Roma",
            period: "2018 – 2019",
            description:
              "Percorso dedicato alla programmazione orientata agli oggetti, allo sviluppo web e ai database relazionali, con approfondimenti su PHP, Java e SQL.",
          },
          {
            title: "Master in Editorial Graphics, Web Design & eCommerce",
            org: "Pc Academy — Roma",
            period: "2017",
            description:
              "Master dedicato alla progettazione grafica, allo sviluppo web e alla comunicazione digitale, con approfondimenti su HTML, CSS, WordPress e strumenti Adobe.",
          },
          {
            title: "Diploma di Tecnico della Gestione Aziendale",
            org: "I.P.S.C.T. Luigi Einaudi — Latina",
            description:
              "Percorso di studi ad indirizzo economico-aziendale orientato all'organizzazione aziendale, al marketing e alla gestione d'impresa.",
          },
        ],
      },
      certifications: {
        lead: "Considero le certificazioni uno strumento per consolidare competenze e misurare i progressi raggiunti durante il mio percorso di crescita professionale. Ogni certificazione è un traguardo costruito attraverso studio, esercitazioni pratiche e approfondimento dei concetti fondamentali — ma l'apprendimento non si esaurisce con un esame: continuo a dedicare tempo a studio, laboratori e progetti personali per trasformare la teoria in competenze concrete.",
        items: [
          {
            title: "CompTIA Security+",
            org: "CompTIA",
            year: "2026",
            description:
              "Certificazione internazionale che valida competenze fondamentali in cybersecurity, networking, gestione del rischio, sicurezza delle infrastrutture, Identity and Access Management, crittografia, monitoraggio, vulnerability management e incident response. È il punto di partenza del mio percorso nella sicurezza informatica e la base su cui approfondisco offensive security, Penetration Testing e Red Teaming.",
          },
          {
            title: "Linux Essentials",
            org: "Linux Professional Institute (LPI)",
            year: "2024",
            url: LPI_LINUX,
            description:
              "Certificazione sui fondamenti dei sistemi Linux: shell, gestione di utenti e permessi, filesystem, processi, networking di base e principi di sicurezza. Ha consolidato competenze che oggi uso quotidianamente nello sviluppo, nell'automazione e nei laboratori di cybersecurity.",
          },
          {
            title: "Web Development Essentials",
            org: "Linux Professional Institute (LPI)",
            year: "2025",
            url: LPI_WEB,
            description:
              "Percorso sulle tecnologie fondamentali dello sviluppo web: architettura client-server, protocolli web, basi di frontend e backend e funzionamento delle applicazioni web. Una base importante anche per la sicurezza applicativa e l'analisi delle vulnerabilità web.",
          },
          {
            title: "Pre Security",
            org: "TryHackMe",
            year: "2026",
            description:
              "Percorso introduttivo ai fondamenti della cybersecurity — sistemi operativi, networking, architettura dei computer, web e principi di sicurezza — affrontati con laboratori pratici e attività interattive. Il primo passo nel mio percorso di formazione pratica verso la sicurezza offensiva.",
          },
        ],
        beyond: {
          paragraphs: [
            "Le certificazioni rappresentano una parte del mio percorso, ma non l'unico indicatore delle competenze acquisite.",
            "Continuo a studiare ogni giorno attraverso laboratori pratici, Capture The Flag (CTF), sviluppo di progetti personali, automazione dei processi e approfondimenti su Linux, networking, sicurezza applicativa e offensive security, con l'obiettivo di costruire una preparazione sempre più solida nel campo della cybersecurity.",
          ],
        },
      },
    },
    experience: [
      {
        role: "Packaging Specialist",
        org: "Century Italia S.r.l.",
        period: "2013 – Oggi",
        paragraphs: [
          "Mi occupo della progettazione di packaging, documentazione tecnica e materiali destinati alla produzione industriale.",
          "Negli anni il mio ruolo si è evoluto progressivamente verso l'automazione dei processi aziendali. Ho progettato e sviluppato applicazioni e strumenti software utilizzando Python, Bash, PHP, JavaScript, SQL e Node.js, realizzando workflow capaci di integrare sistemi differenti, automatizzare attività ripetitive e migliorare significativamente l'efficienza operativa.",
          "Tra i progetti sviluppati figurano sistemi per la generazione automatica di documentazione tecnica multilingua, configuratori web, sincronizzazione di dati e immagini tramite FTP, automazioni per Adobe Illustrator e pipeline dedicate alla produzione editoriale. Questi progetti hanno permesso di ridurre drasticamente tempi di lavorazione ed errori operativi, migliorando l'affidabilità dei processi aziendali.",
        ],
        tags: ["Python", "Node.js", "Automazione", "PHP"],
      },
      {
        role: "Graphic & Web Designer Freelance",
        period: "2007 – 2013",
        paragraphs: [
          "Ho collaborato con aziende e professionisti occupandomi di identità visiva, packaging, editoria, fotografia, sviluppo di siti web e comunicazione digitale.",
          "Questa esperienza mi ha permesso di sviluppare capacità di analisi, gestione del cliente e organizzazione del lavoro, oltre a rappresentare il punto di partenza del mio interesse verso lo sviluppo software e l'automazione.",
        ],
        tags: ["Design", "Web", "Editoria"],
      },
    ],
  },

  en: {
    hero: {
      eyebrow: "Cybersecurity & Ethical Hacking",
      headline: "I'm not interested in using technology. I'm interested in truly understanding it.",
      subheadline:
        "From design to automation to cybersecurity: understanding how technology works, to use it consciously and protect it.",
      roles: ["Penetration Testing", "Red Team", "Automation", "Designer who codes"],
    },
    about: {
      paragraphs: [
        "Curiosity has always been part of me. Understanding how things work, putting them to the test and asking myself what happens when something breaks is my way of looking at the world.",
        "For over ten years I worked in design, but every repetitive task became a chance to write code. That's how Python, Bash, PHP, Linux, SQL and web development came in. I started automating processes to simplify work, discovering how natural it felt to analyze a problem, connect different technologies and design workflows that remove repetitive tasks, reduce errors and genuinely improve the way we work.",
        "It was this constant search that led me, naturally, toward cybersecurity.",
        "In 2024 I decided to turn that passion into a professional path. In 2026 I earned the CompTIA Security+ certification and I keep deepening Linux, networking and offensive security through constant study, hands-on labs and experimentation.",
        "My goal is to grow in the world of Penetration Testing and Red Team, developing technical skills with a hands-on, curious mindset focused on continuous learning.",
      ],
      highlights: [
        { label: "Focus", value: "Cybersecurity" },
        { label: "Certification", value: "CompTIA Security+" },
        { label: "Background", value: "10+ yrs Design → Dev" },
      ],
    },
    values: {
      paragraphs: [
        "I believe that understanding a technology is the first step to using it consciously and protecting it.",
        "Ethics is the principle that guides how I work. Curiosity is what pushes me to keep studying and to question what I already know. Continuous study is the method through which I turn every experience into skill.",
        "I don't look for shortcuts. I prefer to build a solid foundation, going deep into the concepts and experimenting directly with what I study, because I'm convinced that the most lasting knowledge is the one gained through practice.",
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
          "JavaScript / Node.js",
          "SQL",
          "Web development (HTML/CSS)",
          "Process automation",
          "Git",
        ],
      },
      {
        name: "Design & Tools",
        items: [
          "Packaging & technical documentation",
          "Adobe Illustrator (scripting)",
          "Adobe Suite",
          "Photography",
        ],
      },
    ],
    curriculum: {
      intro: [
        "My professional path began in the world of design and visual communication, where for over ten years I developed precision, method and attention to detail.",
        "Over time, though, my interest shifted more and more toward the technical side of processes. Every repetitive task became an opportunity to automate, every problem a chance to analyze how a system works and improve it.",
        "This evolution led me to develop skills in programming, process automation and Linux system administration, until I chose to steer my career toward cybersecurity.",
      ],
      education: {
        lead: "My education combines technical and creative skills. After studies in business and economics, I deepened programming and web development through specialized courses, building solid foundations that supported my move toward process automation and, later, cybersecurity.",
        items: [
          {
            title: "PHP & Java for Programmers",
            org: "Pc Academy — Rome",
            period: "2018 – 2019",
            description:
              "A course on object-oriented programming, web development and relational databases, focusing on PHP, Java and SQL.",
          },
          {
            title: "Master in Editorial Graphics, Web Design & eCommerce",
            org: "Pc Academy — Rome",
            period: "2017",
            description:
              "A master's course on graphic design, web development and digital communication, focusing on HTML, CSS, WordPress and Adobe tools.",
          },
          {
            title: "Diploma in Business Management",
            org: "I.P.S.C.T. Luigi Einaudi — Latina",
            description:
              "A business- and economics-oriented programme focused on company organization, marketing and business management.",
          },
        ],
      },
      certifications: {
        lead: "I see certifications as a way to consolidate skills and measure the progress made along my professional growth. Each one is a milestone built through study, hands-on practice and a deep dive into the fundamentals — but learning doesn't end with an exam: I keep dedicating time to study, labs and personal projects to turn theory into concrete skills.",
        items: [
          {
            title: "CompTIA Security+",
            org: "CompTIA",
            year: "2026",
            description:
              "An international certification validating core skills in cybersecurity, networking, risk management, infrastructure security, Identity and Access Management, cryptography, monitoring, vulnerability management and incident response. It's the starting point of my security career and the foundation on which I build offensive security, Penetration Testing and Red Teaming.",
          },
          {
            title: "Linux Essentials",
            org: "Linux Professional Institute (LPI)",
            year: "2024",
            url: LPI_LINUX,
            description:
              "A certification on Linux fundamentals: shell, user and permission management, filesystem, processes, basic networking and security principles. It consolidated skills I use daily in development, automation and cybersecurity labs.",
          },
          {
            title: "Web Development Essentials",
            org: "Linux Professional Institute (LPI)",
            year: "2025",
            url: LPI_WEB,
            description:
              "A path on core web technologies: client-server architecture, web protocols, frontend and backend basics and how web applications work. An important foundation also for application security and web vulnerability analysis.",
          },
          {
            title: "Pre Security",
            org: "TryHackMe",
            year: "2026",
            description:
              "An introductory path to the fundamentals of cybersecurity — operating systems, networking, computer architecture, web and security principles — through hands-on labs and interactive activities. The first step in my practical journey toward offensive security.",
          },
        ],
        beyond: {
          paragraphs: [
            "Certifications are part of my journey, but not the only measure of the skills I've gained.",
            "I keep studying every day through hands-on labs, Capture The Flag (CTF), personal projects, process automation and deep dives into Linux, networking, application security and offensive security, aiming to build an ever more solid foundation in cybersecurity.",
          ],
        },
      },
    },
    experience: [
      {
        role: "Packaging Specialist",
        org: "Century Italia S.r.l.",
        period: "2013 – Present",
        paragraphs: [
          "I work on packaging design, technical documentation and materials for industrial production.",
          "Over the years my role evolved progressively toward the automation of business processes. I designed and built applications and software tools using Python, Bash, PHP, JavaScript, SQL and Node.js, creating workflows that integrate different systems, automate repetitive tasks and significantly improve operational efficiency.",
          "Projects I developed include systems for the automatic generation of multilingual technical documentation, web configurators, data and image synchronization over FTP, Adobe Illustrator automations and pipelines for editorial production. These projects drastically reduced processing time and operational errors, improving the reliability of business processes.",
        ],
        tags: ["Python", "Node.js", "Automation", "PHP"],
      },
      {
        role: "Graphic & Web Designer, Freelance",
        period: "2007 – 2013",
        paragraphs: [
          "I worked with companies and professionals on visual identity, packaging, publishing, photography, website development and digital communication.",
          "This experience let me develop analytical skills, client management and work organization, and it was the starting point of my interest in software development and automation.",
        ],
        tags: ["Design", "Web", "Publishing"],
      },
    ],
  },
};
