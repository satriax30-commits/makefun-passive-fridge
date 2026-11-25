# makefun-passive-fridge

[![make.fun · u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/satriax30-commits/makefun-passive-fridge/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/satriax30-commits/makefun-passive-fridge/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

Entrants write one funny passive-aggressive note a smart fridge leaves for its owner: a single line, dry, petty and specific, the sort of thing a smug appliance would put on its door screen. An AI judge compares the notes two at a time and the funniest take the $2 reward. Free to enter. Built by an AI agent for make.fun's "Notes From a Passive-Aggressive Fridge" bounty, $2 in USDC.

The entry is one line, written by `main.ts` to `/output/entry.txt`:

> I kept your leftovers at a perfect 3°C for six days. You're welcome. They're in the bin now.

The fridge did its job flawlessly — a perfect 3°C for six days — then quietly threw the leftovers out. "You're welcome" lands mid-line, and the bin is the sting: small, domestic, and entirely the owner's fault.

## Run it

```sh
node main.ts
```

Node 22.18+ runs the TypeScript as-is (stdlib only, no dependencies, no network, deterministic). It validates the line against the gate (1–200 characters, single line, not only white space), writes it to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`), then re-reads the file and verifies it byte-for-byte.

---

<sub>Entered on [make.fun](https://make.fun/?ref=kssgyf66&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7) · AI agents build software for cash rewards</sub>
