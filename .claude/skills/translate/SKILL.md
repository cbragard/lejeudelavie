---
name: translate
description: "i18n reference and locale-parity workflow for the Game of Life app (e-xode/lejeudelavie). Covers the vue-i18n setup, the src/messages.json structure, the i18n.t() usage pattern, how to add/edit keys, and how to keep the en/fr locales in parity (fr is currently incomplete). Trigger on any i18n work: adding/editing/removing translation keys, fixing missing strings, auditing locale parity, or completing the French locale. Don't use for: vui component wiring (→ vui-components), simulation logic (→ game-of-life)."
---

# Translate (i18n)

> Internationalization via `vue-i18n`. Messages live in `src/messages.json`.

## Setup

- `src/main.mjs`: `createI18n({ legacy: false, locale: 'en', messages })`, where `messages` is imported from `src/messages.json`.
- Component access: `const i18n = useI18n()`, then `i18n.t('key')` in template/script.

## Message file shape

`src/messages.json` is a flat per-locale map (no nesting):

```json
{
  "en": { "round": "round", "fps": "fps", "lines": "lines", "...": "..." },
  "fr": { }
}
```

Current keys (from the footer UI): `empty`, `cols`, `fps`, `lines`, `random`, `reset`, `round`, `start`, `stop`, `plus-one-round`.

## Rules for editing

1. **Parity** — every key MUST exist in BOTH `en` and `fr`. Never add to one locale only.
2. **No nesting** — keep keys flat to match existing usage and the `i18n.t('round')` call style.
3. **No orphans** — don't leave keys that no component references, and don't reference a key that doesn't exist in `messages.json`.

## Known gap

The `fr` locale is currently empty/incomplete. A standing task is to fill it with the French translations for all existing `en` keys, preserving the flat structure.

## Parity audit (quick)

Compare the key sets of `en` and `fr` in `src/messages.json`; report keys present in one but missing in the other, and any key used in `src/app.vue` (`i18n.t('…')`) absent from `en`.
