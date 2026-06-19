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
