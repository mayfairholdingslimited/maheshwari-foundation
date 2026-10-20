// Blood programme counters — shown publicly and edited from /admin.
// Live values are stored in Vercel KV (Upstash Redis); these are the seed
// defaults used before the first admin save, or if storage isn't configured.

export interface BloodCounter {
  /** Human-readable "as on" date, e.g. "10 May 2026". */
  asOn: string;
  /** People who have donated blood. */
  peopleDonated: number;
  /** People who have benefited from the blood programme. */
  beneficiaries: number;
  /** Blood collection vehicles in service. */
  collectionVehicles: number;
  /** Thalassemia centres set up. */
  thalassemiaCentres: number;
}

export const DEFAULT_COUNTER: BloodCounter = {
  asOn: "October 2026",
  peopleDonated: 1000,
  beneficiaries: 1000,
  collectionVehicles: 1,
  thalassemiaCentres: 1,
};

// Display metadata for each numeric field — drives both the public counter
// and the admin form, so the two never drift apart.
// `suffix` is shown after the number on the public site (e.g. "1,000+").
export const COUNTER_FIELDS: {
  key: keyof Omit<BloodCounter, "asOn">;
  label: string;
  suffix?: string;
}[] = [
  { key: "peopleDonated", label: "People donated blood", suffix: "+" },
  { key: "beneficiaries", label: "Beneficiaries", suffix: "+" },
  { key: "collectionVehicles", label: "Blood collection vehicle" },
  { key: "thalassemiaCentres", label: "Thalassemia centre" },
];
