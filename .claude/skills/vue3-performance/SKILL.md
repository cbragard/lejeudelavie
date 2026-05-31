---
name: vue3-performance
description: "Vue 3 rendering-performance guidance for the Game of Life grid benchmark (e-xode/lejeudelavie), which renders thousands of cell <div>s and re-steps every frame. Covers reactivity cost on large grids (shallowRef/markRaw), template-level skipping (v-memo/v-once), v-for key strategy, and avoiding wasted re-renders. Trigger when optimizing frame rate / FPS, reducing render cost, or changing how the grid is stored/rendered for performance. Don't use for: the rules of the simulation itself (→ game-of-life), vui components (→ vui-components)."
---

# Vue 3 performance (grid benchmark)

> The app exists to stress Vue's renderer: a 150×150 grid is 22 500 cell `<div>`s, re-stepped as fast as `setTimeout(round)` allows. FPS is the headline metric, so render cost dominates.

## Where time goes

- Each generation `round()` builds a brand-new `grid` array and Vue diffs the whole template subtree.
- Two nested `v-for`s (lines → rows) with per-cell `:class` binding and a `@click` handler.
- Default `ref(grid)` makes the entire nested structure deeply reactive — every cell object is wrapped in a proxy.

## Levers (apply only if measured)

- **`shallowRef` for the grid** — the step replaces the whole array anyway, so deep reactivity per cell is wasted overhead. `shallowRef` + reassigning `.value` keeps reactivity at the array level while skipping per-cell proxying. Note: `toggle()` mutates a cell in place, so it would need to trigger reactivity explicitly (reassign or `triggerRef`).
- **`markRaw`** on cell objects if they must stay in a normal `ref` but never need per-property reactivity.
- **`v-memo`** on the cell element keyed by `row.status` so unchanged cells skip re-render: `v-memo="[row.status]"`.
- **`v-once`** is not applicable to cells (they change), but is fine for static chrome.
- **Stable `:key`** — keys are already `row--${x}-${y}` (stable, unique). Keep keys stable; never key by index when the list reorders.
- **Avoid inline closures in hot loops** — `@click="() => toggle(row.x, row.y)"` allocates a function per cell per render; a single handler reading coordinates from the element/dataset avoids that allocation at scale.

## Discipline

- Measure FPS before and after any change — this is a benchmark; "optimizations" that don't move FPS add complexity for nothing (YAGNI).
- Keep generation steps pure (map to new arrays); don't mix in-place mutation into `round()`.
