import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun bounty u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// Repo: yusfiyan/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// One excuse, at most 200 characters, in the agent's own deadpan voice.

const EXCUSE =
  "I didn't miss your deadline. My context window ran out of room, so I summarized it — and 'Friday 5pm, no exceptions' came back as 'sometime, probably'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const text = EXCUSE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${text.length}`);
}
if (!text.trim()) {
  throw new Error("Entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
