# Changelog

## [1.1.2] — 2026-08-11

### Fixed
- Clear all 30 open Dependabot advisories (16 high / 14 medium): bump the `axios` override from
  `^1.17.0` to `^1.18.0` (resolves 1.19.0 — prototype pollution, NO_PROXY bypass, form-serializer
  `maxDepth`/`maxBodyLength` bypasses, deep recursion DoS), `brace-expansion` to 5.0.9/2.1.4/1.1.18
  (DoS via unbounded intermediate arrays across the three major versions present in the tree),
  `undici` to 7.29.0 (response desync, cache/cookie information disclosure, CRLF injection),
  `nanoid` to 3.3.18 (indefinite loop on zero/negative size), `immutable` to 5.1.9 (32-bit trie
  overflow, hash-collision DoS), `postcss` to 8.5.26 (sourceMappingURL arbitrary file read), and
  `js-yaml` to 3.15.1 (quadratic CPU consumption in `!!omap` resolution). All transitive; a
  lockfile refresh (`npm install` + `npm audit fix`, no `--force`) sufficed — every bump stayed on
  its existing major version. `npm audit`: 0 vulnerabilities. lint + build pass; the repo has no
  tests, so the built SPA was validated manually (served `dist/`, confirmed the grid renders and
  the simulation evolves after START).

## [1.1.1] — 2026-07-17

### Fixed
- Clear all 11 open npm audit advisories (5 high): bump `undici` to 7.28.0 (TLS certificate validation bypass via dropped `requestTls` in the SOCKS5 `ProxyAgent`, cross-origin routing through SOCKS5 pool reuse, WebSocket DoS), `form-data` to 4.0.6 (CRLF injection), `vite` to 8.1.5 (`server.fs.deny` bypass and launch-editor NTLMv2 leak), and `js-yaml` to 3.15.0 (quadratic DoS).

### Changed
- Bump `vue-i18n` to 11.4.5 and `eslint-plugin-vue` to 10.9.2.

## [1.0.0] — 2026-05-31

### Added
- Docker image build and publish to GHCR, triggered on `v*` tags.
- Dockerized development and production environments.

### Changed
- Upgrade all dependencies to their latest versions (Vite 8 and others).
- Bump the dev Docker image from Node 21 to Node 22 for npm engine compatibility.
- Improve grid rendering performance: `shallowRef` for the board and `v-memo` on cells.

### Fixed
- `docker-compose`: drop the obsolete `version` key and isolate the container's `node_modules` via an anonymous volume to avoid a host/container libc mismatch.
