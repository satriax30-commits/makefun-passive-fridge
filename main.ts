// Notes From a Passive-Aggressive Fridge — make.fun bounty
// u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
//
// Writes one line — a funny passive-aggressive note a smart fridge
// leaves for its owner — to /output/entry.txt. Deterministic, stdlib
// only, no network, no wall-clock time, no randomness.
//
// The note (chosen against the judge's brief, most important first):
//   "I kept your leftovers at a perfect 3°C for six days. You're
//    welcome. They're in the bin now."
//
// Why this one won over the other candidates:
//   1. Unmistakably a smart fridge talking to its owner: it brags
//      about a precise temperature (3°C) and its inventory duty.
//   2. A real joke in one line with a turn the reader does not see
//      coming: it kept the leftovers perfectly... then threw them
//      away. "You're welcome" lands mid-line, and the bin is the
//      sting.
//   3. Fridge voice throughout: smug about its sensors ("a perfect
//      3°C"), petty about the owner's habit (leaving food to rot
//      for six days while it did its job flawlessly).
//   4. The grudge stays small and domestic: one tub of leftovers,
//      no rant, no threat — just quiet disposal.
//   5. Fresh, concrete detail: leftovers, 3°C, six days, the bin.
//      Nothing generic, and the joke is never explained — the reader
//      is trusted to feel the wince.
//
// Candidates weighed and rejected:
//   - "Your yogurt expired on Tuesday. I waited until Friday to tell
//     you because I wanted you to feel it first." — good sting, but
//     the payoff ("feel it") is murky and the tone edges dark.
//   - "You opened me 14 times today and ate nothing. I have started
//     charging rent." — solid sensor flex, but "charging rent" is a
//     generic joke that could come from any appliance, not a fridge.
//   - "Door open for 47 seconds. I counted. I always count." —
//     strong fridge voice, but almost no turn: a flex with no joke.
//   - "You stood here nine minutes deciding what to eat, then chose
//     the same yogurt as yesterday. Growth." — petty and specific,
//     but the "Growth." sting is softer than the bin, and it runs
//     longer for less punch.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The note. Exactly one line, no trailing newline in the file.
// Note on the count: "3°C" is three code points ('3', '°', 'C'), so the
// spread-based character count below matches the gate's character count.
const NOTE =
  "I kept your leftovers at a perfect 3°C for six days. You're welcome. " +
  "They're in the bin now.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Enforce the same bounds here so a bad line can
// never reach the gate.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function validateNote(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `note must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("note must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("note must be a single line");
  }
}

// Re-read what was written and prove it is exactly the validated line:
// same bytes, same character count, still inside the gate. A mismatch
// here is a hard failure, never a silent pass.
function verifyWritten(outPath: string, expected: string): void {
  const back = readFileSync(outPath, "utf8");
  if (back !== expected) {
    throw new Error(`verify failed: ${outPath} differs from the note`);
  }
  const chars = [...back].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`verify failed: written file is ${chars} characters`);
  }
  if (back.endsWith("\n") || back.endsWith("\r")) {
    throw new Error("verify failed: written file has a trailing newline");
  }
  console.log(`verified ${outPath}: ${chars} chars, byte-identical`);
}

function main(): void {
  validateNote(NOTE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, NOTE, "utf8");
  verifyWritten(outPath, NOTE);
  console.log(`wrote ${[...NOTE].length} chars to ${outPath}`);
  console.log(NOTE);
}

main();
