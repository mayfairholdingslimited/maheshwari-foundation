#!/usr/bin/env node
// GitHub Pages serves this project at /<repo>/, but the site's source code
// hardcodes root-absolute paths (e.g. src="/logo.png", href="/about")
// throughout templates and data files, written for the real domain's root.
// Rather than touch every one of those call sites, this rewrites the built
// HTML in-place after `astro build`, prefixing any href="/..." or src="/..."
// (but not "//..." protocol-relative or already-prefixed) with the base path.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const base = process.argv[2];
if (!base || !base.startsWith("/")) {
  console.error("Usage: fix-base-paths.mjs /repo-name");
  process.exit(1);
}
const distDir = process.argv[3] ?? "dist";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

const pattern = /(href|src)="\/(?!\/)/g;
let filesTouched = 0;

for await (const file of walk(distDir)) {
  const text = await readFile(file, "utf8");
  const rewritten = text.replace(pattern, (_m, attr) => `${attr}="${base}/`);
  if (rewritten !== text) {
    await writeFile(file, rewritten, "utf8");
    filesTouched++;
  }
}

console.log(`fix-base-paths: rewrote root-absolute href/src in ${filesTouched} file(s) to ${base}/*`);
