// Read/write the blood counter from Vercel KV (Upstash Redis).
// Falls back to seed defaults when storage isn't configured, so the site
// still builds and renders locally without any env vars.
import { Redis } from "@upstash/redis";
import { DEFAULT_COUNTER, type BloodCounter } from "../data/counters";

const url =
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
const token =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "";

const redis = url && token ? new Redis({ url, token }) : null;
const KEY = "mf:blood-counter";

export function storageConfigured(): boolean {
  return redis !== null;
}

export async function getCounter(): Promise<BloodCounter> {
  if (!redis) return DEFAULT_COUNTER;
  try {
    const stored = await redis.get<Partial<BloodCounter>>(KEY);
    return stored ? { ...DEFAULT_COUNTER, ...stored } : DEFAULT_COUNTER;
  } catch {
    return DEFAULT_COUNTER;
  }
}

export async function setCounter(data: BloodCounter): Promise<void> {
  if (!redis) throw new Error("Counter storage is not configured.");
  await redis.set(KEY, data);
}

/** Coerce arbitrary form input into a clean BloodCounter (non-negative ints). */
export function sanitizeCounter(input: Record<string, unknown>): BloodCounter {
  const num = (v: unknown) => {
    const n = Math.floor(Number(v));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  };
  return {
    asOn: String(input.asOn ?? DEFAULT_COUNTER.asOn).slice(0, 40) ||
      DEFAULT_COUNTER.asOn,
    peopleDonated: num(input.peopleDonated),
    unitsInStock: num(input.unitsInStock),
    unitsDonated: num(input.unitsDonated),
    campsInMaking: num(input.campsInMaking),
  };
}
