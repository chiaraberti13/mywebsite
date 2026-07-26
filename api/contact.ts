import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Endpoint del modulo contatti (Vercel Serverless Function).
 * - Validazione lato server + honeypot anti-spam.
 * - Invio email tramite Resend (https://resend.com) se RESEND_API_KEY è impostata.
 * - Nessun dato personale viene salvato.
 */

const MAX = { name: 120, email: 200, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (typeof req.body === "string" ? safeParse(req.body) : req.body) ?? {};
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();

  // Trappola anti-bot: se compilata, fingi successo e scarta.
  if (honeypot) return res.status(200).json({ ok: true });

  // Validazione
  if (
    !name ||
    !email ||
    !message ||
    name.length > MAX.name ||
    email.length > MAX.email ||
    message.length > MAX.message ||
    !EMAIL_RE.test(email)
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "chiaraberti13@icloud.com";
  const from = process.env.CONTACT_FROM || "Sito Chiara <onboarding@resend.dev>";

  // Se l'invio email non è configurato, non fingere: segnala di usare l'email.
  if (!apiKey) {
    return res
      .status(503)
      .json({ error: "Email delivery not configured", fallback: to });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Nuovo messaggio dal sito — ${name}`,
        text: `Da: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>Da:</strong> ${escapeHtml(name)} &lt;${escapeHtml(
          email,
        )}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!r.ok) {
      return res.status(502).json({ error: "Delivery failed" });
    }
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Unexpected error" });
  }
}

function safeParse(s: string): Record<string, unknown> | null {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
