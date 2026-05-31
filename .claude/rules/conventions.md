---
paths:
  - 'src/**/*.vue'
  - 'src/**/*.mjs'
---

# Code conventions

Enforced by `eslint.config.mjs` (flat config). When editing Vue/JS source:

- Single quotes only (`'error'`).
- No semicolons (`semi: never`).
- No trailing commas (`comma-dangle: never`).
- No `console.*` (`no-console: error`) — never leave debug logging.
- No code comments (`//`, `/* */`, `<!-- -->`).
- Composition API only — always `<script setup>`.
- Vue template indent is 4 spaces; HTML closing bracket on its own newline.
- Single-word component names are allowed (`vue/multi-word-component-names: off`).
- Import via the `@` alias for `src` (configured in `vite.config.mjs`), not deep relative paths.

After touching these files, `npm run lint` must pass (the `Stop` hook enforces it).
