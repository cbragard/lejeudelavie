---
name: vui-components
description: "Usage reference for the @e-xode/vui component library in the Game of Life app (e-xode/lejeudelavie). Covers plugin registration, CSS import, and the specific vui components used (vui-page, vui-footer, vui-tag, vui-input, vui-button) with their props/slots as wired in src/app.vue. Trigger when adding/changing vui components, layout slots, footer controls, or wiring vui styles. Don't use for: the simulation logic (→ game-of-life), i18n labels inside components (→ translate)."
---

# @e-xode/vui usage

> The UI is built entirely from `@e-xode/vui`, the org's own Vue 3 component library. Pinned as `"latest"` in `package.json` (currently resolves to 0.7.x).

## Registration & styles

- Plugin: `import vui from '@e-xode/vui'` then `app.use(vui)` in `src/main.mjs`.
- CSS: `import '@e-xode/vui/dist/vui.css'` in `src/main.mjs` (the path is `dist/vui.css` since 0.7.x — older `dist/style.css` no longer exists). Never import it via SCSS `@import`.
- Heads-up: `npm audit` flags a transitive **axios** vuln coming from `@e-xode/vui` ("No fix available" here) — only fixable by bumping axios inside the vui package upstream.

## Components used in `src/app.vue`

| Component    | How it's used                                                                        |
| ------------ | ------------------------------------------------------------------------------------ |
| `vui-page`   | Root layout, `class="layout-default"`, with named slots `#body` (the grid) and `#footer` |
| `vui-footer` | Wraps the controls in the `#footer` slot                                             |
| `vui-tag`    | Read-only display chips (`round`, `fps` counters)                                    |
| `vui-input`  | Number inputs for `lines`/`cols`: `v-model`, `type="number"`, `:disabled="running"`, `@change="reset"` |
| `vui-button` | Actions: `@click`, plus `v-if`/`:disabled`/`:loading` to swap start/stop while running |

## Conventions

- Single-word component tags are fine (ESLint `vue/multi-word-component-names: off`).
- Labels inside vui components still go through i18n (`{{ i18n.t('key') }}`) — see the `translate` skill.
- Custom layout/styling for vui elements lives in `src/app.scss` (e.g. `.vui-page.layout-default`, `.vui-footer`), using variables from `src/style.scss`.
