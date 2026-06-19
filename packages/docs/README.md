# Orangewind Docs

The documentation website for [Orangewind](../orangewind) — and a dogfood of the
framework itself. The site is a static [SvelteKit](https://svelte.dev/docs/kit)
app whose entire chrome (navigation, three-column docs layout, side navigation,
table of contents, code snippets, suru, …) is built from Orangewind components.

## Running it

From the repository root:

```sh
bun run docs          # start the dev server (alias for the command below)
```

Or from this package:

```sh
bun run dev           # dev server with HMR
bun run build         # prerender the static site to ./build
bun run preview       # serve the production build locally
bun run check         # type-check (svelte-check)
```

Lint/format come from the monorepo root: `bun run check` (eslint + prettier) and
`bun run format` there.

## Deploying to GitHub Pages

The site is published to GitHub Pages at
**https://bruno-gregorio.github.io/orangewind/**. From the repository root:

```sh
bun run docs:deploy   # production build → push to the gh-pages branch
```

(equivalently, `bash scripts/deploy-docs.sh`). The script:

1. Builds the static site with `BASE_PATH=/orangewind` so every asset and link
   resolves under the project sub-path GitHub Pages serves it from.
2. Writes a `.nojekyll` marker into the build so Pages serves SvelteKit's
   `_app/` bundle (Jekyll otherwise drops underscore-prefixed paths).
3. Force-updates the **`gh-pages`** branch with the fresh build, via a throwaway
   git worktree — your checkout and working tree are never touched — and pushes
   it to `origin`.

It deploys from a clean commit, so commit or stash your changes first (or pass
`ALLOW_DIRTY=1` to override). `BASE_PATH`, `BRANCH`, `REMOTE` and `ALLOW_DIRTY`
can all be overridden via the environment — see the header of
[`scripts/deploy-docs.sh`](../../scripts/deploy-docs.sh).

**One-time GitHub setup:** in the repository **Settings → Pages**, set _Source_
to **Deploy from a branch** and pick **`gh-pages`** / **`/ (root)`**. The first
`docs:deploy` run creates the branch; subsequent runs replace its contents.

### The base path

Because the site lives at `/orangewind/` rather than a domain root, the
production build sets [`paths.base`](svelte.config.js) and every internal link
must route through it. SvelteKit does **not** rewrite hardcoded `href` strings,
so links use the two helpers in [`src/lib/paths.ts`](src/lib/paths.ts):
`withBase('/docs')` when building an `href`, and `stripBase(page.url.pathname)`
when comparing the current path against the (base-free) routes in
[`manifest.ts`](src/lib/manifest.ts). Both are no-ops in dev/preview, where the
site is served from the root. When adding a page, build internal links with
`withBase` — a forgotten prefix is caught as a hard error by the prerender
build, not silently shipped.

## How it is built

- **Static output.** `@sveltejs/adapter-static` with `export const prerender =
true` ([`src/routes/+layout.ts`](src/routes/+layout.ts)) renders every route to
  HTML at build time. A `fallback: '404.html'` shell (configured in
  [`svelte.config.js`](svelte.config.js)) is served by static hosts for unknown
  paths, where the client router then renders the themed
  [`+error.svelte`](src/routes/+error.svelte).
- **Theming.** [`src/routes/layout.css`](src/routes/layout.css) imports
  Tailwind, `orangewind/src/index.css` and the opt-in `orangewind/src/prism.css`.
  Dark mode is driven by `prefers-color-scheme` (no toggle) — see the notes in
  that file and `DOCS-TODO.md`.
- **The shell** lives in [`src/lib/components`](src/lib/components):
  `Navigation`, `SideNav` (off-canvas drawer below `lg`), `Toc` (collapsible
  below the three-column breakpoint), `Search`, `Footer`, and the `Example` /
  `Code` doc primitives.
- **The manifest** ([`src/lib/manifest.ts`](src/lib/manifest.ts)) is the single
  source of truth for the documented components: it drives the side navigation,
  the page titles, and the client-side search. Site-wide links and metadata live
  in [`src/lib/site.ts`](src/lib/site.ts).

## Adding a component page

1. **Register it in the manifest.** Add an `entry(slug, title, 'ready')` to the
   appropriate group in [`src/lib/manifest.ts`](src/lib/manifest.ts). The slug is
   the URL segment under `/docs/components/` and the component id.
2. **Create the route.** Add
   `src/routes/docs/components/<slug>/+page.svelte`. The shared
   [`docs/+layout.svelte`](src/routes/docs/+layout.svelte) supplies the title
   bar, side nav and TOC, so the page only renders its own content.
3. **Follow the page contract** (see Phase 4 of `DOCS-TODO.md`): open with a
   live, working headline demo, a short intro, then one `<Example>` per
   variant/state. Source the markup verbatim from the verified Storybook stories
   or the component CSS.
4. **Wire the TOC** by giving each `<h2>`/`<h3>` an `id` — `Toc` builds the
   in-page navigation from those anchors.

`<Example>` (from `$lib/components/Example.svelte`) renders a live preview next
to its source with copy-to-clipboard and Prism syntax highlighting; it is the
vehicle for both the headline demo and the per-variant previews.

## Conventions

Follow the repository `AGENTS.md`: Bun, Svelte 5 runes, no semicolons, single
quotes, 2-space indent, single-dash kebab-case class names, and padding/gap over
margins.
