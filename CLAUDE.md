# CLAUDE.md — Le Jeu de la Vie

> Conway's Game of Life as a Vue 3 rendering benchmark. Single-component SPA (`src/app.vue`, `<script setup>`) + `@e-xode/vui` + `vue-i18n`, built with Vite, served static via nginx. Hard rules only — project knowledge lives in skills (`.claude/skills/`).

---

## Hard rules

**No auto-commit** — Never `git commit`/`push`/`tag`/`rebase`/`reset --hard` unless the user explicitly asks this turn. Commit format: `[$branch] content`. **No `Co-Authored-By`/`Co-authored-by` trailer or any AI/assistant mention on any commit, ever** — commit author is always the user's own git account, full stop.

**No code comments** — No `//`, `/* */`, or `<!-- -->` in `.vue`/`.mjs`/`.scss`.

**No `console.*`** — ESLint enforces `no-console: error`. Never leave debug logging (a dead `console.log` was already removed once).

**Styles externalized** — `app.vue` keeps its styles in `app.scss`, referenced via `<style lang="scss" src="./app.scss" />`. No inline `<style>` block.

**SCSS variables** — No hardcoded colors/spacings. Use the variables from `src/style.scss` (`$bgcolor`, `$navcolor`, `$headercolor`, `$linkcolor`), imported via `@use './style' as *`.

**Library CSS in JS** — Import library stylesheets (`@e-xode/vui/dist/vui.css`, fontawesome) from `src/main.mjs`, never via SCSS `@import` (Dart Sass `@import` is deprecated).

**i18n mandatory** — All user-visible text via `i18n.t('key')` (`const i18n = useI18n()`). Add keys to BOTH `en` and `fr` in `src/messages.json`.

**Composition API only** — Always `<script setup>`. No Options API.

**No over-engineering** — This is a one-component toy/benchmark. Keep it simple. YAGNI.

---

## Project gotchas

- **Do not bump `jest` past 29.x** — `@vue/vue3-jest` (the `.vue` transform) is unmaintained and peer-locks `jest@29`. Bumping breaks the test toolchain.
- **`npm run test:unit` has no specs** — jest is configured but there are no `*.spec.mjs` files. Don't rely on it as a gate; use `npm run lint` + `npm run build`.
- **`fr` locale is incomplete** in `src/messages.json` (only `en` is filled). Keep parity when adding keys → `translate` agent/skill.
- **axios vuln** is transitive via `@e-xode/vui` (the org's own lib); `npm audit` shows "No fix available" — fixable only by bumping axios inside `@e-xode/vui`, not here.

---

## Path-scoped rules

At session start, read and apply all files in `.claude/rules/`. Each declares a `paths:` frontmatter — enforce its constraints whenever you touch a matching file.

---

## Agents

| Agent       | Delegate when…                                                                 |
| ----------- | ------------------------------------------------------------------------------ |
| `review`    | User asks to review/audit a branch, PR, or diff — read-only structured report  |
| `translate` | Adding/editing i18n keys, `en`/`fr` locale parity in `src/messages.json`       |
| `release`   | User asks to release, cut a version, tag, or publish — bump/changelog/tag/push  |

---

## Commands

```bash
npm run dev      # Vite dev server (--host), port from NODE_PORT (default 3003)
npm run build    # Vite build src → dist/
npm run lint     # ESLint over src (flat config: eslint.config.mjs)
npm run preview  # Preview the production build
```

---

## Validation

The `Stop` hook (`.claude/hooks/lint.sh`) runs `npm run lint` automatically at task end and blocks on failure. For changes that affect bundling/SCSS, also run `npm run build` to catch Vite-level errors.

---

## Skills index

Skills load on demand by description match.

| Skill              | Triggers on                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `game-of-life`     | The simulation: grid model, Conway rules, evolve/round loop, FPS, reset/toggle |
| `vui-components`    | `@e-xode/vui` usage: registration, CSS import, components used + their props   |
| `translate`        | i18n: `messages.json` structure, `i18n.t()` usage, en/fr parity, locale audit  |
| `vue3-performance` | Rendering perf for the grid benchmark: shallowRef, v-memo/v-once, keys         |
| `release`          | Cutting a version: semver bump, CHANGELOG, release branch, tag, GHCR publish    |
