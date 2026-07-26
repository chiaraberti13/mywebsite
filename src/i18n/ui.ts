/**
 * Stringhe dell'interfaccia (navigazione, pulsanti, etichette).
 * I CONTENUTI lunghi (bio, CV, progetti, lettera) stanno in src/content.
 */
import type { Locale } from "@/config/site";

export const ui = {
  it: {
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.skills": "Competenze",
    "nav.cv": "CV",
    "nav.projects": "Progetti",
    "nav.coverLetter": "Lettera",
    "nav.journal": "Journal",
    "nav.contact": "Contatti",

    "cta.contact": "Contattami",
    "cta.downloadCv": "Scarica CV",
    "cta.viewProjects": "Vedi i progetti",
    "cta.readMore": "Leggi",
    "cta.backHome": "Torna alla home",

    "theme.toggle": "Cambia tema chiaro/scuro",
    "lang.switch": "English",
    "menu.open": "Apri menu",
    "menu.close": "Chiudi menu",

    "section.about": "Chi sono",
    "section.skills": "Competenze",
    "section.experience": "Esperienza",
    "section.education": "Formazione",
    "section.certifications": "Certificazioni",
    "section.projects": "Progetti",
    "section.coverLetter": "Lettera di presentazione",
    "section.journal": "Journal",
    "section.contact": "Mettiamoci in contatto",

    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Messaggio",
    "contact.send": "Invia messaggio",
    "contact.sending": "Invio in corso…",
    "contact.success": "Grazie! Il messaggio è stato inviato.",
    "contact.error": "Qualcosa è andato storto. Scrivimi pure via email.",
    "contact.privacyNote":
      "I dati inviati sono usati solo per rispondere alla tua richiesta e non vengono ceduti a terzi.",
    "contact.orEmail": "Oppure scrivimi direttamente:",

    "footer.rights": "Tutti i diritti riservati.",
    "footer.builtWith": "Sito statico, senza cookie di tracciamento.",
    "footer.privacy": "Informativa privacy",

    "privacy.title": "Informativa sulla privacy",

    "notfound.title": "Pagina non trovata",
    "notfound.text": "La pagina che cerchi non esiste o è stata spostata.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.cv": "CV",
    "nav.projects": "Projects",
    "nav.coverLetter": "Cover letter",
    "nav.journal": "Journal",
    "nav.contact": "Contact",

    "cta.contact": "Get in touch",
    "cta.downloadCv": "Download CV",
    "cta.viewProjects": "View projects",
    "cta.readMore": "Read",
    "cta.backHome": "Back home",

    "theme.toggle": "Toggle light/dark theme",
    "lang.switch": "Italiano",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    "section.about": "About me",
    "section.skills": "Skills",
    "section.experience": "Experience",
    "section.education": "Education",
    "section.certifications": "Certifications",
    "section.projects": "Projects",
    "section.coverLetter": "Cover letter",
    "section.journal": "Journal",
    "section.contact": "Let's get in touch",

    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "Thanks! Your message has been sent.",
    "contact.error": "Something went wrong. Feel free to email me.",
    "contact.privacyNote":
      "Your data is used only to reply to your request and is never shared with third parties.",
    "contact.orEmail": "Or write to me directly:",

    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Static site, no tracking cookies.",
    "footer.privacy": "Privacy policy",

    "privacy.title": "Privacy policy",

    "notfound.title": "Page not found",
    "notfound.text": "The page you are looking for doesn't exist or has moved.",
  },
} as const;

export type UIKey = keyof (typeof ui)["it"];

/** Restituisce una funzione di traduzione per la lingua data. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui.it[key] ?? key;
  };
}

/** Prefisso di percorso per la lingua ("" per IT default, "/en" per EN). */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const base = locale === "it" ? "" : `/${locale}`;
  const full = `${base}${clean === "/" ? "/" : clean}`;
  return full === "" ? "/" : full;
}
