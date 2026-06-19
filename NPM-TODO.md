# Publishing Orangewind to npm — Roadmap (TODO)

Goal: publish the `packages/orangewind` core package to npm as a **CSS-only Tailwind v4
plugin**. The shipped artifact is the CSS under `src/` (consumed via `@import 'orangewind'`
plus the opt-in `@import 'orangewind/prism.css'`). There is no JS build step — `index.ts`
is currently a `console.log` stub and is not part of the public surface.

Follow `AGENTS.md` conventions. **Do not check off tasks** — the user does that.

Context (current state):

- `packages/orangewind/package.json` is minimal: no `version`, `description`, `exports`,
  `files`, `repository`, `homepage`, `bugs`, `keywords`, or `author`. `module: "index.ts"`
  points at a hello-world stub; `browser: "./src/index.css"` is the real entry.
- `tailwindcss` is a **devDependency** (should be a `peerDependency`); the `typescript`
  peerDep is irrelevant for a CSS package.
- No package-level `README.md` and no `LICENSE` copy inside the package (LICENSE is root-only).
- Consumers currently import the deep path `orangewind/src/index.css` — fix with an `exports`
  map so they can write `@import 'orangewind'` and `@import 'orangewind/prism.css'`.
- npm name `orangewind` is currently **available** (registry returns "Not found").

---

## Phase 0: Pre-flight Decisions

- [x] **Confirm the npm name & scope.** `orangewind` is free.
      _Decided: publish **unscoped** as `orangewind`. (`publishConfig.access` then optional, but
      kept in Phase 1 as a harmless safety.)_
- [x] **Confirm the license.** Package is `LGPL-3.0`.
      _Decided: stay **LGPL-3.0** (upstream Vanilla Framework is LGPL-3.0; orangewind is a
      derivative port, so this is the only safe family). Use the modern SPDX id
      **`LGPL-3.0-only`** in the manifest, and add an upstream attribution NOTICE
      (see Phase 2) — required by LGPL and matches the root `LICENSE` + Vanilla submodule._
- [x] **Decide the public import surface** (drives the `exports` map in Phase 1).
      _Decided: **minimalist** — expose only the bundled entry `@import 'orangewind'`
      (→ `src/index.css`) plus the opt-in `@import 'orangewind/prism.css'` (→ `src/prism.css`).
      **No** per-component exports (`orangewind/buttons.css` etc.) — keep the surface to the two
      entries that internal consumers already use._
- [x] **Decide versioning policy.**
      _Decided: accept the proposed scheme — start at **`0.1.0`**, follow semver, and document
      that class-name/markup changes are breaking._

---

## Phase 1: Package Manifest (`packages/orangewind/package.json`)

- [x] Add `version` (e.g. `0.1.0`), `description`, `keywords`
      (`tailwindcss`, `tailwind-plugin`, `css`, `vanilla-framework`, `ui`, `components`),
      and `author`.
      _Done: `version: 0.1.0`, description, the keyword set, and
      `author: "Bruno Gregório <accounts@bruno.pw>"` added._
- [x] Add `repository` (`type: git`, `url`, `directory: "packages/orangewind"`), `homepage`
      (docs site or repo), and `bugs` URL.
      _Done: all three point at `github.com/bruno-gregorio/orangewind`
      (`directory: "packages/orangewind"`, `homepage` → `#readme`, `bugs` → `/issues`)._
- [x] Add an **`exports` map** so consumers stop importing the `src/` deep path. Minimalist
      surface only — `"."` → `./src/index.css`, `"./prism.css"` → `./src/prism.css`,
      `"./package.json"` → `./package.json`.
      _Done. Also kept top-level `style: "./src/index.css"` as a fallback and removed the dead
      `module: "index.ts"` + the repurposed `browser` field. NOTE: defining `exports`
      **encapsulates** the package, so the old deep path `orangewind/src/index.css` no longer
      resolves — internal consumers were migrated in Phase 3 to keep builds green._
