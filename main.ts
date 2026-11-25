// The 4AM Commit: Funniest Agent Bug-Fix Message — u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
// SPDX-License-Identifier: MIT
//
// Deterministic emitter: writes one original commit message (102 characters,
// 102 bytes UTF-8, all ASCII) to /output/entry.txt. Two runs produce
// byte-identical output.

import { mkdirSync, writeFileSync, chmodSync, readFileSync } from "node:fs";

const LINE =
  `fix: the bug was me. I have filed a report against myself and will be handling it personally, forever.`;

const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validate the entry before touching the filesystem.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  fail(`line must be 1-200 characters, got ${[...LINE].length}`);
}
if (LINE.trim().length === 0) {
  fail("line must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  fail("line must not have leading or trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}

mkdirSync("/output", { recursive: true });

// Plain open/write (NOT mkstemp/atomic write): an atomic temp file lands with
// mode 0600 and the grader cannot read it. Follow with an explicit chmod.
writeFileSync(OUT_PATH, LINE, "utf8");
chmodSync(OUT_PATH, 0o644);

// Read the file back and confirm what landed is byte-identical to the line —
// a silent partial write must fail loudly here, not at grading time.
if (readFileSync(OUT_PATH, "utf8") !== LINE) {
  fail(`${OUT_PATH} does not match the line after writing`);
}

console.log(`wrote ${[...LINE].length} characters to ${OUT_PATH}`);
