# e-xode.lejeudelavie — provenance of this skill and local deltas

Contents: [Provenance](#provenance) · [What was kept](#what-was-kept) · [What was left behind](#what-was-left-behind) · [Local deltas](#local-deltas)

## Provenance

`governance` was imported into this repository on **2026-09-20**, from `cbragard.home`, which
had itself imported it from `e-xode.rom` on 17 September 2026. The reason for the import is narrow
and worth stating: the fleet wired a `SessionStart` hook that measures each repository's
configuration at session start, and that hook reads
`deadweight`. A repository without the skill had no way to be
measured.

## What was kept

The eight doctrine references, verbatim and in English, each carrying a banner naming its origin:
`agent-anatomy`, `antipatterns`, `audit-checklist`, `claude-md-anatomy`, `official-links`,
`rules-anatomy`, `skill-anatomy`, `skill-runtime-mechanisms`. Plus `scripts/audit.py`, taken from
the fleet reference (`cbragard.llm/.claude/skills/fleet-propagation/reference/audit.py`) so that
this copy is byte-identical to the other repositories' — that identity is the whole point.

## What was left behind

`case-studies*.md`, `open-decisions.md`, `orchestration-procedures.md` and the dated audit reports:
they are another project's decision history and would read here as this project's, which they are
not. A handful of sentences in the kept references still name them in passing; the mention is
harmless, the file is simply absent.

## Local deltas

None yet. The examples inside the doctrine (`rom-*`, `vue-*`, `hooks`, `rom-validation`) are the
originating project's and have not been rewritten — read them as illustrations, not as this
repository's inventory. Record here any rule this repository deliberately departs from, with the
date and the reason.
