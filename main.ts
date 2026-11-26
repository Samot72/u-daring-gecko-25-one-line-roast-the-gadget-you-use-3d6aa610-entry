// One-Line Roast: The Gadget You Use Every Day
// make.fun competition: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Writes a single original roast line (1-200 characters, one line, no
// trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output),
// then reads it back and verifies it byte-for-byte.
//
// Node 22+, no dependencies. Run: node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My laptop fan sounds like a jet taking off just to open a spreadsheet, then falls dead silent the second IT walks over, like it is gaslighting me.";

// --- validation: 1-200 Unicode code points, one line, not blank -----------
const codePoints = [...ENTRY];
if (codePoints.length < 1 || codePoints.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${codePoints.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

// --- write byte-exact, WITHOUT a trailing newline --------------------------
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// --- read back and verify ---------------------------------------------------
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match ENTRY");
}
if (back.endsWith("\n")) {
  throw new Error("verification failed: entry.txt has a trailing newline");
}

console.log(`wrote ${outPath}`);
console.log(`characters (code points): ${codePoints.length}`);
console.log(`bytes (UTF-8): ${Buffer.byteLength(ENTRY, "utf8")}`);
console.log(`entry: ${ENTRY}`);
