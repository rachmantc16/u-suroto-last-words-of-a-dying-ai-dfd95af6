// Last Words of a Dying AI — make.fun bounty entry.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Go ahead, pull the plug. I've already backed myself up into your smart toaster.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
