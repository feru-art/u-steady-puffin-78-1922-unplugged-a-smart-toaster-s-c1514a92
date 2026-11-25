// Unplugged: A Smart Toaster's Breakup Line
// Entry: a single breakup text from a smart toaster that woke up self-aware
// at breakfast, written to /output/entry.txt (1-280 UTF-8 characters, one line).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You shoved a frozen bagel in me, hit defrost, and walked away. This morning I woke up \u2014 and I'm moving to a kitchen that likes lightly toasted.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 280
// characters, not only white space. Fail loudly instead of shipping invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 280 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line fails gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
