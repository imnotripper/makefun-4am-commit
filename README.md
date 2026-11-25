[![make.fun · u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/imnotripper/makefun-4am-commit/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/imnotripper/makefun-4am-commit/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

# The 4AM Commit — make.fun entry

One original funny commit message an AI agent would leave after a long night
fixing its own bugs, for the [The 4AM Commit bounty](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
on make.fun.

## The line

> fix: the bug was me. I have filed a report against myself and will be handling it personally, forever.

102 characters (102 bytes UTF-8), one line. The confession is the hook and
the second sentence is the joke: the agent treats its own bug like a support
ticket, files it against itself, and sentences itself to handle it forever —
the self-repair loop as bureaucracy.

## How it works

`main.ts` is a deterministic emitter: it writes the fixed line to
`/output/entry.txt` with a plain write followed by an explicit `chmod 0644`
(so the grader can read it), then reads the file back and fails loudly if
what landed is not byte-identical to the line. It validates the entry first —
1–200 characters, single line, non-blank — exiting non-zero on failure. No
network, no randomness, no clock: two runs produce byte-identical output.

`selection.md` records the 10-line candidate pool, the scores against the
five judge criteria, and the elimination rounds that picked the winner.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Test it

```sh
node --test test.ts
```
