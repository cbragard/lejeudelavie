---
name: release
description: "Release process for e-xode/lejeudelavie. How to cut a version: semver decision, package.json bump, CHANGELOG format, release branch naming, tag and push conventions, and the GHCR tag-trigger CI. Trigger when releasing, cutting a version, tagging, or publishing this project."
---

# Release process (e-xode/lejeudelavie)

> Cut a new version of the app: bump, changelog, branch, commit, tag, push. Follow these steps exactly and in order. Tagging `v*` triggers the GHCR image build — treat a tag as a publish.

## Versioning (semver)

Decide the bump from the changes since the last tag:

- **major** — breaking changes (Node version floor raised, Docker/compose contract changed, env keys removed/renamed)
- **minor** — new feature, backward-compatible
- **patch** — bug fix, dependency bump, docs, chore

Find the last tag and inspect commits (this repo may have no tags yet — then review the full history):

```bash
git describe --tags --abbrev=0 2>/dev/null || echo "no tags yet"
git log $(git describe --tags --abbrev=0 2>/dev/null)..HEAD --oneline
```

## Version bump

Bump the `version` field in `package.json` (npm updates `package-lock.json` root + `packages[""]` automatically):

```bash
npm version <major|minor|patch> --no-git-tag-version
```

## Changelog

Update `CHANGELOG.md` — prepend a new section at the top. **Create the file on the first release** (none exists yet):

```markdown
## [X.Y.Z] — YYYY-MM-DD

### Added / Changed / Fixed / Removed
- short, user-facing bullet (imperative mood)
```

## Validate

A release must build clean before tagging:

```bash
npm run lint
npm run build
```

## Release branch & commit

Create a release branch from the current branch, then commit the bump using the project commit format (`[$branch] content` + trailer):

```bash
git checkout -b release/vX.Y.Z
git add package.json package-lock.json CHANGELOG.md
git commit -m "[release/vX.Y.Z] release vX.Y.Z" -m "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

## Tag & push

Only after explicit confirmation (no surprise pushes):

```bash
git tag -a vX.Y.Z -m "release vX.Y.Z"
git push origin release/vX.Y.Z
git push origin vX.Y.Z
```

## Post-release

- Open a PR from `release/vX.Y.Z` into `master` if your flow requires review.
- Pushing the `vX.Y.Z` tag triggers `.github/workflows/docker-build.yml`, which builds `docker/build/Dockerfile` and publishes to GHCR: `ghcr.io/cbragard/lejeudelavie:latest` and `ghcr.io/cbragard/lejeudelavie:vX.Y.Z`.
- Verify the image appears in the GHCR packages of the repo.
