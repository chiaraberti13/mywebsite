/// <reference types="astro/client" />

declare global {
  interface Window {
    /**
     * Alzato dal modulo che gestisce le animazioni di reveal, appena parte.
     * Serve allo script inline in <head> per capire se il modulo è arrivato:
     * se resta assente, la sua rete di sicurezza rende visibile tutto il
     * contenuto invece di lasciarlo a `opacity: 0`.
     */
    __reveal?: boolean;
  }
}

export {};
