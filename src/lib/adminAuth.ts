// Minimal session auth for /admin — a single shared password set via the
// ADMIN_PASSWORD env var. On successful login we set an HttpOnly cookie whose
// value is an HMAC derived from the password, so it can't be forged without it.
import crypto from "node:crypto";

const SECRET = process.env.ADMIN_PASSWORD ?? "";
export const COOKIE_NAME = "mf_admin";

export function authConfigured(): boolean {
  return SECRET.length > 0;
}

function sessionToken(): string {
  return crypto
    .createHmac("sha256", SECRET)
    .update("mf-admin-session-v1")
    .digest("hex");
}

export function checkPassword(password: string): boolean {
  if (!SECRET) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(SECRET);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function makeCookieValue(): string {
  return sessionToken();
}

export function verifyCookie(value: string | undefined): boolean {
  if (!SECRET || !value) return false;
  const expected = sessionToken();
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
