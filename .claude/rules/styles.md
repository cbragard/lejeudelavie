---
paths:
  - 'src/**/*.vue'
  - 'src/*.scss'
---

# Styles

- Component styles are externalized: `app.vue` references them via `<style lang="scss" src="./app.scss" />`. Never write an inline `<style>` block with rules in a `.vue` file.
- Use SCSS variables from `src/style.scss` (`$bgcolor`, `$navcolor`, `$headercolor`, `$linkcolor`). No hardcoded colors or spacings for theme values.
- Pull those variables into a stylesheet with `@use './style' as *;` at the top — never the deprecated `@import`.
- Library stylesheets (`@e-xode/vui/dist/vui.css`, fontawesome `all.css`) are imported from `src/main.mjs` as JS imports, NOT via SCSS `@import`. Keep it that way (Dart Sass `@import` is deprecated and triggers build warnings).