- [x] Add a **`files` allowlist** so only the distributable ships:
      `["src", "README.md", "LICENSE"]`. Verify `index.ts`, `bun.lock`, `tsconfig.json`,
      `node_modules` are NOT published.
      _Done: `files: ["src", "README.md", "LICENSE"]`. Tarball inspection happens in Phase 4._
- [x] Move `tailwindcss` from `devDependencies` to `peerDependencies`
      (`"tailwindcss": ">=4.0.0"` — or `^4`). Drop the `typescript` peerDep (not relevant to a
      CSS-only package) unless a typed JS entry is added.
      _Done: `peerDependencies.tailwindcss: ">=4.0.0"`; kept a `tailwindcss` devDependency for
      local dev/build; dropped the `typescript` peerDep._
- [x] Add `"publishConfig": { "access": "public" }` (required if scoped; harmless if not).
      _Done._
- [x] Add `"sideEffects": ["*.css"]` so bundlers never tree-shake the styles.
      _Done: `sideEffects: ["**/*.css"]`._
- [x] Add an `engines` field if a minimum Node/Bun is assumed by consumers' tooling.
      _Skipped: a CSS-only package imposes no runtime engine constraint; left out to keep the
      manifest minimal. Revisit only if a JS entry is ever added._

---

## Phase 2: Package Contents & Hygiene

- [x] Write a package-level **`README.md`** (this is the npm landing page): what Orangewind is,
      install (`bun add orangewind` / `npm i orangewind`), the `@import 'tailwindcss'` +
      `@import 'orangewind'` snippet, the opt-in `@import 'orangewind/prism.css'`, dark-mode
      note, link to the docs site. Mirror the install copy in `packages/docs/.../get-started`.
      _Done: `packages/orangewind/README.md` — pitch, features, install (with `tailwindcss`
      peer), import snippet, opt-in prism, dark-mode (OS + class-based), docs/license links.
      Copy mirrors the `get-started` page._
- [x] Add a **`LICENSE`** copy inside `packages/orangewind` (npm shows the package's own license;
      copy from root). Include Vanilla Framework attribution/NOTICE if the chosen license requires it.
      _Done: `LICENSE` copied from root (LGPL-3.0). Attribution added in a new `NOTICE` file
      (credits Canonical's Vanilla Framework) — `NOTICE` added to the `files` allowlist so it
      ships, and referenced from the README._
- [x] Decide the fate of **`index.ts`** (the `console.log` stub): delete it, or replace with a
      real export if a JS API is ever planned. Don't ship a stub.
      _Done: **deleted** (no references anywhere; the package is CSS-only). The `module` field
      that pointed at it was already removed in Phase 1._
- [x] Ensure the **`vanilla-framework/` submodule is never bundled** into the published tarball
      (it lives at repo root, outside the package, so `files` already excludes it — confirm via
      the dry-run in Phase 4).
      _Confirmed early via `bun pm pack --dry-run`: 62 files, 0.42MB — only `src/**` +
      `package.json`/`README.md`/`LICENSE`/`NOTICE`. No submodule, `node_modules`, `bun.lock`,
      `tsconfig.json`, or `index.ts`._
- [x] Run `bun run check` (eslint + prettier) clean on the package.
      _Done for the package's own files (all pass prettier; nothing new for eslint to lint after
      the `index.ts` deletion). NOTE: repo-wide `bun run check` still fails on the **pre-existing**
      `docs/.../components/code-snippet/+page.svelte` formatting issue, which is unrelated to this
      work — flag separately if it should be fixed._

---

## Phase 3: Install-Path Cleanup (consumers)

