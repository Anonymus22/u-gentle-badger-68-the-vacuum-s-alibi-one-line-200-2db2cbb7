import { mkdirSync, writeFileSync } from "node:fs";

// The vacuum's alibi: one line, no trailing newline, so the file is
// exactly the line itself and nothing else.
const ENTRY =
  "My lidar mapped that corner as a demilitarized zone after the cat declared it sovereign territory, so I respected the treaty and vacuumed around it.";

// The alibi must be a single line of 1-200 characters; refuse to write
// anything outside that range.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(
    `ENTRY must be between 1 and 200 characters, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
