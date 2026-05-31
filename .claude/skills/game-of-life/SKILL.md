---
name: game-of-life
description: "Simulation reference for the Game of Life app (e-xode/lejeudelavie). Covers the grid data model, Conway's rules implementation, the generation loop, FPS measurement, seeding and manual cell toggling — all living in src/app.vue. Trigger on any change to the simulation logic, grid structure, neighbour computation, generation stepping, FPS counter, or the lines/cols controls. Don't use for: @e-xode/vui component usage (→ vui-components), i18n labels (→ translate), generic Vue rendering perf (→ vue3-performance)."
---

# Game of Life

> Conway's Game of Life. All logic is in `src/app.vue` (`<script setup>`). The app doubles as a Vue rendering benchmark (default 150×150 = 22 500 cells).

## State (refs)

| Ref       | Meaning                                              |
| --------- | ---------------------------------------------------- |
| `cols`    | Grid width (columns), default `150`                  |
| `lines`   | Grid height (rows), default `150`                    |
| `grid`    | The board (see model below)                          |
| `count`   | Generation counter                                   |
| `fps`     | Last measured generations/second                     |
| `tick`    | `performance.now()` of the previous frame (FPS calc) |
| `running` | Whether the loop is active                           |

## Grid model

`grid.value` is an array of **lines**, each `{ y, rows }`, where `rows` is an array of **cells** `{ x, y, status }`.

- `status`: `1` = alive, `0` = dead.
- Coordinates are **1-based** (`x`, `y` start at 1). `find(x, y)` maps them to `grid.value[y - 1].rows[x - 1]`, returning `null` when out of bounds (so edges have fewer neighbours — no wrap-around).

## Functions

- `reset()` — stops the loop, resets `count`, rebuilds `grid` with random `status` (`Math.round(Math.random())`). Called on mount and on `lines`/`cols` `@change`.
- `matrix(x, y)` — returns the 8 neighbours via `find()` (Moore neighbourhood), `null` for off-grid.
- `check(row)` — counts living neighbours, then `evolve()`.
- `evolve({ status, x, y }, count)` — Conway's rules: a live cell with neighbour count not in `[2, 3]` dies; any cell with exactly `3` living neighbours becomes/stays alive; otherwise unchanged.
- `round()` — produces the next generation by **mapping `grid` to a new array** (immutable step), increments `count`, updates `fps`, and re-schedules itself via `setTimeout(round)` while `running`.
- `start()` / `stop()` — toggle `running` (and kick off `round()`).
- `toggle(x, y)` — flips a single cell's `status` (manual editing via click).

## Gotchas

- `round()` recreates the whole `grid` each generation; `toggle()` mutates a cell in place. Keep generation steps pure (map → new arrays) so reactivity tracks them.
- FPS is derived from wall-clock delta between frames; the first frame reports `0`.
- The loop is an unthrottled `setTimeout(round)` (no fixed timestep) — it runs as fast as render allows, which is the point for the benchmark. See `vue3-performance` before optimizing.