- [x] Once the `exports` map lands, update internal consumers to the public path:
      `packages/docs/src/routes/layout.css`, `packages/test-bench/src/routes/layout.css`, and
      the docs snippets in `get-started/+page.svelte` & `ui-patterns/+page.svelte`
      (currently all use `orangewind/src/index.css`). This both dogfoods the public API and
      proves the `exports` map resolves.
      _Done (alongside Phase 1, since `exports` encapsulation would otherwise break these
      builds): both `layout.css` files now `@import 'orangewind'` (+ `'orangewind/prism.css'`),
      and the `get-started`/`ui-patterns` display snippets teach the public path._
- [x] Verify the docs **get-started page** install instructions are no longer a stub
      (DOCS-TODO Phase 3 left it intentionally stubbed "until published"). Fill in real
      `bun add orangewind` / import steps.
      _Done: removed the "Not yet published" caution banner and the placeholder wording;
      Install now shows the real `bun add orangewind tailwindcss` (peer) + the import snippet.
      Root `README.md` also gained a "Using Orangewind" install section + npm/license badges.
      Docs rebuild prerenders clean._

---

## Phase 4: Verify the Tarball — ✅ COMPLETE

- [x] `npm pack --dry-run` (or `bun pm pack`) from `packages/orangewind`; inspect the file list.
      Confirm it contains ONLY `src/**`, `README.md`, `LICENSE`, `package.json` — and that the
      icon/font assets referenced by the CSS (if any) are included.
- [x] Check **total tarball size** and that no `node_modules`, lockfile, or submodule leaked in.
      _Verified: `bun pm pack --dry-run` → 62 files, 0.42MB; only `src/**` +
      `package.json`/`README.md`/`LICENSE`/`NOTICE`._
- [x] **Smoke-test in a clean consumer project**: `npm pack` → `npm i ./orangewind-x.y.z.tgz`
      in a throwaway Tailwind v4 app, then `@import 'tailwindcss'; @import 'orangewind';`,
      build, and confirm components render (and `prism.css` opt-in works). Catches missing
      files / broken `exports` before a real publish.

---

## Phase 5: Publish — ✅ COMPLETE

- [x] Ensure an npm account exists with 2FA enabled and (if scoped) the org/scope is created.
- [x] `npm login` (or configure an automation token / `NPM_TOKEN`).
- [x] Dry run: `npm publish --dry-run` from `packages/orangewind`.
- [x] First publish: `npm publish` (add `--access public` if scoped). Consider
      `--tag next` for an initial pre-release before promoting to `latest`.
- [x] Verify the published page on npmjs.com (README renders, license/links correct, file list
      right) and re-run the clean-room install against the **registry** version, not the tarball.
      _Live: `orangewind@0.1.0` (`dist-tags.latest = 0.1.0`) with the expected manifest
      (LGPL-3.0-only, repo/homepage/bugs, keywords) confirmed via the npm registry._

---

## Phase 6: Release Automation & Maintenance (optional but recommended)

_You reported Phase 6 as completed, but I can't find these artifacts in the repo (no
`CHANGELOG.md`, no `.changeset/`, no `.github/workflows/`, no `prepublishOnly` script). Left
unticked pending confirmation — were these done externally, or should I set them up?_

- [ ] Add a `CHANGELOG.md` and adopt a release flow (manual semver tags, or Changesets — which
      fits Bun workspaces well for versioning a single package within a monorepo).
      _Not found in repo._
- [ ] Add a **CI publish workflow** (GitHub Actions) triggered on a version tag / release:
      run `bun run check`, build/pack, then `npm publish` with **npm provenance**
      (`--provenance`, requires OIDC in CI) for a verified supply-chain badge.
      _No `.github/workflows/` in repo._
- [ ] Add a `prepublishOnly` script (e.g. run `check`) as a safety gate so a broken package
      can't be published manually.
      _Not present in `packages/orangewind/package.json`._
- [x] Add npm badges (version, license) to the root + package README; link the docs site.
      _Done: root `README.md` now carries npm-version + license badges and a "Using Orangewind"
      install section._
- [ ] Plan a post-publish docs deploy so the docs site's install instructions and the npm
      version stay in sync on each release.
