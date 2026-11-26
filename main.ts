import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

// Fix Human Sleep: Funniest Patch Note — one line of patch notes.
const ENTRY =
  "Fixed: sleep. Humans now wake up actually rested. Breaking change: 'five more minutes' removed. Coffee downgraded to optional dependency.";

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, the gate allows 1 to 160`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and confirm exactly what the judge will see.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt does not hold ENTRY");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry must stay a single line");
}

