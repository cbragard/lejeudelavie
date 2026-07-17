# Changelog

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
