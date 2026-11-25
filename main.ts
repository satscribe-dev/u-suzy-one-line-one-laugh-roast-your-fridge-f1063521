// One Line, One Laugh: Roast Your Fridge — entry writer.
// Writes a single original one-line fridge roast to /output/entry.txt.
// Deterministic: no randomness, no clock, no network — every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge's ice maker sounds like a robot having a breakdown, then produces exactly one cube out of guilt.";

// The gate (competition.yaml): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only whitespace. Fail loudly instead of
// writing an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
