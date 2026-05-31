# Changelog

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
