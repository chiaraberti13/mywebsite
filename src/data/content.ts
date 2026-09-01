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
  /** Nome icona (vedi Icon.astro) che rappresenta l'ambito della certificazione */
  icon?: string;
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
  aptitude: {
    lead: string;
    axes: string[];
    workingOnLabel: string;
    workingOn: { title: string; text: string }[];
    learning: { title: string; text: string; pathLabel: string; path: string[] };
  };
  languages: { name: string; level: string }[];
  interests: string[];
}

const LPI_LINUX = "https://lpi.org/v/LPI000606561/2jtytje6tw";
const LPI_WEB = "https://lpi.org/v/LPI000606561/z85ypb54rc";

export const content: Record<Locale, PageContent> = {
  it: {
    hero: {
      eyebrow: "Automation Developer · Creative Technologist · CompTIA Security+",
      headline: "Non mi interessa usare la tecnologia. Mi interessa capirla davvero.",
      subheadline:
        "Scripting & Process Automation · Python · Bash · PHP · Linux · SQL",
      roles: ["Cybersecurity", "Process Automation", "Web Development", "Linux · Bash · PHP · MySQL"],
    },
    about: {
      paragraphs: [
        "Sono un'Automation Developer con oltre dieci anni di esperienza nell'automazione dei processi attraverso Python, Bash, PHP, Linux e SQL. Il mio percorso è iniziato nel design: ogni attività ripetitiva è diventata un'occasione per scrivere codice e capire come le cose funzionano davvero — e cosa succede quando si rompono.",
        "Con il tempo la programmazione è passata dall'essere una curiosità a parte integrante del mio lavoro: analizzo un problema, collego tecnologie diverse e progetto workflow che eliminano le attività ripetitive, riducono gli errori e migliorano concretamente il modo in cui si lavora.",
        "È stata questa stessa attitudine — capire un sistema fino ai suoi limiti — a portarmi verso la cybersecurity. Nel 2024 ho scelto di trasformarla in un percorso professionale; nel 2026 ho conseguito la CompTIA Security+ (SY0-701) e continuo ad approfondire Linux, networking e sicurezza offensiva con studio costante e laboratori pratici su TryHackMe.",
        "Il mio obiettivo è crescere come Penetration Tester e, nel tempo, nel Red Teaming: credo che il modo migliore per difendere un sistema sia comprenderlo fino in fondo.",
        "Per me la sicurezza non è solo una professione, ma il punto in cui convergono la curiosità che mi muove, il bisogno di migliorare le cose e un'etica non negoziabile. E la certezza che non si finisce mai di imparare.",
      ],
      highlights: [
        { label: "Ruolo", value: "Automation Developer" },
        { label: "Basi certificate", value: "Security+ · Linux Essentials" },
        { label: "Metodo", value: "Pratica · Laboratori · Progetti" },
        { label: "Obiettivo", value: "Penetration Testing" },
      ],
    },
    values: {
      paragraphs: [
        "Etica, curiosità e apprendimento continuo guidano il mio modo di lavorare: studio ciò che non conosco, verifico ciò che costruisco e considero la responsabilità una parte inseparabile della competenza tecnica.",
        "Preferisco una preparazione solida alle scorciatoie, perché credo che una tecnologia possa essere utilizzata e protetta davvero solo quando se ne comprende il funzionamento.",
      ],
    },
    skills: [
      {
        name: "Cybersecurity & sicurezza",
        items: [
          "Fondamenti di sicurezza informatica (CompTIA Security+ SY0-701)",
          "Minacce, vulnerabilità e gestione del rischio",
          "Crittografia",
          "Introduzione alla sicurezza offensiva (TryHackMe)",
          "Sicurezza applicativa (CSRF, XSS, validazione input, gestione sicura delle credenziali, hardening)",
          "Fondamenti pratici TryHackMe Pre Security",
          "Fondamenti Windows (permessi NTFS, registro di sistema, Task Scheduler)",
          "Fondamenti di rete (modello OSI, TCP/IP, subnetting, DNS)",
        ],
      },
      {
        name: "Linux, sistemi & networking",
        items: [
          "Linux (LPI Linux Essentials)",
          "Riga di comando e shell",
          "macOS",
          "Virtualizzazione (VM) e container Docker",
          "Fondamenti di reti e protocolli",
        ],
      },
      {
        name: "Programmazione & automazione",
        items: [
          "Python",
          "Bash / Shell scripting",
          "Automazione di processi e pipeline",
          "Logica di programmazione e problem solving",
        ],
      },
      {
        name: "Sviluppo web & database",
        items: [
          "PHP",
          "JavaScript (Node.js)",
          "HTML5",
          "CSS (LPI Web Development Essentials)",
          "MySQL",
          "SQL",
        ],
      },
      {
        name: "Strumenti & metodo",
        items: [
          "Git / GitHub e versionamento",
          "Debugging basato su log ed evidenze",
          "Documentazione e qualità del codice",
          "Sviluppo AI-assistito (sotto direzione tecnica personale e con verifica di ogni modifica)",
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
            title: "PHP su MySQL",
            org: "PC Academy — Roma",
            period: "2018 – 2019",
            description:
              "Programmazione in PHP e sviluppo di applicazioni web basate su PHP e MySQL, con focus sulla logica applicativa e sull'interazione con il database.",
          },
          {
            title: "Logica di Programmazione e Basi di Dati SQL",
            org: "PC Academy — Roma",
            period: "2018 – 2019",
            description:
              "Fondamenti di logica di programmazione e progettazione di basi di dati relazionali, con interrogazione dei dati tramite SQL e MySQL.",
          },
          {
            title: "Corso Completo di Fotografia",
            org: "Francesco De Marco — Latina",
            period: "2018",
            description:
              "Percorso completo di 14 ore su tecniche di ripresa, gestione della luce e post-produzione dell'immagine.",
          },
          {
            title: "Master in Grafica Editoriale — Web Design & eCommerce",
            org: "PC Academy — Roma (Adobe Authorized)",
            period: "2017",
            description:
              "Suite Adobe (Photoshop, Illustrator, InDesign, Dreamweaver) e sviluppo di siti ed e-commerce con HTML/CSS, WordPress/WooCommerce e SEO.",
          },
          {
            title: "Tecnico di Marketing — Qualifica Professionale",
            org: "Regione Lazio · I.P.S.C.T. «Luigi Einaudi» — Latina",
            period: "2001 – 2003",
            description:
              "Qualifica professionale (triennale) in ambito marketing: teoria e tecnica di marketing, tecniche di comunicazione, legislazione sociale del lavoro, pubblicità e parte pratica di informatica con stage (votazione 30/30 orale · 23/30 scritto).",
          },
          {
            title: "Diploma di Tecnico della Gestione Aziendale — indirizzo Informatico",
            org: "I.P.S.C.T. «Luigi Einaudi» — Latina",
            period: "1998 – 2003",
            description:
              "Diploma quinquennale in ambito economico-gestionale con indirizzo informatico: metodi e strumenti organizzativi a supporto dei processi aziendali, con visione integrata dell'attività d'impresa (votazione 98/100).",
          },
        ],
      },
      certifications: {
        lead: "Considero le certificazioni uno strumento per consolidare competenze e misurare i progressi raggiunti durante il mio percorso di crescita professionale. Ogni certificazione è un traguardo costruito attraverso studio, esercitazioni pratiche e approfondimento dei concetti fondamentali — ma l'apprendimento non si esaurisce con un esame: continuo a dedicare tempo a studio, laboratori e progetti personali per trasformare la teoria in competenze concrete.",
        items: [
          {
            title: "CompTIA Security+ (SY0-701)",
            icon: "shieldCheck",
            org: "CompTIA",
            year: "2026",
            description:
              "Luglio 2026 — valida fino a luglio 2029. Credential ID: COMP001023058871 · codice di verifica: 70c5b54fbb344cfd9e494f8632509f30.",
          },
          {
            title: "Linux Essentials",
            icon: "terminal",
            org: "Linux Professional Institute (LPI)",
            year: "2024",
            url: LPI_LINUX,
            description:
              "Credential ID: LPI000606561 · codice di verifica: 2jtytje6tw.",
          },
          {
            title: "Web Development Essentials",
            icon: "code",
            org: "Linux Professional Institute (LPI)",
            year: "2025",
            url: LPI_WEB,
            description:
              "Credential ID: LPI000606561 · codice di verifica: z85ypb54rc.",
          },
          {
            title: "Pre Security (SEC0)",
            icon: "flag",
            org: "TryHackMe",
            year: "2026",
            description:
              "Credential ID: THM-69e9c5b286352a6b0d0966aa.",
          },
          {
            title: "PHP Developer Fundamentals on MySQL Environment",
            icon: "code",
            org: "Certiport · TESI Automazione S.r.l.",
            year: "2019",
            description:
              "Certiport (esame erogato da TESI Automazione S.r.l.) · gennaio 2019. Credential ID: 57B89A03AA0247838AE85E14659F7B32.",
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
        role: "Automation Developer | Creative Technologist",
        org: "Century Italia S.r.l.",
        period: "2013 – oggi",
        location: "Latina",
        paragraphs: [
          "Entrata in Century Italia come Packaging Designer, ho progressivamente ampliato il mio ruolo verso lo sviluppo di script, applicazioni web e automazioni. Progetto e realizzo strumenti in Python, Bash, PHP e SQL su ambienti Linux / macOS, con attenzione a sicurezza e manutenibilità.",
          "Applico principi di sicurezza già nel lavoro quotidiano di sviluppo — protezione di dati e credenziali, validazione degli input e difesa dalle vulnerabilità web più comuni: è da qui che nasce il mio percorso verso la sicurezza offensiva.",
          "Sviluppo di sistemi in Python per l'elaborazione e l'ottimizzazione automatica di grandi quantità di file, con riduzione dei tempi di lavorazione superiore all'80% e diminuzione degli errori.",
          "Realizzazione di applicazioni PHP collegate a database per la gestione automatica delle informazioni di prodotto e la generazione di documenti, con attenzione alla protezione dei dati e delle credenziali.",
          "Automazioni in Bash per la sincronizzazione di file tra sistemi diversi, con controllo degli errori e logica di ripristino, organizzate in moduli riutilizzabili.",
          "Sviluppo ed esecuzione dei progetti in ambienti Linux virtualizzati (macchine virtuali e container Docker), per contesti isolati e riproducibili.",
        ],
        tags: ["Python", "Bash", "Linux", "Docker", "Automazione dei processi", "Virtualizzazione", "Git", "SQL", "MySQL", "PHP", "JavaScript"],
      },
      {
        role: "Web Developer & Designer",
        period: "2007 – 2013",
        location: "Latina",
        paragraphs: [
          "Progettazione e sviluppo di siti web su misura, dalla definizione dei requisiti alla struttura tecnica, fino al design delle pagine e alla messa online.",
          "Sviluppo di siti web con PHP, HTML, CSS e MySQL, dall'architettura tecnica alla consegna finale.",
          "Cura del design e del layout delle pagine: impaginazione dei contenuti, gestione delle immagini e coerenza dell'aspetto grafico.",
          "Gestione autonoma di più progetti in parallelo: raccolta requisiti, sviluppo e consegna al cliente.",
        ],
        tags: ["Sviluppo web", "PHP", "MySQL", "HTML5", "CSS", "JavaScript", "SQL"],
      },
    ],
    aptitude: {
      lead: "",
      axes: [
        "Problem solving",
        "Pensiero critico",
        "Capacità realizzativa",
        "Networking e team",
        "Adattabilità",
        "Energia e azione",
      ],
      workingOnLabel: "Aree in sviluppo attivo",
      workingOn: [
        {
          title: "Gestione della routine",
          text: "La affronto convertendola in automazione: le attività ripetitive e meccaniche le trasformo in script e processi che le eliminano.",
        },
        {
          title: "Focus ed esecuzione",
          text: "Sto imparando a canalizzare l'entusiasmo per portare a termine un obiettivo alla volta: il percorso strutturato di certificazioni e laboratori è il modo in cui alleno questa disciplina.",
        },
      ],
      learning: {
        title: "Apprendimento continuo",
        text: "Laboratori pratici su TryHackMe, sperimentazione in ambienti isolati e aggiornamento costante su cybersecurity ed ethical hacking attraverso contenuti e risorse di settore.",
        pathLabel: "Percorso di certificazione in programma:",
        path: ["Cisco CCNA (200-301)", "INE eJPT", "Potenziamento lingua inglese"],
      },
    },
    languages: [
      { name: "Italiano", level: "Madrelingua" },
      { name: "Inglese", level: "Comprensione tecnica scritta buona; livello base nel parlato, in fase di potenziamento" },
    ],
    interests: [
      "Innovazione e tecnologia",
      "Automazione dei processi",
      "Arte",
      "Fotografia",
      "Cinema",
      "Teatro",
      "Musica",
      "Sport",
      "Calcio a 5",
      "Calcio",
      "Pets",
    ],
  },

  en: {
    hero: {
      eyebrow: "Automation Developer · Creative Technologist · CompTIA Security+",
      headline: "I'm not interested in using technology. I'm interested in truly understanding it.",
      subheadline:
        "Scripting & Process Automation · Python · Bash · PHP · Linux · SQL",
      roles: ["Cybersecurity", "Process Automation", "Web Development", "Linux · Bash · PHP · MySQL"],
    },
    about: {
      paragraphs: [
        "I'm an Automation Developer with over ten years of experience in process automation using Python, Bash, PHP, Linux and SQL. My journey began in design: every repetitive task became an opportunity to write code and understand how things really work — and what happens when they break.",
        "Over time, programming went from being a curiosity to an integral part of my work: I analyse problems, connect different technologies and design workflows that eliminate repetitive tasks, reduce errors and concretely improve how work gets done.",
        "That same mindset — understanding a system all the way to its limits — led me to cybersecurity. In 2024 I chose to turn it into a professional path; in 2026 I earned CompTIA Security+ (SY0-701), and I continue to deepen Linux, networking and offensive security through constant study and hands-on labs on TryHackMe.",
        "My goal is to grow as a Penetration Tester and, over time, into Red Teaming: I believe the best way to defend a system is to understand it thoroughly.",
        "For me, security is not only a profession, but the point where my curiosity, drive to improve things and non-negotiable ethics converge — together with the certainty that learning never ends.",
      ],
      highlights: [
        { label: "Role", value: "Automation Developer" },
        { label: "Certified foundations", value: "Security+ · Linux Essentials" },
        { label: "Method", value: "Hands-on · Labs · Projects" },
        { label: "Goal", value: "Penetration Testing" },
      ],
    },
    values: {
      paragraphs: [
        "Ethics, curiosity and continuous learning guide how I work: I study what I don't know, verify what I build and treat responsibility as inseparable from technical skill.",
        "I prefer solid foundations to shortcuts, because technology can only be used and protected effectively when its inner workings are understood.",
      ],
    },
    skills: [
      {
        name: "Cybersecurity & security",
        items: [
          "Cybersecurity fundamentals (CompTIA Security+ SY0-701)",
          "Threats, vulnerabilities and risk management",
          "Cryptography",
          "Introduction to offensive security (TryHackMe)",
          "Application security (CSRF, XSS, input validation, secure credential management, hardening)",
          "TryHackMe Pre Security practical fundamentals",
          "Windows fundamentals (NTFS permissions, registry, Task Scheduler)",
          "Networking fundamentals (OSI model, TCP/IP, subnetting, DNS)",
        ],
      },
      {
        name: "Linux, systems & networking",
        items: [
          "Linux (LPI Linux Essentials)",
          "Command line and shell",
          "macOS",
          "Virtualization (VM) and Docker containers",
          "Networking and protocol fundamentals",
        ],
      },
      {
        name: "Programming & automation",
        items: [
          "Python",
          "Bash / Shell scripting",
          "Process automation and pipelines",
          "Programming logic and problem solving",
        ],
      },
      {
        name: "Web development & databases",
        items: [
          "PHP",
          "JavaScript (Node.js)",
          "HTML5",
          "CSS (LPI Web Development Essentials)",
          "MySQL",
          "SQL",
        ],
      },
      {
        name: "Tools & method",
        items: [
          "Git / GitHub and version control",
          "Evidence- and log-based debugging",
          "Documentation and code quality",
          "AI-assisted development (under personal technical direction and with verification of every change)",
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
            title: "PHP on MySQL",
            org: "PC Academy — Rome",
            period: "2018 – 2019",
            description:
              "PHP programming and development of web applications on PHP and MySQL, focusing on application logic and database interaction.",
          },
          {
            title: "Programming Logic & SQL Databases",
            org: "PC Academy — Rome",
            period: "2018 – 2019",
            description:
              "Fundamentals of programming logic and relational database design, with data querying through SQL and MySQL.",
          },
          {
            title: "Complete Photography Course",
            org: "Francesco De Marco — Latina",
            period: "2018",
            description:
              "A 14-hour course on shooting techniques, lighting and image post-production.",
          },
          {
            title: "Master in Editorial Graphics — Web Design & eCommerce",
            org: "PC Academy — Rome (Adobe Authorized)",
            period: "2017",
            description:
              "Adobe suite (Photoshop, Illustrator, InDesign, Dreamweaver) and website/e-commerce development with HTML/CSS, WordPress/WooCommerce and SEO.",
          },
          {
            title: "Marketing Technician — Professional Qualification",
            org: "Regione Lazio · I.P.S.C.T. «Luigi Einaudi» — Latina",
            period: "2001 – 2003",
            description:
              "Three-year professional qualification in marketing: marketing theory and technique, communication, labour law, advertising and hands-on IT with an internship (final grade 30/30 oral · 23/30 written).",
          },
          {
            title: "Diploma in Business Management — IT specialization",
            org: "I.P.S.C.T. «Luigi Einaudi» — Latina",
            period: "1998 – 2003",
            description:
              "Five-year diploma in business and economics with an IT specialization: organizational methods and tools supporting company processes, with an integrated view of the business (final grade 98/100).",
          },
        ],
      },
      certifications: {
        lead: "I see certifications as a way to consolidate skills and measure the progress made along my professional growth. Each one is a milestone built through study, hands-on practice and a deep dive into the fundamentals — but learning doesn't end with an exam: I keep dedicating time to study, labs and personal projects to turn theory into concrete skills.",
        items: [
          {
            title: "CompTIA Security+ (SY0-701)",
            icon: "shieldCheck",
            org: "CompTIA",
            year: "2026",
            description:
              "July 2026 — valid until July 2029. Credential ID: COMP001023058871 · verification code: 70c5b54fbb344cfd9e494f8632509f30.",
          },
          {
            title: "Linux Essentials",
            icon: "terminal",
            org: "Linux Professional Institute (LPI)",
            year: "2024",
            url: LPI_LINUX,
            description:
              "Credential ID: LPI000606561 · verification code: 2jtytje6tw.",
          },
          {
            title: "Web Development Essentials",
            icon: "code",
            org: "Linux Professional Institute (LPI)",
            year: "2025",
            url: LPI_WEB,
            description:
              "Credential ID: LPI000606561 · verification code: z85ypb54rc.",
          },
          {
            title: "Pre Security (SEC0)",
            icon: "flag",
            org: "TryHackMe",
            year: "2026",
            description:
              "Credential ID: THM-69e9c5b286352a6b0d0966aa.",
          },
          {
            title: "PHP Developer Fundamentals on MySQL Environment",
            icon: "code",
            org: "Certiport · TESI Automazione S.r.l.",
            year: "2019",
            description:
              "Certiport (exam delivered by TESI Automazione S.r.l.) · January 2019. Credential ID: 57B89A03AA0247838AE85E14659F7B32.",
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
        role: "Automation Developer | Creative Technologist",
        org: "Century Italia S.r.l.",
        period: "2013 – present",
        location: "Latina",
        paragraphs: [
          "I joined Century Italia as a Packaging Designer and progressively expanded my role toward script development, web applications and automation. I design and build tools in Python, Bash, PHP and SQL on Linux / macOS environments, with attention to security and maintainability.",
          "I apply security principles in everyday development — protecting data and credentials, validating inputs and defending against the most common web vulnerabilities: this is where my path toward offensive security began.",
          "Development of Python systems for automatically processing and optimizing large quantities of files, reducing processing time by more than 80% and decreasing errors.",
          "Development of PHP applications connected to databases for the automated management of product information and document generation, with attention to data and credential protection.",
          "Bash automations for synchronizing files between different systems, with error checking and recovery logic, organized into reusable modules.",
          "Development and execution of projects in virtualized Linux environments (virtual machines and Docker containers), for isolated and reproducible contexts.",
        ],
        tags: ["Python", "Bash", "Linux", "Docker", "Process automation", "Virtualization", "Git", "SQL", "MySQL", "PHP", "JavaScript"],
      },
      {
        role: "Web Developer & Designer",
        period: "2007 – 2013",
        location: "Latina",
        paragraphs: [
          "Custom website design and development, from requirements gathering to technical architecture, page design, and deployment.",
          "Development of websites using PHP, HTML, CSS, and MySQL, from technical architecture to final delivery.",
          "Page design and layout: content formatting, image management, and graphic consistency.",
          "Independent management of multiple parallel projects: requirements gathering, development, and client delivery."
        ],
        tags: ["Web development", "PHP", "MySQL", "HTML5", "CSS", "JavaScript", "SQL"],
      },
    ],
    aptitude: {
      lead: "",
      axes: [
        "Problem solving",
        "Critical thinking",
        "Delivery",
        "Networking & team",
        "Adaptability",
        "Energy & drive",
      ],
      workingOnLabel: "Areas in active development",
      workingOn: [
        {
          title: "Handling routine",
          text: "I tackle it by converting it into automation: repetitive, mechanical tasks become scripts and processes that remove them.",
        },
        {
          title: "Focus & execution",
          text: "I'm learning to channel my enthusiasm to complete one goal at a time: the structured path of certifications and labs is how I train this discipline.",
        },
      ],
      learning: {
        title: "Continuous learning",
        text: "Hands-on labs on TryHackMe, experimentation in isolated environments, and constant updating on cybersecurity and ethical hacking through industry content and resources.",
        pathLabel: "Planned certification path:",
        path: ["Cisco CCNA (200-301)", "INE eJPT", "English language improvement"],
      },
    },
    languages: [
      { name: "Italian", level: "Native" },
      { name: "English", level: "Good written technical comprehension; basic spoken, currently being improved" },
    ],
    interests: [
      "Innovation & technology",
      "Process automation",
      "Art",
      "Photography",
      "Cinema",
      "Theatre",
      "Music",
      "Sport",
      "Five-a-side football",
      "Football",
      "Pets",
    ],
  },
};
