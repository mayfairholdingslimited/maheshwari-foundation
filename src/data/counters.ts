// Blood programme counters — shown publicly and edited from /admin.
// Live values are stored in Vercel KV (Upstash Redis); these are the seed
// defaults used before the first admin save, or if storage isn't configured.

export interface BloodCounter {
  /** Human-readable "as on" date, e.g. "10 May 2026". */
  asOn: string;
  /** People who have donated blood. */
  peopleDonated: number;
  /** Units of blood currently in stock. */
  unitsInStock: number;
  /** Units of blood donated / transfused to date. */
  unitsDonated: number;
  /** Blood camps currently in the making. */
  campsInMaking: number;
}

export const DEFAULT_COUNTER: BloodCounter = {
  asOn: "10 May 2026",
  peopleDonated: 500,
  unitsInStock: 0,
  unitsDonated: 0,
  campsInMaking: 62,
};

// Display metadata for each numeric field — drives both the public counter
// and the admin form, so the two never drift apart.
export const COUNTER_FIELDS: {
  key: keyof Omit<BloodCounter, "asOn">;
  label: string;
}[] = [
  { key: "peopleDonated", label: "People donated blood" },
  { key: "unitsDonated", label: "Units of blood donated" },
  { key: "unitsInStock", label: "Units in stock" },
  { key: "campsInMaking", label: "Blood camps in the making" },
];
