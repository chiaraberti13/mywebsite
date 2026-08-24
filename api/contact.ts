import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Endpoint del modulo contatti.
 * - Validazione lato server, controllo same-origin e honeypot.
 * - Rate limiting di base per istanza serverless.
 * - Invio tramite Resend; nessun dato viene salvato dal sito.
 */

const MAX = { name: 120, email: 200, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

type RateBucket = { count: number; resetAt: number };
const rateBuckets = new Map<string, RateBucket>();

function header(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

function clientIp(req: VercelRequest): string {
  const forwarded = header(req.headers["x-forwarded-for"]);
  return forwarded.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
}

function isSameOrigin(req: VercelRequest): boolean {
  const origin = header(req.headers.origin);
  if (!origin) return true;

  const host =
    header(req.headers["x-forwarded-host"]) ||
    header(req.headers.host);

  try {
    return Boolean(host) && new URL(origin).host === host;
  } catch {
    return false;
  }
}

function allowRequest(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const current = rateBuckets.get(ip);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_MAX) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isSameOrigin(req)) {
    return res.status(403).json({ error: "Invalid origin" });
  }

  const contentType = header(req.headers["content-type"]).toLowerCase();
  if (!contentType.includes("application/json")) {
    return res.status(415).json({ error: "Content-Type must be application/json" });
  }

  const rate = allowRequest(clientIp(req));
  if (!rate.allowed) {
    res.setHeader("Retry-After", String(rate.retryAfter));
    return res.status(429).json({ error: "Too many requests" });
  }

  const body = (typeof req.body === "string" ? safeParse(req.body) : req.body) ?? {};
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();

  // Se il campo invisibile è compilato, scarta senza rivelare il filtro.
  if (honeypot) return res.status(200).json({ ok: true });

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

  if (!apiKey) {
    return res
      .status(503)
      .json({ error: "Email delivery not configured", fallback: to });
  }

  const safeName = name.replace(/[\r\n]+/g, " ");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Nuovo messaggio dal sito — ${safeName}`,
        text: `Da: ${safeName} <${email}>\n\n${message}`,
        html: `<p><strong>Da:</strong> ${escapeHtml(safeName)} &lt;${escapeHtml(
          email,
        )}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!response.ok) {
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
